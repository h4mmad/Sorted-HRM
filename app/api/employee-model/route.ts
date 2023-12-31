import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
const database = client.db("sorted_hrm");
const sections = database.collection("employee-model-sections");

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sectionId = searchParams.get("sectionId");
  console.log("from backend", sectionId);

  if (sectionId) {
    try {
      await sections.deleteOne({ sectionId: sectionId });
      return NextResponse.json({
        messsage: `deleted section ${sectionId}`,
      });
    } catch (e) {
      console.log(e);
      return NextResponse.json({
        messsage: `an error occured ${e}`,
      });
    }
  } else {
    return NextResponse.json(
      {
        message: "sectionId param not found",
      },
      { status: 404 }
    );
  }
}
export async function GET(request: NextRequest) {
  try {
    const cursor = sections.find();

    const documents = [];

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
    const { sectionName, sectionId, sectionFields }: Section = data;

    const doc = {
      sectionName,
      sectionId,
    };
    await sections.insertOne(doc);

    return NextResponse.json({
      message: "OK",
    });
  } catch (error) {
    throw error;
  }
}

//using PATCH as fields nested inside the main resource
export async function PATCH(request: NextRequest) {
  const data = await request.json();
  console.log("api reached", data);

  if (data.op === "add") {
    try {
      const result = await sections.updateOne(
        {
          sectionId: data.sectionId,
        },
        {
          $push: {
            sectionFields: data.field,
          },
        }
      );
    } catch (error) {
      throw error;
    }
  }

  if (data.op === "remove") {
    try {
      const result = await sections.updateOne(
        {
          sectionId: data.sectionId,
        },
        {
          $pull: {
            sectionFields: {
              fieldId: data.fieldId,
            },
          },
        }
      );
    } catch (error) {
      throw error;
    }
  }

  return NextResponse.json({ message: "OK" });
}
