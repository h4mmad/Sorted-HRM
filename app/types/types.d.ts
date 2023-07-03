type FieldType = {
  fieldName: string;
  fieldId: string;
  fieldType: string;
};

type SectionType = {
  sectionName: string;
  sectionId: string;
  sectionFields: FieldType[];
};

type ActionTypes =
  | "UPDATE_INPUT_FIELD_NAME"
  | "ADD_SECTION"
  | "TOGGLE_FIELD_TYPE"
  | "DELETE_SECTION"
  | "ADD_FIELD"
  | "DELETE_FIELD"
  | "SET_LAYOUTS"
  | "TOGGLE_EDIT"
  | "SET_SERVER_MESSAGE"
  | "SET_LOADING";

type Action1 = {
  type: ActionTypes;
  payload: string;
};
type Action2 = {
  type: ActionTypes;
  payload: {
    sectionId: string;
    fieldId: string;
  };
};
type Action3 = {
  type: ActionTypes;
};
type Action4 = {
  type: ActionTypes;
  payload: SectionType[];
};
type Action5 = {
  type: ActionTypes;
  payload: boolean;
};
type Action6 = {
  type: ActionTypes;
  payload: { message: string; status: string };
};

type FormBuilderAction =
  | Action1
  | Action2
  | Action3
  | Action4
  | Action5
  | Action6;

type SectionProps = {
  sectionName: string;
  sectionId: string;
  sectionFields: FieldType[];
  handleSectionDelete: any;
};

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
  fieldName: string | undefined;
  fieldId: string;
  fieldType: string;
};

type Employee = {};

type opPatchTypes = "add" | "remove" | "replace";
"move" | "copy" | "test";

interface PatchType {
  op: opPatchTypes;
  path: string;
  sectionId: string;
  fieldId: string;
}
