/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_auth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `withdrawal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_auth" DROP CONSTRAINT "user_auth_userId_fkey";

-- DropForeignKey
ALTER TABLE "withdrawal" DROP CONSTRAINT "withdrawal_userId_fkey";

-- DropTable
DROP TABLE "user";

-- DropTable
DROP TABLE "user_auth";

-- DropTable
DROP TABLE "withdrawal";

-- DropEnum
DROP TYPE "UserRole";

-- DropEnum
DROP TYPE "UserStatus";

-- CreateTable
CREATE TABLE "map" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "map_pkey" PRIMARY KEY ("id")
);
