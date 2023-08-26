import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { redirect, useSearchParams } from "next/navigation";
import { error } from "console";
import { validate as uuidValidate } from "uuid";
import { getActiveOrExpiredStatus } from "@/app/helperFns/dateHelperFns";
import { getEmployeeById, updateEmployeeById } from "../lib/apiHelperFns";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
const database = client.db("sorted_hrm");
const employees = database.collection("employees");

export async function POST(request: NextRequest) {
  try {
    const employeeData: Employee = await request.json();

    const {
      iqama: { iqamaExpiry, iqamaNumber },
      passport: { passportExpiry, passportNumber },
      ...rest
    } = employeeData;

    const employeeObj: Employee = {
      passport: {
        passportExpiry,
        passportNumber,
        passportStatus: getActiveOrExpiredStatus(String(passportExpiry)),
      },
      iqama: {
        iqamaExpiry,
        iqamaNumber,
        iqamaStatus: getActiveOrExpiredStatus(String(iqamaExpiry)),
      },
      ...rest,
    };

    await employees.insertOne(employeeObj);

    return NextResponse.json({
      messsage: `All OK`,
    });
  } catch (error) {
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    const employeeId = request.nextUrl.searchParams.get("employeeId");

    if (employeeId) {
      const employeeData = await getEmployeeById(employeeId);
      if (employeeData) {
        const {
          iqama: { iqamaExpiry, iqamaNumber },
          passport: { passportExpiry, passportNumber },
          ...rest
        } = employeeData;

        const employeeObj: Employee = {
          passport: {
            passportExpiry,
            passportNumber,
            passportStatus: getActiveOrExpiredStatus(String(passportExpiry)),
          },
          iqama: {
            iqamaExpiry,
            iqamaNumber,
            iqamaStatus: getActiveOrExpiredStatus(String(iqamaExpiry)),
          },
          ...rest,
        };

        return NextResponse.json(employeeObj);
      }
    } else {
      return NextResponse.redirect("http://localhost:3000/employees");
    }
  } catch (error) {
    return NextResponse.redirect("http://localhost:3000/employees");
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get("employeeId");
    console.log("from backend", employeeId);
    if (employeeId != undefined) {
      try {
        console.log(
          await employees.findOneAndDelete({ employeeId: employeeId })
        );
        return NextResponse.redirect("/employees");
      } catch (e) {
        console.log(e);
        return NextResponse.json({
          messsage: `an error occured ${e}`,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updateData: SendEmployeeUpdateType = await request.json();
    console.log(updateData.contact);
    console.log(updateData.employeeId);
    console.log(updateData.iqama);
    console.log(updateData.passport);
    console.log(updateData.job);

    const fieldsToUpdate = {
      "passport.passportNumber": updateData.passport.passportNumber,
    };
    await updateEmployeeById(updateData.employeeId, fieldsToUpdate);

    return NextResponse.json(updateData);
  } catch (error) {}
}
