import express from "express";
import {
  deleteDonationCamp,
  getDonationCamp,
  updateDonationCamp,
  getDonationCampById,
  createDonationCamp,
} from "../controller/donationCamp.controller";
import { authenticate, authorizeRole } from "../middleware/auth.middleware";

const router = express();

router.post(
  "/",
  authenticate,
  authorizeRole("health_center"),
  createDonationCamp
);
router.get("/", getDonationCamp);
router.get("/:id", authenticate, getDonationCampById);

router.put(
  "/:id",
  authenticate,
  authorizeRole("health_center"),
  updateDonationCamp
);

router.delete("/:id", authenticate, deleteDonationCamp);

export default router;
