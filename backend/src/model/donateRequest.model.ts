import { required } from "joi";
import { IDonate, IRequest } from "../interfaces/donateRequest.interfaces";
import { BaseModel } from "./base.model";
import { getUserQuery } from "../interfaces/user.interfaces";

export class DonateRequestModel extends BaseModel {
  static async donateBlood(
    recipientId: string,
    donorId: string,
    body: IDonate
  ) {
    const donateBlood = {
      donorId: donorId,
      recipientType: body.recipientType,
      recipientId: recipientId,
      bloodType: body.bloodType,
      quantity: body.quantity,
      donationDate: body.donationDate,
    };
    try {
      const query = this.queryBuilder().insert(donateBlood).into("donation");
      const data = await query;
      if (data) {
        return `Blood donated to ${recipientId} successfully`;
      }
    } catch (err) {
      return err;
    }
  }

  static async requestBlood(
    supplierId: string,
    requesterId: string,
    body: IRequest
  ) {
    const requestBlood = {
      requesterId: requesterId,
      supplierType: body.supplierType,
      supplierId: supplierId,
      bloodType: body.bloodType,
      quantity: body.quantity,
      urgency: body.urgency,
      requestDate: body.requestDate,
      requiredDate: body.requiredDate,
    };
    try {
      const query = this.queryBuilder().insert(requestBlood).into("request");
      const data = await query;
      if (data) {
        return `Blood requested to ${supplierId} successfully`;
      }
    } catch (error) {
      return error;
    }
  }

  static async requestHistory(userId: string) {
    try {
      const query = this.queryBuilder()
        .select("*")
        .from("request")
        .where("requesterId", userId);
      const data = await query;
      return data;
    } catch (error) {
      return error;
    }
  }

  static async donateHistory(userId: string) {
    try {
      const query = this.queryBuilder()
        .select("*")
        .from("donation")
        .where("donorId", userId);
      const data = await query;
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getDonorEmail(query: getUserQuery) {
    try {
      console.log(query);
      const data = await this.queryBuilder()
        .select("users.email")
        .from("users")
        .innerJoin("donorInformation", "users.id", "donorInformation.userId")
        .where("bloodGroup", query.bloodGroup);
      return data;
    } catch (error) {
      return error;
    }
  }
}
