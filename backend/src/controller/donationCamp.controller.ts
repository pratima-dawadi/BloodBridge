import { Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as DonationCampService from "../service/donationCamp.service";

export async function createDonationCamp(req: Request, res: Response) {
  const { body } = req;
  const userId = req.user!.id;
  const data = await DonationCampService.createDonationCamp(userId, body);
  res.json(`Created Donation Camp: ${JSON.stringify(data)}`);
}

export async function getDonationCamp(req: Request, res: Response) {
  const data = await DonationCampService.getDonationCamp();
  res.json(data);
}

export async function getDonationCampById(req: Request, res: Response) {
  const id = req.params.id;
  const data = await DonationCampService.getDonationCampById(id);
  res.json(data);
}

export async function updateDonationCamp(req: Request, res: Response) {
  const id = req.params.id;
  const userId = req.user!.id;
  const { body } = req;
  const data = await DonationCampService.updateDonationCamp(id, userId, body);
  res.json(`Updated Donation Camp: ${JSON.stringify(data)}`);
}

export async function deleteDonationCamp(req: Request, res: Response) {
  const id = req.params.id;
  const userId = req.user!.id;
  const data = await DonationCampService.deleteDonationCamp(id, userId);
  res.json(data);
}
