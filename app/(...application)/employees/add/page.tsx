"use client";

import {
  useForm,
  SubmitHandler,
  Field,
  UseFormRegister,
} from "react-hook-form";
import Section from "@/app/components/Section";

export default function NewEmployee() {
  const JobDetails: Fields[] = [
    { fieldName: "Designation", fieldType: "text", isRequired: true },
    {
      fieldName: "Stream",
      fieldType: "options",
      isRequired: true,
      fieldOptions: ["Admin", "Teaching"],
    },
    {
      fieldName: "Department",
      fieldType: "options",
      isRequired: true,
      fieldOptions: ["Teaching", "Non-Teaching"],
    },
    { fieldName: "Remarks", fieldType: "text", isRequired: false },
    { fieldName: "Date of joining", fieldType: "date", isRequired: true },
    {
      fieldName: "Work status",
      fieldType: "options",
      isRequired: true,
      fieldOptions: ["active", "inactive"],
    },
    {
      fieldName: "Sponsored by",
      fieldType: "options",
      isRequired: true,
      fieldOptions: ["School", "Husband", "Self", "Other"],
    },
  ];

  const PersonalDetails: Fields[] = [
    { fieldName: "Full Name", fieldType: "text", isRequired: true },

    { fieldName: "Date of birth", fieldType: "date", isRequired: true },
    {
      fieldName: "Gender",
      isRequired: true,
      fieldType: "options",
      fieldOptions: ["Male", "Female"],
    },
    // { fieldName: "Photo", isRequired: false, fieldType: "file" },
    {
      fieldName: "Nationality",
      isRequired: true,
      fieldType: "options",
      fieldOptions: [
        "🇮🇳 India",
        "🇪🇬 Egypt",
        "🇸🇩 Sudan",
        "🇸🇦 Saudi Arabia",
        "🇧🇩 Bangladesh",
        "🇵🇰 Pakistan",
      ],
    },
  ];

  const ContactDetails: Fields[] = [
    {
      fieldName: "Phone number",
      fieldType: "number",
      isRequired: true,
    },
    {
      fieldName: "Personal email",
      fieldType: "email",
      isRequired: true,
    },
    { fieldName: "Work email", fieldType: "email", isRequired: false },
  ];

  const IqamaDetails: Fields[] = [
    {
      fieldName: "Iqama number",
      fieldType: "number",
      isRequired: true,
    },
    { fieldName: "Iqama expiry", fieldType: "date", isRequired: true },
    {
      fieldName: "Iqama status",
      fieldType: "options",
      isRequired: true,
      fieldOptions: ["active", "inactive"],
    },
  ];

  const Qualification: Fields[] = [
    { fieldName: "Qualification", fieldType: "text", isRequired: false },
    { fieldName: "University", fieldType: "text", isRequired: false },
  ];

  const PassportDetails: Fields[] = [
    { fieldName: "Passport number", fieldType: "text", isRequired: true },
    { fieldName: "Passport expiry", fieldType: "date", isRequired: false },
  ];

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm<AddEmployeeFormInputs>();

  const onSubmit: any = (values: any) => console.log(values);

  return (
    <div className="w-3/4">
      <h1 className="text-3xl text-myDarkBlue font-semibold mt-4">
        Add Employee
      </h1>

      <div className="flex-grow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section
            sectionTitle="Iqama details"
            sectionFields={IqamaDetails}
            visible={true}
            register={register}
            errors={errors}
          />
          <Section
            sectionTitle="Personal details"
            sectionFields={PersonalDetails}
            register={register}
            errors={errors}
          />
          {/* <Section
            sectionTitle="Contact details"
            sectionFields={ContactDetails}
            register={register}
            errors={errors}
          />
          <Section
            sectionTitle="Passport details"
            sectionFields={PassportDetails}
            register={register}
            errors={errors}
          />
          <Section
            sectionTitle="Job details"
            sectionFields={JobDetails}
            register={register}
            errors={errors}
          />
          <Section
            sectionTitle="Education"
            sectionFields={Qualification}
            register={register}
            errors={errors}
          /> */}

          <button
            type="submit"
            className="px-4 py-1 w-fit float-right text-white hover:bg-myDarkBlue rounded-full bg-myLightBlue"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
