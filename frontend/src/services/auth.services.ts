import axios from "axios";

import { IHealthCenter, IUser } from "../interfaces/user.interfaces";

import { baseUrl } from "../utils/baseUrl";

export async function logIn(email: string, password: string) {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function signUpUser(user: IUser) {
  try {
    const response = await axios.post(`${baseUrl}/users/signup`, user);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function signUpHealthCenter(healthcenter: IHealthCenter) {
  try {
    const response = await axios.post(
      `${baseUrl}/users/signup/healthcenter`,
      healthcenter
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getId() {
  try {
    const response = await axios.get(`${baseUrl}/users/id`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getDetails() {
  try {
    const response = await axios.get(`${baseUrl}/users/details`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getDetailsById(id: number) {
  try {
    console.log(`id sent: ${id}`);
    console.log(`url sent: ${baseUrl}/users/${id}`);
    const response = await axios.get(`${baseUrl}/users/${id}`);
    console.log("Response from getDetailsById:", response.data);
    return response.data;
  } catch (error) {
    return error;
  }
}
