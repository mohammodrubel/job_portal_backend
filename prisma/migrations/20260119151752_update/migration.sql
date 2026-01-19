-- DropIndex
DROP INDEX "UserExperience_userId_key";

-- CreateIndex
CREATE INDEX "UserExperience_userId_idx" ON "UserExperience"("userId");
