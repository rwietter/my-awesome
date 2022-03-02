/*
  Warnings:

  - A unique constraint covering the columns `[content_item]` on the table `content` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "content.content_item_unique" ON "content"("content_item");
