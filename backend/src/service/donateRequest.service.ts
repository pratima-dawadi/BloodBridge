import { IDonate, IRequest } from "../interfaces/donateRequest.interfaces";
import { getUserQuery } from "../interfaces/user.interfaces";
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

export function getDonorEmail(query: getUserQuery) {
  return DonateRequestModel.DonateRequestModel.getDonorEmail(query);
}

export function allRequestHistory() {
  return DonateRequestModel.DonateRequestModel.allRequestHistory();
}

export function allDonateHistory() {
  return DonateRequestModel.DonateRequestModel.allDonateHistory();
}

export function deleteRequest(id: string) {
  return DonateRequestModel.DonateRequestModel.deleteRequest(id);
}

export function deleteDonate(id: string) {
  return DonateRequestModel.DonateRequestModel.deleteDonate(id);
}
