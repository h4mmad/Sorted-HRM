"use client";

import { useEffect, useState } from "react";
import { TextField } from "../../../components/TextField";
import { v4 } from "uuid";

export default function NewEmployee() {
  const [disabled, setDisabled] = useState(true);
  const [model, setModel] = useState<SectionType[]>();

  useEffect(() => {
    async function getModel() {
      try {
        const data: SectionType[] = await (
          await fetch("http://localhost:3000/api/employee-model")
        ).json();
        setModel(data);
      } catch (error) {
        console.log(error);
      }
    }
    getModel();
  }, []);

  return (
    <div className="lg:w-2/3 2xl:w-1/2">
      {/* profile section */}
      <div className="flex flex-row space-x-8 mt-4">
        <img className="w-24 h-24 rounded-full border-2 border-gray-300" />

        <div className="rounded-lg bg-gray-200 p-2 grow">
          <h1 className="text-myDarkBlue font-bold text-3xl mb-2"></h1>
          <h3 className="text-sm"></h3>
          <h3 className="text-sm"></h3>
        </div>

        <div className="rounded-lg bg-gray-200 p-2 grow">
          Iqama Number:
          <h2 className="text-xl font-semibold"></h2>
        </div>
      </div>

      {/* divider line */}
      <div className="mt-4 bg-gray-100 h-0.5 " />

      <div className="flex space-x-2 justify-end mt-4">
        {disabled ? (
          <div
            className="px-4  bg-myLightBlue text-white cursor-pointer rounded-xl w-fit text-center"
            onClick={() => setDisabled(!disabled)}
          >
            Edit
          </div>
        ) : (
          <>
            <p>Editing...</p>
            <div
              className="px-4 bg-red-300 hover:bg-red-500 cursor-pointer rounded-xl w-fit text-center"
              onClick={() => setDisabled(!disabled)}
            >
              Cancel
            </div>
            <div
              className="px-4 bg-green-300 hover:bg-green-500 cursor-pointer rounded-xl w-fit text-center"
              onClick={() => setDisabled(!disabled)}
            >
              Save changes
            </div>
          </>
        )}
      </div>

      {/* form */}
      {/* Personal details */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Essential details</h2>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Name" disabled={disabled} />
        </div>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Contact No." disabled={disabled} />
          <TextField labelText="Iqama No." disabled={disabled} />
        </div>
      </section>

      {model?.map((section) => {
        return (
          <section className="my-12" id={section.sectionID}>
            <h2 className="text-2xl font-semibold">{section.sectionName}</h2>

            {section.fields.map((field) => {
              return (
                <div className="mt-2 lg:mt-0" key={v4()}>
                  <label className="text-gray-500 block text-sm">
                    {field.label}
                  </label>
                  <input
                    disabled={disabled}
                    className={
                      "border rounded-md p-1 " +
                      (disabled ? "cursor-not-allowed" : "cursor-text border")
                    }
                    type={field.type}
                    key={field.fieldID}
                  />
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}
