import { viewDetails } from "../../services/home.services";

export async function getDetails(id: string) {
  const response = await viewDetails(id);
  console.log("Response from getDetails:", response);

  const detailsDiv = document.getElementById("view-details");
  if (detailsDiv) {
    const item = await response;
    detailsDiv.innerHTML = `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">ID: ${item.id}</h5>
          <p class="card-text"><strong>Name:</strong> ${item.name}</p>
          <p class="card-text"><strong>Email:</strong> ${item.email}</p>
          <p class="card-text"><strong>Phone:</strong> ${item.phone}</p>
          <p class="card-text"><strong>Location:</strong> ${item.location}, ${
      item.district
    }</p>
          <p class="card-text"><strong>Role:</strong> ${item.userRole}</p>
          <p class="card-text"><strong>Donor Flag:</strong> ${
            item.donorFlag ? "Yes" : "No"
          }</p>
          <p class="card-text"><strong>Created At:</strong> ${new Date(
            item.createdAt
          ).toLocaleString()}</p>
          <div>
          </div>
        </div>
      </div>
    `;
  }
}
