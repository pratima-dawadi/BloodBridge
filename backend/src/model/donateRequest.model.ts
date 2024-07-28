import { required } from "joi";
import { IDonate, IRequest } from "../interfaces/donateRequest.interfaces";
import { BaseModel } from "./base.model";

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
}
