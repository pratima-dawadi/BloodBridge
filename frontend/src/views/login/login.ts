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
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export default handleLogin;
