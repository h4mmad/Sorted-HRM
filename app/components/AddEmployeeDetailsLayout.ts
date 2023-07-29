export const JobDetails: AddEmployeeSection = {
  sectionName: "Job",
  sectionFields: [
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
  ],
};

export const PersonalDetails: AddEmployeeSection = {
  sectionName: "Personal",
  sectionFields: [
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
  ],
};

const ContactDetails: AddEmployeeSection = {
  sectionName: "Contact",

  sectionFields: [
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
  ],
};

export const IqamaDetails: AddEmployeeSection = {
  sectionName: "Iqama",
  sectionFields: [
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
  ],
};

const Qualification: AddEmployeeSection = {
  sectionName: "Qualification",
  sectionFields: [
    { fieldName: "Qualification", fieldType: "text", isRequired: false },
    { fieldName: "University", fieldType: "text", isRequired: false },
  ],
};

const PassportDetails: AddEmployeeSection = {
  sectionName: "Passport",
  sectionFields: [
    { fieldName: "Passport number", fieldType: "text", isRequired: true },
    { fieldName: "Passport expiry", fieldType: "date", isRequired: false },
  ],
};

export const allSections: AddEmployeeSection[] = [
  IqamaDetails,
  PersonalDetails,
  ContactDetails,
  PassportDetails,
  JobDetails,
  Qualification,
];
