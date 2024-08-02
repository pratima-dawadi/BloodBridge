import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import { IDonate, IRequest } from "../interfaces/donateRequest.interfaces";

export async function donateBlood(recipientId: string, donorInfo: IDonate) {
  try {
    const response = await axios.post(
      `${baseUrl}/donate/${recipientId}`,
      donorInfo,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function requestBlood(supplierId: string, requestInfo: IRequest) {
  try {
    const response = await axios.post(
      `${baseUrl}/request/${supplierId}`,
      requestInfo,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getRequestHistory() {
  try {
    const response = await axios.get(`${baseUrl}/request`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getDonationHistory() {
  try {
    const response = await axios.get(`${baseUrl}/donate`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getUrgencyDonorMail(bloodGroup: string) {
  try {
    const encodedBloodGroup = encodeURIComponent(bloodGroup);
    const response = await axios.get(
      `${baseUrl}/donoremail/?bloodGroup=${encodedBloodGroup}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function sendUrgencyMail(mail: any) {
  try {
    const response = await axios.post(`${baseUrl}/send-email`, mail);
    return JSON.stringify(response.data);
  } catch (error) {
    return error;
  }
}
