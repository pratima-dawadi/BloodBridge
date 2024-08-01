import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

export async function getDonorCount() {
  try {
    const response = await axios.get(`${baseUrl}/donor/count`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getHealthCenterCount() {
  try {
    const response = await axios.get(`${baseUrl}/donor/counthealthcenter`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getDonorGroup() {
  try {
    const response = await axios.get(`${baseUrl}/donor/group`);
    return response.data;
  } catch (error) {
    return error;
  }
}
