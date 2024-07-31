import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";
import { IInventory } from "../../../interfaces/inventory.interfaces";
Chart.register(PieController, ArcElement, Tooltip, Legend);

export function inventory(inventories: IInventory[]) {
  const userDashboard = document.getElementById("healthcenter-details");

  if (userDashboard) {
    let tableContent = `
        <div class="container mt-5" id="user-dashboard" style="display: flex;">
          <div style="flex: 1; padding-right: 20px;">
            <h2>Inventory</h2>
            <table class="table table-striped wide-table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Blood Type</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
      `;

    inventories.forEach((inventory, index) => {
      tableContent += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${inventory.bloodType}</td>
            <td>${inventory.totalQuantity}</td>
          </tr>
        `;
    });

    tableContent += `
              </tbody>
            </table>
          </div>
          <div style="flex: 1;">
            <canvas id="inventoryPieChart"></canvas>
          </div>
        </div>
      `;

    userDashboard.innerHTML = tableContent;

    const labels = inventories.map((inventory) => inventory.bloodType);
    const data = inventories.map((inventory) => inventory.totalQuantity);

    const ctx = document.getElementById(
      "inventoryPieChart"
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
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
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
  } else {
    console.error("Element with id 'healthcenter-details' not found.");
  }
}
