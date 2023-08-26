import { employee } from "@prisma/client";
import axios from "axios";

const employeeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export async function addEmployee(employee: Employee) {
  return await employeeApi.post("/employee", employee);
}

export async function getAllEmployees() {
  try {
    const response = await employeeApi.get("/employees");

    return await response.data;
  } catch (error) {
    throw error;
  }
}

export async function getOneEmployee(empId: string) {
  try {
    const response = await employeeApi.get(`/employee?employeeId=${empId}`);
    return await response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteOneEmployee(employeeId: string) {
  try {
    return await employeeApi.delete(`/employee?employeeId=${employeeId}`);
  } catch (error) {
    throw error;
  }
}

export async function updateOneEmployee({
  employeeUpdate,
  employeeId,
}: {
  employeeUpdate: UpdateEmployeeInputs;
  employeeId: string;
}) {
  try {
    const updateEmployeeObj: SendEmployeeUpdateType = {
      employeeId,
      contact: employeeUpdate.contact,
      iqama: employeeUpdate.iqama,
      job: employeeUpdate.job,
      passport: employeeUpdate.passport,
    };
    return await employeeApi.put("/employee", updateEmployeeObj);
  } catch (error) {
    throw error;
  }
}
