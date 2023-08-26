import { useEmployeeContext } from "@/app/context/EmployeeContext";
import InputErrorMessage from "../general_components/InputErrorMessage";
import classNames from "classnames";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

export default function JobDetails() {
  const { data, employeeMethods, isEditing, setIsEditing } =
    useEmployeeContext();
  const { control, formState, register } = employeeMethods;
  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Job</h2>

      <div className="flex flex-col space-y-8 rounded-lg border border-slate-300 bg-white shadow-md h-fit p-8">
        <div className="flex justify-between">
          <div>
            {/* style this field */}
            <label className="block text-gray-600">Date of joining</label>

            <input
              type="date"
              value={String(data?.job.dateOfJoining)}
              disabled
              className="p-2 border border-gray-200 rounded-md text-myDarkBlue "
            />
          </div>
          <div>
            <label className="block text-gray-600">Designation</label>

            <div className="flex space-x-4 items-center">
              <input
                disabled={!isEditing}
                {...employeeMethods.register("designation", {
                  required: "Designation is required",
                  value: data?.job.designation,
                })}
                className={classNames([
                  "p-2 border border-gray-200 rounded-md text-myDarkBlue",
                  {
                    "bg-green-100": !formState.errors.designation && isEditing,
                  },

                  {
                    "bg-yellow-200": formState.errors.designation && isEditing,
                  },
                ])}
              />
              {isEditing && !formState.errors.designation && (
                <DoneIcon className="text-green-500" />
              )}
              {isEditing && <EditIcon className="text-gray-400" />}
            </div>

            <InputErrorMessage
              message={formState.errors.designation?.message}
            />
          </div>
          <div>
            <label className="block text-gray-600">Department</label>

            <div className="flex space-x-4 items-center">
              <select
                className={classNames([
                  "p-2 border border-gray-200 rounded-md text-myDarkBlue",
                  {
                    "bg-green-100": !formState.errors.department && isEditing,
                  },

                  {
                    "bg-yellow-200": formState.errors.department && isEditing,
                  },
                ])}
                {...register("department", {
                  required: "Please select an option",
                  disabled: !isEditing,
                })}
                defaultValue="option2"
              >
                <option value="Teaching">Teaching</option>
                <option value="Non-Teaching">Non-Teaching</option>
              </select>

              {isEditing && !formState.errors.department && (
                <DoneIcon className="text-green-500" />
              )}
              {isEditing && <EditIcon className="text-gray-400" />}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-600">Sponsored by</label>
          <input
            defaultValue={data?.job.sponsoredBy}
            disabled={!isEditing}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>
        <div>
          <label className="block text-gray-600">Work status</label>
          <div className="flex space-x-4 items-center">
            <select
              className={classNames([
                "p-2 border border-gray-200 rounded-md text-myDarkBlue",
                {
                  "bg-green-100": !formState.errors.workStatus && isEditing,
                },

                {
                  "bg-yellow-200": formState.errors.workStatus && isEditing,
                },
              ])}
              {...register("workStatus", {
                required: "Please select an option",
                disabled: !isEditing,
                value: "inactive",
              })}
            >
              <option value="inactive">inactive</option>

              <option value="active">active</option>
            </select>

            {isEditing && !formState.errors.department && (
              <DoneIcon className="text-green-500" />
            )}
            {isEditing && <EditIcon className="text-gray-400" />}
          </div>
        </div>
      </div>
    </section>
  );
}
