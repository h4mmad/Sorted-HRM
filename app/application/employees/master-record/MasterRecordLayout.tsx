import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 } from "uuid";
import { useState } from "react";
import { SwitchChoiceSelector } from "@/app/components/SwitchChoiceSelector";
import { Tooltip } from "react-tooltip";
import { Action } from "./page";

interface props {
  sectionName: string;
  sectionID: string;
  fields: {
    label: string | undefined;
    fieldID: string;
    type: string;
  }[];
  dispatch: React.Dispatch<Action>;
  disabled: boolean;
}

const MasterRecordLayout = ({
  sectionID,
  sectionName,
  fields,
  dispatch,
  disabled,
}: props) => {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <div
      key={sectionID}
      className="p-3 border-2 border-myDarkBlue rounded-md  mt-2"
    >
      <div key={v4()} className="flex flex-row justify-between">
        <h2 key={v4()} className="font-bold text-2xl text-myDarkBlue">
          {sectionName}
        </h2>
        <button
          className="text-sm"
          onMouseOver={() => {}}
          onClick={() =>
            dispatch({ type: "DELETE_SECTION", payload: sectionID })
          }
          key={v4()}
        >
          <a
            data-tooltip-id="delete-section"
            data-tooltip-content={`Delete ${sectionName}`}
          >
            <DeleteIcon
              className="hover:text-red-500 text-red-400 "
              key={v4()}
            />
          </a>
          <Tooltip id="delete-section" />
        </button>
      </div>

      <div className="flex justify-between flex-wrap mt-2">
        {fields.map((item: FieldType) => {
          return (
            <div key={v4()} className="my-2">
              <label className="block text-myDarkBlue" key={v4()}>
                {item.label}
              </label>
              <input
                disabled={disabled}
                type={item.type}
                key={item.fieldID}
                className="rounded-md p-1 border border-myDarkBlue w-64"
                placeholder={
                  item.type === "email" ? "johndoe@gmail.com" : item.label
                }
              />
              <button
                className="ml-2"
                key={v4()}
                onClick={() =>
                  dispatch({
                    type: "DELETE_FIELD",
                    payload: { sectionID, fieldID: item.fieldID },
                  })
                }
              >
                <a
                  data-tooltip-id="delete-field"
                  data-tooltip-content={`Delete ${item.label}`}
                >
                  <RemoveCircleOutlineIcon
                    className="hover:text-red-500 text-red-400"
                    key={v4()}
                  />
                </a>
                <Tooltip id="delete-field" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="relative w-fit">
        <button
          onClick={() => setToggleForm(!toggleForm)}
          className="text-sm text-myLightBlue"
        >
          {toggleForm ? "Cancel" : "+ Add field"}
        </button>

        {toggleForm && (
          <form
            className="p-3 bg-gray-200 mt-4 rounded-md w-fit absolute top-2 left-0 z-10"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ type: "ADD_FIELD", payload: sectionID });
              setToggleForm(!toggleForm);
            }}
          >
            <div className="flex flex-col">
              <div>
                <label className="block font-bold text-myDarkBlue">
                  Input field name
                </label>
                <input
                  disabled={disabled}
                  required
                  type="text"
                  className="rounded-md p-1 appearance-none"
                  onChange={(e) => {
                    dispatch({
                      type: "UPDATE_INPUT_FIELD_NAME",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>

              <SwitchChoiceSelector
                choices={[
                  { choiceLabel: "Text", value: "text" },
                  { choiceLabel: "Date", value: "date" },
                  { choiceLabel: "Email", value: "email" },
                ]}
                name="inputTypes"
                defaultVal=""
                title="Type of field"
                stateFunctionProp={dispatch}
              />
            </div>

            <div className="rounded-full h-0.5 w-full bg-gray-300 my-4" />

            <div className="flex flex-row justify-between items-end ">
              <button
                type="submit"
                className="px-4 py-1 text-white  hover:bg-myDarkBlue rounded-full bg-myLightBlue"
              >
                + Add field
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MasterRecordLayout;
