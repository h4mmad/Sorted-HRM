export default function EmployeeContactDetails() {
  return (
    <section className="flex-1">
      <h2 className="text-xl  text-myDarkBlue">Contact</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-slate-200 shadow-md bg-white h-fit p-4">
        <div>
          <label className="block text-gray-500">Phone number</label>
          <input
            disabled={!isEditing}
            {...register("phoneNumber", {
              required: true,
            })}
            defaultValue={data?.contact.phoneNumber}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
          />
        </div>

        <div>
          <label className="block text-gray-500">Email</label>

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
