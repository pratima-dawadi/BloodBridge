import { navigateTo } from "../../scripts/eventHandlers/auth.eventHandler";
import { signUpHealthCenter, signUpUser } from "../../services/auth.services";

export const handleSignUpUser = async (event: Event) => {
  event.preventDefault();
  const name = (document.getElementById("nameInput") as HTMLInputElement).value;
  const email = (document.getElementById("emailInput") as HTMLInputElement)
    .value;
  const password = (
    document.getElementById("passwordInput") as HTMLInputElement
  ).value;
  const phone = (document.getElementById("phoneInput") as HTMLInputElement)
    .value;

  const district = (
    document.getElementById("districtInput") as HTMLInputElement
  ).value;

  const location = (
    document.getElementById("locationInput") as HTMLInputElement
  ).value;

  const userRole = "user";
  const donorFlag = false;
  const user = {
    name,
    email,
    password,
    phone,
    district,
    location,
    userRole,
    donorFlag,
  };
  try {
    const response = await signUpUser(user);
    alert(JSON.stringify(response));
    console.log("Response from signup.ts:", response);
    navigateTo("/login");
  } catch (error) {
    console.error("Error during signup:", error);
  }
};

export const handleSignUpHealthCenter = async (event: Event) => {
  event.preventDefault();
  const name = (document.getElementById("nameInput") as HTMLInputElement).value;
  const email = (document.getElementById("emailInput") as HTMLInputElement)
    .value;
  const password = (
    document.getElementById("passwordInput") as HTMLInputElement
  ).value;
  const phone = (document.getElementById("phoneInput") as HTMLInputElement)
    .value;

  const district = (
    document.getElementById("districtInput") as HTMLInputElement
  ).value;

  const location = (
    document.getElementById("locationInput") as HTMLInputElement
  ).value;

  const image = (document.getElementById("imageInput") as HTMLInputElement)
    .files![0];

  const type = (document.getElementById("typeInput") as HTMLInputElement).value;

  const userRole = "health_center";
  const donorFlag = false;

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("phone", phone);
  formData.append("district", district);
  formData.append("location", location);
  formData.append("userRole", userRole);
  formData.append("donorFlag", donorFlag.toString());
  formData.append("image", image);
  formData.append("type", type);

  try {
    const response = await signUpHealthCenter(formData);
    alert(JSON.stringify(response));
    console.log("Response from signup.ts:", response);
    navigateTo("/login");
  } catch (error) {
    console.error("Error during signup:", error);
  }
};
