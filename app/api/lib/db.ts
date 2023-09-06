import { Db, MongoClient } from "mongodb";
import pgPromise from "pg-promise";

const pgp = pgPromise();

const db = pgp({
  host: "localhost",
  port: 5432,
  database: "sorted_hrm",
  user: "hammad",
  password: "admin",
});

export default function dbConnection() {
  try {
    const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
    const database = client.db("sorted_hrm");
    return { database };
  } catch (error) {
    throw error;
  }
}

export async function main() {
  try {
    const result = await db.query("SELECT $1::text as message", [
      "Hello, PostgreSQL!",
    ]);

    console.log(result[0].message);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    pgp.end(); // Close the database connection pool
  }
}
