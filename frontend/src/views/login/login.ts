import { logIn } from "../../services/auth.services";
import { saveToken } from "../../utils/saveToken";

const handleLogin = async (event: Event) => {
  event.preventDefault();
  const email = (document.getElementById("emailInput") as HTMLInputElement)
    .value;
  const password = (
    document.getElementById("passwordInput") as HTMLInputElement
  ).value;

  try {
    const response = await logIn(email, password);
    alert(JSON.stringify(response));
    saveToken(response.accessToken);

    const signupElement = document.getElementById("signup-user-link");
    if (signupElement) {
      signupElement.style.display = "none";
    }
    const signupHealthCenterElement = document.getElementById(
      "signup-healthcenter-link"
    );
    if (signupHealthCenterElement) {
      signupHealthCenterElement.style.display = "none";
    }
    const loginElement = document.getElementById("login-link");
    if (loginElement) {
      loginElement.innerHTML = "Logout";
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export default handleLogin;
