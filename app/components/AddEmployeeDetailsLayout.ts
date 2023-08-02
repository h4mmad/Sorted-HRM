import { AxiosError } from "axios";
import { getSections } from "../clientApiFns/employeeModelApi";
import { useQuery } from "@tanstack/react-query";
import { v4 } from "uuid";

export const JobDetails: Section = {
  sectionName: "Job",
  sectionId: v4(),
  sectionFields: [
    {
      fieldId: v4(),
      fieldName: "Designation",
      fieldJsonName: "designation",
      fieldType: "text",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Stream",
      fieldJsonName: "stream",
      fieldType: "options",
      fieldIsRequired: true,
      fieldOptions: ["Admin", "Teaching"],
    },
    {
      fieldId: v4(),
      fieldName: "Department",
      fieldJsonName: "department",
      fieldType: "options",
      fieldIsRequired: true,
      fieldOptions: ["Teaching", "Non-Teaching"],
    },
    {
      fieldId: v4(),
      fieldName: "Remarks",
      fieldJsonName: "remarks",
      fieldType: "text",
      fieldIsRequired: false,
    },
    {
      fieldId: v4(),
      fieldName: "Date of joining",
      fieldJsonName: "dateOfJoining",
      fieldType: "date",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Work status",
      fieldJsonName: "workStatus",
      fieldType: "options",
      fieldIsRequired: true,
      fieldOptions: ["active", "inactive"],
    },
    {
      fieldId: v4(),
      fieldName: "Sponsored by",
      fieldJsonName: "sponsoredBy",
      fieldType: "options",
      fieldIsRequired: true,
      fieldOptions: ["School", "Husband", "Self", "Other"],
    },
  ],
};

export const PersonalDetails: Section = {
  sectionName: "Personal",
  sectionId: v4(),
  sectionFields: [
    {
      fieldName: "Full Name",
      fieldId: v4(),
      fieldJsonName: "fullName",
      fieldType: "text",
      fieldIsRequired: true,
    },

    {
      fieldName: "Date of birth",
      fieldId: v4(),
      fieldJsonName: "dateOfBirth",
      fieldType: "date",
      fieldIsRequired: true,
    },
    {
      fieldName: "Gender",
      fieldId: v4(),
      fieldJsonName: "gender",
      fieldIsRequired: true,
      fieldType: "options",
      fieldOptions: ["Male", "Female"],
    },
    // { fieldName: "Photo", fieldIsRequired: false, fieldType: "file" },
    {
      fieldName: "Nationality",
      fieldJsonName: "nationality",
      fieldId: v4(),
      fieldIsRequired: true,
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
  ],
};

const ContactDetails: Section = {
  sectionName: "Contact",
  sectionId: v4(),

  sectionFields: [
    {
      fieldId: v4(),
      fieldName: "Phone number",
      fieldJsonName: "phoneNumber",
      fieldType: "number",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Personal email",
      fieldJsonName: "personalEmail",
      fieldType: "email",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Work email",
      fieldJsonName: "workEmail",
      fieldType: "email",
      fieldIsRequired: false,
    },
  ],
};

export const IqamaDetails: Section = {
  sectionName: "Iqama",
  sectionId: v4(),
  sectionFields: [
    {
      fieldId: v4(),
      fieldName: "Iqama number",
      fieldJsonName: "iqamaNumber",
      fieldType: "number",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Iqama expiry",
      fieldJsonName: "iqamaExpiry",
      fieldType: "date",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Iqama status",
      fieldJsonName: "iqamaStatus",
      fieldType: "options",
      fieldIsRequired: true,
      fieldOptions: ["active", "inactive"],
    },
  ],
};

const Qualification: Section = {
  sectionName: "Qualification",
  sectionId: v4(),
  sectionFields: [
    {
      fieldId: v4(),
      fieldName: "Qualification",
      fieldJsonName: "qualification",
      fieldType: "text",
      fieldIsRequired: false,
    },
    {
      fieldId: v4(),
      fieldName: "University",
      fieldJsonName: "university",
      fieldType: "text",
      fieldIsRequired: false,
    },
  ],
};

const PassportDetails: Section = {
  sectionName: "Passport",
  sectionId: v4(),
  sectionFields: [
    {
      fieldId: v4(),
      fieldName: "Passport number",
      fieldJsonName: "passportNumber",
      fieldType: "text",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Passport expiry",
      fieldJsonName: "passportNumber",
      fieldType: "date",
      fieldIsRequired: false,
    },
  ],
};

const Other = () => {
  const { data, isSuccess, isLoading, isError, error } = useQuery<
    Section[],
    AxiosError
  >({
    queryKey: ["employee-model"],
    queryFn: getSections,
  });

  return data;
};

export const allSections: any = [
  IqamaDetails,
  PersonalDetails,
  ContactDetails,
  PassportDetails,
  JobDetails,
  Qualification,
];
