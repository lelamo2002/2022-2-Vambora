/*
  Warnings:

  - You are about to drop the column `name` on the `routes` table. All the data in the column will be lost.
  - Added the required column `destinationName` to the `routes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originName` to the `routes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originNeighborhoodSlug` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routes" DROP COLUMN "name",
ADD COLUMN     "destinationName" TEXT NOT NULL,
ADD COLUMN     "originName" TEXT NOT NULL,
ADD COLUMN     "originNeighborhoodSlug" TEXT NOT NULL;
