import axios from "axios";

const modelApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export async function getSections() {
  try {
    const response = await modelApi.get("/employee-model");

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
    return await modelApi.delete(`/employee-model/?sectionId=${sectionId}`);
  } catch (error) {
    throw error;
  }
}

export async function addSection({ sectionName, sectionId }: Section) {
  return await modelApi.post("/employee-model", {
    sectionName,
    sectionId,
  });
}

export async function addField({
  sectionId,
  field,
}: {
  sectionId: string;
  field: Field;
}) {
  const data: {
    op: opPatchTypes;
    path: string;
    sectionId: string;
    field: Field;
  } = {
    op: "add",
    path: "/sectionFields",
    sectionId,
    field,
  };

  return await modelApi.patch("/employee-model", data);
}

export async function removeField({
  fieldId,
  sectionId,
}: {
  fieldId: string;
  sectionId: string;
}) {
  const data: {
    op: opPatchTypes;
    path: string;
    fieldId: string;
    sectionId: string;
  } = {
    op: "remove",
    path: "/sectionFields",
    fieldId: fieldId,
    sectionId: sectionId,
  };

  return await modelApi.patch("/employee-model", data);
}

export default modelApi;
