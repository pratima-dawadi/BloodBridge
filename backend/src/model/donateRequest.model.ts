import { required } from "joi";
import { IDonate, IRequest } from "../interfaces/donateRequest.interfaces";
import { BaseModel } from "./base.model";
import { getUserQuery } from "../interfaces/user.interfaces";

/* The `DonateRequestModel` class in TypeScript contains methods for donating and requesting blood,
retrieving donation and request history, and getting donor emails based on a query. */
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

  static async allRequestHistory() {
    try {
      const query = this.queryBuilder()
        .select(
          "users1.name as requesterName",
          "users2.name as supplierName",
          "request.*"
        )
        .from("request")
        .innerJoin("users as users1", "users1.id", "request.requesterId")
        .innerJoin("users as users2", "users2.id", "request.supplierId");
      const data = await query;
      return data;
    } catch (error) {
      return error;
    }
  }

  static async allDonateHistory() {
    try {
      const query = this.queryBuilder()
        .select(
          "donor.name as donorName",
          "recipient.name as recipientName",
          "donation.*"
        )
        .from("donation")
        .innerJoin("users as donor", "donor.id", "donation.donorId")
        .innerJoin(
          "users as recipient",
          "recipient.id",
          "donation.recipientId"
        );
      const data = await query;
      return data;
    } catch (error) {
      return error;
    }
  }

  static async deleteRequest(id: string) {
    try {
      const query = this.queryBuilder()
        .delete()
        .from("request")
        .where("id", id);
      const data = await query;
      return `Request history deleted successfully`;
    } catch (error) {
      return error;
    }
  }

  static async deleteDonate(id: string) {
    try {
      const query = this.queryBuilder()
        .delete()
        .from("donation")
        .where("id", id);
      const data = await query;
      return `Donation history deleted successfully`;
    } catch (error) {
      return error;
    }
  }
}
