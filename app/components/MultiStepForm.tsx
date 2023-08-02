import React, { ReactElement, useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import FormButtonControls from "./multi-step/FormButtonControls";
import FormContext from "../context/FormContext";
import Section from "./Section";

type MultiStepFormProps = {
  allSections: SectionType[];
};

export default function MultiStepForm({ allSections }: MultiStepFormProps) {
  const methods = useForm();
  const [step, setStep] = useState(0);

  const steps = allSections;
  const length = allSections.length;
  const currentStep = allSections[step];
  const sectionTitle = currentStep.sectionName;

  const goToNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step < steps.length) {
      setStep(step + 1);
    }
  };
  const goToPreviousStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const onSubmit = (data: any) => console.log(data);

  const submitStep = (data: any) => {
    if (step === steps.length - 1) {
      // Last step, submit the form
      onSubmit(data);
    } else {
      // Move to the next step
      if (step < steps.length) {
        setStep(step + 1);
      }
    }
  };

  console.log(steps.length);
  return (
    <FormContext.Provider
      value={{
        step,
        length,
        goToNextStep,
        goToPreviousStep,
        methods,
        setStep,
        sectionTitle,
        submitStep,
      }}
    >
      <div className="flex flex-col">
        <form onSubmit={methods.handleSubmit(submitStep)}>
          <FormButtonControls />

          <Section
            _id={currentStep._id}
            sectionFields={currentStep.sectionFields}
            sectionName={currentStep.sectionName}
          />
        </form>
      </div>
    </FormContext.Provider>
  );
}
