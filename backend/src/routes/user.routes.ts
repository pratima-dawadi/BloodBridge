import express from "express";
import {
  createHealthCenter,
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controller/user.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = express();

router.get("/", authenticate, getUsers);

router.get("/:id", authenticate, getUserById);

router.put("/:id", authenticate, updateUser);

router.post("/signup", createUser);

router.post("/signup/healthcenter", createHealthCenter);

router.delete("/:id", authenticate, deleteUser);

export default router;
