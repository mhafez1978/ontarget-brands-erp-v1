/*
  Warnings:

  - A unique constraint covering the columns `[subdomain]` on the table `CompanySubdomain` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `CompanySubdomain_subdomain_key` ON `CompanySubdomain`(`subdomain`);
