import express from "express";

import {
  getInventory,
  createInventory,
  updateInventory,
  getParticularInventory,
  getInventoryById,
} from "../controller/inventory.controller";
import {
  authenticate,
  authorize,
  authorizeRole,
} from "../middleware/auth.middleware";

const router = express();

router.post("/", authenticate, authorizeRole("health_center"), createInventory);
router.get("/", authenticate, getInventory);
router.get(
  "/particular",
  authenticate,
  authorizeRole("health_center"),
  getParticularInventory
);
router.get("/:id", getInventoryById);
router.put(
  "/update",
  authenticate,
  authorizeRole("health_center"),
  updateInventory
);

export default router;
