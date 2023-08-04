"use client";

import { getSections } from "@/app/clientApiFns/employeeModelApi";
import { allSections } from "@/app/components/AddEmployeeDetailsLayout";
import MultiStepForm from "@/app/components/multi-step/MultiStepForm";
import Section from "@/app/components/Section";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function NewEmployee() {
  const { data, isSuccess, isLoading, isError, error } = useQuery<
    Section[],
    AxiosError
  >({
    queryKey: ["employee-model"],
    queryFn: getSections,
  });

  return (
    <MultiStepForm>
      {allSections.map((section, index) => {
        return (
          <Section
            sectionFields={section.sectionFields}
            sectionId={section.sectionId}
            sectionName={section.sectionName}
          />
        );
      })}
      {data?.map((section, index) => {
        return (
          <Section
            sectionFields={section.sectionFields}
            sectionId={section.sectionId}
            sectionName={section.sectionName}
          />
        );
      })}
    </MultiStepForm>
  );
}
