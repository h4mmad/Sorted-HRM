"use client";

import React, { Suspense, useEffect, useReducer } from "react";
import { v4 } from "uuid";
import MasterRecordLayout from "./MasterRecordLayout";
import classNames from "classnames";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useData } from "@/app/hooks/useData";

function loadingIJ() {
  // You can add any UI inside Loading, including a Skeleton.
  return <div>loading....</div>;
}

export type Action1 = {
  type: ActionTypes;
  payload: string;
};
export type Action2 = {
  type: ActionTypes;
  payload: {
    sectionID: string;
    fieldID: string;
  };
};
export type Action3 = {
  type: ActionTypes;
};
export type Action4 = {
  type: ActionTypes;
  payload: SectionType[];
};
export type Action5 = {
  type: ActionTypes;
  payload: boolean;
};
export type Action6 = {
  type: ActionTypes;
  payload: { message: string; status: string };
};

export type Action = Action1 | Action2 | Action3 | Action4 | Action5 | Action6;

interface InitialState {
  inputField?: string;
  layouts: SectionType[];
  inputFieldType: string;
  toggleForm: boolean;
  disabled: boolean;
  server: { message: string; status: string };
}

function reducer(state: InitialState, action: Action): InitialState {
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

    default: {
      return {
        ...state,
      };
    }
  }
}

export default function masterRecord() {
  const [state, dispatch] = useReducer(reducer, {
    layouts: [],
    inputFieldType: "",
    toggleForm: false,
    disabled: true,
    server: { message: "", status: "" },
  });

  const { data } = useData("http://localhost:3000/api/employee-model");
  const layouts: SectionType[] = data.layouts;
  dispatch({ type: "SET_LAYOUTS", payload: layouts });

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "SET_SERVER_MESSAGE",
        payload: { message: "", status: "" },
      });
    }, 5000);
  }, [state.server]);

  async function saveLayout() {
    try {
      const response = await fetch(`http://localhost:3000/api/employee-model`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ layouts: state.layouts }),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error(`Error status: ${response.status}`);
      }
      dispatch({
        type: "SET_SERVER_MESSAGE",
        payload: {
          message: response.statusText,
          status: String(response.status),
        },
      });
      dispatch({ type: "TOGGLE_EDIT" });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="lg:w-2/3 2xl:w-1/2 relative">
      {/* Message */}
      {state.server.status && (
        <div
          className={classNames([
            "p-3 rounded-md  absolute w-full",
            { "bg-green-400": state.server.status.startsWith("20") },
            { "bg-red-400": state.server.status.startsWith("50") },
            { "bg-yellow-400": state.server.status.startsWith("30" || "40") },
          ])}
        >
          <p className="text-lg font-bold">
            {state.server.status}:{state.server.message}
          </p>
        </div>
      )}
      {
        <div className="mt-4">
          {state.disabled ? (
            <>
              <button
                className="bg-myLightBlue text-white hover:bg-myDarkBlue py-1 px-3 rounded-full flex flex-row justify-center items-center space-x-2"
                onClick={() => dispatch({ type: "TOGGLE_EDIT" })}
              >
                {state.layouts.length > 0 ? "Edit model" : "Add model"}
                {state.layouts.length > 0 ? (
                  <EditOutlinedIcon className="text-white" />
                ) : (
                  <AddOutlinedIcon className="text-white" />
                )}
              </button>
            </>
          ) : (
            <>
              <button
                className="border border-myLightBlue hover:text-white hover:bg-myLightBlue py-1 px-3 rounded-full"
                onClick={() => dispatch({ type: "TOGGLE_EDIT" })}
              >
                Cancel
              </button>
              <button
                className="border border-myLightBlue hover:text-white hover:bg-myLightBlue  py-1 px-3  rounded-full float-right"
                onClick={saveLayout}
              >
                Save layout
              </button>
            </>
          )}
        </div>
      }
      {!state.disabled && (
        <div
          className={classNames(["p-3 bg-gray-200 mt-2 rounded-md"], {
            "opacity-40 disabled select-none pointer-events-none":
              state.disabled,
          })}
        >
          {/* section title */}
          <form
            className="flex flex-row justify-between items-end"
            onSubmit={async (e: any) => {
              e.preventDefault();
              dispatch({
                type: "ADD_SECTION",
                payload: String(e.target.sectionName.value),
              });

              e.target.sectionName.value = "";
            }}
          >
            <div>
              <label className="block text-myDarkBlue font-bold">
                Section name
              </label>
              <input
                disabled={state.disabled}
                required
                name="sectionName"
                id="sectionName"
                type="text"
                className="rounded-md p-1 appearance-none  "
              />
            </div>
            <button
              disabled={state.disabled}
              type="submit"
              className="px-4 py-1 text-white  hover:bg-myDarkBlue rounded-full bg-myLightBlue"
              onClick={() => {}}
            >
              + Add section
            </button>
          </form>
        </div>
      )}

      <div
        className={classNames([
          "mt-4",
          {
            "opacity-40 disabled select-none pointer-events-none":
              state.disabled,
          },
        ])}
      >
        {state?.layouts?.map(({ sectionID, sectionName, fields }, index) => {
          return (
            <MasterRecordLayout
              key={sectionID}
              sectionID={sectionID}
              sectionName={sectionName}
              fields={fields}
              dispatch={dispatch}
              disabled={state.disabled}
            />
          );
        })}
      </div>
    </div>
  );
}
