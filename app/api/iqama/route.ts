import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
const database = client.db("sorted_hrm");
const employees = database.collection("employees");

export async function GET(request: NextRequest) {
  try {
    const iqamaNumber = request.nextUrl.searchParams.get("iqamaNumber");
    if (iqamaNumber) {
      return NextResponse.json({
        iqamaNumber: iqamaNumber,
        iqamaNumberExistsInDatabase: false,
      });
    }
    return NextResponse.json({
      message: "",
    });
  } catch (error) {}
}
