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
