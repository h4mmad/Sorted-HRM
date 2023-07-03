import { NextRequest, NextResponse } from "next/server";
import { database } from "../../lib/db";

const layouts = database.collection("layouts");

//using PATCH as fields nested inside the main resource
export async function PATCH(request: NextRequest) {
  console.log(await request.json());

  return NextResponse.json({ message: "ok?" });
}

//deletes a field
export async function DELETE(request: NextRequest) {
  const data = await request.json();
  console.log(data);

  return NextResponse.json({ message: "field deleted" });
}
