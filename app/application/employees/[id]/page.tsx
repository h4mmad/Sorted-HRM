"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { TextField } from "@/app/components/TextField";
import { SwitchChoiceSelector } from "@/app/components/FieldTypeSelector";

export default function Page() {
  const searchParams = useSearchParams();

  const [disabled, setDisabled] = useState(true);

  return (
    <div className="lg:w-2/3 2xl:w-1/2">
      {/* profile section */}
      <div className="flex flex-row space-x-8 mt-4">
        <img
          src={String(searchParams.get("pictureURL"))}
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />

        <div className="rounded-lg bg-gray-200 p-2 grow">
          <h1 className="text-myDarkBlue font-bold text-3xl mb-2">
            {searchParams.get("name")}
          </h1>
          <h3 className="text-sm">{searchParams.get("designation")}</h3>
          <h3 className="text-sm">{searchParams.get("contactNo")}</h3>
        </div>

        <div className="rounded-lg bg-gray-200 p-2 grow">
          Iqama Number:
          <h2 className="text-xl font-semibold">{searchParams.get("iqama")}</h2>
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
        <h2 className="text-2xl font-semibold">Personal details</h2>

        <div className="lg:flex justify-between mt-2">
          <TextField
            labelText="Name"
            defaultValue={searchParams.get("name")}
            disabled={disabled}
          />
        </div>

        <div className="lg:flex justify-between mt-2">
          {/* <BinaryChoiceSelector
            choice1="Male"
            choice2="Female"
            value1="male"
            value2="female"
            id1="male"
            id2="female"
            name="gender"
            disabled={disabled}
            labelText="Gender"
          /> */}

          <TextField
            labelText="Contact No."
            defaultValue={searchParams.get("contactNo")}
            disabled={disabled}
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Personal details</h2>

        <div className="lg:flex justify-between mt-2">
          <TextField
            labelText="Name"
            defaultValue={searchParams.get("name")}
            disabled={disabled}
          />
        </div>

        <div className="lg:flex justify-between mt-2">
          <TextField
            labelText="Contact No."
            defaultValue={searchParams.get("contactNo")}
            disabled={disabled}
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Job details</h2>

        <div className="lg:flex justify-between mt-2">
          <TextField labelText="Job title" disabled={disabled} />

          <TextField
            labelText="Contact No."
            defaultValue={searchParams.get("contactNo")}
            disabled={disabled}
          />
        </div>

        <div className="lg:flex justify-between mt-2">
          <TextField
            labelText="Contact No."
            defaultValue={searchParams.get("contactNo")}
            disabled={disabled}
          />

          <TextField
            labelText="Contact No."
            defaultValue={searchParams.get("contactNo")}
            disabled={disabled}
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Education background</h2>

        <div className="lg:flex justify-between mt-2">
          <TextField
            labelText="Contact No."
            defaultValue={searchParams.get("contactNo")}
            disabled={disabled}
          />

          <TextField
            labelText="Contact No."
            defaultValue={searchParams.get("contactNo")}
            disabled={disabled}
          />
        </div>

        <div className="lg:flex justify-between mt-2">
          <TextField
            labelText="Contact No."
            defaultValue={searchParams.get("contactNo")}
            disabled={disabled}
          />

          <TextField
            labelText="Contact No."
            defaultValue={searchParams.get("contactNo")}
            disabled={disabled}
          />
        </div>
      </section>
    </div>
  );
}
