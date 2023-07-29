import { createContext, useContext } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

type FormContextType = {
  step: number;
  length: number;
  goToNextStep: (e: React.MouseEvent) => void;
  goToPreviousStep: (e: React.MouseEvent) => void;
  methods: UseFormReturn<FieldValues, any, undefined>;
};

const FormContext = createContext<FormContextType>({} as FormContextType);

export const useFormContext = () => useContext(FormContext);

export default FormContext;