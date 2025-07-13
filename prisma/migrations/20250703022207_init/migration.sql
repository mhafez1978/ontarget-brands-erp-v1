/*
  Warnings:

  - The primary key for the `projects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `projectId` on the `projects` table. All the data in the column will be lost.
  - The required column `id` was added to the `projects` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `companies` DROP FOREIGN KEY `companies_ownerId_fkey`;

-- DropForeignKey
ALTER TABLE `companies` DROP FOREIGN KEY `companies_subscriptionPlanId_fkey`;

-- DropForeignKey
ALTER TABLE `project_customers` DROP FOREIGN KEY `project_customers_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `project_staff` DROP FOREIGN KEY `project_staff_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_companyId_fkey`;

-- DropIndex
DROP INDEX `companies_ownerId_fkey` ON `companies`;

-- DropIndex
DROP INDEX `companies_subscriptionPlanId_fkey` ON `companies`;

-- DropIndex
DROP INDEX `users_companyId_fkey` ON `users`;

-- AlterTable
ALTER TABLE `projects` DROP PRIMARY KEY,
    DROP COLUMN `projectId`,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `users`(`userId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_subscriptionPlanId_fkey` FOREIGN KEY (`subscriptionPlanId`) REFERENCES `subscription_plans`(`planId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_staff` ADD CONSTRAINT `project_staff_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_customers` ADD CONSTRAINT `project_customers_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
