import { navigateTo } from "../../../scripts/eventHandlers/auth.eventHandler";
import { getDetails } from "../../../services/auth.services";
import { setDonorInformation } from "../../../services/dashboard.services";

export async function setDonor() {
  const getUserDashboard = document.getElementById("user-dashboard");
  getUserDashboard!.innerHTML = `
  <div class="row">
  <div class="col">
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select class="form-control" id="gender" required>
            <option value="Gender" selected>Gender</option>
            <option value="Male" >Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="bloodGroup">Blood Group:</label>
          <select class="form-control" id="bloodGroup" required>
            <option value="">Blood Group</option>
            <option value="O+">O+</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div class="form-group">
          <label for="weight">Weight:</label>
          <input
            type="number"
            class="form-control"
            id="weight"
            placeholder="Weight"
            required
          />
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input
            type="number"
            class="form-control"
            id="age"
            placeholder="Age"
            required
          />
        </div>
        </div>
        <div class="col">
                <div class="form-group">
          <label for="lastDonationDate">Last Donation Date</label>
          <input type="date" class="form-control" id="lastDonationDate" required />
        </div>

                <div class="form-group">
          <label for="donationCount">Donation Count:</label>
          <input
            type="number"
            class="form-control"
            id="donationCount"
            placeholder="Donation count"
            required
          />
        </div>

        <div class="form-group d-flex justify-content-between">
          <button class="btn btn-primary" id="submit-donor-information">Save</button>
        </div>
        </div>
        </div>`;

  const submitDonorInformation = document.getElementById(
    "submit-donor-information"
  );
  submitDonorInformation!.addEventListener("click", async () => {
    const userGender = document.getElementById("gender") as HTMLInputElement;
    const userBloodGroup = document.getElementById(
      "bloodGroup"
    ) as HTMLInputElement;
    const userWeight = document.getElementById("weight") as HTMLInputElement;
    const userAge = document.getElementById("age") as HTMLInputElement;
    const userLastDonationDate = document.getElementById(
      "lastDonationDate"
    ) as HTMLInputElement;
    const userDonationCount = document.getElementById(
      "donationCount"
    ) as HTMLInputElement;

    const getUserId = await getDetails();

    const donorInformation = {
      userId: getUserId.userId,
      gender: userGender.value,
      bloodGroup: userBloodGroup.value,
      lastDonated: userLastDonationDate.value,
      donatedCount: userDonationCount.value,
      weight: userWeight.value,
      age: userAge.value,
    };

    const response = await setDonorInformation(donorInformation);

    alert(response);
    navigateTo("/userDashboard");
  });
}
