import { useEmployeeContext } from "@/app/context/EmployeeContext";
import "react-datepicker/dist/react-datepicker.css";
import IqamaExpiryDatePicker from "../form/IqamaExpiryDatePicker";
import DateValue from "../form/DateValue";
import FieldDisplay from "./FieldDisplay";

export default function IqamaDetails() {
  const { isEditing, employeeMethods, data } = useEmployeeContext();
  const { register, formState, control, setError, clearErrors } =
    employeeMethods;

  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Iqama</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-gray-100 shadow-md bg-white h-fit p-6">
        <FieldDisplay
          fieldValue={data?.iqama.iqamaNumber}
          labelValue="Number"
        />

        <div>
          {isEditing
            ? data?.iqama.iqamaExpiry && (
                <IqamaExpiryDatePicker
                  defaultValue={new Date(data?.iqama.iqamaExpiry)}
                  clearErrors={clearErrors}
                  control={control}
                  formState={formState}
                  setError={setError}
                />
              )
            : data?.iqama.iqamaExpiry && (
                <DateValue
                  dateValue={new Date(data?.iqama?.iqamaExpiry)}
                  labelValue="Expiry date"
                />
              )}
        </div>
      </div>
    </section>
  );
}
