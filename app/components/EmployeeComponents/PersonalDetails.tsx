export default function EmployeePersonalDetails() {
  return (
    <section className="flex-1">
      <h2 className="text-xl text-myDarkBlue">Personal</h2>

      <div className="flex flex-col space-y-6 rounded-lg border border-slate-200 shadow-md bg-white h-fit p-4">
        <div>
          <label className="block text-gray-500">Name</label>
          <input
            disabled={!isEditing}
            {...register("fullName", {
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
            value={data?.personal.gender}
            disabled={true}
          />
        </div>

        <div>
          <label className="block text-gray-500">Nationality</label>
          <input
            disabled={!isEditing}
            {...register("nationality")}
            className="p-2 border border-gray-200 rounded-md text-myDarkBlue"
            defaultValue={data?.personal.nationality}
          />
        </div>
      </div>
    </section>
  );
}
