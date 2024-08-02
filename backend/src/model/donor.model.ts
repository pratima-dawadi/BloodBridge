import { IDonorInformation } from "../interfaces/user.interfaces";
import { BaseModel } from "./base.model";

/**
 * The `DonorModel` class in TypeScript contains methods for setting donor flags, creating and updating donor information, and getting donor counts.
 */
export class DonorModel extends BaseModel {
  static async getDonorFlag(id: string) {
    const query = this.queryBuilder()
      .select("donor_flag")
      .from("users")
      .where("id", +id)
      .first();
    const data = await query;
    return data;
  }

  static async setDonor(userId: string) {
    const checkFlag = this.queryBuilder()
      .select("donor_flag")
      .from("users")
      .where("id", userId)
      .first();
    const checkData = await checkFlag;
    if (checkData.donorFlag === true) {
      return `User is already a donor`;
    }
    const query = this.queryBuilder()
      .update({ donor_flag: true })
      .from("users")
      .where("id", userId);
    const data = await query;
    return `User is now a donor`;
  }

  static async setDonorInformation(userId: string, body: IDonorInformation) {
    const DonorInformationToCreate = {
      userId: userId,
      gender: body.gender,
      bloodGroup: body.bloodGroup,
      lastDonated: body.lastDonated,
      donatedCount: body.donatedCount,
      weight: body.weight,
      age: body.age,
    };
    const query = this.queryBuilder()
      .insert(DonorInformationToCreate)
      .into("donor_information");
    const data = await query;
    if (data) {
      return `Donor information for user  is created`;
    }
    return `Unable to create donor information for user`;
  }

  static async getDonorInformation(userId: string) {
    const query = this.queryBuilder()
      .select("*")
      .from("donor_information")
      .where("user_id", userId)
      .first();
    const data = await query;
    return data;
  }

  static async updateDonorInformation(userId: string, body: IDonorInformation) {
    const dataToUpdate = {
      userId: userId,
      gender: body.gender,
      bloodGroup: body.bloodGroup,
      lastDonated: body.lastDonated,
      donatedCount: body.donatedCount,
      weight: body.weight,
      age: body.age,
    };
    const query = this.queryBuilder()
      .update(dataToUpdate)
      .from("donor_information")
      .where("user_id", userId);
    const data = await query;
    if (data) {
      return `Donor information updated`;
    }
    return `Unable to update donor information for user`;
  }

  static async getDonorCount() {
    const query = this.queryBuilder()
      .count("*")
      .from("donor_information")
      .first();
    const data = await query;
    return data;
  }

  static async getHealthCenterCount() {
    const query = this.queryBuilder().count("*").from("health_center").first();
    const data = await query;
    return data;
  }

  static async getDonorGroup() {
    const query = this.queryBuilder()
      .select("blood_group")
      .count("blood_group")
      .from("donor_information")
      .groupBy("blood_group");
    const data = await query;
    return data;
  }
}
