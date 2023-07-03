import { NextRequest, NextResponse } from "next/server";
import { client } from "../../lib/db";

const database = client.db("sorted_hrm");
const layouts = database.collection("layouts");

//add authorization to the api endpoints

export async function GET(request: NextRequest) {
  return NextResponse.json([
    {
      sectionId: "1",
      sectionName: "Personal details",
      sectionFields: [
        {
          fieldName: "Name",
          fieldId: "9f0ac870-1f8e-4738-acqqw96-7d87b8b7442d",
          fieldType: "text",
        },
        {
          fieldName: "Date of birth",
          fieldId: "241f9sdsde99-a036-4eba-9f6b-460827dc23fe",
          fieldType: "date",
        },
        {
          fieldName: "Personal email",
          fieldId: "0eab33sdsd85-2897-4ab8-813a-8c12b5886ccb",
          fieldType: "email",
        },
      ],
    },
    {
      sectionId: "2",
      sectionName: "sdsdsd details",
      sectionFields: [
        {
          fieldName: "Name",
          fieldId: "9f0ac870-1f8qwe-4738-ac96-7d87b8b7442d",
          fieldType: "text",
        },
        {
          fieldName: "Date of birth",
          fieldId: "241f9e99-a036-4eba-9f6b-4qw60827dc23fe",
          fieldType: "date",
        },
        {
          fieldName: "Personal email",
          fieldId: "0eab3qw385-2897-4ab8-813a-8c12b5886ccb",
          fieldType: "email",
        },
      ],
    },
  ]);
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({
    message: "hello from sections DELETE",
  });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log("hello from sections POST", data);

  return NextResponse.json({
    message: "hello from sections POST",
  });
}

export async function PATCH(request: NextRequest) {}
