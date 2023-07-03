"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { v4 } from "uuid";
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
      sectionId: v4(),
      sectionFields: [],
    });
  };
  const {} = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={"p-3 bg-gray-200 rounded-md h-fit w-64"}>
        <label className="block text-myDarkBlue font-bold">Section name</label>
        <input
          {...register("sectionName", { required: true })}
          name="sectionName"
          id="sectionName"
          type="text"
          className="rounded-md p-1 appearance-none w-full"
        />
        {errors.sectionName?.type === "required" && (
          <p role="alert" className="text-red-500 text-sm">
            Section name is required
          </p>
        )}

        <button
          type="submit"
          className="px-4 py-1 text-white mt-2 hover:bg-myDarkBlue rounded-full bg-myLightBlue"
        >
          + Add section
        </button>
      </div>
    </form>
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
