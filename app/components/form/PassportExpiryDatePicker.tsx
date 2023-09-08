import DatePicker from "react-datepicker";
import InputErrorMessage from "../other/InputErrorMessage";
import {
  FormState,
  Controller,
  Control,
  UseFormSetError,
  UseFormClearErrors,
} from "react-hook-form";
import { validateExpiryDate } from "@/app/(...application)/lib/helperFns/dateHelperFns";
import { inputStyle } from "@/app/(...application)/lib/helperFns/styles";

export default function PassportExpiryDatePicker({
  formState,
  setError,
  clearErrors,
  control,
  defaultValue,
}: {
  formState: FormState<UpdateEmployee | Employee>;
  control: Control<any>;
  setError: UseFormSetError<any>;
  clearErrors: UseFormClearErrors<any>;
  defaultValue: Date;
}) {
  return (
    <div>
      <label className="block">Expiry date</label>
      <Controller
        defaultValue={defaultValue}
        name="passport.passportExpiry"
        control={control}
        rules={{
          required: "Expiry date is required",
          validate: (value) =>
            validateExpiryDate(
              value,
              "Passport expiry date should be in the future"
            ),
        }}
        render={({ field }) => (
          <DatePicker
            placeholderText="23 August, 2030"
            className={inputStyle}
            dateFormat="dd MMMM, yyyy"
            selected={field.value}
            onChange={(date) => {
              field.onChange(date);

              if (date) {
                const currentDate = new Date();

                if (date < currentDate) {
                  setError("passport.passportExpiry", {
                    type: "validate",
                    message: "Passport expiry date should be in the future",
                  });
                } else {
                  clearErrors("passport.passportExpiry");
                }
              }
            }}
          />
        )}
      />

      <InputErrorMessage
        message={formState.errors.passport?.passportExpiry?.message}
      />
    </div>
  );
}
