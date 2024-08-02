import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

export async function getHealthCenters() {
  const response = await axios.get(`${baseUrl}/users/healthcenter`);
  return response.data;
}

export async function getDonors() {
  const response = await axios.get(`${baseUrl}/users/donor`);
  return response.data;
}

export async function getDonationCamps() {
  const response = await axios.get(`${baseUrl}/donationcamp`);
  return response.data;
}

export async function viewDetails(id: string) {
  const sent_url = `${baseUrl}/users/${id}`;
  const result = axios.get(sent_url);
  const response = await result;
  return response.data;
}

export async function getInventoryById(id: string) {
  const response = await axios.get(`${baseUrl}/inventory/${id}`);
  return response.data;
}
