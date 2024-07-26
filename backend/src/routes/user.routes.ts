import express from "express";
import {
  createHealthCenter,
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
  getHealthCenters,
  getDonors,
} from "../controller/user.controller";
import { authenticate } from "../middleware/auth.middleware";
import { validateReqBody } from "../middleware/validator.middleware";
import {
  createUserBodySchema,
  updateUserBodySchema,
} from "../schema/user.schema";

const router = express();

router.use(express.json());

router.get("/", getUsers);

router.get("/healthcenter", getHealthCenters);
router.get("/donor", getDonors);

router.get("/:id", getUserById);

router.put(
  "/:id",
  authenticate,
  validateReqBody(updateUserBodySchema),
  updateUser
);

router.post("/signup", validateReqBody(createUserBodySchema), createUser);

router.post("/signup/healthcenter", createHealthCenter);

router.delete("/:id", authenticate, deleteUser);

export default router;
