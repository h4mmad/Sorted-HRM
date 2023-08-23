import { useEmployeeContext } from "@/app/context/EmployeeContext";

export default function PassportDetails() {
  const { employeeMethods, isEditing, setIsEditing, data } =
    useEmployeeContext();
  return (
    <section className="flex-1">
      <h2 className="text-xl  text-myDarkBlue">Passport</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-slate-200 shadow-md bg-white h-fit p-4">
        <div>
          <label className="block text-gray-500">Passport number</label>
          <input
            disabled={!isEditing}
            {...employeeMethods.register("passportNumber", {
              required: true,
            })}
            defaultValue={data?.passport.passportNumber}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>

        <div>
          <label className="block text-gray-500">Passport expiry</label>

          <input
            type="date"
            value={String(data?.passport.passportExpiry)}
            disabled={!isEditing}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>
      </div>
    </section>
  );
}
