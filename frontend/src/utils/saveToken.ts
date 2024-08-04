/**
 * The `saveToken` function in TypeScript saves a token to the local storage with the key "token".
 * @param {string} token - The `token` parameter is a string that represents the authentication token
 * that needs to be saved in the browser's `localStorage`.
 */
export async function saveToken(token: string) {
  localStorage.setItem("token", token);
}
