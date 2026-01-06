/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UserSkill_userId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isDeleted";
