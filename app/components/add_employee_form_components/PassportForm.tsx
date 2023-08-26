import { useFormContext } from "@/app/context/FormContext";
import { validateExpiryDate } from "@/app/helperFns/dateHelperFns";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";
import InputErrorMessage from "../general_components/InputErrorMessage";
import { inputStyle } from "@/app/helperFns/styles";

export default function PassportForm() {
  const { methods } = useFormContext();
  const { register, formState, control, setError, clearErrors } = methods;
  const { errors } = formState;
  return (
    <>
      <h1 className="text-2xl text-myDarkBlue mb-2">Passport</h1>

      <section className="rounded-lg border bg-white border-slate-300 dark:bg-gray-900  shadow-md">
        <div className="flex flex-col flex-wrap  p-2">
          <div className="m-5">
            <label className="block">Number</label>
            <input
              {...register("passport.passportNumber", {
                required: "Passport number is required",
              })}
              className={inputStyle}
            />
            <InputErrorMessage
              message={errors.passport?.passportNumber?.message}
            />
          </div>

          <div className="m-5">
            <label className="block">Expiry date</label>
            <Controller
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
                          message:
                            "Passport expiry date should be in the future",
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
              message={errors.passport?.passportExpiry?.message}
            />
          </div>
        </div>
      </section>
    </>
  );
}
