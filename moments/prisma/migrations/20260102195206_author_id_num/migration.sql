/*
  Warnings:

  - You are about to drop the column `userId` on the `Moment` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Moment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Moment" DROP COLUMN "userId",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Moment" ADD CONSTRAINT "Moment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
