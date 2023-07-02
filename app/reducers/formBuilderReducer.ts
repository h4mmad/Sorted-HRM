import { v4 } from "uuid";

export function formBuilderReducer(
  state: FormBuilderReducerInitialState,
  action: FormBuilderAction
) {
  switch (action.type) {
    case "UPDATE_INPUT_FIELD_NAME": {
      return {
        ...state,
        inputField: (action as Action1).payload,
      };
    }

    case "ADD_SECTION": {
      return {
        ...state,
        layouts: [
          ...state.layouts,
          {
            sectionName: (action as Action1).payload,
            sectionID: v4(),
            fields: [],
          },
        ],
      };
    }
    case "TOGGLE_FIELD_TYPE": {
      return {
        ...state,
        inputFieldType: (action as Action1).payload,
      };
    }

    case "DELETE_SECTION": {
      return {
        ...state,
        layouts: state.layouts.filter(
          (section) => section.sectionID != (action as Action1).payload
        ),
      };
    }
    case "ADD_FIELD": {
      const insertAt = state.layouts.findIndex(
        (elem) => elem.sectionID === (action as Action1).payload
      );
      const obj: SectionType = state.layouts[insertAt];

      obj.fields.push({
        label: state.inputField,
        fieldID: v4(),
        type: state.inputFieldType,
      });

      const otherObjs = state.layouts.filter(
        (elem) => elem.sectionID != (action as Action1).payload
      );

      otherObjs.splice(insertAt, 0, obj);
      console.log(state.layouts);
      return {
        ...state,
        layouts: otherObjs,
      };
    }
    case "DELETE_FIELD": {
      const targetSectionID = (action as Action2).payload.sectionID;
      const targetFieldID = (action as Action2).payload.fieldID;

      const filteredLayout: SectionType[] = state.layouts.map((section) => {
        if (section.sectionID != targetSectionID) {
          return section;
        } else {
          let { sectionName, sectionID, fields } = section;
          fields = fields.filter((field) => field.fieldID != targetFieldID);
          return {
            sectionName,
            sectionID,
            fields,
          };
        }
      });

      console.log(filteredLayout);
      return {
        ...state,
        layouts: filteredLayout,
      };
    }
    case "SET_LAYOUTS": {
      return {
        ...state,
        layouts: (action as Action4).payload,
      };
    }
    case "TOGGLE_EDIT": {
      return {
        ...state,
        disabled: !state.disabled,
      };
    }
    case "SET_SERVER_MESSAGE": {
      return {
        ...state,
        server: (action as Action6).payload,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: (action as Action5).payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
