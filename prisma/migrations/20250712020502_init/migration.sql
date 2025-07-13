/*
  Warnings:

  - A unique constraint covering the columns `[subdomain]` on the table `companies` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `companies` ADD COLUMN `isCustomDomain` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `subdomain` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `emailVerified` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `companies_subdomain_key` ON `companies`(`subdomain`);
