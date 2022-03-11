/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `title` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "title.title_unique" ON "title"("title");
