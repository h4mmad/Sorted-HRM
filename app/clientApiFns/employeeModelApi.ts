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

/*
  deleteSection will delete the whole section resource including all fields in it.
*/
export async function deleteSection(sectionId: string) {
  try {
    console.log(sectionId);
    return await employeeModelApi.delete(
      `/employee-model/?sectionId=${sectionId}`
    );
  } catch (error) {
    throw error;
  }
}

export async function addSection({ sectionName, sectionId }: Section) {
  return await employeeModelApi.post("/employee-model", {
    sectionName,
    sectionId,
  });
}

export async function addField({
  sectionId,
  fieldName,
  fieldType,
}: AddFieldInterface) {
  const data: AddPatchType = {
    op: "add",
    path: "/sectionFields",
    sectionId,
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
