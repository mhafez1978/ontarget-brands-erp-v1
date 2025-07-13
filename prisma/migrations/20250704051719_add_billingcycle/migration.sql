-- AlterTable
ALTER TABLE `subscription_plans` MODIFY `billingCycle` ENUM('ONE_TIME', 'MONTHLY', 'QUARTERLY', 'ANNUALLY') NOT NULL DEFAULT 'MONTHLY';
