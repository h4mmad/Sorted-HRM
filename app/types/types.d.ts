type FormBuilderReducerInitialState = {
  inputField?: string;
  layouts?: SectionType[];
  toggleForm?: boolean;
  disabled: boolean;
  server?: { message: string; status: string };
  loading?: boolean;
};

type ResponseAlert = {
  statusCode: string;
  message: string;
};

type AddFieldInterface = {
  sectionId: string;
  fieldName: string;
  fieldType: string;
};

type opPatchTypes = "add" | "remove" | "replace";
"move" | "copy" | "test";

interface RemovePatchType {
  op: opPatchTypes;
  path: string;
  sectionId: string;
  fieldId: string;
}
interface AddPatchType {
  op: opPatchTypes;
  path: string;
  sectionId: string;
  fieldName: string;
  fieldType: string;
}

type Section = {
  sectionName: string;
  sectionId: string;
  sectionFields: Field[];
};

type Field = {
  fieldName: string;
  fieldId: string;
  fieldJsonName: string;
  fieldIsRequired?: boolean;
} & (SingleField | OptionField);

type SingleField = {
  fieldType: "text" | "email" | "date" | "number" | "file";
  placeholder?: string;
  pattern?: any;
};

type OptionField = {
  fieldType: "options";
  fieldOptions: string[];
};
