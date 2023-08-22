"use client";

import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { getAllEmployees } from "@/app/clientApiFns/employeeApi";
import EmployeeTable from "@/app/components/EmployeeTable";

export default function Employees() {
  const { data, isSuccess, isLoading, isError, error } = useQuery<
    Employee[],
    AxiosError
  >({
    queryKey: ["get-employees"],
    queryFn: getAllEmployees,
  });

  console.log(data);

  return <EmployeeTable />;
}
