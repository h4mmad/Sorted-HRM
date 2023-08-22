import { useFormContext } from "@/app/context/FormContext";

export default function ContactDetails() {
  const { methods } = useFormContext();

  return (
    <>
      <h1 className="text-2xl text-myDarkBlue mb-2">Contact</h1>

      <section className="rounded-lg border border-slate-300 dark:bg-gray-900  shadow-md">
        <div className="flex flex-col flex-wrap  p-2  ">
          <div className="m-5">
            <div>
              <p className="text-myDarkBlue dark:text-white select-none">
                Full name
                <span className="text-red-500"> *</span>
              </p>

              <input
                type="text"
                {...methods.register("deez.fullName", {
                  required: true,
                })}
                className="p-2 appearance-none bg-gray-100 rounded-lg w-64  border border-slate-400 dark:bg-gray-700"
              />
            </div>
            <div>
              <p className="text-myDarkBlue dark:text-white select-none">
                Date of birth
                <span className="text-red-500"> *</span>
              </p>

              <input
                type="date"
                {...(methods.register("deez.dateOfBirth"),
                {
                  required: true,
                })}
                className="p-2 appearance-none bg-gray-100 rounded-lg w-64  border border-slate-400 dark:bg-gray-700"
              />
            </div>
            <div>
              <p className="text-myDarkBlue dark:text-white">
                Gender
                <span className="text-red-500"> *</span>
              </p>
              <select
                className="p-2 rounded-lg w-64 bg-white  border border-slate-400 cursor-pointer"
                {...methods.register("deez.gener")}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
