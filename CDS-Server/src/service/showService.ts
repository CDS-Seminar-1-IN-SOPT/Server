import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getHomeShows = async () => {
   
};

const getShowByGenre = async (genreId: Number) => {

}

const showService = {
    getHomeShows,
    getShowByGenre
};

export default showService;
