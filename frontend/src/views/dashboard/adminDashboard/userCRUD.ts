import { navigateTo } from "../../../scripts/eventHandlers/auth.eventHandler";
import {
  deleteUserById,
  updateUserById,
} from "../../../services/dashboard.services";

export async function userCRUD(users: any) {
  const adminDashboard = document.getElementById("admin-details");
  adminDashboard!.innerHTML = `
  <div class="container mt-5">
  <button class="btn btn-success" id="add-user">Add User</button>
  </div>
  <table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    ${users
      .map(
        (user: any) => `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="openUpdateModal(${user.id}, '${user.name}', '${user.email}', '${user.phone}','${user.district}','${user.location}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
        </td>
      </tr>
    `
      )
      .join("")}
  </tbody>
</table>
`;

  document.getElementById("add-user")!.addEventListener("click", () => {
    navigateTo("/signupuser");
  });

  document
    .getElementById("update-user-form")!
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const id = (document.getElementById("update-user-id") as HTMLInputElement)
        .value;
      const name = (document.getElementById("update-name") as HTMLInputElement)
        .value;
      const phone = (
        document.getElementById("update-phone") as HTMLInputElement
      ).value;
      const email = (
        document.getElementById("update-email") as HTMLInputElement
      ).value;
      const district = (
        document.getElementById("update-district") as HTMLInputElement
      ).value;
      const location = (
        document.getElementById("update-location") as HTMLInputElement
      ).value;

      const dataToUpdate = {
        name: name,
        phone: phone,
        email: email,
        district: district,
        location: location,
      };

      const response = await updateUserById(+id, dataToUpdate);
      alert(response);
      $("#updateUserModal").modal("hide");
      navigateTo("/admindashboard");
    });
}

(window as any).openUpdateModal = openUpdateModal;
(window as any).deleteUser = deleteUser;

export function openUpdateModal(
  id: number,
  name: string,
  email: string,
  phone: string,
  district: string,
  location: string
) {
  (document.getElementById("update-user-id") as HTMLInputElement).value =
    id.toString();
  (document.getElementById("update-name") as HTMLInputElement).value = name;
  (document.getElementById("update-phone") as HTMLInputElement).value = phone;
  (document.getElementById("update-email") as HTMLInputElement).value = email;
  (document.getElementById("update-district") as HTMLInputElement).value =
    district;
  (document.getElementById("update-location") as HTMLInputElement).value =
    location;
  $("#updateUserModal").modal("show");
}

export async function deleteUser(id: number) {
  const response = await deleteUserById(id);
  alert(response);
  navigateTo("/admindashboard");
}
