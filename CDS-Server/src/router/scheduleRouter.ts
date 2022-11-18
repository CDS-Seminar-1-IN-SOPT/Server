import { Router } from "express";
import { scheduleController } from "../controller";

const router: Router = Router();

//* 공연 회차(스케줄) 조회 - GET /schedule/:showId
router.get('/schedule/:showId', scheduleController.getScheduleByShowId);

export default router;