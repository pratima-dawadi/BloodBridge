import express from "express";
import {
  donateBlood,
  requestBlood,
} from "../controller/donateRequest.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express();

router.post("/donate/:id", authenticate, donateBlood);
router.post("/request/:id", authenticate, requestBlood);

export default router;
