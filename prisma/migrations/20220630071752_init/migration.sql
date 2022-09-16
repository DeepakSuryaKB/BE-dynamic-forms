-- CreateTable
CREATE TABLE `Ajio_trens_Urls` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `urls` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Ajio_trens_Urls_urls_key`(`urls`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
