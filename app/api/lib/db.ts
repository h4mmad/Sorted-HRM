import { MongoClient } from "mongodb";
import { PrismaClient } from "@prisma/client";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
export const database = client.db("sorted_hrm");
export const prisma = new PrismaClient();
