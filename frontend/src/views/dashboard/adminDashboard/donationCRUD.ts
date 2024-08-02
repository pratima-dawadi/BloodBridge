import { navigateTo } from "../../../scripts/eventHandlers/auth.eventHandler";
import { deleteDonationById } from "../../../services/donateRequest.services";

export async function donationCRUD(donations: any) {
  const adminDashboard = document.getElementById("admin-details");
  adminDashboard!.innerHTML = `<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Donor Name</th>
      <th>Recipient Name</th>
      <th>Blood Group</th>
      <th>Quantity</th>
      <th>Donated Date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    ${donations
      .map(
        (donation: any) => `
      <tr>
        <td>${donation.id}</td>
        <td>${donation.donorName}</td>
        <td>${donation.recipientName}</td>
        <td>${donation.bloodType}</td>
        <td>${donation.quantity}</td>
        <td>${donation.donationDate}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteDonation(${donation.id})">Delete</button>
        </td>
      </tr>
    `
      )
      .join("")}
  </tbody>
</table>
`;
}

(window as any).deleteDonation = deleteDonation;

async function deleteDonation(id: number) {
  const response = await deleteDonationById(id);
  alert(response);
  navigateTo("/admindashboard");
}
