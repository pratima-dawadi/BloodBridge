import { navigateTo } from "../../scripts/eventHandlers/auth.eventHandler";
import { getDetails, logIn } from "../../services/auth.services";
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
    if (response.accessToken) {
      await saveToken(response.accessToken);
      const getRole = await getDetails();
      localStorage.setItem("userRole", getRole.userRole);
      navigateTo("/");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export default handleLogin;
