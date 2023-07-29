import React, { ReactElement, useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import FormButtonControls from "./multi-step/FormButtonControls";
import FormContext from "../context/FormContext";
import { allSections } from "./AddEmployeeDetailsLayout";
import classNames from "classnames";

type MultiStepFormProps = {
  children: React.ReactNode;
};

export default function MultiStepForm({ children }: MultiStepFormProps) {
  const methods = useForm();
  const [step, setStep] = useState(0);

  const steps = React.Children.toArray(children);
  const length = steps.length;
  const currentStep = steps[step];

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

  console.log(steps.length);
  return (
    <FormContext.Provider
      value={{ step, length, goToNextStep, goToPreviousStep, methods }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between bg-white shadow-md rounded-lg p-2 border border-slate-300">
          {allSections.map((elem, idx) => {
            return (
              <button
                className="flex flex-row items-center space-x-2"
                onClick={() => setStep(idx)}
              >
                <div
                  className={classNames([
                    "cursor-pointer  flex flex-row justify-center items-center",
                    { "w-7 h-7": idx !== step },
                    { "w-10 h-10 ": idx === step },
                  ])}
                >
                  <p
                    className={classNames([
                      { "text-gray-500": idx !== step },
                      {
                        "text-2xl text-myLightBlue": idx === step,
                      },
                    ])}
                  >
                    {idx + 1}.
                  </p>
                </div>
                <p
                  className={classNames([
                    { "text-gray-500": idx !== step },
                    {
                      "font-semibold text-3xl text-myLightBlue": idx === step,
                    },
                  ])}
                >
                  {elem.sectionName}
                </p>
              </button>
            );
          })}
        </div>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex-1">{currentStep}</div>
          <FormButtonControls />
        </form>
      </div>
    </FormContext.Provider>
  );
}
