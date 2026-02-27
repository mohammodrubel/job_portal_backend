/*
  Warnings:

  - You are about to drop the column `benefits` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `experienceLevel` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `industry` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `isRelocation` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `isVisaSponsored` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `remoteAllowed` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `remoteCountries` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `requirements` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `salaryCurrency` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `salaryPeriod` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `savedCount` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `urgency` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `vacancies` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Recruiter" DROP CONSTRAINT "Recruiter_companyId_fkey";

-- DropIndex
DROP INDEX "Job_category_idx";

-- DropIndex
DROP INDEX "Job_city_idx";

-- DropIndex
DROP INDEX "Job_companyId_idx";

-- DropIndex
DROP INDEX "Job_country_idx";

-- DropIndex
DROP INDEX "Job_experienceLevel_idx";

-- DropIndex
DROP INDEX "Job_industry_idx";

-- DropIndex
DROP INDEX "Job_location_idx";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "benefits",
DROP COLUMN "category",
DROP COLUMN "city",
DROP COLUMN "companyId",
DROP COLUMN "country",
DROP COLUMN "education",
DROP COLUMN "experienceLevel",
DROP COLUMN "industry",
DROP COLUMN "isRelocation",
DROP COLUMN "isVisaSponsored",
DROP COLUMN "location",
DROP COLUMN "remoteAllowed",
DROP COLUMN "remoteCountries",
DROP COLUMN "requirements",
DROP COLUMN "salaryCurrency",
DROP COLUMN "salaryPeriod",
DROP COLUMN "savedCount",
DROP COLUMN "urgency",
DROP COLUMN "vacancies",
DROP COLUMN "views";

-- DropTable
DROP TABLE "Company";
