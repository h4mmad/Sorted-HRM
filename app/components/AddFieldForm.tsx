import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import classNames from "classnames";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addField } from "../clientApiFns/employeeModelApi";
import { useState } from "react";
import OptionsMenu from "./OptionsMenu";
import { v4 } from "uuid";

export type Inputs = {
  fieldName: string;
  fieldType: string;
  options?: { optionName: string }[];
};

enum FieldTypes {
  Text = "Text",
  Date = "Date",
  Email = "Email",
}

export default function AddFieldForm({ _id }: { _id: string }) {
  const queryClient = useQueryClient();

  const addFieldMutation = useMutation(addField, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee-model"]);
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    addFieldMutation.mutate({
      _id: _id,
      fieldName: data.fieldName,
      fieldType: data.fieldType,
    });
  };

  const fieldTypes = [FieldTypes.Text, FieldTypes.Date, FieldTypes.Email];

  const form1 = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col p-3">
        <div className="mb-4 ">
          <label className="block font-bold text-myDarkBlue select-none">
            Field name
          </label>
          <input
            type="text"
            className="rounded-md p-1"
            {...register("fieldName", { required: true })}
          />
          {errors.fieldName?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm">
              Field name is required
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-bold text-myDarkBlue select-none">
            Field type
          </label>

          <div className="flex">
            {fieldTypes.map((type, index) => {
              return (
                <div key={v4()}>
                  <input
                    {...register("fieldType", { required: true })}
                    type="radio"
                    className="peer  w-0.5 h-0.5 appearance-none outline-none"
                    value={type}
                    id={type}
                  />
                  <label
                    htmlFor={type}
                    className={classNames([
                      "px-2 py-1 text-myDarkBlue cursor-pointer bg-white  peer-checked:bg-myLightBlue peer-checked:text-white",

                      { "rounded-tl-full rounded-bl-full": index === 0 },
                      {
                        "rounded-tr-full rounded-br-full":
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
              Field type is required
            </p>
          )}
        </div>
      </div>

      <div className="p-3">
        <button
          type="submit"
          className="px-4 py-1 text-white w-full hover:bg-myDarkBlue rounded-full bg-myLightBlue "
        >
          + Add
        </button>
      </div>
    </form>
  );

  const form2 = (
    <div>
      <OptionsMenu />
    </div>
  );

  const content = [form1, form2];

  const [index, setIndex] = useState(0);
  return (
    <div className="bg-gray-200 mt-4 rounded-md shadow-md w-fit left-0 z-10 absolute top-2">
      {content[0]}
    </div>
  );
}
