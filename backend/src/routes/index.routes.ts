import express from "express";

import userRouter from "./user.routes";

const router = express();

router.use("/users", userRouter);

export default router;
