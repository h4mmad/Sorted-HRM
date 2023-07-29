import { useFormContext } from "@/app/context/FormContext";
import { Controller } from "react-hook-form";

export default function IdDetails() {
  const { methods } = useFormContext();
  return (
    <section className="p-4 rounded-lg border flex flex-row justify-between w-full">
      <div>
        <p className="">Number</p>
        <Controller
          name="field1"
          control={methods?.control}
          defaultValue=""
          render={({ field }) => (
            <input
              className="p-2 appearance-none  rounded-lg w-64 bg-white  border border-slate-300"
              {...field}
            />
          )}
        />
      </div>
    </section>
  );
}
