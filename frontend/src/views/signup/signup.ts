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
    .value;

  const type = (document.getElementById("typeInput") as HTMLInputElement).value;

  const userRole = "health_center";
  const donorFlag = false;
  const healthcenter = {
    name,
    email,
    password,
    phone,
    district,
    location,
    userRole,
    donorFlag,
    image,
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
