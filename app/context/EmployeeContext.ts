import React, { createContext, useContext } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

type EmployeeContext = {
  isEditing: boolean;
  data: Employee | undefined;
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  employeeMethods: UseFormReturn<UpdateEmployee>;
};

const EmployeeContext = createContext<EmployeeContext>({} as EmployeeContext);

export const useEmployeeContext = () => useContext(EmployeeContext);

export default EmployeeContext;
