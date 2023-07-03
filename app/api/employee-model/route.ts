import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MongoClient, ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getToken } from "next-auth/jwt";

const mongoURI =
  "mongodb+srv://admin:n9GA1Fwxnqt5w8nX@testcluster.5tycidj.mongodb.net/";
const client = new MongoClient(mongoURI);
const database = client.db("sorted_hrm");
const layouts = database.collection("layouts");

async function run() {
  try {
    // Query for a movie that has the title 'Back to the Future'
    // const doc = { name: "Neapolitan pizza", shape: "round" };
    // const result = await layouts.updateOne(
    //   {
    //     _id: new ObjectId("eb73a85e-0872-474f-98bf-9cc6eb0474a7"),
    //   },
    //   {
    //     $pull: {
    //       fields: {
    //         fieldID: "241f9e99-a036-4eba-9f6b-460827dc23fe",
    //       },
    //     },
    //   }
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

const prisma = new PrismaClient();

// export async function GET(req: NextRequest, res: NextResponse) {
//   const token = await getToken({ req });
//   // console.log("token from api", token);

//   // if (!session) {
//   // const result = await prisma.layouts.findMany();

//   return NextResponse.json([
//     {
//       sectionId: "1",
//       sectionName: "Personal details",
//       sectionFields: [
//         {
//           fieldName: "Name",
//           fieldId: "9f0ac870-1f8e-4738-acqqw96-7d87b8b7442d",
//           fieldType: "text",
//         },
//         {
//           fieldName: "Date of birth",
//           fieldId: "241f9sdsde99-a036-4eba-9f6b-460827dc23fe",
//           fieldType: "date",
//         },
//         {
//           fieldName: "Personal email",
//           fieldId: "0eab33sdsd85-2897-4ab8-813a-8c12b5886ccb",
//           fieldType: "email",
//         },
//       ],
//     },
//     {
//       sectionId: "2",
//       sectionName: "sdsdsd details",
//       sectionFields: [
//         {
//           fieldName: "Name",
//           fieldId: "9f0ac870-1f8qwe-4738-ac96-7d87b8b7442d",
//           fieldType: "text",
//         },
//         {
//           fieldName: "Date of birth",
//           fieldId: "241f9e99-a036-4eba-9f6b-4qw60827dc23fe",
//           fieldType: "date",
//         },
//         {
//           fieldName: "Personal email",
//           fieldId: "0eab3qw385-2897-4ab8-813a-8c12b5886ccb",
//           fieldType: "email",
//         },
//       ],
//     },
//   ]);
//   // }
//   return NextResponse.json({ message: "Not authorized" }, { status: 401 });
// }

export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log("from POST endpoint", data);
  // // await prisma.layouts.deleteMany();
  // if (layouts.length > 0) {
  // await prisma.layouts.createMany({
  //   data: [
  //     {
  //       sectionID: "eb73a85e-0872-474f-98bf-9cc6eb0474a7",
  //       sectionName: "Personal details",
  //       fields: [
  //         {
  //           fieldName: "Name",
  //           fieldID: "9f0ac870-1f8e-4738-ac96-7d87b8b7442d",
  //           fieldType: "text",
  //         },
  //         {
  //           fieldName: "Date of birth",
  //           fieldID: "241f9e99-a036-4eba-9f6b-460827dc23fe",
  //           fieldType: "date",
  //         },
  //         {
  //           fieldName: "Personal email",
  //           fieldID: "0eab3385-2897-4ab8-813a-8c12b5886ccb",
  //           fieldType: "email",
  //         },
  //       ],
  //     },
  //   ],
  // });
  // }

  // run().catch(console.dir);

  return NextResponse.json({ message: "all ok" });
}

// export async function PATCH(req: NextRequest) {
//   console.log(await req.json());

//   return NextResponse.json({ message: "ok?" });
// }
