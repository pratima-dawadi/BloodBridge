import {
  IDonorInformation,
  IHealthCenter,
} from "../../interfaces/user.interfaces";
import { navigateTo } from "../../scripts/eventHandlers/auth.eventHandler";
import { getDonors, getHealthCenters } from "../../services/home.services";
import { donateBlood } from "../donateRequest/donate";
import { requestBlood } from "../donateRequest/request";
import { getDetails } from "./details";

export const handleHealthCenterList = async () => {
  try {
    const healthCenters = await getHealthCenters();
    console.log("Health Centers:", healthCenters);
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML = healthCenters
        .map(
          (center: IHealthCenter) => `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">ID: ${center.id}</h5>
                  <p class="card-text"><strong>Name:</strong> ${center.name}</p>
                  <p class="card-text"><strong>Phone:</strong> ${
                    center.phone
                  }</p>
                  <p class="card-text"><strong>Location:</strong> ${
                    center.location
                  }, ${center.district}</p>
                  <p class="card-text"><strong>Type:</strong> ${center.type}</p>
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
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML = donors
        .map(
          (donor: IDonorInformation) => `
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">ID: ${donor.id}</h5>
                    <p class="card-text"><strong>Name:</strong> ${
                      donor.name
                    }</p>
                    <p class="card-text"><strong>Gender:</strong> ${
                      donor.gender
                    }</p>
                    <p class="card-text"><strong>Blood Group:</strong> ${
                      donor.bloodGroup
                    }</p>
                    <p class="card-text"><strong>Last Donated:</strong> ${
                      donor.lastDonated
                    }</p>
                    <button class="btn btn-secondary view-detail" data-id="${
                      donor.id
                    }">View Details</button>
                    <button class ="btn btn-secondary request-blood" data-id="${
                      donor.userId
                    }" user-type="user" data-request='${JSON.stringify(
            donor
          )}'>Request Blood</button>                  
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

export function handleButtons() {
  document.querySelectorAll(".view-detail[data-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const id = target.getAttribute("data-id");
      if (id) {
        getDetails(id);
        navigateTo("/details");
      }
    });
  });

  document.querySelectorAll(".request-blood[data-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const id = target.getAttribute("data-id");
      const requesterInfo = target.getAttribute("data-request");
      const userType = target.getAttribute("user-type");
      if (id) {
        const requesterData = JSON.parse(requesterInfo!);
        console.log("Requester Data:", requesterData);
        requestBlood(id, requesterData!, userType!);
        navigateTo("/requestblood");
      }
    });
  });

  document.querySelectorAll(".donate-blood[data-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const id = target.getAttribute("data-id");
      const donorInfo = target.getAttribute("data-request");
      const userType = target.getAttribute("user-type");
      if (id) {
        const donorData = JSON.parse(donorInfo!);
        console.log("Donor Data:", donorData);
        donateBlood(id, donorData!, userType!);
        navigateTo("/donateblood");
      }
    });
  });
}
