/*
  Warnings:

  - Added the required column `date` to the `Ajio_trens_Urls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ajio_trens_urls` ADD COLUMN `date` DATETIME(3) NOT NULL;
