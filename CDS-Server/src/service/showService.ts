import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getHomeShows = async () => {
   
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
