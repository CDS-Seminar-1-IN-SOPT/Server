import { Router } from "express";
import showRouter from "./showRouter";
import scheduleRouter from "./scheduleRouter";

const router: Router = Router();

router.use("/show", showRouter);
router.use("/schedule", scheduleRouter);

export default router;
