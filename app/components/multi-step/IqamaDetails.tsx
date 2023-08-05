import { useFormContext } from "@/app/context/FormContext";

export default function IqamaDetails() {
  const { methods } = useFormContext();
  return (
    <>
      <h1 className="text-2xl text-myDarkBlue mb-2">Iqama</h1>

      <section className="rounded-lg border border-slate-300 dark:bg-gray-900  shadow-md">
        <div className="flex flex-col space-y-5 p-5">
          <div>
            <p className="text-myDarkBlue dark:text-white select-none">
              Iqama number
              <span className="text-red-500"> *</span>
            </p>

            <input
              type="number"
              {...methods.register("iqama.iqamaNumber", {
                required: false,
              })}
              className="p-2 appearance-none bg-gray-100 rounded-lg w-64  border border-slate-400 dark:bg-gray-700"
            />
          </div>
          <div>
            <p className="text-myDarkBlue dark:text-white select-none">
              Iqama Expiry
              <span className="text-red-500"> *</span>
            </p>

            <input
              type="date"
              {...(methods.register("iqama.iqamaExpiry"),
              {
                required: false,
              })}
              className="p-2 appearance-none bg-gray-100 rounded-lg w-64  border border-slate-400 dark:bg-gray-700"
            />
          </div>
        </div>
      </section>
    </>
  );
}
