import { getUserQuery } from "../interfaces/user.interfaces";
import { BaseModel } from "./base.model";

/**
 * The `FilterModel` class in TypeScript contains methods for filtering users and health centers based on specified criteria.
 */
export class FilterModel extends BaseModel {
  static async filterUser(filter: getUserQuery) {
    const query = this.queryBuilder()
      .select(
        "users.id as userId",
        "users.name",
        "users.email",
        "users.phone",
        "users.district",
        "users.location",
        "donor_information.*"
      )
      .from("users")
      .leftJoin("donor_information", "users.id", "donorInformation.userId");

    query.andWhere("users.user_role", "user");
    query.andWhere("users.donorFlag", true);

    if (filter.name) {
      query.andWhere("users.name", "ilike", `%${filter.name}%`);
    }
    if (filter.district) {
      query.andWhere("users.district", "ilike", `%${filter.district}%`);
    }
    if (filter.location) {
      query.andWhere("users.location", "ilike", `%${filter.location}%`);
    }
    if (filter.bloodGroup) {
      query.andWhere("donorInformation.bloodGroup", filter.bloodGroup);
    }

    const data = await query;

    return data;
  }

  static async filterHealthCenter(filter: getUserQuery) {
    const query = this.queryBuilder()
      .select(
        "users.id as userId",
        "users.name",
        "users.email",
        "users.phone",
        "users.district",
        "users.location",
        "health_center.*",
        "inventory.bloodType"
      )
      .distinct()
      .from("users")
      .leftJoin("healthCenter", "users.id", "healthCenter.userId")
      .leftJoin("inventory", "healthCenter.id", "inventory.healthCenterId");

    query.andWhere("users.user_role", "health_center");

    if (filter.name) {
      query.andWhere("users.name", "ilike", `%${filter.name}%`);
    }
    if (filter.district) {
      query.andWhere("users.district", "ilike", `%${filter.district}%`);
    }
    if (filter.location) {
      query.andWhere("users.location", "ilike", `%${filter.location}%`);
    }
    if (filter.bloodGroup) {
      query.andWhere("inventory.bloodType", filter.bloodGroup);
    }
    const data = await query;

    return data;
  }
}
