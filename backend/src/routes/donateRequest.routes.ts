import express from "express";
import {
  donateBlood,
  requestBlood,
  requestHistory,
  donateHistory,
  allRequestHistory,
  allDonateHistory,
  getDonorEmail,
  deleteRequest,
  deleteDonate,
} from "../controller/donateRequest.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express();

router.post("/donate/:id", authenticate, donateBlood);
router.post("/request/:id", authenticate, requestBlood);
router.get("/request", authenticate, requestHistory);
router.get("/donate", authenticate, donateHistory);

router.get("/requestall", authenticate, allRequestHistory);
router.get("/donateall", authenticate, allDonateHistory);

router.get("/donoremail", authenticate, getDonorEmail);

router.delete("/request/:id", authenticate, deleteRequest);
router.delete("/donate/:id", authenticate, deleteDonate);

export default router;
