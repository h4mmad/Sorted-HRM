import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 } from "uuid";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import AddFieldForm from "./AddFieldForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeField, deleteSection } from "@/app/clientApiFns/modelApi";

export default function DynamicSection({
  sectionId,
  sectionName,
  sectionFields,
}: Section) {
  const [toggleAddFieldForm, setToggleAddFieldForm] = useState(false);

  const queryClient = useQueryClient();

  const deleteSectionMutation = useMutation(deleteSection, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee-model"]);
    },
  });

  const removeFieldMutation = useMutation(removeField, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee-model"]);
    },
  });

  const removeFieldHandler = ({
    fieldId,
    sectionId,
  }: {
    fieldId: string;
    sectionId: string;
  }) => {
    removeFieldMutation.mutate({ fieldId, sectionId });
  };

  const deleteSectionHandler = (sectionId: string) => {
    deleteSectionMutation.mutate(sectionId);
  };

  return (
    <div className="mb-8">
      <div key={v4()} className="p-4 shadow-lg border rounded-lg  ">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="font-medium text-2xl text-myDarkBlue dark:text-white dark:font-normal">
            {sectionName}
          </h2>

          <button
            className="text-sm"
            onClick={() => deleteSectionHandler(sectionId)}
          >
            <a
              data-tooltip-id="delete-section"
              data-tooltip-content={`Delete ${sectionId}`}
            >
              <DeleteIcon className="hover:text-red-500 text-red-400 " />
            </a>
            <Tooltip id="delete-section" />
          </button>
        </div>
        <div className="relative w-fit mt-4">
          <button
            onClick={() => setToggleAddFieldForm(!toggleAddFieldForm)}
            className="text-myLightBlue dark:text-gray-500  dark:hover:text-white"
          >
            {toggleAddFieldForm ? "Cancel" : "+ Add field"}
          </button>

          {toggleAddFieldForm && <AddFieldForm sectionId={sectionId} />}
        </div>
        <div className="flex flex-row flex-wrap">
          {sectionFields?.map((field, index) => {
            return (
              <div className="rounded-lg  p-4 border border-slate-300 bg-gray-100 m-2 select-none">
                <div className="flex items-center">
                  <p className="text-myDarkBlue font-medium text-lg">
                    {field.fieldName}
                  </p>
                  <button
                    className="ml-2"
                    onClick={() =>
                      removeFieldHandler({
                        fieldId: field.fieldId,
                        sectionId: sectionId,
                      })
                    }
                  >
                    <a
                      data-tooltip-id="delete-field"
                      data-tooltip-content={`Delete ${field.fieldName}`}
                    >
                      <RemoveCircleOutlineIcon className="hover:text-red-500 text-red-400" />
                    </a>
                    <Tooltip id="delete-field" />
                  </button>
                </div>

                <div className="mt-2 flex flex-col space-y-2">
                  <div>
                    <p className="text-slate-500">type:</p>
                    <p className="text-myDarkBlue ml-2"> {field.fieldType}</p>
                  </div>

                  <div>
                    <p className="text-slate-500">id:</p>
                    <p className="text-myDarkBlue ml-2"> {field.fieldId}</p>
                  </div>

                  <div>
                    <p className="text-slate-500">required:</p>
                    <p className="text-myDarkBlue ml-2">
                      {field.fieldIsRequired ? "yes" : "no"}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">jsonName:</p>
                    <p className="text-myDarkBlue ml-2">
                      {field.fieldJsonName}
                    </p>
                  </div>
                  {field.fieldType === "options" ? (
                    <div>
                      <p className="text-slate-500">options:</p>
                      {field?.fieldOptionValues?.map((val, index) => {
                        return (
                          <p className="ml-2 text-myDarkBlue">
                            {index + 1}. {val.name}
                          </p>
                        );
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
