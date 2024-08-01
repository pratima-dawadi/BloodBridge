import {
  IDonorInformation,
  IHealthCenter,
} from "../../interfaces/user.interfaces";
import {
  getDonors,
  getHealthCenters,
  getDonationCamps,
} from "../../services/home.services";
import { handleButtons } from "../../scripts/eventHandlers/home.eventHandlers";
import { IDonationCamp } from "../../interfaces/donationCamp.interfaces";
import { getUserType } from "../filter/filter";
import { baseUrl } from "../../utils/baseUrl";

export const handleHealthCenterList = async () => {
  try {
    const healthCenters = await getHealthCenters();
    console.log("Health Centers:", healthCenters);
    getUserType("health_center");
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML = healthCenters
        .map(
          (center: IHealthCenter) => `
              <div class="card">
                <div class="card-body">
                <div class="health-center-image-container">
                <img src="${baseUrl}/${
            center.image
          }" alt="Health Center Image" class="health-center-image">
          </div>
                  <p class="card-title"><strong></strong> ${center.name}</p>
                  <p class="card-text"><strong>Phone:</strong> ${
                    center.phone
                  }</p>
                  <p class="card-text"><strong>Location:</strong> ${
                    center.location
                  }, ${center.district}</p>
                  <div class="button-group">
                  <button class="btn btn-secondary view-detail" data-id="${
                    center.userId
                  }">View Details</button>
                  <button class ="btn btn-secondary request-blood" data-id="${
                    center.userId
                  }" user-type="health_center" data-request='${JSON.stringify(
            center
          )}'>Request Blood</button>
                  <button class ="btn btn-secondary donate-blood" data-id="${
                    center.userId
                  }" user-type="health_center" data-request='${JSON.stringify(
            center
          )}'>Donate Blood</button>
          </div>
                </div>
              </div>
            `
        )
        .join("");
      handleButtons();
    }
  } catch (error) {
    console.error("Error fetching health center details:", error);
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML =
        '<p class="text-danger">Failed to load health center details.</p>';
    }
  }
};

export const handleDonorList = async () => {
  try {
    const donors = await getDonors();
    getUserType("user");
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML = donors
        .map(
          (donor: IDonorInformation) => `
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">ID: ${donor.id}</h5>
                    <p class="card-title"><strong></strong> ${donor.name}</p>
                    <p class="card-text"><strong>Gender:</strong> ${
                      donor.gender
                    }</p>
                    <p class="card-text"><strong>Blood Group:</strong> ${
                      donor.bloodGroup
                    }</p>
                    <p class="card-text"><strong>Last Donated:</strong> ${
                      donor.lastDonated
                    }</p>
                    <div class="button-group">
                    <button class="btn btn-secondary view-detail" data-id="${
                      donor.userId
                    }">View Details</button>
                    <button class ="btn btn-secondary request-blood" data-id="${
                      donor.userId
                    }" user-type="user" data-request='${JSON.stringify(
            donor
          )}'>Request Blood</button>
          </div>
          </div>
          </div>
              `
        )
        .join("");
      handleButtons();
    }
  } catch (error) {
    console.error("Error fetching health center details:", error);
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML =
        '<p class="text-danger">Failed to load health center details.</p>';
    }
  }
};

export const handleDonationCampList = async () => {
  try {
    const donationCamp = await getDonationCamps();
    console.log("Donation Camps:", donationCamp);
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML = donationCamp
        .map(
          (donationCamp: IDonationCamp) => `
                <div class="card">
                  <div class="card-body">
                    <p class="card-title"><strong>Donation Camp Title:</strong> ${donationCamp.name}</p>
                    <p class="card-text"><strong>Organized by:</strong> ${donationCamp.healthCenterName}</p>
                    <p class="card-text"><strong>Location:</strong>${donationCamp.location}, ${donationCamp.district}</p>
                    <p class="card-text"><strong>On:</strong> ${donationCamp.date}</p>
                    <p class="card-text"><strong>Time:</strong> ${donationCamp.timeFrame}</p>
                    <div class="button-group">
          </div>
          </div>
          </div>
              `
        )
        .join("");
      handleButtons();
    }
  } catch (error) {
    console.error("Error fetching health center details:", error);
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML =
        '<p class="text-danger">Failed to load health center details.</p>';
    }
  }
};
