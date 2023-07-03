import axios from "axios";

const employeeModelApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export async function getSections() {
  const response = await employeeModelApi.get("/employee-model/sections");
  return response.data as SectionType[];
}

export async function deleteSection(sectionId: string) {
  return await employeeModelApi.delete(`/employee-model/sections`, {
    data: { sectionId },
  });
}

export async function addSection({ sectionId, sectionName }: SectionType) {
  return await employeeModelApi.post("/employee-model/sections", {
    sectionId,
    sectionName,
  });
}

export async function addField({
  sectionId,
  fieldId,
  fieldName,
  fieldType,
}: AddFieldInterface) {
  return await employeeModelApi.patch("/employee-model/fields", {
    sectionId,
    fieldId,
    fieldName,
    fieldType,
  });
}

export async function deleteField(fieldId: string, sectionId: string) {
  const data: PatchType = {
    op: "remove",
    path: "/sectionFields",
    sectionId,
    fieldId,
  };

  return await employeeModelApi.patch("employee-model", data);
}

export default employeeModelApi;
