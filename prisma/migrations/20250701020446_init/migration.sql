/*
  Warnings:

  - The values [ACTIVE] on the enum `projects_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `projects` MODIFY `status` ENUM('PLANNING', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED', 'CANCELED', 'ARCHIVED') NOT NULL DEFAULT 'PLANNING';
