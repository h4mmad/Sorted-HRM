import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import classNames from "classnames";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addField } from "../clientApiFns/employeeModelApi";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { v4 } from "uuid";
import { Tooltip } from "react-tooltip";

type Inputs = {
  fieldName: string;
  fieldType: "text" | "email" | "date" | "number" | "file" | "options";
  fieldIsRequired: boolean;
  fieldArray: { name: string }[];
};

enum FieldTypes {
  Text = "text",
  Date = "date",
  Email = "email",
  Number = "number",
  Options = "options",
}

export default function AddFieldForm({ sectionId }: { sectionId: string }) {
  const queryClient = useQueryClient();

  const addFieldMutation = useMutation(addField, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee-model"]);
    },
  });

  const {
    register,
    handleSubmit,
    control: arrayControl,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const {
    fields: arrayField,
    append,
    remove,
  } = useFieldArray({
    control: arrayControl, // control props comes from useForm (optional: if you are using FormContext)
    name: "fieldArray", // unique name for your Field Array
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    if (data.fieldType === "options") {
      addFieldMutation.mutate({
        sectionId: sectionId,
        field: {
          fieldId: v4(),
          fieldIsRequired: data.fieldIsRequired,
          fieldJsonName: data.fieldName,
          fieldName: data.fieldName,
          fieldType: data.fieldType,
          fieldOptionValues: data?.fieldArray,
        },
      });
    } else {
      addFieldMutation.mutate({
        sectionId: sectionId,
        field: {
          fieldId: v4(),
          fieldIsRequired: data.fieldIsRequired,
          fieldJsonName: data.fieldName,
          fieldName: data.fieldName,
          fieldType: data.fieldType,
        },
      });
    }
  };

  const selectedRadioValue = watch("fieldType");
  console.log(selectedRadioValue);

  const fieldTypes = [
    FieldTypes.Text,
    FieldTypes.Date,
    FieldTypes.Email,
    FieldTypes.Number,
    FieldTypes.Options,
  ];

  const form1 = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col p-4 shadow-md space-y-6 bg-gray-100">
        <h1 className="text-2xl text-myDarkBlue font-medium">Add field</h1>
        <div>
          <label className="block  text-myDarkBlue select-none">Name</label>
          <input
            type="text"
            className="rounded-md p-2 border border-slate-300 bg-white"
            {...register("fieldName", { required: true })}
          />
          {errors.fieldName?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm">
              Name is required
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2 ">
          <label className="text-myDarkBlue">Required</label>
          <input
            type="checkbox"
            {...register("fieldIsRequired")}
            className="w-4 h-4"
          />
        </div>

        <div>
          <label className="block  text-myDarkBlue select-none">Type</label>

          <div className="flex">
            {fieldTypes.map((type, index) => {
              return (
                <div key={v4()} className="mt-2">
                  <input
                    {...register("fieldType", { required: true })}
                    type="radio"
                    className="peer appearance-none outline-none  "
                    value={type}
                    id={type}
                  />
                  <label
                    htmlFor={type}
                    className={classNames([
                      "p-2 text-myDarkBlue cursor-pointer bg-white border border-myLightBlue peer-checked:bg-myLightBlue peer-checked:text-white",

                      {
                        "rounded-tl-md rounded-bl-md ": index === 0,
                      },
                      {
                        "rounded-tr-md rounded-br-md":
                          index === fieldTypes.length - 1,
                      },
                    ])}
                  >
                    {type}
                  </label>
                </div>
              );
            })}
          </div>
          {errors.fieldType?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm">
              Type is required
            </p>
          )}
        </div>
        {selectedRadioValue === "options" && (
          <div className="flex flex-col space-y-2">
            {arrayField.map((field, index) => (
              <>
                <div className="flex flex-row space-x-2 items-center">
                  <p className="text-myDarkBlue">{index + 1}</p>
                  <input
                    key={field.id}
                    className="p-2 border rounded-md border-slate-300 bg-white"
                    {...register(`fieldArray.${index}.name`, {
                      required: true,
                    })}
                  />

                  <button type="button" onClick={() => remove(index)}>
                    <a
                      data-tooltip-id="delete-field"
                      data-tooltip-content={`Remove option ${index + 1}`}
                    >
                      <RemoveCircleOutlineIcon className="hover:text-red-500 text-red-400" />
                    </a>
                    <Tooltip id="delete-field" />
                  </button>
                </div>
              </>
            ))}
            <button
              type="button"
              className="w-fit text-myDarkBlue"
              onClick={() => append({ name: "" })}
            >
              Add option
            </button>
          </div>
        )}

        <button
          type="submit"
          className="p-2 text-white w-full hover:bg-myDarkBlue rounded-full bg-myLightBlue "
        >
          + Add
        </button>
      </div>
    </form>
  );

  const content = [form1];

  return (
    <div className="bg-white border border-slate-300 mt-4 rounded-lg shadow-lg w-fit left-0 z-10 absolute top-2">
      {content[0]}
    </div>
  );
}
