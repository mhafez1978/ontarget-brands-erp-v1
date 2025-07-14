-- CreateTable
CREATE TABLE `users` (
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(191) NOT NULL,
    `image` VARCHAR(255) NULL,
    `phone` VARCHAR(20) NULL,
    `birthDate` DATETIME(3) NULL,
    `password` VARCHAR(255) NOT NULL,
    `addressLine1` VARCHAR(255) NULL,
    `addressLine2` VARCHAR(255) NULL,
    `city` VARCHAR(100) NULL,
    `state` VARCHAR(100) NULL,
    `zipCode` VARCHAR(20) NULL,
    `country` VARCHAR(100) NULL,
    `companyId` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'MANAGER', 'STAFF', 'ERP_CUSTOMER', 'GUEST') NOT NULL DEFAULT 'ERP_CUSTOMER',
    `lastLogin` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `gmailConnected` BOOLEAN NOT NULL DEFAULT false,
    `office365Connected` BOOLEAN NOT NULL DEFAULT false,
    `ownerId` VARCHAR(191) NOT NULL,
    `subscriptionPlanId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `companies_name_key`(`name`),
    UNIQUE INDEX `companies_domain_key`(`domain`),
    UNIQUE INDEX `companies_supportEmail_key`(`supportEmail`),
    UNIQUE INDEX `companies_salesEmail_key`(`salesEmail`),
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
    `maxCustomers` INTEGER NOT NULL DEFAULT 10,
    `storageLimitMB` INTEGER NOT NULL DEFAULT 100,
    `maxProjects` INTEGER NOT NULL DEFAULT 3,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
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
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `features_key_key`(`key`),
    PRIMARY KEY (`featureId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `projectId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `status` ENUM('PLANNING', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED', 'CANCELED', 'ARCHIVED') NOT NULL DEFAULT 'PLANNING',
    `startDate` DATETIME(3) NULL,
    `endDate` DATETIME(3) NULL,
    `companyId` VARCHAR(191) NOT NULL,
    `budget` DECIMAL(65, 30) NULL,
    `progress` INTEGER NULL,
    `managerId` VARCHAR(191) NOT NULL,
    `customerid` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`projectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_staff` (
    `projectStaffId` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `project_staff_projectId_userId_key`(`projectId`, `userId`),
    PRIMARY KEY (`projectStaffId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `project_customers` (
    `projectCustomerId` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `role` VARCHAR(100) NULL,
    `notes` TEXT NULL,
    `addedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `project_customers_projectId_key`(`projectId`),
    UNIQUE INDEX `project_customers_projectId_userId_key`(`projectId`, `userId`),
    PRIMARY KEY (`projectCustomerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CompanyUsers` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CompanyUsers_AB_unique`(`A`, `B`),
    INDEX `_CompanyUsers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PlanFeatures` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PlanFeatures_AB_unique`(`A`, `B`),
    INDEX `_PlanFeatures_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_subscriptionPlanId_fkey` FOREIGN KEY (`subscriptionPlanId`) REFERENCES `subscription_plans`(`planId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_managerId_fkey` FOREIGN KEY (`managerId`) REFERENCES `users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_staff` ADD CONSTRAINT `project_staff_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`projectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_staff` ADD CONSTRAINT `project_staff_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_customers` ADD CONSTRAINT `project_customers_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects`(`projectId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_customers` ADD CONSTRAINT `project_customers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompanyUsers` ADD CONSTRAINT `_CompanyUsers_A_fkey` FOREIGN KEY (`A`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompanyUsers` ADD CONSTRAINT `_CompanyUsers_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlanFeatures` ADD CONSTRAINT `_PlanFeatures_A_fkey` FOREIGN KEY (`A`) REFERENCES `features`(`featureId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlanFeatures` ADD CONSTRAINT `_PlanFeatures_B_fkey` FOREIGN KEY (`B`) REFERENCES `subscription_plans`(`planId`) ON DELETE CASCADE ON UPDATE CASCADE;

