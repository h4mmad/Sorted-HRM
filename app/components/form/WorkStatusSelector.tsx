import { FormState, UseFormRegister } from "react-hook-form";
import InputErrorMessage from "../other/InputErrorMessage";
import { inputStyle } from "@/app/(...application)/lib/helperFns/styles";
import classNames from "classnames";

export default function WorkStatusSelector({
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
      <label className="block">Work status</label>
      <select
        defaultValue={defaultValue}
        className={classNames([inputStyle, "bg-gray-100"])}
        {...register("job.workStatus", {
          required: "Please select an option",
        })}
      >
        <option value="">Select an option</option>
        <option value="active">active</option>
        <option value="inactive">inactive</option>
      </select>
      <InputErrorMessage message={errors.job?.workStatus?.message} />
    </div>
  );
}
