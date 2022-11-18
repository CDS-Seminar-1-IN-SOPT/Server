import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 공연 회차 조회
const getScheduleByShowId = async (showId: number) => {
    const schedule = await prisma.schedule.findMany({
        where: { showId: showId },
        select: {
            id: true,
            startAt: true,
            cast: true
        }
    })
    const data = {
        scheduleList: schedule
    };
    return data;
}

const scheduleService = {
    getScheduleByShowId
};

export default scheduleService ;
