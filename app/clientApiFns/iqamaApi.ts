import { employee } from "@prisma/client";
import axios from "axios";

const iqamaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export async function iqamaNumberExists(iqamaNumber: string) {
  const iqamaRegex = /^[12]\d{9}$/;
  if (iqamaRegex.test(iqamaNumber)) {
    try {
      const response = await iqamaApi.get(`/iqama?iqamaNumber=${iqamaNumber}`);
      return await response.data;
    } catch (error) {
      throw error;
    }
  }
}
