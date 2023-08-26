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

  const updateEmployeeHander = (employeeUpdate: UpdateEmployeeInputs) => {
    if (isSuccess) {
      const employeeId: string = data.employeeId;
      updateEmployeeMutation.mutate({ employeeUpdate, employeeId });
    }
  };

  const employeeMethods = useForm<UpdateEmployeeInputs>({
    defaultValues: {
      job: {
        department: data?.job.department,
        workStatus: data?.job.workStatus,
      },
    },
  });
  const { handleSubmit } = employeeMethods;

  const submitHandler = (updateFormData: UpdateEmployeeInputs) => {
    console.log(updateFormData);
    updateEmployeeHander(updateFormData);
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
        <div className="flex flex-col space-y-10">
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
            <h1 className="text-2xl ">Employee details</h1>

            <ButtonControls />
          </div>

          <div className="ml-4 flex flex-col space-y-10">
            <div className="flex flex-row space-x-10 flex-wrap">
              <PersonalDetails />
              <ContactDetails />
            </div>

            <JobDetails />

            <div className="flex flex-row space-x-10 flex-wrap">
              {/* <IqamaDetails /> */}
              <PassportDetails />
            </div>
          </div>
          {isEditing && <ButtonControls />}
        </div>
      </form>
    </EmployeeContext.Provider>
  );
}
