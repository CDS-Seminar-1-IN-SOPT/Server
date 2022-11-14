import { Router } from "express";
import userRouter from "./router";

const router: Router = Router();

router.use("/user", userRouter);

export default router;
