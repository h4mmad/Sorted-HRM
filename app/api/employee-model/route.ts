import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MongoClient } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getToken } from "next-auth/jwt";

const mongoURI =
  "mongodb+srv://admin:n9GA1Fwxnqt5w8nX@testcluster.5tycidj.mongodb.net/";
const client = new MongoClient(mongoURI);

async function run() {
  try {
    const database = client.db("sorted_hrm");
    const users = database.collection("users");
    // Query for a movie that has the title 'Back to the Future'
    const doc = { name: "Neapolitan pizza", shape: "round" };
    const result = await users.insertOne(doc);
    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const token = await getToken({ req });
  // console.log("token from api", token);

  // if (!session) {
  const result = await prisma.layouts.findMany();

  return NextResponse.json(result);
  // }
  return NextResponse.json({ message: "Not authorized" }, { status: 401 });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const layouts = data?.layouts;
  console.log(layouts);
  await prisma.layouts.deleteMany();
  if (layouts.length > 0) {
    await prisma.layouts.createMany({
      data: [...layouts],
    });
  }

  run().catch(console.dir);

  return NextResponse.json({ message: "all ok" });
}
