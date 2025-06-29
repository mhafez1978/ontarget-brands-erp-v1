/*
  Warnings:

  - You are about to drop the `_CompanyToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_CompanyToUser` DROP FOREIGN KEY `_CompanyToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CompanyToUser` DROP FOREIGN KEY `_CompanyToUser_B_fkey`;

-- DropTable
DROP TABLE `_CompanyToUser`;

-- CreateTable
CREATE TABLE `_CompanyUsers` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CompanyUsers_AB_unique`(`A`, `B`),
    INDEX `_CompanyUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CompanyUsers` ADD CONSTRAINT `_CompanyUsers_A_fkey` FOREIGN KEY (`A`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompanyUsers` ADD CONSTRAINT `_CompanyUsers_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
