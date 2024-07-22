import express from "express";
import { getUsers } from "../controller/user.controller";

const router = express();

router.get("/", getUsers);

export default router;