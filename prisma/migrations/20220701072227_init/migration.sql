/*
  Warnings:

  - The primary key for the `ajio_trens` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `ajio_trens` DROP PRIMARY KEY,
    MODIFY `uuid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`uuid`);
