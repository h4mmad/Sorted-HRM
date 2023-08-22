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
  iqama: {
    iqamaNumber: string;
    iqamaExpiry: string;
    iqamaStatus: "active" | "expired";
  };
  personal: {
    fullName: string;
    dateOfBirth: Date;
    gender: string;
    nationality: string;
  };
  passport: { passportNumber: string; passportExpiry: string };
  contact: { phoneNumber: string; personalEmail: string; workEmail: string };
  job: {
    designation: string;
    stream: string;
    department: string;
    remarks: string;
    dateOfJoining: Date;
    workStatus: string;
    sponsoredBy: string;
  };
  qualification: { qualification: string; university: string };
};

type AddFieldInputs = {
  fieldName: string;
  fieldJsonName: string;
  fieldType: "text" | "email" | "date" | "number" | "file" | "options";
  fieldIsRequired: boolean;
  optionsArray: { name: string }[];
};
