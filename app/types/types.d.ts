type FieldType = {
  label: string | undefined;
  fieldID: string;
  type: string;
};

type SectionType = {
  sectionName: string;
  sectionID: string;
  fields: FieldType[];
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
    sectionID: string;
    fieldID: string;
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
  sectionID: string;
  fields: {
    label: string | undefined;
    fieldID: string;
    type: string;
  }[];
  dispatch: React.Dispatch<Action>;
  disabled: boolean;
};

type FormBuilderReducerInitialState = {
  inputField: string;
  layouts: SectionType[];
  inputFieldType: string;
  toggleForm: boolean;
  disabled: boolean;
  server: { message: string; status: string };
  loading: boolean;
};

type ResponseAlert = {
  statusCode: string;
  message: string;
};
