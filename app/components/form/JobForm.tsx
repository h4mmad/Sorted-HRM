import { useFormContext } from "@/app/context/FormContext";
import InputErrorMessage from "../other/InputErrorMessage";
import { inputStyle } from "@/app/(...application)/lib/helperFns/styles";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validateDateOfJoining } from "@/app/(...application)/lib/helperFns/dateHelperFns";
import JobDepartmentSelector from "./JobDepartmentSelector";
import WorkStatusSelector from "./WorkStatusSelector";
import DesignationInput from "./DesignationInput";
import classNames from "classnames";

export default function JobForm() {
  const {
    methods: { register, control, setError, clearErrors, formState },
  } = useFormContext();
  const { errors } = formState;

  return (
    <>
      <h1 className="text-2xl text-myDarkBlue mb-2">Job details</h1>

      <section className="rounded-lg border bg-white border-slate-300 dark:bg-gray-900  shadow-md">
        <div className="flex flex-col flex-wrap  p-2">
          <div className="flex flex-row justify-start">
            <div className="m-5">
              <DesignationInput formState={formState} register={register} />
            </div>

            <div className="m-5">
              <label className="block">Date of joining</label>
              <Controller
                name="job.dateOfJoining"
                control={control}
                rules={{
                  required: "Date of joining is required",
                  validate: (date) =>
                    validateDateOfJoining(
                      date,
                      "Date of joining should be in the past"
                    ),
                }}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="02 August, 2018"
                    className={classNames([inputStyle, "bg-gray-100"])}
                    dateFormat="dd MMMM, yyyy"
                    selected={field.value}
                    onChange={(date) => {
                      field.onChange(date);

                      if (date) {
                        const currentDate = new Date();

                        if (date > currentDate) {
                          setError("job.dateOfJoining", {
                            type: "validate",
                            message: "Date of joining should be in the past",
                          });
                        } else {
                          clearErrors("job.dateOfJoining");
                        }
                      }
                    }}
                  />
                )}
              />

              <InputErrorMessage message={errors.job?.dateOfJoining?.message} />
            </div>
          </div>

          <div className="m-5">
            <JobDepartmentSelector formState={formState} register={register} />
          </div>
          <div className="m-5">
            <WorkStatusSelector formState={formState} register={register} />
          </div>
        </div>
      </section>
    </>
  );
}
