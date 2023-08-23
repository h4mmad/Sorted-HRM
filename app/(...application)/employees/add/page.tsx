"use client";
import { getSections } from "@/app/clientApiFns/modelApi";
import { allSections } from "@/app/components/AddEmployeeDetailsLayout";
import MultiStepForm from "@/app/components/multi_step_form_components/MultiStepForm";
import FormSection from "@/app/components/model_builder_components/FormSection";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getCamelCase } from "@/app/helperFns/fns";

export default function NewEmployee() {
  const { data } = useQuery<Section[], AxiosError>({
    queryKey: ["employee-model"],
    queryFn: getSections,
  });

  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-3xl text-myDarkBlue">Add new employee</h1>
      <MultiStepForm>
        {allSections?.map((section, index) => {
          return (
            <FormSection
              key={section.sectionId}
              sectionId={section.sectionId}
              sectionFields={section.sectionFields}
              sectionName={section.sectionName}
              sectionJsonName={getCamelCase(section.sectionName)}
            />
          );
        })}
        {data?.map((section, index) => {
          return (
            <FormSection
              key={section.sectionId}
              sectionId={section.sectionId}
              sectionFields={section.sectionFields}
              sectionName={section.sectionName}
              sectionJsonName={getCamelCase(section.sectionName)}
            />
          );
        })}
      </MultiStepForm>
    </div>
  );
}
