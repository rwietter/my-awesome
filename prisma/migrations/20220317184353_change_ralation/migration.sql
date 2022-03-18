/*
  Warnings:

  - You are about to drop the column `content_id` on the `title` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title_id]` on the table `content` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title_id` to the `content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "content" DROP CONSTRAINT "content_user_id_fkey";

-- DropForeignKey
ALTER TABLE "title" DROP CONSTRAINT "title_content_id_fkey";

-- DropForeignKey
ALTER TABLE "title" DROP CONSTRAINT "title_user_id_fkey";

-- AlterTable
ALTER TABLE "content" ADD COLUMN     "title_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "title" DROP COLUMN "content_id";

-- CreateIndex
CREATE UNIQUE INDEX "content.title_id_unique" ON "content"("title_id");

-- AddForeignKey
ALTER TABLE "title" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content" ADD FOREIGN KEY ("title_id") REFERENCES "title"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
