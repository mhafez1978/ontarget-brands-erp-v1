/*
  Warnings:

  - You are about to drop the column `subdomain` on the `companies` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `CompanyLanding` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `companies_subdomain_key` ON `companies`;

-- AlterTable
ALTER TABLE `CompanyLanding` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `companies` DROP COLUMN `subdomain`,
    MODIFY `category` ENUM('AGRICULTURE', 'AUTOMOTIVE', 'CONSTRUCTION', 'CONSULTING', 'EDUCATION', 'ENERGY', 'ENTERTAINMENT', 'FINANCE', 'FOOD_AND_BEVERAGE', 'GOVERNMENT', 'HEALTHCARE', 'HOSPITALITY', 'INTERIOR_DESIGN', 'MANUFACTURING', 'MARKETING', 'NON_PROFIT', 'PHARMACEUTICAL', 'REAL_ESTATE', 'RETAIL', 'TECHNOLOGY', 'TELECOMMUNICATIONS', 'TRANSPORTATION', 'OTHER') NULL;

-- AlterTable
ALTER TABLE `project_staff` ADD COLUMN `dueDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('SUPER_ADMIN', 'ADMIN', 'MANAGER', 'STAFF', 'ERP_CUSTOMER', 'COMPANY_CUSTOMER', 'GUEST') NOT NULL DEFAULT 'ERP_CUSTOMER';

-- CreateTable
CREATE TABLE `CompanySubdomain` (
    `id` VARCHAR(191) NOT NULL,
    `subdomain` VARCHAR(191) NOT NULL,
    `companyId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `sku` VARCHAR(191) NULL,
    `upc` VARCHAR(191) NULL,
    `unit` ENUM('OUNCE_OZ', 'POUND_LB', 'DOZEN', 'GRAM_G', 'KILOGRAM_KG', 'LITER_L', 'MILLILITER_ML', 'GALLON_GAL', 'PACK', 'BOX', 'BAG', 'SET', 'PAIR', 'UNIT') NULL,
    `quantity` INTEGER NULL,
    `cost` DOUBLE NULL,
    `price` DOUBLE NULL,
    `brand` VARCHAR(191) NULL,
    `status` ENUM('ACTIVE', 'LIMITED_OFFER', 'REGION_BASED', 'BACK_ORDER', 'DISCONTINUED', 'OUT_OF_STOCK') NULL,
    `supplierId` VARCHAR(191) NULL,
    `deliveryMethod` ENUM('ONSITE', 'REMOTE', 'HYBRID', 'DIGITAL', 'PICKUP', 'SHIP_TO_CUSTOMER', 'DELIVERY') NOT NULL,
    `companyId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `tagline` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `salesEmail` VARCHAR(191) NULL,
    `supportEmail` VARCHAR(191) NULL,
    `addressLine1` VARCHAR(191) NULL,
    `addressLine2` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `zipCode` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `companyId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CompanyProductCategory` (
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `productCategory` ENUM('ELECTRONICS', 'HOME_APPLIANCES', 'CLOTHING', 'FOOTWEAR', 'BEAUTY_PERSONAL_CARE', 'HEALTH_WELLNESS', 'GROCERY', 'FURNITURE', 'HOME_DECOR', 'KITCHEN_DINING', 'TOYS_GAMES', 'BABY_PRODUCTS', 'SPORTS_OUTDOORS', 'AUTOMOTIVE', 'BOOKS', 'MUSIC_MOVIES', 'OFFICE_SUPPLIES', 'PET_SUPPLIES', 'JEWELRY', 'WATCHES', 'TOOLS_HARDWARE', 'GARDEN_OUTDOOR', 'ART_CRAFTS', 'STATIONERY', 'OTHER') NOT NULL,
    `companyId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` VARCHAR(191) NOT NULL,
    `companyId` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `deliveryMethod` ENUM('ONSITE', 'REMOTE', 'HYBRID', 'DIGITAL', 'PICKUP', 'SHIP_TO_CUSTOMER', 'DELIVERY') NULL,
    `duration` INTEGER NULL,
    `price` DECIMAL(10, 2) NULL,
    `currency` ENUM('AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'FOK', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KID', 'KMF', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLE', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW', 'ZWL') NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `categories` ENUM('CONSULTING', 'SUPPORT', 'INSTALLATION', 'TRAINING', 'DEVELOPMENT', 'DESIGN', 'MAINTENANCE', 'DELIVERY', 'SUBSCRIPTION', 'MARKETING', 'ANALYTICS', 'STRATEGY', 'SECURITY', 'IMPLEMENTATION', 'INTEGRATION', 'OUTSOURCING', 'OTHER') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceTag` (
    `id` VARCHAR(191) NOT NULL,
    `value` VARCHAR(100) NOT NULL,
    `serviceId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ServiceToServiceTag` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ServiceToServiceTag_AB_unique`(`A`, `B`),
    INDEX `_ServiceToServiceTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CompanySubdomain` ADD CONSTRAINT `CompanySubdomain_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Supplier`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Supplier` ADD CONSTRAINT `Supplier_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompanyProductCategory` ADD CONSTRAINT `CompanyProductCategory_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompanyProductCategory` ADD CONSTRAINT `CompanyProductCategory_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceTag` ADD CONSTRAINT `ServiceTag_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ServiceToServiceTag` ADD CONSTRAINT `_ServiceToServiceTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ServiceToServiceTag` ADD CONSTRAINT `_ServiceToServiceTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `ServiceTag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
