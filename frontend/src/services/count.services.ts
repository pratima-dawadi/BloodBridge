import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

/**
 * The function `getDonorCount` makes an asynchronous request to fetch the count of donors from a
 * specified base URL using axios.
 * @returns The `getDonorCount` function is returning the data from the response if the request is
 * successful, and it is returning the error object if there is an error during the request.
 */
export async function getDonorCount() {
  try {
    const response = await axios.get(`${baseUrl}/donor/count`);
    return response.data;
  } catch (error) {
    return error;
  }
}

/**
 * The function `getHealthCenterCount` makes an asynchronous request to fetch the count of health
 * centers from a specified URL using axios in TypeScript.
 * @returns The `getHealthCenterCount` function is returning the data received from the API call to
 * count the health centers.
 */
export async function getHealthCenterCount() {
  try {
    const response = await axios.get(`${baseUrl}/donor/counthealthcenter`);
    return response.data;
  } catch (error) {
    return error;
  }
}

/**
 * This TypeScript function asynchronously fetches donor group data from a specified base URL using
 * axios.
 * @returns The `getDonorGroup` function is returning the data received from the API endpoint
 * `/donor/group` if the request is successful.
 */
export async function getDonorGroup() {
  try {
    const response = await axios.get(`${baseUrl}/donor/group`);
    return response.data;
  } catch (error) {
    return error;
  }
}
