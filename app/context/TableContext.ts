import React, { createContext, useContext } from "react";

type EmployeeTableContextType = {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
};

const EmployeeTableContext = createContext<EmployeeTableContextType>(
  {} as EmployeeTableContextType
);

export const useEmployeeTableContext = () => useContext(EmployeeTableContext);

export default EmployeeTableContext;
