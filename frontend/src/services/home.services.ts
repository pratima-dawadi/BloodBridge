import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

export async function getHealthCenters() {
  const response = await axios.get(`${baseUrl}/users/healthcenter`);
  console.log("Response from getHealthCenters:", response.data);
  return response.data;
}

export async function getDonors() {
  const response = await axios.get(`${baseUrl}/users/donor`);
  console.log("Response from getDonors:", response.data);
  return response.data;
}

export async function viewDetails(id: string) {
  const sent_url = `${baseUrl}/users/${id}`;
  console.log("sent_url:", sent_url);
  const result = axios.get(sent_url);
  const response = await result;
  console.log("Response from viewHealthCenterDetails:", response.data);
  return response.data;
}
