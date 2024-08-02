import {
  handleDonationHistory,
  handleHCProfile,
  handleHCRequestHistory,
  handleInventory,
  handleRequestHistory,
  handleUpdateProfile,
  handleAddInventory,
  handleSetDonor,
  handleaddDonationCamp,
} from "../../views/dashboard/dashboard";

export const userdashboard = async () => {
  document.getElementById("profile-button")?.addEventListener("click", () => {
    handleUpdateProfile();
  });

  document
    .getElementById("donation-history-button")
    ?.addEventListener("click", async () => {
      await handleDonationHistory();
    });
  document
    .getElementById("request-history-button")
    ?.addEventListener("click", () => {
      handleRequestHistory();
    });
  document.getElementById("set-donor-button")?.addEventListener("click", () => {
    handleSetDonor();
  });
};

export const healthCenterDashboard = () => {
  document.getElementById("hc-profile")?.addEventListener("click", () => {
    handleHCProfile();
  });

  document
    .getElementById("hc-request-history")
    ?.addEventListener("click", () => {
      handleHCRequestHistory();
    });
  document.getElementById("hc-add-inventory")?.addEventListener("click", () => {
    handleAddInventory();
  });
  document.getElementById("hc-inventory")?.addEventListener("click", () => {
    handleInventory();
  });
  document
    .getElementById("hc-add-donation-camp")
    ?.addEventListener("click", () => {
      handleaddDonationCamp();
    });
};
