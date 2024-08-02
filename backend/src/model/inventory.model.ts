import { IInventory } from "../interfaces/inventory.interface";
import { BaseModel } from "./base.model";

/**
 * The `InventoryModel` class in TypeScript contains methods for creating, retrieving, updating, and deleting inventory.
 */
export class InventoryModel extends BaseModel {
  static async createInventory(userId: string, body: IInventory) {
    const healthCenterId = this.queryBuilder()
      .select("id")
      .from("health_center")
      .where("userId", userId)
      .first();
    const dataHealthCenterId = await healthCenterId;

    const DonorInformationToCreate = {
      healthCenterId: dataHealthCenterId.id,
      bloodType: body.bloodType,
      quantity: body.quantity,
      collectionDate: body.collectionDate,
      expirationDate: body.expirationDate,
    };
    const query = this.queryBuilder()
      .insert(DonorInformationToCreate)
      .into("inventory");
    const data = await query;
    if (data) {
      return `Inventory for health center with id ${userId} is created`;
    }
    return `Unable to create inventory for health center with id ${userId}`;
  }

  static async getInventory() {
    const query = this.queryBuilder().select("*").from("inventory");
    const data = await query;
    return data;
  }

  static async getInventoryById(userId: string) {
    try {
      const healthCenterId = this.queryBuilder()
        .select("id")
        .from("health_center")
        .where("userId", +userId)
        .first();
      const id = await healthCenterId;
      const query = this.queryBuilder()
        .select("bloodType")
        .sum("quantity as totalQuantity")
        .from("inventory")
        .where("healthCenterId", id.id)
        .groupBy("bloodType");
      const data = await query;
      return data;
    } catch (error) {
      return error;
    }
  }

  static async updateInventory(userId: string, body: IInventory) {
    const healthCenterId = this.queryBuilder()
      .select("id")
      .from("health_center")
      .where("userId", userId)
      .first();
    const dataHealthCenterId = await healthCenterId;

    const dataToUpdate = {
      bloodType: body.bloodType,
      quantity: body.quantity,
      collectionDate: body.collectionDate,
      expirationDate: body.expirationDate,
    };
    const query = this.queryBuilder()
      .update(dataToUpdate)
      .from("inventory")
      .where("healthCenterId", dataHealthCenterId.id);
    const data = await query;
    if (data) {
      return `Inventory for health center with id ${userId} is updated`;
    }
    return `Unable to update inventory for health center with id ${userId}`;
  }

  static async getParticularInventory(userId: string) {
    const healthCenterId = this.queryBuilder()
      .select("id")
      .from("health_center")
      .where("userId", userId)
      .first();
    const dataHealthCenterId = await healthCenterId;

    const query = this.queryBuilder()
      .select("bloodType")
      .sum("quantity as totalQuantity")
      .from("inventory")
      .where("healthCenterId", dataHealthCenterId.id)
      .groupBy("bloodType");
    const data = await query;
    return data;
  }
}
