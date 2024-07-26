import { handleHealthCenterList, handleDonorList } from "../../views/home/home";

export const homeEventHandlers = () => {
  document
    .getElementById("get-health-center-list")
    ?.addEventListener("click", () => {
      handleHealthCenterList();
    });

  document.getElementById("get-donor-list")?.addEventListener("click", () => {
    handleDonorList();
  });
};
