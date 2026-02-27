/*
  Warnings:

  - Added the required column `companyLogo` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "companyLogo" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[];
