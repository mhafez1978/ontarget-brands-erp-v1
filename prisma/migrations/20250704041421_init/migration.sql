/*
  Warnings:

  - You are about to drop the column `pricePerMonth` on the `subscription_plans` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `features` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `project_customers` DROP FOREIGN KEY `project_customers_userId_fkey`;

-- DropForeignKey
ALTER TABLE `project_staff` DROP FOREIGN KEY `project_staff_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `projects` DROP FOREIGN KEY `projects_managerId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_companyId_fkey`;

-- DropIndex
DROP INDEX `project_customers_userId_fkey` ON `project_customers`;

-- DropIndex
DROP INDEX `projects_managerId_fkey` ON `projects`;

-- DropIndex
DROP INDEX `users_companyId_fkey` ON `users`;

-- AlterTable
ALTER TABLE `companies` ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `features` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `projects` ADD COLUMN `deletedAt` DATETIME(3) NULL,
    MODIFY `managerId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `subscription_plans` DROP COLUMN `pricePerMonth`,
    ADD COLUMN `billingCycle` ENUM('MONTHLY', 'ANNUALLY') NOT NULL DEFAULT 'MONTHLY',
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `price` DECIMAL(65, 30) NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_managerId_fkey` FOREIGN KEY (`managerId`) REFERENCES `users`(`userId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_staff` ADD CONSTRAINT `project_staff_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_customers` ADD CONSTRAINT `project_customers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
