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

const showController = {
    getAllShows,
};

export default showController;
