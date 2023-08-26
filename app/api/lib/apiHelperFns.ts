import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);

export async function getEmployeeById(
  employeeId: string
): Promise<Employee | null> {
  try {
    await client.connect();
    const db = client.db("sorted_hrm");
    const employeesCollection = db.collection("employees");

    const user = await employeesCollection.findOne({ employeeId: employeeId });

    return user as Employee | null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  } finally {
    await client.close();
  }
}

export async function updateEmployeeById(
  employeeId: string,
  updateFields: any
): Promise<void> {
  try {
    // Connect to the MongoDB server
    await client.connect();
    const db = client.db("sorted_hrm");
    const employeesCollection = db.collection("employees");

    // Update the employee with the provided ID
    await employeesCollection.updateOne(
      { employeeId: employeeId },
      { $set: updateFields }
    );

    console.log(`Employee with ID ${employeeId} updated successfully.`);
  } catch (error) {
    console.error("Error updating employee:", error);
  } finally {
    // Close the connection
    client.close();
  }
}

export async function deleteEmployeeById(employeeId: string) {}
