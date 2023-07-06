type FieldType = {
  fieldName: string;
  fieldId: string;
  fieldType: string;
};

type SectionType = {
  sectionName: string;
  _id: string;
  sectionFields: FieldType[] | undefined;
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
    _id: string;
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
  _id: string;
  fieldName: string;
  fieldType: string;
};

type Employee = {};

type opPatchTypes = "add" | "remove" | "replace";
"move" | "copy" | "test";

interface RemovePatchType {
  op: opPatchTypes;
  path: string;
  _id: string;
  fieldId: string;
}
interface AddPatchType {
  op: opPatchTypes;
  path: string;
  _id: string;
  fieldName: string;
  fieldType: string;
}

interface NewEmployeeFormInputs {
  employeeId: string;
  imageUrl?: string;

  personalDetails: {
    name: string;
    dateOfBirth: Date;
    nationality: string;
  };

  contactDetails: {
    phoneNumber: string;
    personalEmail: string;
    workEmail?: string;
  };

  idDetails: {
    iqamaNumber: number;
    iqamaExpiry: Date;
    iqamaStatus: "expired" | "active";
    passportNumber?: number;
    passportExpiry?: Date;
  };

  jobDetails: {
    designation: string;
    stream: string;
    department: string;
    remarks: string;
    dateOfJoining: Date;
    workStatus: "inactive" | "active";
    sponsoredBy: string;
  };

  qualificationDetails: {
    qualification: string;
    university: string;
  };
}
type SectionProps = {
  sectionTitle: string;
  sectionFields: Fields[];
  visible?: boolean;
};

type Fields = {
  fieldName: string;
  isRequired: boolean;
} & (SingleField | OptionField);

type SingleField = {
  fieldType: "text" | "email" | "date" | "number" | "file";
};

type OptionField = {
  fieldType: "options";
  fieldOptions: string[];
};
