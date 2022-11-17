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
    }
    return data;
};

const showService = {
    getAllShows,
};

export default showService;
