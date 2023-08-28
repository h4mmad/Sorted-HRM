import { FormState, UseFormRegister } from "react-hook-form";
import InputErrorMessage from "../other/InputErrorMessage";
import { inputStyle } from "@/app/helperFns/styles";
import classNames from "classnames";

export default function JobDepartmentSelector({
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
      <label className="block">Department</label>
      <select
        defaultValue={defaultValue}
        className={classNames([inputStyle, "bg-gray-100"])}
        {...register("job.department", {
          required: "Please select an option",
        })}
      >
        <option value="">Select an option</option>
        <option value="Non-Teaching">Non-Teaching</option>
        <option value="Teaching">Teaching</option>
      </select>
      <InputErrorMessage message={errors.job?.department?.message} />
    </div>
  );
}
