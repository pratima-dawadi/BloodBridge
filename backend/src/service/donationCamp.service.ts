import { IDonationCamp } from "../interfaces/donationCamp.interface";
import * as DonationCampModel from "../model/donationCamp.model";

export function createDonationCamp(userId: string, body: IDonationCamp) {
  return DonationCampModel.DonationCampModel.createDonationCamp(userId, body);
}

export function getDonationCamp() {
  return DonationCampModel.DonationCampModel.getDonationCamp();
}

export function getDonationCampById(id: string) {
  return DonationCampModel.DonationCampModel.getDonationCampById(id);
}

export function updateDonationCamp(
  id: string,
  userId: string,
  body: IDonationCamp
) {
  return DonationCampModel.DonationCampModel.updateDonationCamp(
    id,
    userId,
    body
  );
}

export function deleteDonationCamp(id: string, userId: string) {
  return DonationCampModel.DonationCampModel.deleteDonationCamp(id, userId);
}
