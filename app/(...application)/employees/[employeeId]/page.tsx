"use client";
import { redirect, useParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  deleteOneEmployee,
  getOneEmployee,
  updateOneEmployee,
} from "@/app/(...application)/lib/clientApiFns/employeeApi";
import EmployeeSkeleton from "@/app/components/single_employee/EmployeeSkeleton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import ButtonControls from "@/app/components/single_employee/ButtonControls";
import EmployeeOverviewCard from "@/app/components/single_employee/OverviewCard";
import EmployeeContext from "@/app/context/EmployeeContext";
import PersonalDetails from "@/app/components/single_employee/PersonalDetails";
import ContactDetails from "@/app/components/single_employee/ContactDetails";
import IqamaDetails from "@/app/components/single_employee/IqamaDetails";
import PassportDetails from "@/app/components/single_employee/PassportDetails";
import JobDetails from "@/app/components/single_employee/JobDetails";
import { DividerLine } from "@/app/components/other/DividerLine";
export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const params = useParams();
  const { employeeId } = params;

  const { data, isLoading, isSuccess, isRefetching } = useQuery<
    Employee,
    AxiosError
  >(
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

  const updateEmployeeHander = (employeeUpdate: UpdateEmployee) => {
    if (isSuccess) {
      const employeeId: string = data.employeeId;
      updateEmployeeMutation.mutate({ employeeUpdate, employeeId });
    }
  };

  const employeeMethods = useForm<UpdateEmployee>({
    defaultValues: {
      job: {
        department: data?.job.department,
        workStatus: data?.job.workStatus,
      },
      employeePictureURL: data?.employeePictureURL,
    },
  });
  const { handleSubmit, formState } = employeeMethods;

  const submitHandler = (updateFormData: UpdateEmployee) => {
    console.log(imageUrl);
    if (formState.isDirty || imageUrl) {
      const updateObj: UpdateEmployee = {
        contact: updateFormData.contact,
        iqama: updateFormData.iqama,
        job: updateFormData.job,
        passport: updateFormData.passport,
        employeePictureURL: imageUrl,
      };
      updateEmployeeHander(updateObj);
      setImageUrl("");
    }

    setIsEditing(false);
  };

  const router = useRouter();

  return isLoading || isRefetching ? (
    <EmployeeSkeleton />
  ) : (
    <EmployeeContext.Provider
      value={{
        employeeMethods,
        isEditing,
        setIsEditing,
        data,
        imageUrl,
        setImageUrl,
      }}
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

          {isSuccess ? <EmployeeOverviewCard /> : ""}
          <DividerLine />
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-myDarkBlue">Employee details</h1>

            <ButtonControls />
          </div>

          <div className="ml-4 flex flex-col space-y-10">
            <div className="flex flex-row space-x-10 flex-wrap">
              <PersonalDetails />
              <ContactDetails />
            </div>

            <JobDetails />

            <div className="flex flex-row space-x-10 flex-wrap">
              <IqamaDetails />
              <PassportDetails />
            </div>
          </div>
          {isEditing && <ButtonControls />}
        </div>
      </form>
    </EmployeeContext.Provider>
  );
}
