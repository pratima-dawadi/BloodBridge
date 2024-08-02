import { getInventoryDetails } from "../../services/dashboard.services";
import { hcProfile } from "./healthCenterDashboard/hcProfile";
import { hcRequestHistory } from "./healthCenterDashboard/hcRequestHistory";
import { inventory } from "./healthCenterDashboard/inventory";
import { setDonor } from "./userDashboard/setDonor";
import { donationHistory } from "./userDashboard/donationHistory";
import { requestHistory } from "./userDashboard/requestHistory";
import { updateProfile } from "./userDashboard/updateProfile";
import { addInventory } from "./healthCenterDashboard/addInventory";
import { addDonationCamp } from "./healthCenterDashboard/addDonationCamp";
import {
  getDonationHistory,
  getRequestHistory,
} from "../../services/donateRequest.services";
import { getDetails } from "../../services/auth.services";
import { dashboardLoad } from "./userDashboard/dashboardLoad";

export async function handleUpdateProfile() {
  const getUserProfile = await getDetails();
  updateProfile(getUserProfile);
}

export async function handleDonationHistory() {
  const donations = await getDonationHistory();
  await donationHistory(donations);
}

export async function handleRequestHistory() {
  const requests = await getRequestHistory();
  requestHistory(requests);
}

export function handleSetDonor() {
  setDonor();
}

export async function handleHCProfile() {
  const getUserProfile = await getDetails();
  hcProfile(getUserProfile);
}

export async function handleHCRequestHistory() {
  const requests = await getRequestHistory();
  hcRequestHistory(requests);
}

export async function handleAddInventory() {
  addInventory();
}

export async function handleInventory() {
  const getInventory = await getInventoryDetails();
  inventory(getInventory);
}

export async function handleaddDonationCamp() {
  addDonationCamp();
}

export async function handleDashboardLoad() {
  const donorFlag = await getDetails();
  dashboardLoad(donorFlag.donorFlag);
}
