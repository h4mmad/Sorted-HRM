import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames";

type Inputs = {
  fieldName: string;
  fieldType: string;
};

export default function AddFieldForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const fieldTypes = ["text", "date", "email"];

  return (
    <form
      className="p-3 bg-gray-200 mt-4 rounded-md shadow-md w-fit left-0 z-10 absolute top-2 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <div className="mb-4">
          <label className="block font-bold text-myDarkBlue ">Field name</label>
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

        <label className="block font-bold text-myDarkBlue ">Field type</label>

        <div className="flex">
          {fieldTypes.map((type, index) => {
            return (
              <div>
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

      <div className="rounded-full h-0.5 w-full bg-gray-300 my-4" />

      <button
        type="submit"
        className="px-4 py-1 text-white  hover:bg-myDarkBlue rounded-full bg-myLightBlue"
      >
        + Add field
      </button>
    </form>
  );
}
