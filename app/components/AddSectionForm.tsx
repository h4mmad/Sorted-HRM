"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSection } from "../clientApiFns/employeeModelApi";
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
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addSectionMutation.mutate({
      sectionName: data.sectionName,
      sectionFields: [],
    });
  };

  return (
    <div className="p-3 border border-slate-300 rounded-lg w-64 bg-slate-100 dark:bg-black dark:border-gray-700">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-myLightBlue dark:text-white font-semibold text-lg">
            Section name
          </label>
          <input
            {...register("sectionName", { required: true })}
            type="text"
            autoComplete="none"
            aria-autocomplete="none"
            className="block w-full dark:text-white rounded-lg border border-slate-300 p-1 dark:bg-gray-700 dark:border-gray-700"
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
            className="px-4 py-2 text-white text-sm w-full hover:bg-myDarkBlue dark:hover:bg-gray-700 rounded-full bg-myLightBlue dark:bg-black dark:border dark:border-gray-700"
          >
            + Add section
          </button>
        </div>
      </form>
    </div>
  );
}

{
  /* <form>
<div
  className={classNames(["p-3 bg-gray-200 rounded-md h-fit w-64"], {
    "opacity-40 disabled select-none pointer-events-none":
      state.disabled,
  })}
>
  <label className="block text-myDarkBlue font-bold">
    Section name
  </label>
  <input
    disabled={state.disabled}
    required
    name="sectionName"
    id="sectionName"
    type="text"
    className="rounded-md p-1 appearance-none w-full"
  />

  <button
    disabled={state.disabled}
    type="submit"
    className="px-4 py-1 text-white mt-2 hover:bg-myDarkBlue rounded-full bg-myLightBlue"
    onClick={(e) => {
      e.preventDefault();
      dispatch({ type: "ADD_SECTION", payload: "Personal" });
    }}
  >
    + Add section
  </button>
</div>
</form> */
}
