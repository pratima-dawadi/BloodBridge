import { viewDetails } from "../../services/home.services";

export async function getDetails(id: string) {
  const response = await viewDetails(id);
  const detailsDiv = document.getElementById("view-details");
  if (detailsDiv && response.length > 0) {
    const item = await response[0];
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
            <h6>Map:</h6>
            <div id="map" style="width: 600px; height: 450px;"></div>
          </div>
        </div>
      </div>
    `;
  }
}
