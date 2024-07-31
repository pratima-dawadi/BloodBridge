import { updateUser } from "../../../services/dashboard.services";

export function hcProfile(UserDetails: any) {
  const userDashboard = document.getElementById("healthcenter-details");
  userDashboard!.innerHTML = `
    <div class="row">
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
        <div class="form-group d-flex justify-content-between">
          <button class="btn btn-primary" id="update-hc-button">Save</button>
        </div>
        </div>
      </div>
    </div>
    `;
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

  const updateButton = document.getElementById("update-hc-button");

  updateButton?.addEventListener("click", async () => {
    const dataToUpdate = {
      name: userNameElement.value,
      email: userEmailElement.value,
      phone: userPhoneElement.value,
      district: userDistrictElement.value,
      location: userLocationElement.value,
    };

    //updating the health center profile
    const response = await updateUser(dataToUpdate);
    alert(response);
  });
}