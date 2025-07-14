-- CreateTable
CREATE TABLE `CompanyLanding` (
    `id` VARCHAR(191) NOT NULL,
    `companyId` VARCHAR(191) NOT NULL,
    `heroTitle` VARCHAR(100) NULL,
    `heroDescription` VARCHAR(100) NULL,
    `c2a1Text` VARCHAR(100) NULL,
    `c2a1Link` VARCHAR(100) NULL,
    `c2a2Text` VARCHAR(100) NULL,
    `c2a2Link` VARCHAR(100) NULL,
    `pinned1Title` VARCHAR(100) NULL,
    `pinned2Title` VARCHAR(100) NULL,
    `pinned3Title` VARCHAR(100) NULL,
    `pinned1Description` VARCHAR(100) NULL,
    `pinned2Description` VARCHAR(100) NULL,
    `pinned3Description` VARCHAR(100) NULL,
    `testimonialsSectionTitle` VARCHAR(100) NULL,
    `testimonialsSectionDescription` VARCHAR(100) NULL,
    `testimonial1Author` VARCHAR(100) NULL,
    `testimonial1Text` VARCHAR(100) NULL,
    `testimonial2Author` VARCHAR(100) NULL,
    `testimonial2Text` VARCHAR(100) NULL,
    `contactSectionTitle` VARCHAR(100) NULL,
    `contactSectionDescription` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CompanyLanding` ADD CONSTRAINT `CompanyLanding_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`companyId`) ON DELETE CASCADE ON UPDATE CASCADE;
