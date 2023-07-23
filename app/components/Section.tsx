import classNames from "classnames";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";

export default function Section({
  sectionTitle,
  sectionFields,
  visible,
  register,
  errors,
}: SectionProps) {
  const [isVisible, setIsVisible] = useState(visible);

  console.log(errors);

  return (
    <section
      className={classNames([
        "my-8 rounded-lg border border-slate-300 dark:bg-gray-900",
        {
          "shadow-lg": isVisible,
          "opacity-70": !isVisible,
        },
      ])}
    >
      <div
        className="w-full flex justify-between items-center cursor-pointer p-3 rounded-lg"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h2 className="text-xl font-semibold text-myDarkBlue dark:text-white select-none">
          {sectionTitle}
        </h2>
        <ExpandLessIcon
          className={classNames([
            "text-myLightBlue dark:text-white",
            {
              "rotate-180": isVisible,
            },
          ])}
        />
      </div>

      {
        <div
          className={classNames([
            "flex flex-row flex-wrap  justify-between p-2 transition-transform",
            {
              hidden: !isVisible,
            },
          ])}
        >
          {sectionFields?.map((field, index) => {
            return (
              <div className="m-2" key={v4()}>
                {field.fieldType === "options" ? (
                  <div>
                    <p className="text-myDarkBlue dark:text-white">
                      {field.fieldName}
                      <span className="text-red-500"> *</span>
                    </p>
                    <select className="p-2 rounded-lg w-64 bg-white  border border-slate-300 cursor-pointer">
                      {field?.fieldOptions?.map((fieldOption) => {
                        return <option>{fieldOption}</option>;
                      })}
                    </select>
                  </div>
                ) : (
                  <div>
                    <p className="text-myDarkBlue dark:text-white select-none">
                      {field.fieldName}
                      {field.isRequired ? (
                        <span className="text-red-500"> *</span>
                      ) : (
                        ""
                      )}
                    </p>
                    <input
                      {...register(field.fieldName, {
                        required: field.isRequired,
                        pattern: field.pattern,
                      })}
                      placeholder={field.placeholder}
                      type={field.fieldType}
                      className="p-2 appearance-none  rounded-lg w-64 bg-white  border border-slate-300 dark:bg-gray-700"
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
