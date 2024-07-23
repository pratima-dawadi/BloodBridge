import { DonorInformation } from "../interfaces/user.interfaces";
import { DonorModel } from "../model/donor.model";

export async function setDonor(userId: string) {
  return await DonorModel.setDonor(userId);
}

export async function setDonorInformation(
  userId: string,
  body: DonorInformation
) {
  return await DonorModel.setDonorInformation(userId, body);
}

export async function getDonorInformation() {
  return await DonorModel.getDonorInformation();
}

export async function updateDonorInformation(
  userId: string,
  body: DonorInformation
) {
  return await DonorModel.updateDonorInformation(userId, body);
}
