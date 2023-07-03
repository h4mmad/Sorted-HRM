import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 } from "uuid";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import AddFieldForm from "@/app/components/AddFieldForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Section({
  sectionId,
  sectionName,
  sectionFields,
  handleSectionDelete,
}: SectionProps) {
  const [toggleAddFieldForm, setToggleAddFieldForm] = useState(false);

  const queryClient = useQueryClient();

  const {} = useMutation({
    mutationKey: ["delete", "employee", "section"],
    onSuccess: () => {
      //invalidate cache so the todos are refetched
      queryClient.invalidateQueries(["employee-model"]);
    },
  });

  return (
    <div
      key={sectionId}
      className="p-3 border-2 border-myDarkBlue rounded-md mb-4"
    >
      <div key={v4()} className="flex flex-row justify-between">
        <h2 key={v4()} className="font-bold text-2xl text-myDarkBlue">
          {sectionName}
        </h2>
        <button
          className="text-sm"
          onMouseOver={() => {}}
          onClick={
            () => handleSectionDelete(sectionId)
            // dispatch({ type: "DELETE_SECTION", payload: sectionId })
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
        {sectionFields.map((item: FieldType) => {
          return (
            <div key={v4()} className="my-2">
              <label className="block text-myDarkBlue" key={v4()}>
                {item.fieldName}
              </label>
              <input
                type={item.fieldType}
                key={item.fieldId}
                className="rounded-md p-1 border border-myDarkBlue w-64"
                placeholder={
                  item.fieldType === "email"
                    ? "johndoe@gmail.com"
                    : item.fieldName
                }
              />
              <button className="ml-2" key={v4()}>
                <a
                  data-tooltip-id="delete-field"
                  data-tooltip-content={`Delete ${item.fieldName}`}
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
          onClick={() => setToggleAddFieldForm(!toggleAddFieldForm)}
          className="text-sm text-myLightBlue"
        >
          {toggleAddFieldForm ? "Cancel" : "+ Add field"}
        </button>

        {toggleAddFieldForm && <AddFieldForm sectionId={sectionId} />}
      </div>
    </div>
  );
}
