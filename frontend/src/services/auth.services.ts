import axios from "axios";

import { IUser } from "../interfaces/user.interfaces";

import { baseUrl } from "../utils/baseUrl";

/**
 *  `logIn` function sends a POST request to a login endpoint with email and password parameters.
 * @param {string} email - represents the email address of the user trying to log in.
 * @param {string} password - represents the user's password.
 * @returns return the data from the response if the login request is successful.
 */
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

/**
 * `signUpUser` function sends a POST request to a signup endpoint with user parameters.
 * @param {IUser} user - represents the user object with the user's details.
 * @returns return the data from the response if the signup request is successful.
 */
export async function signUpUser(user: IUser) {
  try {
    const response = await axios.post(`${baseUrl}/users/signup`, user);
    return response.data;
  } catch (error) {
    return error;
  }
}

/**
 * `signUpHealthCenter` function sends a POST request to a signup/donor endpoint with donor parameters.
 * @param {FormData} donor - represents the donor object with the donor's details.
 * @returns return the data from the response if the signup request is successful.
 */
export async function signUpHealthCenter(healthcenter: FormData) {
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

/**
 * This TypeScript function asynchronously fetches a user ID from a server using an authorization token
 * stored in local storage.
 * @returns The `getId` function is returning the data from the response if the request is successful.
 * If there is an error during the request, it will return the error object.
 */
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

/**
 * The function `getDetails` makes an asynchronous request to fetch user details using an authorization
 * token stored in local storage.
 * @returns The `getDetails` function is returning the data from the API response if the request is
 * successful. If there is an error during the API call, the function will return the error object.
 */
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

/**
 * The function `getDetailsById` asynchronously fetches user details by ID using axios in TypeScript.
 * @param {number} id - represents the unique identifier of a user.
 * @returns return the data fetched from the API endpoint `/users/` if the request is successful.
 */
export async function getDetailsById(id: number) {
  try {
    const response = await axios.get(`${baseUrl}/users/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getRespectiveDetailsById(id: number) {
  try {
    const response = await axios.get(`${baseUrl}/users/details/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
