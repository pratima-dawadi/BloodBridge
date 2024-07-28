import { NextFunction, Request, Response } from "express";
import * as FilterService from "../service/filter.service";
import { getUserQuery } from "../interfaces/user.interfaces";

export async function filterUser(
  req: Request<any, any, any, getUserQuery>,
  res: Response,
  next: NextFunction
) {
  try {
    const { query } = req;
    const data = await FilterService.filterUser(query);
    if (!data) {
      return "User not found";
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function filterHealthCenter(
  req: Request<any, any, any, getUserQuery>,
  res: Response,
  next: NextFunction
) {
  try {
    const { query } = req;
    const data = await FilterService.filterHealthCenter(query);
    if (!data) {
      return "Health Center not found";
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
}
