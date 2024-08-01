import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

export async function updateUser(healthcenter: any) {
  try {
    const response = await axios.put(`${baseUrl}/users/update`, healthcenter, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getInventoryDetails() {
  try {
    const response = await axios.get(`${baseUrl}/inventory/particular`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function addInventoryService(inventory: any) {
  try {
    const response = await axios.post(`${baseUrl}/inventory`, inventory, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function setFlag() {
  try {
    const authorizationToken = localStorage.getItem("token");
    console.log(authorizationToken);
    const response = await axios.put(`${baseUrl}/donor`, "", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function setDonorInformation(donor: any) {
  try {
    const response = await axios.post(`${baseUrl}/donor`, donor, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getDonorInformation() {
  try {
    const response = await axios.get(`${baseUrl}/donor`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(`donor information: ${JSON.stringify(response.data)}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function updateDonorInformation(donorInfo: any) {
  try {
    const response = await axios.put(`${baseUrl}/donor/update`, donorInfo, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function addDonationCampService(donationCamp: any) {
  try {
    const response = await axios.post(`${baseUrl}/donationcamp`, donationCamp, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
