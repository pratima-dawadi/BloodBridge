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
  getDetails,
  getId,
  getHealthCenterID,
  getUsersDetailsById,
  updateUserById,
} from "../controller/user.controller";
import { authenticate } from "../middleware/auth.middleware";
import { validateReqBody } from "../middleware/validator.middleware";
import {
  createUserBodySchema,
  updateUserBodySchema,
} from "../schema/user.schema";
import { upload } from "../middleware/multer.middleware";

const router = express();

router.use(express.json());

router.get("/", getUsers);
router.get("/id", authenticate, getId);
router.get("/healthcenterid", authenticate, getHealthCenterID);

router.get("/healthcenter", getHealthCenters);
router.get("/donor", getDonors);

router.get("/details", authenticate, getDetails);
router.get("/:id", getUserById);

router.get("/details/:id", getUsersDetailsById);

router.put(
  "/update",
  authenticate,
  validateReqBody(updateUserBodySchema),
  updateUser
);

router.post("/signup", validateReqBody(createUserBodySchema), createUser);

router.post("/signup/healthcenter", upload.single("image"), createHealthCenter);

router.delete("/:id", authenticate, deleteUser);
router.put(
  "/:id",
  authenticate,
  validateReqBody(updateUserBodySchema),
  updateUserById
);

export default router;
