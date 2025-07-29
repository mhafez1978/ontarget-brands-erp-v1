/*
  Warnings:

  - You are about to drop the column `deliveryMethod` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `deliveryMethod`,
    DROP COLUMN `status`,
    ADD COLUMN `availability` ENUM('LIMITED_OFFER', 'REGION_BASED', 'BACK_ORDER', 'DISCONTINUED', 'OUT_OF_STOCK') NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `macAddress` VARCHAR(191) NULL,
    ADD COLUMN `model` VARCHAR(191) NULL,
    ADD COLUMN `serial` VARCHAR(191) NULL,
    ADD COLUMN `weight` DOUBLE NULL;
