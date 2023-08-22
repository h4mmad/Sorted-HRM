"use client";
import { redirect, useParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  deleteOneEmployee,
  getOneEmployee,
  updateOneEmployee,
} from "@/app/clientApiFns/employeeApi";
import EmployeeSkeleton from "@/app/components/EmployeeSkeleton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ButtonControls from "@/app/components/ButtonControls";
import EmployeeOverviewCard from "@/app/components/EmployeeOverviewCard";
import { DividerLine } from "@/app/components/DividerLine";
import EmployeePersonalDetails from "@/app/components/EmployeePersonalDetails";
import EmployeeContactDetails from "@/app/components/EmployeeContaceDetails";
import EmployeeIqamaDetails from "@/app/components/EmployeeIqamaDetails";
export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams();
  const { employeeId } = params;

  const { data, isLoading, isSuccess } = useQuery<Employee, AxiosError>(
    ["employee", employeeId],
    () => getOneEmployee(employeeId)
  );

  const queryClient = useQueryClient();

  const deleteEmployeeMutation = useMutation(deleteOneEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee", employeeId]);
    },
  });

  const updateEmployeeMutation = useMutation(updateOneEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee", employeeId]);
    },
  });

  const deleteEmployeeHandler = (employeeId: string) => {
    deleteEmployeeMutation.mutate(employeeId);
    router.push("/employees");
  };
  const updateEmployeeHander = (employee: Employee) => {
    updateEmployeeMutation.mutate(employee);
  };

  type EditableFormInputs = {
    fullName: string;
    nationality: string;
    phoneNumber: string;
  };

  const { register, handleSubmit } = useForm<EditableFormInputs>();

  const submitHandler = (formData: EditableFormInputs) => {
    console.log(formData);
    if (isSuccess) {
      const employeeObj: Employee = {
        personal: {
          ...data?.personal,
          fullName: formData.fullName,
          nationality: formData.nationality,
        },
        iqama: {
          ...data.iqama,
        },
        contact: {
          ...data.contact,
        },
        job: {
          ...data.job,
        },
        qualification: {
          ...data.qualification,
        },
        passport: {
          ...data.passport,
        },
        employeeId: data.employeeId,
      };
      console.log(employeeObj);
    }

    setIsEditing(false);
  };

  const router = useRouter();

  const content = (
    <div className="flex flex-col space-y-12 ">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium text-myDarkBlue">
            {data?.personal.fullName}
          </h1>
          <ButtonControls />
        </div>

        {isSuccess ? <EmployeeOverviewCard data={data} /> : ""}

        <div className="flex flex-col space-y-12">
          {/* Personal details */}
          <EmployeePersonalDetails />

          {/* Contact details */}
          <EmployeeContactDetails />

          {/* Iqama details */}
          <EmployeeIqamaDetails />
        </div>
      </form>
    </div>
  );

  return isLoading ? <EmployeeSkeleton /> : data && content;
}
