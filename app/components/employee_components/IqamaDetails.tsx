import { useEmployeeContext } from "@/app/context/EmployeeContext";
import { DateTime } from "luxon";
export default function IqamaDetails() {
  const { isEditing, setIsEditing, employeeMethods, data } =
    useEmployeeContext();

  return (
    <section className="flex-1">
      <h2 className="text-2xl  text-myDarkBlue">Iqama</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-gray-100 shadow-md bg-white h-fit p-4">
        <div>
          <label className="block text-gray-500">Iqama number</label>
          <input
            disabled={!isEditing}
            defaultValue={data?.iqama.iqamaNumber}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>

        <div>
          <label className="block text-gray-500">Iqama expiry</label>

          <input
            type="date"
            {...employeeMethods.register("iqamaExpiry", {
              required: true,
            })}
            defaultValue={String(data?.iqama.iqamaExpiry)}
            disabled={!isEditing}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>
        <div>
          <label className="block text-gray-500">Iqama status</label>

          <input
            value={data?.iqama.iqamaStatus}
            disabled={!isEditing}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>
      </div>
    </section>
  );
}
