import express from "express";
import {
  filterHealthCenter,
  filterUser,
} from "../controller/filter.controller";

const router = express();

router.get("/user", filterUser);
router.get("/healthcenter", filterHealthCenter);

export default router;
