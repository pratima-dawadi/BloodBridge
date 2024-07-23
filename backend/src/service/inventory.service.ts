import { IInventory } from "../interfaces/inventory.interface";
import { InventoryModel } from "../model/inventory.model";

export async function createInventory(userId: string, body: IInventory) {
  return await InventoryModel.createInventory(userId, body);
}

export async function getInventory() {
  return await InventoryModel.getInventory();
}

export async function updateInventory(userId: string, body: IInventory) {
  return await InventoryModel.updateInventory(userId, body);
}
