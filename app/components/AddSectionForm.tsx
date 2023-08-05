"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSection } from "../clientApiFns/modelApi";
import { v4 } from "uuid";
export default function AddSectionForm() {
  type Inputs = {
    sectionName: string;
  };

  const queryClient = useQueryClient();

  const addSectionMutation = useMutation(addSection, {
    onSuccess: () => {
      queryClient.invalidateQueries(["employee-model"]);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addSectionMutation.mutate({
      sectionName: data.sectionName,
      sectionId: v4(),
      sectionFields: [],
    });
  };

  return (
    <div className="p-4 border flex w-fit flex-col  space-y-5 border-myLightBlue bg-white rounded-lg  shadow-lg dark:bg-black dark:border-gray-700">
      <h1 className="text-2xl text-myDarkBlue font-medium">Add section</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="text-myDarkBlue dark:text-white ">Name</h1>
          <input
            {...register("sectionName", { required: true })}
            type="text"
            autoComplete="none"
            aria-autocomplete="none"
            className="bg-gray-100 dark:text-white rounded-lg border border-slate-300 p-2 dark:bg-gray-700 dark:border-gray-700"
          />
          {errors.sectionName?.type === "required" && (
            <p role="alert" className="text-red-500 text-sm">
              Section name is required
            </p>
          )}
        </div>

        <div className="flex flex-row justify-end mt-8">
          <button
            type="submit"
            className="px-4 py-2 text-white w-full hover:bg-myDarkBlue dark:hover:bg-gray-700 rounded-full bg-myLightBlue dark:bg-black dark:border dark:border-gray-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
