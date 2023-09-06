import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { redirect, useSearchParams } from "next/navigation";
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
      },
      iqama: {
        iqamaExpiry,
        iqamaNumber,
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
          employeePictureURL,
          ...rest
        } = employeeData;

        const employeeObj: Employee = {
          passport: {
            passportExpiry,
            passportNumber,
          },
          iqama: {
            iqamaExpiry,
            iqamaNumber,
          },
          employeePictureURL,
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
    const updateData: UpdateEmployee = await request.json();

    console.log("update data", updateData);

    if (updateData.employeePictureURL) {
      const fieldsToUpdate = {
        employeePictureURL: updateData.employeePictureURL,
        "passport.passportNumber": updateData.passport.passportNumber,
        "passport.passportExpiry": updateData.passport.passportExpiry,
        "job.department": updateData.job.department,
        "job.designation": updateData.job.designation,
        "job.workStatus": updateData.job.workStatus,
        "iqama.iqamaExpiry": updateData.iqama.iqamaExpiry,
        "contact.phoneNumber": updateData.contact.phoneNumber,
        "contact.email": updateData.contact.email,
      };
      if (updateData.employeeId)
        await updateEmployeeById(updateData.employeeId, fieldsToUpdate);
    } else {
      const fieldsToUpdate = {
        "passport.passportNumber": updateData.passport.passportNumber,
        "passport.passportExpiry": updateData.passport.passportExpiry,
        "job.department": updateData.job.department,
        "job.designation": updateData.job.designation,
        "job.workStatus": updateData.job.workStatus,
        "iqama.iqamaExpiry": updateData.iqama.iqamaExpiry,
        "contact.phoneNumber": updateData.contact.phoneNumber,
        "contact.email": updateData.contact.email,
      };
      if (updateData.employeeId)
        await updateEmployeeById(updateData.employeeId, fieldsToUpdate);
    }

    return NextResponse.json(updateData);
  } catch (error) {}
}
