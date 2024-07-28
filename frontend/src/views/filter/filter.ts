import {
  IDonorInformation,
  IHealthCenter,
} from "../../interfaces/user.interfaces";
import { handleButtons } from "../../scripts/eventHandlers/home.eventHandlers";
import { filterHealthCenter, filterUser } from "../../services/filter.services";

let userType = "";

export async function handleSearchButton(event: Event) {
  event.preventDefault();
  const filterName = (document.getElementById("filterName") as HTMLInputElement)
    .value;
  const filterDistrict = (
    document.getElementById("filterDistrict") as HTMLInputElement
  ).value;
  const filterLocation = (
    document.getElementById("filterLocation") as HTMLInputElement
  ).value;
  const filterBloodGroup = (
    document.getElementById("filterBloodType") as HTMLInputElement
  ).value;

  console.log(filterName, filterDistrict, filterLocation, filterBloodGroup);

  if (userType == "user") {
    const getFilterUsers = await filterUser(
      filterName,
      filterDistrict,
      filterLocation,
      filterBloodGroup
    );
    console.log(`getFilterUsers on views: ${JSON.stringify(getFilterUsers)}`);
    handleGetUser(getFilterUsers);
  }

  try {
    if (userType == "health_center") {
      const getFilterHealthCenter = await filterHealthCenter(
        filterName,
        filterDistrict,
        filterLocation,
        filterBloodGroup
      );
      console.log(
        `getFilterHealthCenter on views: ${JSON.stringify(
          getFilterHealthCenter
        )}`
      );

      const detailsDiv = document.getElementById("get-details");
      if (detailsDiv) {
        detailsDiv.innerHTML = getFilterHealthCenter.data
          .map(
            (center: IHealthCenter) => `
            <div class="card">
              <div class="card-body">
                <img src="../../../public/assets/img/bloodbank.png" alt="Health Center Image" style="align-self:center">
                <h5 class="card-title">ID: ${center.id}</h5>
                <p class="card-title"><strong></strong> ${center.name}</p>
                <p class="card-text"><strong>Phone:</strong> ${center.phone}</p>
                <p class="card-text"><strong>Location:</strong> ${
                  center.location
                }, ${center.district}</p>
                <p class="card-text"><strong>Type:</strong> ${center.type}</p>
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
    }
  } catch (error) {
    console.error("Error fetching health center details:", error);
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML =
        '<p class="text-danger">Failed to load health center details.</p>';
    }
  }
}

export function handleGetUser(getFilterUsers: any[]) {
  try {
    const detailsDiv = document.getElementById("get-details");
    if (detailsDiv) {
      detailsDiv.innerHTML = getFilterUsers
        .map(
          (donor: IDonorInformation) => `
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">ID: ${donor.id}</h5>
                        <p class="card-title"><strong></strong> ${
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
                        <div class="button-group">
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
}

export function getUserType(type: string) {
  console.log("User Type:", type);
  userType = type;
}
