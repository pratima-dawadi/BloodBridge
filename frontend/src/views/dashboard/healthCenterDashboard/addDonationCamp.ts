import { addDonationCampService } from "../../../services/dashboard.services";

/**
 * The function `addDonationCamp` dynamically creates a form to add a donation camp with fields for
 * title, district, location, date, and timeframe, and submits the data to a service for processing.
 */
export async function addDonationCamp() {
  const userDashboard = document.getElementById("healthcenter-details");
  userDashboard!.innerHTML = `
  <div class="container mt-5">
  <h2>Add Donation Camp</h2>
  <form id="donation-camp-form">
    <div class="form-group">
      <label for="title">Title of Donation Camp</label>
      <input type="text" class="form-control" id="title" placeholder="Enter the title of the donation camp" required>
    </div>
    <div class="form-group">
      <label for="district">District</label>
      <input type="text" class="form-control" id="district" placeholder="Enter the district" required>
    </div>
    <div class="form-group">
      <label for="location">Location</label>
      <input type="text" class="form-control" id="location" placeholder="Enter the location" required>
    </div>
    <div class="form-group">
      <label for="date">Date</label>
      <input type="date" class="form-control" id="date" required>
    </div>
    <div class="form-group">
      <label for="timeframe">Timeframe</label>
      <input type="text" class="form-control" id="timeframe" placeholder="(e.g. 10:00)" required>
    </div>
    <button type="submit" class="btn btn-primary">Add Donation Camp</button>
  </form>
</div>
`;
  const donationCampForm = document.getElementById(
    "donation-camp-form"
  ) as HTMLFormElement;
  donationCampForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = (document.getElementById("title") as HTMLInputElement).value;
    const district = (document.getElementById("district") as HTMLInputElement)
      .value;
    const location = (document.getElementById("location") as HTMLInputElement)
      .value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const timeFrame = (document.getElementById("timeframe") as HTMLInputElement)
      .value;

    const donationCamp = {
      name,
      district,
      location,
      date,
      timeFrame,
    };
    const response = await addDonationCampService(donationCamp);
    alert(response);
    donationCampForm.reset();
  });
}
