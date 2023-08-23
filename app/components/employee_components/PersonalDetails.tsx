import { useEmployeeContext } from "@/app/context/EmployeeContext";

export default function PersonalDetails() {
  const { isEditing, employeeMethods, data } = useEmployeeContext();
  return (
    <section className="flex-1">
      <h2 className="text-xl text-myDarkBlue">Personal</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-gray-300 shadow-md bg-white h-fit p-6">
        <div>
          <label className="block text-gray-500">Name</label>
          <input
            disabled={!isEditing}
            {...employeeMethods.register("fullName", {
              required: true,
            })}
            defaultValue={data?.personal.fullName}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>

        <div>
          <label className="block text-gray-500">Gender</label>

          <input
            className="p-2 border rounded-md cursor-not-allowed"
            defaultValue={data?.personal.gender}
            disabled={true}
          />
        </div>

        <div>
          <label className="block text-gray-500">Nationality</label>
          <input
            disabled={!isEditing}
            {...employeeMethods.register("nationality")}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
            defaultValue={data?.personal.nationality}
          />
        </div>
      </div>
    </section>
  );
}
