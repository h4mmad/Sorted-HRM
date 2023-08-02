import { v4 } from "uuid";
import { useFormContext } from "../context/FormContext";
import { error } from "console";
export default function Section({ sectionName, sectionFields }: SectionType) {
  const { methods, step, length } = useFormContext();

  const {
    formState: { errors },
  } = methods;
  return (
    <>
      <section className="my-8 rounded-lg border border-slate-300 dark:bg-gray-900  shadow-md">
        {
          <div className="flex flex-col flex-wrap  p-2 transition-transform ">
            {sectionFields?.map((elem, index) => {
              return (
                <div className="m-5" key={v4()}>
                  {elem.fieldType === "options" ? (
                    <div>
                      <p className="text-myDarkBlue dark:text-white">
                        {elem.fieldName}
                        <span className="text-red-500"> *</span>
                      </p>
                      <select className="p-2 rounded-lg w-64 bg-white  border border-slate-400 cursor-pointer">
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

                      <input
                        required={elem.isRequired}
                        type={elem.fieldType}
                        {...methods.register(elem.jsonName, {
                          required: elem.isRequired,
                        })}
                        className="p-2 appearance-none bg-gray-100 rounded-lg w-64  border border-slate-400 dark:bg-gray-700"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        }
      </section>
    </>
  );
}
