import { v4 } from "uuid";
import { useFormContext } from "@/app/context/FormContext";

export default function FormSection({
  sectionName,
  sectionFields,
  sectionId,
  sectionJsonName,
}: Section) {
  const { methods, step, length } = useFormContext();

  const {
    formState: { errors },
  } = methods;
  return (
    <>
      <h1 className="text-2xl text-myDarkBlue mb-2">{sectionName}</h1>

      <section className="rounded-lg border bg-white border-slate-300 dark:bg-gray-900  shadow-md">
        {
          <div className="flex flex-col flex-wrap  p-2  ">
            {sectionFields?.map((elem, index) => {
              return (
                <div className="m-5" key={v4()}>
                  {elem?.fieldType === "options" ? (
                    <div>
                      <p className="text-myDarkBlue dark:text-white">
                        {elem?.fieldName}
                        <span className="text-red-500"> *</span>
                      </p>
                      <select
                        className="p-2 rounded-lg w-64 bg-white  border border-slate-400 cursor-pointer"
                        {...methods.register(
                          `${sectionJsonName}.${elem.fieldJsonName}`
                        )}
                      >
                        {elem?.fieldOptionValues?.map((fieldOption) => {
                          return (
                            <option value={fieldOption.name}>
                              {fieldOption?.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    <div>
                      <p className="text-myDarkBlue dark:text-white select-none">
                        {elem?.fieldName}
                        {elem?.fieldIsRequired ? (
                          <span className="text-red-500"> *</span>
                        ) : (
                          ""
                        )}
                      </p>

                      <input
                        type={elem.fieldType}
                        {...methods.register(
                          `${sectionJsonName}.${elem.fieldJsonName}`
                        )}
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
