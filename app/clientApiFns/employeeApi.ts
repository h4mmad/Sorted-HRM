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

export async function updateOneEmployee(employee: Employee) {
  try {
    const employeeObj: Employee = {
      employeeId: employee.employeeId,
      contact: employee.contact,
      iqama: employee.iqama,
      job: employee.job,
      passport: employee.passport,
      personal: employee.personal,
      qualification: employee.qualification,
    };
    return await employeeApi.put("/employee", { employeeObj });
  } catch (error) {
    throw error;
  }
}
