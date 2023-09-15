-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "vetenaryId" TEXT NOT NULL DEFAULT 'ebd08799-0325-4aaa-8c95-552e69f9f1c5';

-- CreateTable
CREATE TABLE "Vetenary" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Vetenary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_vetenaryId_fkey" FOREIGN KEY ("vetenaryId") REFERENCES "Vetenary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
