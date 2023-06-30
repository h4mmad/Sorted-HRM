// a layout is an array of sections
const layoutA = [];

// each section will be an object
const section1 = {
  sectionName: "Personal information",
  fields: [],
};

// fields will be any array of input fields in the section
// each input field in the array will be an object

const fields = [{ fieldLabel: "Name", id: "123", type: "text" }];

//every thing together

const layouts = [
  {
    sectionName: "Job info",
    sectionID: "weown3124",
    fields: [
      { label: "designation", id: "234", type: "text", options: [] },
      {
        label: "choices",
        id: "234",
        type: "dropdown",
        options: ["Primary teacher", "Secondary teacher", "Admin Staff"],
      },
    ],
  },
];
