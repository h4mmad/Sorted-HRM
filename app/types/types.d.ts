type ResponseAlert = {
  statusCode: string;
  message: string;
};

type opPatchTypes = "add" | "remove" | "replace";
"move" | "copy" | "test";

type AddFieldPatch = {
  sectionId: string;
  field: Field;
};
type RemoveFieldPatch = {
  sectionId: string;
  fieldId: string;
};

type Section = {
  sectionName: string;
  sectionJsonName: string;
  sectionId: string;
  sectionFields?: Field[];
};

type Field = {
  fieldName: string;
  fieldId: string;
  fieldJsonName: string;
  fieldIsRequired: boolean;
  fieldValue: any;
  fieldValidationPattern?: boolean extends this["fieldIsRequired"]
    ? boolean
    : never;
} & (SingleField | OptionField);

type SingleField = {
  fieldType: "text" | "email" | "date" | "number" | "file";
};

type OptionField = {
  fieldType: "options";
  fieldOptionValues: { name: string }[];
};

type Employee = {
  employeeId: string;
  employeePictureURL?: string;
  iqama: {
    iqamaNumber: string;
    iqamaExpiry: Date | null;
  };
  personal: {
    fullName: string;
    dateOfBirth: Date | null;
    gender: "male" | "female";
    nationality: string;
  };
  passport: {
    passportNumber: string;
    passportExpiry: Date | null;
  };
  contact: { phoneNumber: string; email: string };
  job: {
    designation: string;
    department: "Teaching" | "Non-Teaching";
    dateOfJoining: Date | null;
    workStatus: "active" | "inactive";
  };
};

type AddFieldInputs = {
  fieldName: string;
  fieldJsonName: string;
  fieldType: "text" | "email" | "date" | "number" | "file" | "options";
  fieldIsRequired: boolean;
  optionsArray: { name: string }[];
};

type UpdateEmployee = {
  employeePictureURL?: string;
  employeeId?: string;
  contact: { phoneNumber: number; email: string };
  iqama: {
    iqamaExpiry: Date | null | undefined;
  };
  passport: {
    passportNumber: string;
    passportExpiry: Date | null | undefined;
  };
  job: {
    designation: string;
    department: string;
    workStatus: "active" | "inactive";
  };
};
