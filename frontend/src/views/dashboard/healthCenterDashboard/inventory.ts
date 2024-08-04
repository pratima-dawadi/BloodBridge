import { IInventory } from "../../../interfaces/inventory.interfaces";
import { inventoryChart } from "./inventoryChart";

/**
 * The `inventory` function generates a dynamic inventory table and pie chart based on the provided
 * inventory data and displays it on the user dashboard element.
 */
export async function inventory(inventories: IInventory[]) {
  const userDashboard = document.getElementById("healthcenter-details");

  if (userDashboard) {
    const aggregatedData = inventories.reduce((acc, inventory) => {
      const { bloodType, totalQuantity } = inventory;
      const quantity = Number(totalQuantity);
      if (!isNaN(quantity)) {
        if (acc[bloodType]) {
          acc[bloodType] += quantity;
        } else {
          acc[bloodType] = quantity;
        }
      }
      return acc;
    }, {} as Record<string, number>);

    let tableContent = `
        <div class="container mt-5" id="user-dashboard" style="display: flex;">
          <div style="flex: 1; padding-right: 20px;">
            <h2>Inventory</h2>
            <table class="table table-striped wide-table inventory">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Blood Type</th>
                  <th scope="col">Collection Date</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
      `;

    inventories.forEach((inventory, index) => {
      const collectionDate = new Date(inventory.collectionDate);
      tableContent += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${inventory.bloodType}</td>
            <td class="collection-date">${
              collectionDate.toISOString().split("T")[0]
            }</td>
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

    await inventoryChart(aggregatedData);
  } else {
    console.error("Element with id 'healthcenter-details' not found.");
  }
}
