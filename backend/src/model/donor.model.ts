import { DonorInformation } from "../interfaces/user.interfaces";
import { BaseModel } from "./base.model";

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
      return `User with id ${userId} is already a donor`;
    }
    const query = this.queryBuilder()
      .update({ donor_flag: true })
      .from("users")
      .where("id", userId);
    const data = await query;
    return `User with id ${userId} is now a donor`;
  }

  static async setDonorInformation(userId: string, body: DonorInformation) {
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
      return `Donor information for user with id ${userId} is created`;
    }
    return `Unable to create donor information for user with id ${userId}`;
  }

  static async getDonorInformation() {
    const query = this.queryBuilder().select("*").from("donor_information");
    const data = await query;
    return data;
  }

  static async updateDonorInformation(userId: string, body: DonorInformation) {
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
      return `Donor information for user with id ${userId} is updated`;
    }
    return `Unable to update donor information for user with id ${userId}`;
  }
}
