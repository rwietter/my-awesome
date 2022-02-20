/*
  Warnings:

  - Added the required column `user_id` to the `content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `title` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_content" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content_item" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_content" ("content_item", "id") SELECT "content_item", "id" FROM "content";
DROP TABLE "content";
ALTER TABLE "new_content" RENAME TO "content";
CREATE TABLE "new_title" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "content_id" TEXT NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("content_id") REFERENCES "content" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_title" ("content_id", "id", "title") SELECT "content_id", "id", "title" FROM "title";
DROP TABLE "title";
ALTER TABLE "new_title" RENAME TO "title";
CREATE UNIQUE INDEX "title.title_unique" ON "title"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
