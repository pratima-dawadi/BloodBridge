import express from "express";
import {
  getDonorInformation,
  setDonor,
  setDonorInformation,
  updateDonorInformation,
  getDonorCount,
  getDonorGroup,
  getHealthCenterCount,
} from "../controller/donor.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = express();

router.put("/", authenticate, setDonor);
router.post("/", authenticate, authorize("donor"), setDonorInformation);
router.get("/", authenticate, getDonorInformation);
router.put("/update", authenticate, authorize("donor"), updateDonorInformation);
router.get("/count", getDonorCount);
router.get("/counthealthcenter", getHealthCenterCount);
router.get("/group", getDonorGroup);

export default router;
