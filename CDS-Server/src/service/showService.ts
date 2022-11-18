import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 공연 전체 조회
const getAllShows = async () => {
    const showList = await prisma.show.findMany({
        orderBy: { likeCount: "desc" },
        select: {
            id: true,
            title: true,
            imageURL: true,
            isExclusive: true,
            showType: true,
            showStartAt: true,
            showEndAt: true,
        },
    });
    const data = {
        showList: showList
    };
    return data;
};

//* 공연 상세 조회
const getShowById = async (showId: number) => {
    const show = await prisma.show.findUnique({
        where: { id: showId },
        select: {
            id: true,
            title: true,
            imageURL: true,
            isExclusive: true,
            showType: true,
            ageLimit: true,
            showStartAt: true,
            showEndAt: true,
            runningTime: true,
            showTimeDiscription: true,
            place: true,
            vipPrice: true,
            rPrice: true,
            sPrice: true,
            aPrice: true,
            castScheduleImageURL: true,
            likeCount: true
        }
    });
    const data = {
        show: show
    };
    return data;
}

const showService = {
    getAllShows,
    getShowById
};

export default showService;