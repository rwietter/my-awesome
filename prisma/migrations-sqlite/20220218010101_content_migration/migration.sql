/*
  Warnings:

  - You are about to drop the column `title_id` on the `content` table. All the data in the column will be lost.
  - Added the required column `content_id` to the `title` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_content" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content_item" TEXT NOT NULL
);
INSERT INTO "new_content" ("content_item", "id") SELECT "content_item", "id" FROM "content";
DROP TABLE "content";
ALTER TABLE "new_content" RENAME TO "content";
CREATE TABLE "new_title" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content_id" TEXT NOT NULL,
    FOREIGN KEY ("content_id") REFERENCES "content" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_title" ("id", "title") SELECT "id", "title" FROM "title";
DROP TABLE "title";
ALTER TABLE "new_title" RENAME TO "title";
CREATE UNIQUE INDEX "title.title_unique" ON "title"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
