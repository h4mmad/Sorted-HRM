import {
  useFieldArray,
  Control,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { Inputs } from "./AddFieldForm";
// work on this after internet

export default function OptionsMenu({
  control,
  register,
  errors,
}: {
  control: Control<Inputs>;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}) {
  const { fields, append, prepend, remove, swap, move, insert, update } =
    useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "options", // unique name for your Field Array
    });

  return (
    <div className="mb-4 relative">
      <div className="w-0.5 h-full bg-myDarkBlue absolute left-0" />
      <div className="ml-6">
        <p className=" font-bold text-myDarkBlue select-none ">Add an option</p>

        {fields.map((item, index) => {
          return (
            <div className="mb-2">
              <input
                placeholder="option"
                type="text"
                className="rounded-full px-4 py-1 bg-gray-300  appearance-none w-2/3 "
                {...register(`options.${index}.optionName` as const, {
                  required: true,
                })}
              />

              <button
                type="button"
                className="text-myLightBlue ml-2"
                onClick={() => remove(index)}
              >
                Delete
              </button>
              {errors.options?.[index]?.optionName && (
                <p className="text-red-500 text-sm">Option is required</p>
              )}
            </div>
          );
        })}

        <button
          type="button"
          onClick={() =>
            append({
              optionName: "",
            })
          }
          className="text-myLightBlue "
        >
          + Add option
        </button>
      </div>
    </div>
  );
}
