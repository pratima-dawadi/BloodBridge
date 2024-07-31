import { setFlag } from "../../../services/dashboard.services";

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
}
