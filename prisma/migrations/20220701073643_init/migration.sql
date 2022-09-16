/*
  Warnings:

  - You are about to alter the column `images` on the `ajio_trens` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `size` on the `ajio_trens` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `colour` on the `ajio_trens` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `product_detials` on the `ajio_trens` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `ajio_trens` MODIFY `images` VARCHAR(191) NOT NULL,
    MODIFY `size` VARCHAR(191) NOT NULL,
    MODIFY `colour` VARCHAR(191) NOT NULL,
    MODIFY `product_detials` VARCHAR(191) NOT NULL;
