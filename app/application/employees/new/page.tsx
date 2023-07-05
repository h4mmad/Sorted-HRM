"use client";

import { useForm, SubmitHandler } from "react-hook-form";

export default function NewEmployee() {
  const { register, handleSubmit } = useForm();

  const formObj = {
    personalDetails: [
      { fieldName: "Name", fieldType: "text" },
      { fieldName: "Employee Id", fieldType: "text" },
      {
        fieldName: "Date of birth",
        fieldType: "date",
      },
      {
        fieldName: "Nationality",
        fieldType: "string",
      },
    ],

    contactDetails: ["phoneNumber", "personalEmail", "workEmail"],

    idDetails: [
      "iqamaNumber",
      "iqamaExpiry",
      "iqamaStatus",
      "passportNumber",
      "passportExpiry",
    ],

    jobDetails: [
      "designation",
      "stream",
      "department",
      "remarks",
      "dateOfJoining",
      "workStatus",
      "sponsoredBy",
    ],
    qualificationDetails: ["qualification", "university"],
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-2/3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <select>
          <option {...(register("select"), { required: true })}>Male</option>
          <option>Female</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
