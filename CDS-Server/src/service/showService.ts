import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 홈 티켓 조회
const getHomeShows = async () => {
    const bannerList = await prisma.show.findMany({
        select: {
            id: true,
            imageURL: true,
        },
        orderBy: {
          reservationStartAt: 'desc',
        },
        take: 6
    })

    const rankList = await prisma.show.findMany({
        select: {
            id: true,
            imageURL: true,
        },
        orderBy: {
          likeCount: 'desc',
        },
        take: 3
    })

    const angelTicketList = await prisma.show.findMany({
        where: {
          discountRate : {
              not: null
          }
        },
        select: {
            id: true,
            imageURL: true,
            title: true,
            discountRate: true
        },
        take: 3
    })

    const data = {
        bannerList: bannerList,
        rankList: rankList,
        angelTicketList: angelTicketList
    };

    return data;
};

//* 장르별 공연 조회
const getShowByGenre = async (genreId: number) => {
    const showList = await prisma.show.findMany({
        where: { genre: genreId },
        select: {
            id: true,
            title: true,
            imageURL: true,
            showType: true,
            reservationStartAt: true,
            reservationEndAt: true
        }
    })

    const data = {
        showList: showList
    };

    return data;
}


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
    getHomeShows,
    getShowByGenre,
    getAllShows,
    getShowById
};

export default showService;
