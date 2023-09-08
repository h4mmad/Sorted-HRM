import { Pool, Client } from "pg";

const pool = new Pool({
  user: "hammad",
  host: "localhost",
  database: "sorted_hrm",
  password: "admin",
});

async function test() {
  console.log(await pool.query("SELECT NOW()"));
}
test();

export function addEmployeeBasicInfo() {
  db.none(
    "INSERT INTO employee_basic_info(picture_url, full_name, date_of_birth, gender, nationality, phone_number, email)  VALUES(${picture_url}, ${full_name}, ${date_of_birth}, ${gender}, ${nationality}, ${phone_number}, ${email})",
    {
      picture_url: "a",
      full_name: "hammad",
      date_of_birth: "2022-02-02",
      gender: "MALE",
      nationality: "INDIA",
      phone_number: "999",
      email: "hammad@s.com",
    }
  )
    .then(() => {
      console.log("Data inserted successfully");
    })
    .catch((error: any) => {
      console.error("Error inserting data:", error);
    });
}

export default db;
