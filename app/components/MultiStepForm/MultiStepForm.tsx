import React, { ReactNode, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormButtonControls from "./FormButtonControls";
import FormContext from "../../context/FormContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEmployee } from "@/app/clientApiFns/employeeApi";
import { v4 } from "uuid";

type MultiStepFormProps = {
  children: ReactNode;
};

export default function MultiStepForm({ children }: MultiStepFormProps) {
  const methods = useForm();
  const [step, setStep] = useState(0);

  const steps = React.Children.toArray(children);
  const length = steps.length;
  const currentStep = steps[step];

  const goToNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step < steps?.length) {
      setStep(step + 1);
    }
  };
  const goToPreviousStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const queryClient = useQueryClient();

  const addEmployeeMutation = useMutation(addEmployee, {
    onSuccess: () => queryClient.invalidateQueries(["get-employees"]),
  });
  const onSubmit: SubmitHandler<Employee> = (data) => {
    const { iqama, personal, contact, qualification, job, passport, ...rest } =
      data;

    console.log(data);

    const employeeData: Employee = {
      iqama,
      personal,
      contact,
      employeeId: v4(),
      job,
      passport,
      qualification,
    };
    addEmployeeMutation.mutate(employeeData);
  };

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
        submitStep,
      }}
    >
      <div className="flex flex-col">
        <form onSubmit={methods.handleSubmit(submitStep)}>
          <FormButtonControls />
          {currentStep}
        </form>
      </div>
    </FormContext.Provider>
  );
}
