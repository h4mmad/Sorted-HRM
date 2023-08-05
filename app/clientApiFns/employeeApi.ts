import axios from "axios";

const employeeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export async function addEmployee(employee: Employee) {
  return await employeeApi.post("/employees", {
    employee,
  });
}
