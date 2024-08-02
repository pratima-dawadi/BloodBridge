import express from "express";
import {
  donateBlood,
  requestBlood,
  requestHistory,
  donateHistory,
  getDonorEmail,
} from "../controller/donateRequest.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express();

router.post("/donate/:id", authenticate, donateBlood);
router.post("/request/:id", authenticate, requestBlood);
router.get("/request", authenticate, requestHistory);
router.get("/donate", authenticate, donateHistory);

router.get("/donoremail", authenticate, getDonorEmail);

export default router;
