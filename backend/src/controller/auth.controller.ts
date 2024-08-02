import { NextFunction, Request, Response } from "express";
import * as AuthService from "../service/auth.service";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { body } = req;
    const data = await AuthService.login(body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}
