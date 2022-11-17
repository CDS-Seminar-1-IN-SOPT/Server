import { Router } from "express";
import showRouter from "./showRouter";

const router: Router = Router();

router.use("/show", router);

export default router;
