-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "compoundScore" DOUBLE PRECISION,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "negativeScore" DOUBLE PRECISION,
ADD COLUMN     "neutralScore" DOUBLE PRECISION,
ADD COLUMN     "positiveScore" DOUBLE PRECISION,
ADD COLUMN     "sentimentLabel" TEXT,
ADD COLUMN     "title" TEXT;
