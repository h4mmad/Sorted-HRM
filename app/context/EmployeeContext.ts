import { createContext, useContext } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

type EmployeeContext = {
  isEditing: boolean;
  data: Employee | undefined;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  employeeMethods: UseFormReturn<UpdateEmployeeInputs, any>;
};

const EmployeeContext = createContext<EmployeeContext>({} as EmployeeContext);

export const useEmployeeContext = () => useContext(EmployeeContext);

export default EmployeeContext;
