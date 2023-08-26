import { createContext, useContext } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

type FormContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  length: number;
  goToNextStep: (e: React.MouseEvent) => void;
  goToPreviousStep: (e: React.MouseEvent) => void;
  methods: UseFormReturn<Employee, any, undefined>;
  submitStep: (data: any) => void;
};

const FormContext = createContext<FormContextType>({} as FormContextType);

export const useFormContext = () => useContext(FormContext);

export default FormContext;
