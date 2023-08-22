import { createContext, useContext } from "react";

type EmployeeContext = {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  data: Employee | undefined;
  register: any;
};

export const EmployeeContext = createContext<EmployeeContext>(
  {} as EmployeeContext
);

export const useEmployeeContext = () => useContext(EmployeeContext);
