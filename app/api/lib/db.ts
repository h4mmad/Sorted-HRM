import { Db, MongoClient } from "mongodb";

export default function dbConnection() {
  try {
    const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
    const database = client.db("sorted_hrm");
    return { database };
  } catch (error) {
    throw error;
  }
}
