/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isManager` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isStaff` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `isAdmin`,
    DROP COLUMN `isManager`,
    DROP COLUMN `isStaff`,
    DROP COLUMN `postalCode`,
    ADD COLUMN `lastLogin` DATETIME(3) NULL,
    ADD COLUMN `role` ENUM('SUPER_ADMIN', 'ADMIN', 'MANAGER', 'STAFF', 'ERP_CUSTOMER', 'GUEST') NOT NULL DEFAULT 'ERP_CUSTOMER',
    ADD COLUMN `zipCode` VARCHAR(20) NULL;
