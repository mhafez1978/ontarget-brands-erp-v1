/*
  Warnings:

  - Added the required column `ownerId` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `companies` ADD COLUMN `gmailConnected` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `office365Connected` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `ownerId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `_CompanyToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CompanyToUser_AB_unique`(`A`, `B`),
    INDEX `_CompanyToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompanyToUser` ADD CONSTRAINT `_CompanyToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompanyToUser` ADD CONSTRAINT `_CompanyToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
