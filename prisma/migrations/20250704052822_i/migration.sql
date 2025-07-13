/*
  Warnings:

  - You are about to drop the column `price` on the `subscription_plans` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `subscription_plans` DROP COLUMN `price`,
    ADD COLUMN `pricePerMonth` DECIMAL(65, 30) NOT NULL DEFAULT 0.0;
