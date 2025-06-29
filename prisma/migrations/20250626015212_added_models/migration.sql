-- AlterTable
ALTER TABLE `users` ADD COLUMN `companyId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `companies` (
    `companyId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `slogan` VARCHAR(255) NULL,
    `category` ENUM('AGRICULTURE', 'AUTOMOTIVE', 'CONSTRUCTION', 'CONSULTING', 'EDUCATION', 'ENERGY', 'ENTERTAINMENT', 'FINANCE', 'FOOD_AND_BEVERAGE', 'GOVERNMENT', 'HEALTHCARE', 'HOSPITALITY', 'INTERIOR_DESIGN', 'MANUFACTURING', 'MARKETING', 'NON_PROFIT', 'PHARMACEUTICAL', 'REAL_ESTATE', 'RETAIL', 'TECHNOLOGY', 'TELECOMMUNICATIONS', 'TRANSPORTATION') NULL,
    `type` ENUM('SERVICES', 'PRODUCTS', 'SERVICES_AND_PRODUCTS', 'OTHER') NULL,
    `logo` VARCHAR(255) NULL,
    `domain` VARCHAR(255) NULL,
    `phone` VARCHAR(20) NULL,
    `supportEmail` VARCHAR(255) NULL,
    `salesEmail` VARCHAR(255) NULL,
    `addressLine1` VARCHAR(255) NULL,
    `addressLine2` VARCHAR(255) NULL,
    `city` VARCHAR(100) NULL,
    `state` VARCHAR(100) NULL,
    `zipCode` VARCHAR(20) NULL,
    `country` VARCHAR(100) NULL,
    `subscriptionPlanId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `companies_domain_key`(`domain`),
    PRIMARY KEY (`companyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscription_plans` (
    `planId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `pricePerMonth` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,
    `description` VARCHAR(500) NULL,
    `maxUsers` INTEGER NOT NULL DEFAULT 1,
    `maxAdmins` INTEGER NOT NULL DEFAULT 1,
    `maxManagers` INTEGER NOT NULL DEFAULT 0,
    `storageLimitMB` INTEGER NOT NULL DEFAULT 100,
    `maxProjects` INTEGER NOT NULL DEFAULT 3,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `subscription_plans_name_key`(`name`),
    PRIMARY KEY (`planId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `features` (
    `featureId` VARCHAR(191) NOT NULL,
    `key` VARCHAR(100) NOT NULL,
    `label` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `features_key_key`(`key`),
    PRIMARY KEY (`featureId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PlanFeatures` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PlanFeatures_AB_unique`(`A`, `B`),
    INDEX `_PlanFeatures_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FeatureToSubscriptionPlan` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_FeatureToSubscriptionPlan_AB_unique`(`A`, `B`),
    INDEX `_FeatureToSubscriptionPlan_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_subscriptionPlanId_fkey` FOREIGN KEY (`subscriptionPlanId`) REFERENCES `subscription_plans`(`planId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlanFeatures` ADD CONSTRAINT `_PlanFeatures_A_fkey` FOREIGN KEY (`A`) REFERENCES `features`(`featureId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlanFeatures` ADD CONSTRAINT `_PlanFeatures_B_fkey` FOREIGN KEY (`B`) REFERENCES `subscription_plans`(`planId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FeatureToSubscriptionPlan` ADD CONSTRAINT `_FeatureToSubscriptionPlan_A_fkey` FOREIGN KEY (`A`) REFERENCES `features`(`featureId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FeatureToSubscriptionPlan` ADD CONSTRAINT `_FeatureToSubscriptionPlan_B_fkey` FOREIGN KEY (`B`) REFERENCES `subscription_plans`(`planId`) ON DELETE CASCADE ON UPDATE CASCADE;
