import classNames from "classnames";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Section({
  sectionTitle,
  sectionFields,
  visible,
}: SectionProps) {
  const [isVisible, setIsVisible] = useState(visible);

  const { register } = useForm();

  return (
    <section
      className={classNames([
        "my-8 rounded-md border border-slate-300 bg-slate-100",
        {
          "opacity-50": !isVisible,
        },
      ])}
    >
      <div
        className="w-full flex justify-between items-center cursor-pointer p-3 rounded-lg"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h2 className="text-xl font-semibold text-myDarkBlue  select-none">
          {sectionTitle}
        </h2>
      </div>

      {
        <div
          className={classNames([
            "flex flex-row flex-wrap justify-between p-2 transition-transform",
            {
              hidden: !isVisible,
            },
          ])}
        >
          {sectionFields?.map((field, index) => {
            return (
              <div className="m-2">
                {field.fieldType === "options" ? (
                  <div>
                    <p className="text-myDarkBlue select-none">
                      {field.fieldName}
                      <span className="text-red-500"> *</span>
                    </p>
                    <select className="p-1 rounded-lg w-64 bg-white  border border-slate-300">
                      {field?.fieldOptions?.map((fieldOption) => {
                        return <option>{fieldOption}</option>;
                      })}
                    </select>
                  </div>
                ) : (
                  <div>
                    <p className="text-myDarkBlue select-none">
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
                      })}
                      type={field.fieldType}
                      className="p-1 appearance-none rounded-lg w-64 bg-white  border border-slate-300"
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
