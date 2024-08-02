import { navigateTo } from "../../../scripts/eventHandlers/auth.eventHandler";
import { deleteRequestById } from "../../../services/donateRequest.services";

export async function requestCRUD(requests: any) {
  const adminDashboard = document.getElementById("admin-details");
  adminDashboard!.innerHTML = `<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Requester Name</th>
      <th>Supplier Name</th>
      <th>Blood Group</th>
      <th>Quantity</th>
      <th>Request Date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    ${requests
      .map(
        (request: any) => `
      <tr>
        <td>${request.id}</td>
        <td>${request.requesterName}</td>
        <td>${request.supplierName}</td>
        <td>${request.bloodType}</td>
        <td>${request.quantity}</td>
        <td>${request.requestDate}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteRequest(${request.id})">Delete</button>
        </td>
      </tr>
    `
      )
      .join("")}
  </tbody>
</table>
`;
}

(window as any).deleteRequest = deleteRequest;

async function deleteRequest(id: number) {
  const response = await deleteRequestById(id);
  alert(response);
  navigateTo("/admindashboard");
}
