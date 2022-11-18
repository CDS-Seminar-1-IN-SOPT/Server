import { Request, Response } from "express";
import { emit } from "process";
import { scheduleService } from "../service";

//* 공연 회차 조회
const getScheduleByShowId = async (req: Request, res: Response) => {
    const { showId } = req.params;
    const data = await scheduleService.getScheduleByShowId(+showId);

    if (!data) {
        return res.status(404).json({ status: 404, message: "해당 공연이 없습니다." });
    }
    
    return res
        .status(200)
        .json({ status: 200, message: "공연 회차 조회 성공", data });
};

const scheduleController = {
    getScheduleByShowId
};

export default scheduleController;
