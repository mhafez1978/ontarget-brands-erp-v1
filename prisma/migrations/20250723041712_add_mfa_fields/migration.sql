-- DropForeignKey
ALTER TABLE `TimeEntry` DROP FOREIGN KEY `TimeEntry_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `TimeEntry` DROP FOREIGN KEY `TimeEntry_userId_fkey`;

-- DropIndex
DROP INDEX `TimeEntry_companyId_fkey` ON `TimeEntry`;

-- DropIndex
DROP INDEX `TimeEntry_userId_fkey` ON `TimeEntry`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `mfaEnabled` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `mfaSecret` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `TimeEntry` ADD CONSTRAINT `TimeEntry_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TimeEntry` ADD CONSTRAINT `TimeEntry_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;
