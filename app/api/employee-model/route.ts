import { NextRequest, NextResponse } from "next/server";
import dbConnection from "../lib/db";
import { ObjectId } from "mongodb";
import { MongoClient } from "mongodb";
import { v4 } from "uuid";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
const database = client.db("sorted_hrm");
const sections = database.collection("employee-model-sections");

export async function GET(request: NextRequest) {
  try {
    const cursor = sections.find();

    const documents = [];

    // replace _id for sectionId
    for await (const document of cursor) {
      documents.push(document);
    }

    return NextResponse.json(documents);
  } catch (error) {
    throw error;
  }
}

//POST used for adding sections
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const {
      sectionName,
      sectionFields,
    }: { sectionName: string; sectionFields: FieldType[] } = data;

    const doc = {
      sectionName,
      sectionFields,
    };
    await sections.insertOne(doc);

    console.log(data);

    return NextResponse.json({
      message: "OK",
    });
  } catch (error) {
    // console.log(error);
  }
}

//using PATCH as fields nested inside the main resource
export async function PATCH(request: NextRequest) {
  const data = await request.json();
  console.log("api reached", data);

  if (data.op === "add") {
    try {
      const addData = data as AddPatchType;

      //The id of the field object is added on the server
      const fieldObj = {
        fieldId: v4(),
        fieldName: addData.fieldName,
        fieldType: addData.fieldType,
      };

      const result = await sections.updateOne(
        {
          _id: new ObjectId(addData._id),
        },
        {
          $push: {
            sectionFields: fieldObj,
          },
        }
      );
    } catch (error) {
      // console.log(error);
    }
  }

  if (data.op === "remove") {
    try {
      const removalData = data as RemovePatchType;

      const result = await sections.updateOne(
        {
          _id: new ObjectId(removalData._id),
        },
        {
          $pull: {
            sectionFields: {
              fieldId: removalData.fieldId,
            },
          },
        }
      );
    } catch (error) {
      // console.log(error);
    }
  }

  return NextResponse.json({ message: "OK" });
}
