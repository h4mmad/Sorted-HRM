import { NextRequest, NextResponse } from "next/server";
import { redirect, useSearchParams } from "next/navigation";
import { validate as uuidValidate } from "uuid";
import { getActiveOrExpiredStatus } from "@/app/(...application)/lib/helperFns/dateHelperFns";

export async function POST(request: NextRequest) {
  const employeeData: Employee = await request.json();

  return NextResponse.json({
    messsage: `All OK`,
  });
}

export async function GET(request: NextRequest) {
  const employeeId = request.nextUrl.searchParams.get("employeeId");
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get("employeeId");
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updateData: UpdateEmployee = await request.json();

    return NextResponse.json(updateData);
  } catch (error) {}
}
