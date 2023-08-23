import { useEmployeeContext } from "@/app/context/EmployeeContext";

export default function JobDetails() {
  const { data, employeeMethods, isEditing, setIsEditing } =
    useEmployeeContext();
  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Job</h2>

      <div className="flex flex-col space-y-8 rounded-lg border border-slate-300 bg-white shadow-md h-fit p-8">
        <div>
          <label className="block text-gray-600">Designation</label>
          <input
            disabled={!isEditing}
            {...employeeMethods.register("designation", {
              required: true,
            })}
            defaultValue={data?.job.designation}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>

        <div>
          <label className="block text-gray-600">Date of joining</label>

          <input
            type="date"
            defaultValue={String(data?.job.dateOfJoining)}
            disabled={!isEditing}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue "
          />
        </div>
        <div>
          <label className="block text-gray-600">Department</label>

          <input
            defaultValue={String(data?.job.department)}
            disabled={!isEditing}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>
      </div>
    </section>
  );
}
