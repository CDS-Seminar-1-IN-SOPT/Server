import { Request, Response } from "express";import { showService } from "../service";

const getHomeShows = async (req: Request, res: Response) => {
    const data = await showService.getHomeShows();
    return res.status(200).json({ status: 200, message: "메인 페이지 조회 성공", data });
};

const getShowByGenre = async (req: Request, res: Response) => {
    const { genreId } = req.query;
    const data = await showService.getShowByGenre(Number(genreId));
    return res.status(200).json({ status: 200, message: "장르별 조회 성공", data });
};
  

const showController = {
    getHomeShows,
    getShowByGenre
};

export default showController;
