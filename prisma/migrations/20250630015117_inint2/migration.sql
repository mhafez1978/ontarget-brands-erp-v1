-- DropForeignKey
ALTER TABLE `projects` DROP FOREIGN KEY `projects_customerid_fkey`;

-- DropIndex
DROP INDEX `projects_customerid_fkey` ON `projects`;

-- AddForeignKey
ALTER TABLE `project_customers` ADD CONSTRAINT `project_customers_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`projectId`) ON DELETE RESTRICT ON UPDATE CASCADE;
