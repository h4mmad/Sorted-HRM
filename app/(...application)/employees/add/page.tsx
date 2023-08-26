"use client";
import IqamaForm from "@/app/components/add_employee_form_components/IqamaForm";
import PassportForm from "@/app/components/add_employee_form_components/PassportForm";
import PersonalForm from "@/app/components/add_employee_form_components/PersonalForm";
import MultiStepForm from "@/app/components/multi_step_form_components/MultiStepForm";

export default function NewEmployee() {
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-3xl text-myDarkBlue">Add new employee</h1>
      <MultiStepForm>
        <PersonalForm />
        <IqamaForm />
        <PassportForm />
      </MultiStepForm>
    </div>
  );
}
