import { v4 } from "uuid";
import { useFormContext } from "../context/FormContext";
import { Controller } from "react-hook-form";
export default function Section({
  sectionName,
  sectionFields,
}: AddEmployeeSection) {
  const { methods } = useFormContext();

  return (
    <section className="my-8 rounded-lg border border-slate-300 dark:bg-gray-900  shadow-md">
      {/* <div className="w-full flex justify-between items-center cursor-pointer p-3 rounded-lg">
        <h2 className="text-xl font-semibold text-myDarkBlue dark:text-white select-none">
          {sectionTitle}
        </h2>
      </div> */}

      {
        <div className="flex flex-row flex-wrap  justify-between p-2 transition-transform ">
          {sectionFields?.map((elem, index) => {
            return (
              <div className="m-2" key={v4()}>
                {elem.fieldType === "options" ? (
                  <div>
                    <p className="text-myDarkBlue dark:text-white">
                      {elem.fieldName}
                      <span className="text-red-500"> *</span>
                    </p>
                    <select className="p-2 rounded-lg w-64 bg-white  border border-slate-300 cursor-pointer">
                      {elem?.fieldOptions?.map((fieldOption) => {
                        return <option>{fieldOption}</option>;
                      })}
                    </select>
                  </div>
                ) : (
                  <div>
                    <p className="text-myDarkBlue dark:text-white select-none">
                      {elem.fieldName}
                      {elem.isRequired ? (
                        <span className="text-red-500"> *</span>
                      ) : (
                        ""
                      )}
                    </p>
                    <Controller
                      name={elem.fieldName}
                      control={methods?.control}
                      defaultValue=""
                      render={({ field }) => (
                        <input
                          required={elem.isRequired}
                          type={elem.fieldType}
                          {...field}
                          className="p-2 appearance-none  rounded-lg w-64 bg-white  border border-slate-300 dark:bg-gray-700"
                        />
                      )}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      }
    </section>
  );
}
