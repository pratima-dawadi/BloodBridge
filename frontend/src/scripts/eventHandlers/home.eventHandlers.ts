import {
  handleHealthCenterList,
  handleDonorList,
  handleDonationCampList,
} from "../../views/home/home";
import { navigateTo } from "../../scripts/eventHandlers/auth.eventHandler";
import { donateBlood } from "../../views/donateRequest/donate";
import { requestBlood } from "../../views/donateRequest/request";
import { getDetails } from "../../views/home/details";
import { handleSearchButton } from "../../views/filter/filter";

export const homeEventHandlers = () => {
  document
    .getElementById("get-health-center-list")
    ?.addEventListener("click", async () => {
      await navigateTo("/getlist");
      await handleHealthCenterList();
    });

  document
    .getElementById("get-donor-list")
    ?.addEventListener("click", async () => {
      await navigateTo("/getlist");
      await handleDonorList();
    });

  document
    .getElementById("get-donation-camp-list")
    ?.addEventListener("click", async () => {
      await navigateTo("/getlist");
      await handleDonationCampList();
    });

  document
    .getElementById("filter-form")
    ?.addEventListener("submit", async (event) => {
      const target = event.currentTarget as HTMLFormElement;
      const getType = target.getAttribute("data-id");
      handleSearchButton(event);
    });
};

export async function handleButtons() {
  document.querySelectorAll(".view-detail[data-id]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const id = target.getAttribute("data-id");
      if (id) {
        await navigateTo("/details");
        getDetails(id);
      }
    });
  });

  document.querySelectorAll(".request-blood[data-id]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const id = target.getAttribute("data-id");
      const supplierInfo = target.getAttribute("data-request");
      const userType = target.getAttribute("user-type");
      const token = localStorage.getItem("token");
      if (id && token) {
        const supplierData = JSON.parse(supplierInfo!);
        await navigateTo("/requestblood");
        requestBlood(id, supplierData!, userType!);
      } else {
        alert("Please login to request blood");
        navigateTo("/login");
      }
    });
  });

  document.querySelectorAll(".donate-blood[data-id]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const target = event.currentTarget as HTMLButtonElement;

      const id = target.getAttribute("data-id");
      const receiverInfo = target.getAttribute("data-request");
      const userType = target.getAttribute("user-type");
      const token = localStorage.getItem("token");
      if (id && token) {
        const receiverData = JSON.parse(receiverInfo!);
        await navigateTo("/donateblood");
        donateBlood(id, receiverData!, userType!);
      } else {
        alert("Please login to donate blood");
        navigateTo("/login");
      }
    });
  });
}
