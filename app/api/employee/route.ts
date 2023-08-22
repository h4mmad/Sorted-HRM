import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { redirect, useSearchParams } from "next/navigation";
import { error } from "console";
import { validate as uuidValidate } from "uuid";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
const database = client.db("sorted_hrm");
const employees = database.collection("employees");

export async function POST(request: NextRequest) {
  try {
    const employee: Employee = await request.json();

    console.log(employee);

    await employees.insertOne(employee);

    return NextResponse.json({
      messsage: `All OK`,
    });
  } catch (error) {
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    const empId = request.nextUrl.searchParams.get("employeeId");

    if (empId) {
      const employeeDetails = await employees.findOne({ employeeId: empId });
      if (employeeDetails != undefined) {
        console.log(employeeDetails);
        return NextResponse.json(employeeDetails);
      } else {
        return NextResponse.redirect("http://localhost:3000/employees");
      }
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
    const data = await request.json();
    console.log(data);
  } catch (error) {}
}
