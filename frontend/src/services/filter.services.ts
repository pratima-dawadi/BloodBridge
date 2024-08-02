import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

export async function filterUser(
  name: string,
  district: string,
  location: string,
  bloodGroup: string
) {
  const encodedBloodGroup = encodeURIComponent(bloodGroup);
  const response = await axios.get(
    `${baseUrl}/filter/user?name=${name}&district=${district}&location=${location}&bloodGroup=${encodedBloodGroup}`
  );
  return response.data;
}

export async function filterHealthCenter(
  name: string,
  district: string,
  location: string,
  bloodGroup: string
) {
  const encodedBloodGroup = encodeURIComponent(bloodGroup);

  const response = await axios.get(
    `${baseUrl}/filter/healthcenter?name=${name}&district=${district}&location=${location}&bloodGroup=${encodedBloodGroup}`
  );

  return response;
}
