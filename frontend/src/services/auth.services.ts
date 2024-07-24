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
