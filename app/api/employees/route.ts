import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
const database = client.db("sorted_hrm");
const sections = database.collection("employees");

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);

    return NextResponse.json({
      messsage: `All OK`,
    });
  } catch (error) {
    throw error;
  }
}
