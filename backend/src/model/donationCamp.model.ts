import { IDonationCamp } from "../interfaces/donationCamp.interface";
import { BaseModel } from "./base.model";

export class DonationCampModel extends BaseModel {
  static async createDonationCamp(userId: string, body: IDonationCamp) {
    const healthCenterId = this.queryBuilder()
      .select("id")
      .from("health_center")
      .where("userId", userId)
      .first();
    const dataHealthCenterId = await healthCenterId;

    const donationCampToCreate = {
      healthCenterId: dataHealthCenterId.id,
      name: body.name,
      district: body.district,
      location: body.location,
      date: body.date,
      timeFrame: body.timeFrame,
      status: body.status,
    };
    const query = this.queryBuilder()
      .insert(donationCampToCreate)
      .into("donation_camp");
    const data = await query;
    return data;
  }

  static async getDonationCamp() {
    const query = this.queryBuilder()
      .select("users.name as healthCenterName", "donationCamp.*")
      .from("users")
      .innerJoin("health_center", "users.id", "health_center.userId")
      .innerJoin(
        "donation_camp",
        "healthCenter.id",
        "donation_camp.healthCenterId"
      );
    const data = await query;
    return data;
  }

  static async getDonationCampById(id: string) {
    const query = this.queryBuilder()
      .select("*")
      .from("donation_camp")
      .where({ id: id })
      .first();
    const data = await query;
    return data;
  }

  static async updateDonationCamp(
    id: string,
    userId: string,
    body: IDonationCamp
  ) {
    const healthCenterId = this.queryBuilder()
      .select("id")
      .from("health_center")
      .where("userId", userId)
      .first();
    const dataHealthCenterId = await healthCenterId;

    const dataToUpdate = {
      name: body.name,
      district: body.district,
      location: body.location,
      date: body.date,
      timeFrame: body.timeFrame,
      status: body.status,
    };
    const query = this.queryBuilder()
      .update(dataToUpdate)
      .from("donation_camp")
      .where({ id: id, healthCenterId: dataHealthCenterId.id });
    const data = await query;

    if (!data) {
      return `Cannot update donation camp with id ${id}. Permission denied`;
    }

    return `Updated donation camp with id ${id}`;
  }

  static async deleteDonationCamp(id: string, userId: string) {
    const healthCenterId = this.queryBuilder()
      .select("id")
      .from("health_center")
      .where("userId", userId)
      .first();
    const dataHealthCenterId = await healthCenterId;

    const query = this.queryBuilder()
      .delete()
      .from("donation_camp")
      .where({ id: id, healthCenterId: dataHealthCenterId.id });
    const data = await query;

    if (!data) {
      return `Donation Camp with id ${id} not found or Permission denied`;
    }
    return `Donation Camp with id ${id} deleted successfully`;
  }
}
