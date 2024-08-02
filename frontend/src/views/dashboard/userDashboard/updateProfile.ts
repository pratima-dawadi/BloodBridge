import { getDetails } from "../../../services/auth.services";
import {
  getDonorInformation,
  updateDonorInformation,
  updateUser,
} from "../../../services/dashboard.services";

export function updateProfile(UserDetails: any) {
  const getUserDashboard = document.getElementById("user-dashboard");
  getUserDashboard!.innerHTML = `
    <div class="row container mt-5">
      <div class="col">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="mobile">Phone:</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            placeholder="Phone Number"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div class="form-group">
          <label for="district">District:</label>
          <input
            type="text"
            class="form-control"
            id="district"
            placeholder="District"
            required
          />
        </div>
        <div class="form-group">
          <label for="address">Location:</label>
          <input
            type="text"
            class="form-control"
            id="location"
            placeholder="Location"
            required
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select class="form-control" id="gender" required>
            <option value="" selected>Gender</option>
            <option value="Male" selected>Male</option>
            <option value="Female">Female</option>
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

        <div class="form-group d-flex justify-content-between">
          <button class="btn btn-primary" id="update-button">Save</button>
        </div>
      </div>
    </div>
  </div>`;

  const userName = UserDetails.name;
  const userEmail = UserDetails.email;
  const userPhone = UserDetails.phone;
  const userDistrict = UserDetails.district;
  const userLocation = UserDetails.location;

  const userNameElement = document.getElementById("name") as HTMLInputElement;
  userNameElement.value = userName;

  const userEmailElement = document.getElementById("email") as HTMLInputElement;
  userEmailElement.value = userEmail;

  const userPhoneElement = document.getElementById("phone") as HTMLInputElement;
  userPhoneElement.value = userPhone;

  const userDistrictElement = document.getElementById(
    "district"
  ) as HTMLInputElement;
  userDistrictElement.value = userDistrict;

  const userLocationElement = document.getElementById(
    "location"
  ) as HTMLInputElement;
  userLocationElement.value = userLocation;

  const updateButton = document.getElementById(
    "update-button"
  ) as HTMLButtonElement;

  updateButton?.addEventListener("click", async () => {
    const dataToUpdate = {
      name: userNameElement.value,
      email: userEmailElement.value,
      phone: userPhoneElement.value,
      district: userDistrictElement.value,
      location: userLocationElement.value,
    };
    const response = await updateUser(dataToUpdate);
    alert(response);
    updateButton.disabled = true;
  });

  donorInformationHandle();
}

export async function donorInformationHandle() {
  const getDonorFlag = await getDetails();
  const donorFlag = getDonorFlag.donorFlag;

  const genderDiv = document.getElementById("gender") as HTMLSelectElement;
  const bloodGroupDiv = document.getElementById(
    "bloodGroup"
  ) as HTMLSelectElement;
  const weightDiv = document.getElementById("weight") as HTMLInputElement;
  const ageDiv = document.getElementById("age") as HTMLInputElement;

  if (!donorFlag) {
    genderDiv.disabled = true;
    bloodGroupDiv.disabled = true;
    weightDiv.disabled = true;
    ageDiv.disabled = true;
  } else {
    const getDonorInfo = await getDonorInformation();
    genderDiv.disabled = false;
    bloodGroupDiv.disabled = false;
    weightDiv.disabled = false;
    ageDiv.disabled = false;

    genderDiv.value = getDonorInfo.gender;
    bloodGroupDiv.value = getDonorInfo.bloodGroup;
    weightDiv.value = getDonorInfo.weight;
    ageDiv.value = getDonorInfo.age;

    const updateButton = document.getElementById("update-button");

    updateButton?.addEventListener("click", async () => {
      const dataToUpdate = {
        gender: genderDiv.value,
        bloodGroup: bloodGroupDiv.value,
        weight: weightDiv.value,
        age: ageDiv.value,
      };
      await updateDonorInformation(dataToUpdate);
    });
  }
}
