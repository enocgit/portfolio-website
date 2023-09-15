/*
  Warnings:

  - You are about to drop the column `vetenaryId` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the `Vetenary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_vetenaryId_fkey";

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "vetenaryId",
ADD COLUMN     "veterinarianId" TEXT NOT NULL DEFAULT 'ebd08799-0325-4aaa-8c95-552e69f9f1c5';

-- DropTable
DROP TABLE "Vetenary";

-- CreateTable
CREATE TABLE "Veterinarian" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Veterinarian_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_veterinarianId_fkey" FOREIGN KEY ("veterinarianId") REFERENCES "Veterinarian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
