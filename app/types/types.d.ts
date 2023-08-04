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
  sectionId: string;
  sectionFields: Field[];
};

type Field = {
  fieldName: string;
  fieldId: string;
  fieldJsonName: string;
  fieldIsRequired: boolean;
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
