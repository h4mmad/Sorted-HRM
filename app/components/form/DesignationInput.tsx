import { inputStyle } from "@/app/(...application)/lib/helperFns/styles";
import { FormState, UseFormRegister } from "react-hook-form";
import InputErrorMessage from "../other/InputErrorMessage";

export default function DesignationInput({
  register,
  formState,
  defaultValue,
}: {
  register: UseFormRegister<any>;
  formState: FormState<UpdateEmployee | Employee>;
  defaultValue?: string;
}) {
  const { errors } = formState;

  return (
    <div>
      <label className="block">Designation</label>
      <input
        defaultValue={defaultValue}
        {...register("job.designation", {
          required: "Job designation is required",
        })}
        className={inputStyle}
      />
      <InputErrorMessage message={errors.job?.designation?.message} />
    </div>
  );
}
