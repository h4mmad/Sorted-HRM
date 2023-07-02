import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 } from "uuid";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import AddFieldForm from "@/app/components/AddFieldForm";

export default function Section({
  sectionID,
  sectionName,
  fields,
  dispatch,
  disabled,
}: SectionProps) {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <div
      key={sectionID}
      className="p-3 border-2 border-myDarkBlue rounded-md mb-4"
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

      <div className="flex flex-row justify-between flex-wrap">
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

        {toggleForm && <AddFieldForm />}
      </div>
    </div>
  );
}
