-- AlterTable
ALTER TABLE `subscription_plans` MODIFY `billingCycle` ENUM('ONE_TIME', 'NET_7', 'NET_15', 'MONTHLY', 'QUARTERLY', 'ANNUALLY') NOT NULL;
