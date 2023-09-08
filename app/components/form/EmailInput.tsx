import { inputStyle } from "@/app/(...application)/lib/helperFns/styles";
import InputErrorMessage from "../other/InputErrorMessage";
import { UseFormRegister, FormState } from "react-hook-form";

export default function EmailInput({
  register,
  formState,
  defaultValue,
}: {
  register: UseFormRegister<any>;
  formState: FormState<UpdateEmployee | Employee>;
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="block">Email</label>
      <input
        defaultValue={defaultValue}
        placeholder="johndoe@gmail.com"
        {...register("contact.email", {
          required: "Email is required",
          pattern: {
            value: /[\w\.-]+@[\w\.-]+\.\w+/,
            message: "Invalid email format",
          },
        })}
        className={inputStyle}
      />
      <InputErrorMessage message={formState.errors.contact?.email?.message} />
    </div>
  );
}
