import DatePicker from "react-datepicker";
import InputErrorMessage from "../other/InputErrorMessage";
import {
  FormState,
  Controller,
  Control,
  UseFormSetError,
  UseFormClearErrors,
} from "react-hook-form";
import { validateExpiryDate } from "@/app/helperFns/dateHelperFns";
import { inputStyle } from "@/app/helperFns/styles";
import { DateTime } from "luxon";
import classNames from "classnames";

export default function IqamaExpiryDatePicker({
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
  defaultValue?: Date;
}) {
  return (
    <div>
      <label className="block">Expiry date</label>
      <Controller
        defaultValue={defaultValue}
        name="iqama.iqamaExpiry"
        control={control}
        rules={{
          required: "Expiry date is required",
          validate: (value) =>
            validateExpiryDate(
              value,
              "Iqama expiry date should be in the future"
            ),
        }}
        render={({ field }) => (
          <DatePicker
            placeholderText="23 August, 2030"
            className={classNames([inputStyle, "bg-gray-100"])}
            dateFormat="dd MMMM, yyyy"
            selected={field.value}
            onChange={(date) => {
              field.onChange(date);

              if (date) {
                const currentDate = new Date();

                if (date < currentDate) {
                  setError("iqama.iqamaExpiry", {
                    type: "validate",
                    message: "Iqama expiry date should be in the future",
                  });
                } else {
                  clearErrors("iqama.iqamaExpiry");
                }
              }
            }}
          />
        )}
      />

      <InputErrorMessage
        message={formState.errors.iqama?.iqamaExpiry?.message}
      />
    </div>
  );
}
