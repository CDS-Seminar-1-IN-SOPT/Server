import { Router } from "express";
import showRouter from "./showRouter";

const router: Router = Router();

router.use("/show", showRouter);
router.use("/show/:showId", showRouter);

export default router;
