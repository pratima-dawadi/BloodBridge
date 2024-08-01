import { NextFunction, Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as donateRequestService from "../service/donateRequest.service";

export async function donateBlood(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const userId = req.user!.id;
    const { body } = req;
    const data = await donateRequestService.donateBlood(id, userId, body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function requestBlood(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const userId = req.user!.id;
    const { body } = req;
    const data = await donateRequestService.requestBlood(id, userId, body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function requestHistory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.user!.id;
    const data = await donateRequestService.requestHistory(userId);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function donateHistory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.user!.id;
    const data = await donateRequestService.donateHistory(userId);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function getDonorEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { query } = req;
    const data = await donateRequestService.getDonorEmail(query);
    res.json(data);
  } catch (error) {
    next(error);
  }
}
