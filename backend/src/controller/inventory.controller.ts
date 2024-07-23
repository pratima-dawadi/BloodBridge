import { NextFunction, Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as InventoryService from "../service/inventory.service";

export async function createInventory(req: Request, res: Response) {
  const userId = req.user!.id;
  const { body } = req;
  const data = await InventoryService.createInventory(userId, body);
  res.json(data);
}

export async function getInventory(req: Request, res: Response) {
  const data = await InventoryService.getInventory();
  res.json(data);
}

export async function updateInventory(req: Request, res: Response) {
  const userId = req.user!.id;
  const { body } = req;
  const data = await InventoryService.updateInventory(userId, body);
  res.json(data);
}
