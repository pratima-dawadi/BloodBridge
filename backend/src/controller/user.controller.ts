import { Request, Response } from "express";
import * as UserService from "../service/user.service";

export async function getUsers(req: Request, res: Response) {
  const data = await UserService.getUsers();
  res.json(data);
}

export async function getHealthCenters(req: Request, res: Response) {
  const data = await UserService.getHealthCenters();
  res.json(data);
}

export async function getDonors(req: Request, res: Response) {
  const data = await UserService.getDonors();
  res.json(data);
}

export async function getUserById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const data = await UserService.getUserById(id);
  res.json(data);
}

export async function updateUser(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const { body } = req;
  const data = await UserService.updateUser(id, body);
  res.json(`Updated User: ${JSON.stringify(data)}`);
}

export async function createUser(req: Request, res: Response) {
  const { body } = req;
  const data = await UserService.createUser(body);
  res.json(data);
}

export async function createHealthCenter(req: Request, res: Response) {
  const { body } = req;
  const data = await UserService.createHealthCenter(body);
  res.json(data);
}

export async function deleteUser(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const data = await UserService.deleteUser(id);
  res.send(data);
}
