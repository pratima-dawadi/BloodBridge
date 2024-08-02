import axios from "axios";
import { baseUrl } from "../utils/baseUrl";

/**
 * updates a user's information using an HTTP PUT request with authorization headers.
 * @param {any} healthcenter - The `healthcenter` parameter in the `updateUser` function is an object
 * containing the data of the user to be updated.
 * @returns return the data from the response if the update was successful.
 */
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

/**
 * gets the inventory details of health center using an HTTP GET request with authorization headers.
 * @returns return the data from the response if the get was successful.
 */
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

/**
 * add the inventory details of health center
 * @returns return the data from the response if the get was successful.
 */
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
    const response = await axios.put(`${baseUrl}/donor`, "", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
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

export async function getAllUsers() {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getAllHealthCenters() {
  try {
    const response = await axios.get(`${baseUrl}/users/healthcenter`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function deleteUserById(id: number) {
  try {
    const response = await axios.delete(`${baseUrl}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function updateUserById(id: number, user: any) {
  try {
    const response = await axios.put(`${baseUrl}/users/${id}`, user, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function deleteDonationCamp(id: number) {
  try {
    const response = await axios.delete(`${baseUrl}/donationcamp/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
