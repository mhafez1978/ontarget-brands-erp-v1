/*
  Warnings:

  - You are about to drop the `_FeatureToSubscriptionPlan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_FeatureToSubscriptionPlan` DROP FOREIGN KEY `_FeatureToSubscriptionPlan_A_fkey`;

-- DropForeignKey
ALTER TABLE `_FeatureToSubscriptionPlan` DROP FOREIGN KEY `_FeatureToSubscriptionPlan_B_fkey`;

-- DropTable
DROP TABLE `_FeatureToSubscriptionPlan`;
