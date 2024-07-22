import { Request, Response } from "express";
import * as UserService from "../service/user.service";

export function getUsers(req: Request, res: Response) {
  const data = UserService.getUsers();
  res.send(data);
}
