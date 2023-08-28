"use client";

import MultiStepForm from "@/app/components/form/MultiStepForm";
import ContactForm from "@/app/components/form/ContactForm";
import PersonalForm from "@/app/components/form/PersonalForm";
import IqamaForm from "@/app/components/form/IqamaForm";
import PassportForm from "@/app/components/form/PassportForm";
import JobForm from "@/app/components/form/JobForm";

export default function NewEmployee() {
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-3xl text-myDarkBlue">Add new employee</h1>
      <MultiStepForm>
        <PersonalForm />
        <ContactForm />
        <IqamaForm />
        <PassportForm />
        <JobForm />
      </MultiStepForm>
    </div>
  );
}
