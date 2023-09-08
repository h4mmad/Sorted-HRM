import { inputStyle } from "@/app/(...application)/lib/helperFns/styles";
import { FormState, UseFormRegister } from "react-hook-form";
import InputErrorMessage from "../other/InputErrorMessage";

export default function PassportNumber({
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
      <label className="block">Number</label>
      <input
        defaultValue={defaultValue}
        {...register("passport.passportNumber", {
          required: "Passport number is required",
        })}
        className={inputStyle}
      />
      <InputErrorMessage message={errors.passport?.passportNumber?.message} />
    </div>
  );
}
