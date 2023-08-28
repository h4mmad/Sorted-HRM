import { useFormContext } from "@/app/context/FormContext";
import "react-datepicker/dist/react-datepicker.css";
import InputErrorMessage from "../other/InputErrorMessage";
import { inputStyle } from "@/app/helperFns/styles";
import IqamaExpiryDatePicker from "./IqamaExpiryDatePicker";
import classNames from "classnames";

export default function IqamaForm() {
  const { methods } = useFormContext();
  const { register, formState, control, setError, clearErrors } = methods;
  const { errors } = formState;
  return (
    <>
      <h1 className="text-2xl text-myDarkBlue mb-2">Iqama details</h1>

      <section className="rounded-lg border bg-white border-slate-300 dark:bg-gray-900  shadow-md">
        <div className="flex flex-col flex-wrap  p-2">
          <div className="m-5">
            <label className="block">Number</label>
            <input
              placeholder="2385477395"
              {...register("iqama.iqamaNumber", {
                required: "Iqama number is required",
                pattern: {
                  value: /^[12]\d{9}$/,
                  message: "Invalid iqama number format",
                },
              })}
              className={classNames([inputStyle, "bg-gray-100"])}
            />
            <InputErrorMessage message={errors.iqama?.iqamaNumber?.message} />
          </div>

          <div className="m-5">
            <IqamaExpiryDatePicker
              clearErrors={clearErrors}
              control={control}
              formState={formState}
              setError={setError}
            />
          </div>
        </div>
      </section>
    </>
  );
}
