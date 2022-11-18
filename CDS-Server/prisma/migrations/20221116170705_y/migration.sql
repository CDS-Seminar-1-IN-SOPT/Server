-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "showId" INTEGER,
    "startAt" TIMESTAMP(6),
    "cast" VARCHAR(100),

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Show" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(30),
    "imageURL" VARCHAR(500),
    "isExclusive" BOOLEAN,
    "genre" INTEGER,
    "showType" INTEGER,
    "ageLimit" VARCHAR(10),
    "showStartAt" TIMESTAMP(6),
    "showEndAt" TIMESTAMP(6),
    "reservationStartAt" TIMESTAMP(6),
    "reservationEndAt" TIMESTAMP(6),
    "runningTime" VARCHAR(50),
    "showTimeDiscription" VARCHAR(200),
    "place" VARCHAR(100),
    "vipPrice" INTEGER,
    "rPrice" INTEGER,
    "sPrice" INTEGER,
    "aPrice" INTEGER,
    "castScheduleImageURL" VARCHAR(500),
    "likeCount" INTEGER,
    "discountRate" INTEGER,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_id_key" ON "Schedule"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Show_id_key" ON "Show"("id");
