import { useFormContext } from "@/app/context/FormContext";
import {
  isAdult,
  validateExpiryDate,
} from "@/app/(...application)/lib/helperFns/dateHelperFns";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";
import InputErrorMessage from "../other/InputErrorMessage";
import { inputStyle } from "@/app/(...application)/lib/helperFns/styles";
// import { AiOutlineCheckCircle } from "react-icons/ai";

export default function PersonalForm() {
  const { methods } = useFormContext();
  const { register, formState, control, setError, clearErrors } = methods;
  const { errors, dirtyFields } = formState;
  return (
    <>
      <h1 className="text-2xl text-myDarkBlue mb-2">Personal</h1>

      <section className="rounded-lg border bg-white border-slate-300 dark:bg-gray-900  shadow-md">
        <div className="flex flex-col flex-wrap  p-2 text-myDarkBlue">
          <div className="flex flex-row flex-wrap justify-start">
            <div className="m-5">
              <label className="block ">Full name</label>
              <input
                placeholder="John Doe"
                {...register("personal.fullName", {
                  required: "Full name is required",
                })}
                className={classNames([inputStyle, "bg-gray-100"])}
              />
              <InputErrorMessage message={errors.personal?.fullName?.message} />
            </div>
            <div className="m-5">
              <label className="block">Gender</label>
              <select
                className={inputStyle}
                {...register("personal.gender", {
                  required: "Please select an option",
                })}
              >
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <InputErrorMessage message={errors.personal?.gender?.message} />
            </div>
          </div>

          <div className="m-5">
            <label className="block">Nationality</label>
            <select
              className={inputStyle}
              {...register("personal.nationality", {
                required: "Please select an option",
              })}
            >
              <option value="">Select an option</option>
              <option value="India">India</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Sudan">Sudan</option>
              <option value="Egypt">Egypt</option>
              <option value="Bangladesh">Bangladesh</option>
            </select>

            <InputErrorMessage
              message={errors.personal?.nationality?.message}
            />
          </div>
          <div className="m-5">
            <label className="block">Date of birth</label>

            <Controller
              name="personal.dateOfBirth"
              control={control}
              rules={{
                required: "Date of birth is required",
              }}
              render={({ field }) => (
                <DatePicker
                  placeholderText="11 August, 2001"
                  className={classNames([inputStyle, "bg-gray-100"])}
                  dateFormat="dd MMMM, yyyy"
                  selected={field.value}
                  onChange={(date) => {
                    field.onChange(date);

                    if (date) {
                      if (isAdult(date)) {
                        clearErrors("personal.dateOfBirth");
                      } else {
                        setError("personal.dateOfBirth", {
                          type: "validate",
                          message: "Employee should be atleast 18 years old",
                        });
                      }
                    }
                  }}
                />
              )}
            />
            {/* <AiOutlineCheckCircle className="text-green-400 h-8 w-8" /> */}
            <InputErrorMessage
              message={errors.personal?.dateOfBirth?.message}
            />
          </div>
        </div>
      </section>
    </>
  );
}
