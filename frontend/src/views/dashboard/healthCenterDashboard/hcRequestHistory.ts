import { getDetails, getDetailsById } from "../../../services/auth.services";

/**
 * The function `hcRequestHistory` asynchronously fetches details and displays a table of request
 * history for a health center.
 * @param {any} requests - The `hcRequestHistory` function is an asynchronous function that takes an
 * array of `requests` as a parameter. The function then fetches details, constructs a table with
 * request history data, and displays it on the webpage.
 */
export async function hcRequestHistory(requests: any) {
  try {
    const requesterName = await getDetails();
    const getUserDashboard = document.getElementById("healthcenter-details");

    if (getUserDashboard) {
      const rows = await Promise.all(
        requests.map(async (request: any, index: any) => {
          const supplierName = await getDetailsById(
            parseInt(request.supplierId)
          );
          return `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${requesterName.name}</td>
            <td>${request.supplierType}</td>
            <td>${supplierName.name}</td>
            <td>${request.bloodType}</td>
            <td>${request.quantity}</td>
            <td>${new Date(request.requestDate).toLocaleDateString()}</td>
            <td>${new Date(request.requiredDate).toLocaleDateString()}</td>
          </tr>
        `;
        })
      );

      const tableContent = `
        <div class="container mt-5">
          <h2>Request History</h2>
          <table class="table table-striped wide-table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Requester Name</th>
                <th scope="col">Supplier Type</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Blood Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Request Date</th>
                <th scope="col">Required Date</th>
              </tr>
            </thead>
            <tbody>
              ${rows.join("")}
            </tbody>
          </table>
        </div>
      `;

      getUserDashboard.innerHTML = tableContent;
    } else {
      console.error("Element with id 'healthcenter-details' not found.");
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
}
