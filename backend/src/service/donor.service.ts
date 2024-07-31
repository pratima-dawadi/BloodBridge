import { IDonorInformation } from "../interfaces/user.interfaces";
import { DonorModel } from "../model/donor.model";

export async function setDonor(userId: string) {
  return await DonorModel.setDonor(userId);
}

export async function setDonorInformation(
  userId: string,
  body: IDonorInformation
) {
  return await DonorModel.setDonorInformation(userId, body);
}

export async function getDonorInformation(userId: string) {
  return await DonorModel.getDonorInformation(userId);
}

export async function updateDonorInformation(
  userId: string,
  body: IDonorInformation
) {
  return await DonorModel.updateDonorInformation(userId, body);
}
