-- DropForeignKey
ALTER TABLE `project_customers` DROP FOREIGN KEY `project_customers_projectId_fkey`;

-- AlterTable
ALTER TABLE `projects` ADD COLUMN `customerid` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_customerid_fkey` FOREIGN KEY (`customerid`) REFERENCES `project_customers`(`projectCustomerId`) ON DELETE SET NULL ON UPDATE CASCADE;
