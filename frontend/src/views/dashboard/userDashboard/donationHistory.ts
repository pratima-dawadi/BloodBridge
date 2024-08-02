import { getDetails, getDetailsById } from "../../../services/auth.services";

export async function donationHistory(donations: any) {
  try {
    const requesterName = await getDetails();
    const getUserDashboard = document.getElementById("user-dashboard");

    if (getUserDashboard) {
      const rows = await Promise.all(
        donations.map(async (donation: any, index: any) => {
          const intRecipientId = parseInt(donation.recipientId);

          const recipientName = await getDetailsById(intRecipientId);
          return `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${requesterName.name}</td>
              <td>${donation.recipientType}</td>
              <td>${recipientName.name}</td>
              <td>${donation.bloodType}</td>
              <td>${donation.quantity}</td>
              <td>${new Date(donation.donationDate).toLocaleDateString()}</td>
            </tr>
          `;
        })
      );

      const tableContent = `
          <div class="container ">
            <h2>Request History</h2>
            <table class="table table-striped wide-table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Donor Name</th>
                  <th scope="col">Recipient Type</th>
                  <th scope="col">Recipient Name</th>
                  <th scope="col">Blood Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Donation Date</th>
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
