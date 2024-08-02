import { setFlag } from "../../../services/dashboard.services";

/**
 * The `dashboardLoad` function handles the behavior of a donor button based on a boolean
 * flag.
 * @param {boolean} donorFlag - The `donorFlag` parameter in the `dashboardLoad` function is a boolean
 * value that determines whether a donor flag is set or not. If `donorFlag` is `true`, the donor button
 * will be disabled and the "active" class will be removed.
 */
let navFlag = 0;
export async function dashboardLoad(donorFlag: boolean) {
  const setDonorButton = document.getElementById(
    "set-donor-button"
  ) as HTMLButtonElement;

  if (setDonorButton) {
    if (donorFlag) {
      setDonorButton.disabled = true;
      setDonorButton.classList.remove("active");
    } else {
      setDonorButton.disabled = false;
      setDonorButton.classList.add("active");
      setDonorButton.addEventListener("click", async () => {
        const updateFlag = await setFlag();

        setDonorButton.disabled = true;
        alert(updateFlag);
      });
    }
  }

  const navBarElement = document.querySelector(".navbar") as HTMLElement;

  const accessToken = localStorage.getItem("token");

  if (accessToken && navFlag == 0) {
    navFlag = 1;

    const signupUser = document.getElementById("signup-user-link");
    (signupUser as HTMLElement).style.display = "none";

    const signupHealthCenter = document.getElementById(
      "signup-healthcenter-link"
    );
    (signupHealthCenter as HTMLElement).style.display = "none";

    const login = document.getElementById("login-link");
    (login as HTMLElement).style.display = "none";

    const logout = document.createElement("a");

    logout.href = "";
    logout.id = "logout-link";
    logout.innerText = "Logout";
    logout.classList.add("nav-link");

    navBarElement.appendChild(logout);

    logout.addEventListener("click", (event) => {
      event.preventDefault();

      localStorage.removeItem("token");
      localStorage.removeItem("userRole");

      window.location.href = "/";
    });
  }
}
