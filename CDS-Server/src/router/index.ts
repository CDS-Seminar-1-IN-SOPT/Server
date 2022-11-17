import { Router } from "express";
import showRouter from "./showRouter";
import scheduleRouter from "./scheduleRouter"

const router: Router = Router();

router.use("/show", showRouter);
router.use("/show/:showId", showRouter);
router.use("/schedule/:showId", scheduleRouter);

export default router;
