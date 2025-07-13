-- DropForeignKey
ALTER TABLE `project_customers` DROP FOREIGN KEY `project_customers_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `project_staff` DROP FOREIGN KEY `project_staff_userId_fkey`;

-- DropForeignKey
ALTER TABLE `projects` DROP FOREIGN KEY `projects_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `projects` DROP FOREIGN KEY `projects_managerId_fkey`;

-- DropIndex
DROP INDEX `project_staff_userId_fkey` ON `project_staff`;

-- DropIndex
DROP INDEX `projects_companyId_fkey` ON `projects`;

-- DropIndex
DROP INDEX `projects_managerId_fkey` ON `projects`;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_managerId_fkey` FOREIGN KEY (`managerId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_staff` ADD CONSTRAINT `project_staff_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_customers` ADD CONSTRAINT `project_customers_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`projectId`) ON DELETE CASCADE ON UPDATE CASCADE;
