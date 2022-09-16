-- CreateTable
CREATE TABLE `Ajio_trens` (
    `uuid` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `images` VARCHAR(255) NOT NULL,
    `date_stored` VARCHAR(191) NOT NULL,
    `selling_price` INTEGER NOT NULL,
    `star_rating` INTEGER NOT NULL,
    `size` VARCHAR(255) NOT NULL,
    `colour` VARCHAR(255) NOT NULL,
    `mrp` INTEGER NOT NULL,
    `product_detials` VARCHAR(255) NOT NULL,
    `set_product_price` INTEGER NOT NULL,
    `meta_data` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
