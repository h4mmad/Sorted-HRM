import { v4 } from "uuid";
import { getCamelCase, camelCaseToTitleCase } from "../helperFns/fns";

export const JobDetails: Section = {
  sectionName: "Job",
  sectionJsonName: "job",
  sectionId: v4(),
  sectionFields: [
    {
      fieldId: v4(),
      fieldName: "Designation",
      fieldJsonName: "designation",
      fieldType: "text",
      fieldIsRequired: true,
      fieldValue: "",
    },
    {
      fieldId: v4(),
      fieldName: "Stream",
      fieldJsonName: "stream",
      fieldType: "options",
      fieldIsRequired: true,
      fieldValue: "",
      fieldOptionValues: [{ name: "Admin" }, { name: "Teaching" }],
    },
    {
      fieldId: v4(),
      fieldName: "Department",
      fieldJsonName: "department",
      fieldType: "options",
      fieldIsRequired: true,
      fieldValue: "",
      fieldOptionValues: [{ name: "Teaching" }, { name: "Non-Teaching" }],
    },
    {
      fieldId: v4(),
      fieldName: "Remarks",
      fieldJsonName: "remarks",
      fieldType: "text",
      fieldIsRequired: false,
      fieldValue: "",
    },
    {
      fieldId: v4(),
      fieldName: "Date of joining",
      fieldJsonName: "dateOfJoining",
      fieldType: "date",
      fieldIsRequired: true,
      fieldValue: "",
    },
    {
      fieldId: v4(),
      fieldName: "Work status",
      fieldJsonName: "workStatus",
      fieldType: "options",
      fieldIsRequired: true,
      fieldValue: "",
      fieldOptionValues: [{ name: "active" }, { name: "inactive" }],
    },
    {
      fieldId: v4(),
      fieldName: "Sponsored by",
      fieldJsonName: "sponsoredBy",
      fieldType: "options",
      fieldIsRequired: true,
      fieldValue: "",
      fieldOptionValues: [{ name: "School" }, { name: "Husband" }],
    },
  ],
};

export const PersonalDetails: Section = {
  sectionName: "Personal",
  sectionJsonName: "personal",
  sectionId: v4(),
  sectionFields: [
    {
      fieldName: "Full Name",
      fieldId: v4(),
      fieldJsonName: "fullName",
      fieldType: "text",
      fieldValue: "",
      fieldIsRequired: true,
    },

    {
      fieldName: "Date of birth",
      fieldId: v4(),
      fieldJsonName: "dateOfBirth",
      fieldType: "date",
      fieldValue: "",
      fieldIsRequired: true,
    },
    {
      fieldName: "Gender",
      fieldId: v4(),
      fieldJsonName: "gender",
      fieldIsRequired: true,
      fieldType: "options",
      fieldValue: "",
      fieldOptionValues: [{ name: "Male" }, { name: "Female" }],
    },
    {
      fieldName: "Nationality",
      fieldJsonName: "nationality",
      fieldId: v4(),
      fieldIsRequired: true,
      fieldValue: "",
      fieldType: "options",
      fieldOptionValues: [
        { name: "India" },
        { name: "Egypt" },
        { name: "Sudan" },
        { name: "Saudi Arabia" },
        { name: "Bangladesh" },
        { name: "Pakistan" },
      ],
    },
  ],
};

const ContactDetails: Section = {
  sectionJsonName: "contact",
  sectionName: "Contact",
  sectionId: v4(),

  sectionFields: [
    {
      fieldId: v4(),
      fieldName: "Phone number",
      fieldJsonName: "phoneNumber",
      fieldType: "number",
      fieldValue: "",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Personal email",
      fieldJsonName: "personalEmail",
      fieldType: "email",
      fieldValue: "",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Work email",
      fieldJsonName: "workEmail",
      fieldType: "email",
      fieldValue: "",
      fieldIsRequired: false,
    },
  ],
};

export const IqamaDetails: Section = {
  sectionName: "Iqama",
  sectionJsonName: "iqama",
  sectionId: v4(),
  sectionFields: [
    {
      fieldId: v4(),
      fieldName: "Iqama number",
      fieldJsonName: "iqamaNumber",
      fieldType: "number",
      fieldValue: "",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Iqama expiry",
      fieldJsonName: "iqamaExpiry",
      fieldType: "date",
      fieldValue: "",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Iqama status",
      fieldJsonName: "iqamaStatus",
      fieldType: "options",
      fieldIsRequired: true,
      fieldValue: "",
      fieldOptionValues: [{ name: "active" }, { name: "expired" }],
    },
  ],
};

const Qualification: Section = {
  sectionJsonName: "qualification",
  sectionName: "Qualification",
  sectionId: v4(),
  sectionFields: [
    {
      fieldId: v4(),
      fieldValue: "",
      fieldName: "Qualification",
      fieldJsonName: "qualification",
      fieldType: "text",
      fieldIsRequired: false,
    },
    {
      fieldId: v4(),
      fieldName: "University",
      fieldValue: "",
      fieldJsonName: "university",
      fieldType: "text",
      fieldIsRequired: false,
    },
  ],
};

const PassportDetails: Section = {
  sectionName: "Passport",
  sectionJsonName: "passport",
  sectionId: v4(),
  sectionFields: [
    {
      fieldId: v4(),
      fieldName: "Passport number",
      fieldJsonName: "passportNumber",
      fieldValue: "",
      fieldType: "text",
      fieldIsRequired: true,
    },
    {
      fieldId: v4(),
      fieldName: "Passport expiry",
      fieldJsonName: "passportExpiry",
      fieldType: "date",
      fieldValue: "",
      fieldIsRequired: false,
    },
  ],
};

export const allSections: Section[] = [
  IqamaDetails,
  PersonalDetails,
  ContactDetails,
  PassportDetails,
  JobDetails,
  Qualification,
];
