import axios from "axios";

const employeeModelApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export async function getSections() {
  try {
    const response = await employeeModelApi.get("/employee-model");

    return await response.data;
  } catch (error) {
    throw error;
  }
}

///////////////////////
/// ERROR in Next JS //
//////////////////////
export async function deleteSection(sectionId: string) {
  console.log(sectionId);
  return await employeeModelApi.delete("/employee-model", {
    data: {
      sectionId,
    },
  });
}
///////////////////////

export async function addSection({
  sectionName,
  sectionFields,
}: {
  sectionName: string;
  sectionFields: FieldType[];
}) {
  return await employeeModelApi.post("/employee-model", {
    sectionName,
    sectionFields,
  });
}

export async function addField({
  _id,
  fieldName,
  fieldType,
}: AddFieldInterface) {
  const data: AddPatchType = {
    op: "add",
    path: "/sectionFields",
    _id,
    fieldType,
    fieldName,
  };

  return await employeeModelApi.patch("/employee-model", data);
}

export async function removeField({
  fieldId,
  _id,
}: {
  fieldId: string;
  _id: string;
}) {
  const data: RemovePatchType = {
    op: "remove",
    path: "/sectionFields",
    _id,
    fieldId,
  };

  return await employeeModelApi.patch("/employee-model", data);
}

export default employeeModelApi;
