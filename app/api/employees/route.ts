import { NextRequest, NextResponse } from "next/server";
import db from "@/app/(...application)/lib/db";
import { readFileSync } from "fs";

const tableViewQuery = readFileSync(
  "app/(...application)/lib/SQL/views/table_view.sql"
).toString();

export async function GET(request: NextRequest) {
  try {
    const result = await db.query(tableViewQuery);

    return NextResponse.json(result);
  } catch (error) {
    throw error;
  } finally {
  }
}
