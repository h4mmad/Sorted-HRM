import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
const database = client.db("sorted_hrm");
const employees = database.collection("employees");

export async function GET(request: NextRequest) {
  try {
    const cursor = employees.find(
      {},
      { projection: { iqama: 1, _id: 1, employeeId: 1, personal: 1 } }
    );
    const documents = [];
    for await (const document of cursor) {
      documents.push(document);
    }

    console.log(documents);
    return NextResponse.json(documents);
  } catch (error) {
    throw error;
  }
}
