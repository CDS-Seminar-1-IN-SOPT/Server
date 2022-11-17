import { Request, Response } from "express";
import { emit } from "process";
import { showService } from "../service";

//* 공연 전체 조회
const getAllShows = async (req: Request, res: Response) => {
    const data = await showService.getAllShows();
    return res
        .status(200)
        .json({ status: 200, message: "공연 전체 조회 성공", data });
};

// * 공연 상세 조회
const getShowById = async (req: Request, res: Response) => {
    const { showId } = req.params;
    const data = await showService.getShowById(+showId);
    
    if (!data.show) {
        return res.status(404).json({ status: 404, message: "해당 공연이 없습니다." });
    }
    
    return res
        .status(200)
        .json({ status: 200, message: "공연 상세 조회 성공", data })
    
}
const showController = {
    getAllShows,
    getShowById,
};

export default showController;
