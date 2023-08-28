import { inputStyle } from "@/app/helperFns/styles";
import InputErrorMessage from "../other/InputErrorMessage";
import { UseFormRegister, FormState } from "react-hook-form";

export default function PhoneNumberInput({
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
      <label className="block">Phone number</label>
      <input
        defaultValue={defaultValue}
        placeholder="+966 123 456 789"
        {...register("contact.phoneNumber", {
          required: "Phone number is required",
          pattern: {
            value: /\+966[1-9]\d{8}(?!.)/,
            message:
              "Phone number should start with +966 along with the number",
          },
        })}
        className={inputStyle}
      />
      <InputErrorMessage
        message={formState.errors.contact?.phoneNumber?.message}
      />
    </div>
  );
}
