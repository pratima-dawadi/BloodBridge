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

  const user_role = "user";
  const donor_flag = false;
  const user = {
    name,
    email,
    password,
    phone,
    district,
    location,
    user_role,
    donor_flag,
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

  const images = (document.getElementById("imageInput") as HTMLInputElement)
    .value;

  const type = (document.getElementById("typeInput") as HTMLInputElement).value;

  const user_role = "health_center";
  const donor_flag = false;
  const healthcenter = {
    name,
    email,
    password,
    phone,
    district,
    location,
    user_role,
    donor_flag,
    images,
    type,
  };
  try {
    const response = await signUpHealthCenter(healthcenter);
    alert(JSON.stringify(response));
    console.log("Response from signup.ts:", response);
    navigateTo("/login");
  } catch (error) {
    console.error("Error during signup:", error);
  }
};
