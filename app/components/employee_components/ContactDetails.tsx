import { useEmployeeContext } from "@/app/context/EmployeeContext";

export default function ContactDetails() {
  const { employeeMethods, isEditing, setIsEditing, data } =
    useEmployeeContext();
  return (
    <section className="flex-1 ">
      <h2 className="text-xl  text-myDarkBlue">Contact</h2>

      <div className="flex flex-col bg-white space-y-6 rounded-lg border border-slate-300 shadow-md h-fit p-4">
        <div>
          <label className="block text-myLightBlue">Phone number</label>
          <input
            disabled={!isEditing}
            {...employeeMethods.register("phoneNumber", {
              required: true,
            })}
            defaultValue={data?.contact.phoneNumber}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>

        <div>
          <label className="block text-myLightBlue">Email</label>

          <input
            value={data?.contact.personalEmail}
            disabled={!isEditing}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>
      </div>
    </section>
  );
}
