import {
  getDetailsById,
  getRespectiveDetailsById,
} from "../../services/auth.services";
import { getInventoryById } from "../../services/home.services";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";
import { baseUrl } from "../../utils/baseUrl";
Chart.register(PieController, ArcElement, Tooltip, Legend);

export async function getDetails(id: string) {
  const getDetails = await getDetailsById(+id);
  const response = await getRespectiveDetailsById(+id);
  const userType = getDetails.userRole;

  const detailsDiv = document.getElementById("view-details");
  if (detailsDiv) {
    const item = await response;
    detailsDiv.innerHTML = `
      <div class="card mb-3" id="detail-page">
        <div class="card-body">
          <h2><strong>HEALTH CENTER DETAILS</strong></h2>
            <div class="health-center-image-container">
                <img src="${baseUrl}/${
      item.image
    }" alt="Health Center Image" class="health-center-image">
          </div>
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
          <p class="card-text"><strong> Type: </strong>${item.type}</p>
          <div class="health-center-inventory">
                <canvas id="health-center-inventory"></canvas>
          </div>
        </div>
      </div>
    `;

    if (userType === "user") {
      const item = await response;
      detailsDiv.innerHTML = `
      <div class="card mb-3">
        <div class="card-body">
        <h2><strong>USER DETAILS</strong></h2>
          <p class="card-text"><strong>Name:</strong> ${item.name}</p>
          <p class="card-text"><strong>Email:</strong> ${item.email}</p>
          <p class="card-text"><strong>Phone:</strong> ${item.phone}</p>
          <p class="card-text"><strong>Location:</strong> ${item.location}, ${
        item.district
      }</p>
          <p class="card-text"><strong>Role:</strong> ${item.userRole}</p>
          <p class="card-text"><strong>Donor:</strong> ${
            item.donorFlag ? "Yes" : "No"
          }</p>
          <p class="card-text"><strong>Weight:</strong> ${item.weight}</p>
          <p class="card-text"><strong> Age: </strong>${item.age}</p>
          <p class="card-text"><strong>Blood Group:</strong> ${
            item.bloodGroup
          }</p>
          <p class="card-text"><strong>Last Donated Date:</strong> ${new Date(
            item.lastDonated
          ).toLocaleString()}</p>
          <p class="card-text"><strong>Donation Count:</strong> ${
            item.donatedCount
          }</p>
          <div class="health-center-inventory">
                <canvas id="health-center-inventory"></canvas>
          </div>
        </div>
      </div>
    `;
    }

    if (userType === "health_center") {
      const inventories = await getInventoryById(id);
      console.log(`inventories: ${JSON.stringify(inventories)}`);
      const labels = inventories.map((inventory: any) => inventory.bloodType);
      const data = inventories.map((inventory: any) => inventory.totalQuantity);

      const ctx = document.getElementById(
        "health-center-inventory"
      ) as HTMLCanvasElement;
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Inventory Quantity",
              data: data,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 206, 86)",
                "rgb(75, 192, 192)",
                "rgb(153, 102, 255)",
                "rgb(255, 159, 64)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 206, 86)",
                "rgb(75, 192, 192)",
                "rgb(153, 102, 255)",
                "rgb(255, 159, 64)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.label || "";
                  if (label) {
                    label += ": ";
                  }
                  label += context.raw;
                  return label;
                },
              },
            },
          },
        },
      });
    }
  }
}
