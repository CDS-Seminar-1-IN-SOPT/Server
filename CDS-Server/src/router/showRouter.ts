import { Router } from "express";
import { showController } from "../controller";

const router: Router = Router();

//* 홈 티켓 조회 - GET /show/home
router.get('/home', showController.getHomeShows);

//* 홈 장르별 공연 조회 - GET /genre?genreId=3
router.get('/genre', showController.getShowByGenre);

//* 공연 전체 조회 - GET /show
// router.get('/show', userController.getAllUser);

//* 공연 상세 조회 - GET /show/:id
// router.patch('/show/:id', userController.updateUser);

export default router;
