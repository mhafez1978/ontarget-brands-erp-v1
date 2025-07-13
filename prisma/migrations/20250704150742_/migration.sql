/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `subscription_plans` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `subscription_plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `subscription_plans` ADD COLUMN `key` VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `subscription_plans_key_key` ON `subscription_plans`(`key`);
