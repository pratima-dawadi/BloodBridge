import { jwtDecode } from "jwt-decode";
import { IDonorInformation } from "../../interfaces/user.interfaces";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

export async function donateBlood(
  id: string,
  donorInfo: IDonorInformation,
  userType: string
) {
  console.log(
    `Donating blood to health center with ID: ${id} and name: ${donorInfo.name}`
  );
  console.log(`donor type: ${userType}`);

  const getToken = localStorage.getItem("token");
  console.log("Token:", getToken);
  const userPayload: any = jwtDecode(getToken!);
  console.log("Token Decoded:", userPayload);
  console.log(userPayload.id);

  const getInfo = await axios.get(`${baseUrl}/users/${userPayload.id}`);
  console.log("Response from id:", getInfo.data);
}
