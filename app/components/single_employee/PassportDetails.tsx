import { useEmployeeContext } from "@/app/context/EmployeeContext";
import PassportExpiryDatePicker from "../form/PassportExpiryDatePicker";
import DateValue from "../form/DateValue";
import PassportNumber from "../form/PassportNumber";
import FieldDisplay from "./FieldDisplay";

export default function PassportDetails() {
  const { employeeMethods, isEditing, setIsEditing, data } =
    useEmployeeContext();

  const { control, formState, register, setError, clearErrors } =
    employeeMethods;
  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Passport</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-slate-200 shadow-md bg-white h-fit p-6">
        {isEditing ? (
          <PassportNumber
            formState={formState}
            register={register}
            defaultValue={data?.passport.passportNumber}
          />
        ) : (
          <FieldDisplay
            fieldValue={data?.passport.passportNumber}
            labelValue="Number"
          />
        )}

        <div>
          {isEditing ? (
            data?.passport.passportExpiry && (
              <PassportExpiryDatePicker
                defaultValue={new Date(data?.passport.passportExpiry)}
                clearErrors={clearErrors}
                control={control}
                formState={formState}
                setError={setError}
              />
            )
          ) : (
            <>
              {data?.passport.passportExpiry && (
                <DateValue
                  dateValue={new Date(data?.passport.passportExpiry)}
                  labelValue="Expiry"
                />
              )}
            </>
          )}
        </div>

        {/* {!isEditing && getExpiredOrActiveTag(data?.passport.passportStatus)} */}
      </div>
    </section>
  );
}
