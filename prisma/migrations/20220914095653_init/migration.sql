/*
  Warnings:

  - You are about to drop the `ajio_trens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ajio_trens_urls` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ajio_trens`;

-- DropTable
DROP TABLE `ajio_trens_urls`;

-- CreateTable
CREATE TABLE `forms_details` (
    `form_name` VARCHAR(200) NOT NULL,
    `form_structure` LONGTEXT NULL,

    PRIMARY KEY (`form_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
