import { navigateTo } from "../../../scripts/eventHandlers/auth.eventHandler";
import { deleteDonationCamp } from "../../../services/dashboard.services";

export async function donationCampCRUD(donationCamps: any) {
  const adminDashboard = document.getElementById("admin-details");
  adminDashboard!.innerHTML = `
  <table class="table">
  <thead>
    <tr>
    <th>ID</th>
      <th>Created By</th>
      <th>Name</th>
      <th>District</th>
      <th>Location</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    ${donationCamps
      .map(
        (donationCamp: any) => `
      <tr>
        <td>${donationCamp.id}</td>
        <td>${donationCamp.healthCenterName}</td>
        <td>${donationCamp.name}</td>
        <td>${donationCamp.location}</td>
        <td>${donationCamp.district}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteDonationCamp(${donationCamp.id})">Delete</button>
        </td>
      </tr>    `
      )
      .join("")}
  </tbody>
</table>
`;
}

(window as any).deleteDonationCamp = deleteCamp;

export async function deleteCamp(id: number) {
  const response = await deleteDonationCamp(id);
  alert(response);
  navigateTo("/admindashboard");
}
