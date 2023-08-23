"use client";
import { redirect, useParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  deleteOneEmployee,
  getOneEmployee,
  updateOneEmployee,
} from "@/app/clientApiFns/employeeApi";
import EmployeeSkeleton from "@/app/components/employee_components/EmployeeSkeleton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ButtonControls from "@/app/components/employee_components/ButtonControls";
import EmployeeOverviewCard from "@/app/components/employee_components/OverviewCard";
import EmployeeContext from "@/app/context/EmployeeContext";
import PersonalDetails from "@/app/components/employee_components/PersonalDetails";
import ContactDetails from "@/app/components/employee_components/ContactDetails";
import IqamaDetails from "@/app/components/employee_components/IqamaDetails";
import PassportDetails from "@/app/components/employee_components/PassportDetails";
import JobDetails from "@/app/components/employee_components/JobDetails";
import classNames from "classnames";
import { DividerLine } from "@/app/components/general_components/DividerLine";
export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams();
  const { employeeId } = params;

  const { data, isLoading, isSuccess } = useQuery<Employee, AxiosError>(
    ["employee", employeeId],

    () => {
      console.log("data refetched");
      return getOneEmployee(employeeId);
    },
    {
      refetchOnWindowFocus: false,
    }
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

  const employeeMethods = useForm<EditableFormInputs>();
  const { handleSubmit } = employeeMethods;

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

  return isLoading ? (
    <EmployeeSkeleton />
  ) : (
    <EmployeeContext.Provider
      value={{ employeeMethods, isEditing, setIsEditing, data }}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col space-y-12">
          {isEditing ? (
            <div className="flex justify-center">
              <div className="p-2 w-64 fixed rounded-md bg-yellow-200  text-center">
                Editing...
              </div>
            </div>
          ) : (
            ""
          )}

          {isSuccess ? <EmployeeOverviewCard data={data} /> : ""}
          <DividerLine />
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-myDarkBlue">Employee details</h1>

            <ButtonControls />
          </div>

          <div className="flex flex-row space-x-8 flex-wrap ml-4">
            <PersonalDetails />
            <ContactDetails />
          </div>

          <JobDetails />

          <div className="flex flex-row space-x-8 flex-wrap">
            <IqamaDetails />
            <PassportDetails />
          </div>
          {isEditing && <ButtonControls />}
        </div>
      </form>
    </EmployeeContext.Provider>
  );
}
