import express from "express";

import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import donorRouter from "./donor.routes";
import inventoryRouter from "./inventory.routes";
import donationCampRouter from "./donationCamp.routes";
import donateRequestRouter from "./donateRequest.routes";

const router = express();

router.use(express.json());

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/donor", donorRouter);
router.use("/inventory", inventoryRouter);
router.use("/donationcamp", donationCampRouter);
router.use("/", donateRequestRouter);

export default router;
