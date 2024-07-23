import express from "express";
import {
  getDonorInformation,
  setDonor,
  setDonorInformation,
  updateDonorInformation,
} from "../controller/donor.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = express();

router.put("/", authenticate, setDonor);
router.post("/", authenticate, authorize("donor"), setDonorInformation);
router.get("/", authenticate, getDonorInformation);
router.put("/update", authenticate, authorize("donor"), updateDonorInformation);

export default router;
