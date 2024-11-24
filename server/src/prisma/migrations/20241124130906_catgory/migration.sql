/*
  Warnings:

  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('BEVERAGES', 'SPECIALTY_FOODS', 'SPICES_AND_SEASONINGS', 'GOURMET_GIFTS', 'SNACKS', 'BAKING_SUPPLIES', 'PANTRY_STAPLES');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "CategoryType" NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
