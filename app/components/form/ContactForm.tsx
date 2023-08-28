import { useFormContext } from "@/app/context/FormContext";
import InputErrorMessage from "../other/InputErrorMessage";
import { inputStyle } from "@/app/helperFns/styles";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validateDateOfJoining } from "@/app/helperFns/dateHelperFns";
import classNames from "classnames";

export default function ContactForm() {
  const { methods } = useFormContext();
  const { register, formState, control, setError, clearErrors } = methods;
  const { errors } = formState;
  return (
    <>
      <h1 className="text-2xl text-myDarkBlue mb-2">Contact details</h1>

      <section className="rounded-lg border bg-white border-slate-300 dark:bg-gray-900  shadow-md">
        <div className="flex flex-col flex-wrap  p-2">
          <div className="m-5">
            <label className="block">Phone number</label>
            <input
              placeholder="+966 123 456 789"
              {...register("contact.phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /\+966[1-9]\d{8}(?!.)/,
                  message:
                    "Phone number should start with +966 along with the number",
                },
              })}
              className={classNames([inputStyle, "bg-gray-100"])}
            />
            <InputErrorMessage message={errors.contact?.phoneNumber?.message} />
          </div>
          <div className="m-5">
            <label className="block">Email</label>
            <input
              placeholder="johndoe@gmail.com"
              {...register("contact.email", {
                required: "Email is required",
                pattern: {
                  value: /[\w\.-]+@[\w\.-]+\.\w+/,
                  message: "Invalid email format",
                },
              })}
              className={classNames([inputStyle, "bg-gray-100"])}
            />
            <InputErrorMessage message={errors.contact?.email?.message} />
          </div>
        </div>
      </section>
    </>
  );
}
