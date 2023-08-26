import { useEmployeeContext } from "@/app/context/EmployeeContext";
import { validateExpiryDate } from "@/app/helperFns/dateHelperFns";
import getExpiredOrActiveTag from "@/app/helperFns/getExpiredOrActiveTag";
import { Controller } from "react-hook-form";
import InputErrorMessage from "../general_components/InputErrorMessage";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import EditIcon from "@mui/icons-material/Edit";

export default function PassportDetails() {
  const { employeeMethods, isEditing, setIsEditing, data } =
    useEmployeeContext();

  const { control, formState, register, setError, clearErrors } =
    employeeMethods;
  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Passport</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-slate-200 shadow-md bg-white h-fit p-6">
        <div>
          <label className="block text-gray-500">Passport number</label>
          <input
            disabled={!isEditing}
            defaultValue={data?.passport.passportNumber}
            {...register("passport.passportNumber", {
              required: true,
            })}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />

          {formState.errors.passport?.passportNumber && (
            <p className="text-red-500">
              {formState.errors.passport.passportNumber?.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-500">Passport expiry</label>

          {/* <div className="flex space-x-4 items-center">
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
              defaultValue={new Date(String(data?.passport.passportExpiry))}
              render={({ field }) => (
                <DatePicker
                  disabled={!isEditing}
                  className={classNames([
                    "p-2 border border-gray-200 rounded-md text-myDarkBlue",
                  ])}
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
                        console.log(
                          formState.errors.passport?.passportExpiry?.type
                        );
                      } else {
                        clearErrors("passport.passportExpiry");
                      }
                    }
                  }}
                />
              )}
            />

            {isEditing && formState.errors.passport?.passportExpiry && (
              <EditIcon className="text-yellow-500" />
            )}
          </div> */}

          {/* {formState.errors.passport?.passportExpiry && (
            <p className="text-red-500">
              {formState.errors.passport.passportExpiry?.message}
            </p>
          )} */}
        </div>

        {/* {!isEditing && getExpiredOrActiveTag(data?.passport.passportStatus)} */}
      </div>
    </section>
  );
}
