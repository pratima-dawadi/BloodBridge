import { IDonate, IRequest } from "../interfaces/donateRequest.interfaces";
import * as DonateRequestModel from "../model/donateRequest.model";

export function donateBlood(id: string, userId: string, body: IDonate) {
  return DonateRequestModel.DonateRequestModel.donateBlood(id, userId, body);
}

export function requestBlood(id: string, userId: string, body: IRequest) {
  return DonateRequestModel.DonateRequestModel.requestBlood(id, userId, body);
}

export function requestHistory(userId: string) {
  return DonateRequestModel.DonateRequestModel.requestHistory(userId);
}

export function donateHistory(userId: string) {
  return DonateRequestModel.DonateRequestModel.donateHistory(userId);
}
