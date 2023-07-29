"use client";

import { allSections } from "@/app/components/AddEmployeeDetailsLayout";
import MultiStepForm from "@/app/components/MultiStepForm";
import Section from "@/app/components/Section";

export default function NewEmployee() {
  return (
    <MultiStepForm>
      {allSections.map((section, idx) => {
        return (
          <Section
            sectionName={section.sectionName}
            sectionFields={section.sectionFields}
          />
        );
      })}
    </MultiStepForm>
  );
}
