import {
  getAllHealthCenters,
  getAllUsers,
  getInventoryDetails,
} from "../../services/dashboard.services";
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
  getDonationHistoryAll,
  getRequestHistory,
  getRequestHistoryAll,
} from "../../services/donateRequest.services";
import { getDetails } from "../../services/auth.services";
import { dashboardLoad } from "./userDashboard/dashboardLoad";
import { userCRUD } from "./adminDashboard/userCRUD";
import { hcCRUD } from "./adminDashboard/hcCRUD";
import { donationCampCRUD } from "./adminDashboard/donationCampCRUD";
import { donationCRUD } from "./adminDashboard/donationCRUD";
import { requestCRUD } from "./adminDashboard/requestCRUD";
import { getDonationCamps } from "../../services/home.services";

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

export async function handleUserCRUD() {
  const users = await getAllUsers();
  userCRUD(users);
}

export async function handleHcCRUD() {
  const healthCenters = await getAllHealthCenters();
  hcCRUD(healthCenters);
}

export async function handleDonationCampCRUD() {
  const donationCamps = await getDonationCamps();
  console.log(donationCamps);
  donationCampCRUD(donationCamps);
}

export async function handleDonationCRUD() {
  const donations = await getDonationHistoryAll();
  console.log(donations);
  donationCRUD(donations);
}

export async function handleRequestCRUD() {
  const requests = await getRequestHistoryAll();
  console.log(requests);
  requestCRUD(requests);
}
