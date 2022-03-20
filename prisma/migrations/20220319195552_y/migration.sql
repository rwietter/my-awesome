/*
  Warnings:

  - You are about to drop the column `accessToken` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `accessTokenExpires` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `providerId` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `providerType` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_userId_fkey";

-- DropIndex
DROP INDEX "accounts.providerId_providerAccountId_unique";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "accessToken",
DROP COLUMN "accessTokenExpires",
DROP COLUMN "createdAt",
DROP COLUMN "providerId",
DROP COLUMN "providerType",
DROP COLUMN "refreshToken",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "access_token" TEXT,
ADD COLUMN     "expires_at" INTEGER,
ADD COLUMN     "id_token" TEXT,
ADD COLUMN     "provider" TEXT NOT NULL,
ADD COLUMN     "refresh_token" TEXT,
ADD COLUMN     "scope" TEXT,
ADD COLUMN     "session_state" TEXT,
ADD COLUMN     "token_type" TEXT,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "accounts.provider_providerAccountId_unique" ON "accounts"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "accounts" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
