-- AlterTable
ALTER TABLE `companies` ADD COLUMN `emailProvider` ENUM('GMAIL', 'OFFICE365', 'CUSTOM') NULL;
