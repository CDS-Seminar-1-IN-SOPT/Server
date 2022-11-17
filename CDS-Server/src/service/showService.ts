import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

const showService = {
    getHomeShows,
    getShowByGenre
};

export default showService;
