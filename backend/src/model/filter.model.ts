import { getUserQuery } from "../interfaces/user.interfaces";
import { BaseModel } from "./base.model";

export class FilterModel extends BaseModel {
  static async filterUser(filter: getUserQuery) {
    const query = this.queryBuilder()
      .select("users.*", "donorInformation.blood_group")
      .from("users")
      .leftJoin("donor_information", "users.id", "donorInformation.userId")
      .where("users.user_role", "user");

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
        "users.*",
        "healthCenter.userId",
        "healthCenter.type",
        "inventory.blood_type"
      )
      .from("users")
      .leftJoin("healthCenter", "users.id", "healthCenter.userId")
      .leftJoin("inventory", "healthCenter.id", "inventory.healthCenterId")
      .where("users.user_role", "health_center");

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
    console.log(query.toString());
    const data = await query;

    return data;
  }
}
