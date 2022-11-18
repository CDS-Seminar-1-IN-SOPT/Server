import { Router } from "express";
import { showController } from "../controller";

const router: Router = Router();

//* 홈 티켓 조회 - GET /show/home
// router.get('/show/home', userController.getUserById);

//* 홈 장르별 공연 조회 - GET /genre?genreId=3
// router.post('/genre?genreId=3', userController.createUser);

//* 공연 전체 조회 - GET /show
router.get("/show", showController.getAllShows);

//* 공연 상세 조회 - GET /show/:id
router.get('/show/:showId', showController.getShowById);

export default router;
