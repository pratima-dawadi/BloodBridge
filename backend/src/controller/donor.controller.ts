import { NextFunction, Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as DonorService from "../service/donor.service";

export async function setDonor(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = req.user!.id;
  const data = await DonorService.setDonor(userId);
  res.json(JSON.stringify(data));
}

export async function setDonorInformation(req: Request, res: Response) {
  const userId = req.user!.id;
  const { body } = req;
  const data = await DonorService.setDonorInformation(userId, body);
  res.json(data);
}

export async function getDonorInformation(req: Request, res: Response) {
  const userId = req.user!.id;
  const data = await DonorService.getDonorInformation(userId);
  res.json(data);
}

export async function updateDonorInformation(req: Request, res: Response) {
  const userId = req.user!.id;
  const { body } = req;
  const data = await DonorService.updateDonorInformation(userId, body);
  res.json(data);
}
