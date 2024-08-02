import { addInventoryService } from "../../../services/dashboard.services";

/**
 * The `addInventory` function creates a form for adding inventory details like blood type,
 * quantity, collection date, and expiration date, and upon submission, it sends the data to a service
 * function for processing.
 */
export async function addInventory() {
  const userDashboard = document.getElementById("healthcenter-details");
  userDashboard!.innerHTML = `<div class="container mt-5">
  <h2>Add Inventory</h2>
  <form id="inventory-form">
    <div class="form-group">
      <label for="bloodType">Blood Type</label>
      <select class="form-control" id="bloodType" required>
        <option value="">Select Blood Type</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </div>
    <div class="form-group">
      <label for="quantity">Quantity</label>
      <input type="number" class="form-control" id="quantity" required>
    </div>
    <div class="form-group">
      <label for="collectionDate">Collection Date</label>
      <input type="date" class="form-control" id="collectionDate" required>
    </div>
    <div class="form-group">
      <label for="expirationDate">Expiration Date</label>
      <input type="date" class="form-control" id="expirationDate" required>
    </div>
    <button type="submit" class="btn btn-primary">Add Inventory</button>
  </form>
</div>`;

  const inventoryForm = document.getElementById(
    "inventory-form"
  ) as HTMLFormElement;
  inventoryForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const bloodType = (
      document.getElementById("bloodType") as HTMLSelectElement
    ).value;
    const quantity = (document.getElementById("quantity") as HTMLInputElement)
      .value;
    const collectionDate = (
      document.getElementById("collectionDate") as HTMLInputElement
    ).value;
    const expirationDate = (
      document.getElementById("expirationDate") as HTMLInputElement
    ).value;

    const inventory = {
      bloodType,
      quantity,
      collectionDate,
      expirationDate,
    };

    const response = await addInventoryService(inventory);
    alert(response);
    inventoryForm.reset();
  });
}
