import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 } from "uuid";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import AddFieldForm from "@/app/components/AddFieldForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeField } from "../clientApiFns/employeeModelApi";
import OptionsMenu from "./OptionsMenu";

export default function DynamicSection({
  _id,
  sectionName,
  sectionFields,
}: SectionType) {
  //true in dev mode
  const [toggleAddFieldForm, setToggleAddFieldForm] = useState(false);
  const [toggleAddSelectionForm, setToggleAddSelectionForm] = useState(false);

  const queryClient = useQueryClient();

  const removeFieldMutation = useMutation(removeField, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee-model"]);
    },
  });

  const removeFieldHandler = ({
    fieldId,
    _id,
  }: {
    fieldId: string;
    _id: string;
  }) => {
    removeFieldMutation.mutate({ fieldId, _id });
  };

  return (
    <div
      key={_id}
      className="p-3 border border-slate-300 dark:bg-gray-900 dark:border-gray-700 rounded-lg mb-4 shadow-lg"
    >
      <div className="flex flex-row justify-between mb-2">
        <h2 className="font-bold text-xl text-myDarkBlue dark:text-white dark:font-normal">
          {sectionName}
        </h2>
        <button className="text-sm" onMouseOver={() => {}}>
          <a
            data-tooltip-id="delete-section"
            data-tooltip-content={`Delete ${sectionName}`}
          >
            <DeleteIcon className="hover:text-red-500 text-red-400 " />
          </a>
          <Tooltip id="delete-section" />
        </button>
      </div>

      <div className="flex flex-row justify-between flex-wrap">
        {sectionFields?.map((item: FieldType) => {
          return (
            <div key={v4()} className="my-2">
              <label className="block text-myDarkBlue dark:text-white">
                {item.fieldName}
              </label>
              <input
                type={item.fieldType}
                className="rounded-md p-1 border border-slate-300 w-64 dark:bg-gray-700 dark:border-none"
              />
              <button
                className="ml-2"
                onClick={() =>
                  removeFieldHandler({ fieldId: item.fieldId, _id })
                }
              >
                <a
                  data-tooltip-id="delete-field"
                  data-tooltip-content={`Delete ${item.fieldName}`}
                >
                  <RemoveCircleOutlineIcon className="hover:text-red-500 text-red-400" />
                </a>
                <Tooltip id="delete-field" />
              </button>
            </div>
          );
        })}
      </div>

      <div className="relative w-fit mt-4">
        <button
          onClick={() => setToggleAddFieldForm(!toggleAddFieldForm)}
          className="text-sm text-myLightBlue dark:text-gray-500  dark:hover:text-white"
        >
          {toggleAddFieldForm ? "Cancel" : "+ Add field"}
        </button>

        {toggleAddFieldForm && <AddFieldForm _id={_id} />}
      </div>
    </div>
  );
}
