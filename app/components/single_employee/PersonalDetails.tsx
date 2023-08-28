import { useEmployeeContext } from "@/app/context/EmployeeContext";
import getMaleOrFemaleTag from "@/app/helperFns/getMaleOrFemaleTag";
import classNames from "classnames";
import DateValue from "../form/DateValue";

export default function PersonalDetails() {
  const { isEditing, employeeMethods, data } = useEmployeeContext();
  return (
    <section className="flex-1">
      <h2 className="text-2xl text-myDarkBlue">Personal</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-gray-300 shadow-md bg-white h-fit p-6">
        <div>
          <label className="block text-gray-500">Name</label>

          <div className="flex space-x-4">
            <input
              disabled
              value={data?.personal.fullName}
              className="p-2 border border-gray-200  cursor-not-allowed rounded-md text-myDarkBlue"
            />
            {getMaleOrFemaleTag(data?.personal.gender)}
          </div>
        </div>

        <div>
          <label className="block text-gray-500">Nationality</label>
          <input
            disabled
            value={data?.personal.nationality}
            className="p-2 border border-gray-200 cursor-not-allowed rounded-md text-myDarkBlue"
          />
        </div>
        <div>
          {data?.personal.dateOfBirth && (
            <DateValue
              dateValue={new Date(data?.personal.dateOfBirth)}
              labelValue="Date of birth"
            />
          )}
        </div>
      </div>
    </section>
  );
}
