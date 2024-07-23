import express from "express";

import {
  getInventory,
  createInventory,
  updateInventory,
} from "../controller/inventory.controller";
import {
  authenticate,
  authorize,
  authorizeRole,
} from "../middleware/auth.middleware";

const router = express();

router.post("/", authenticate, authorizeRole("health_center"), createInventory);
router.get("/", authenticate, getInventory);
router.put(
  "/update",
  authenticate,
  authorizeRole("health_center"),
  updateInventory
);

export default router;
