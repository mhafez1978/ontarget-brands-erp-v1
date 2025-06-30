/*
  Warnings:

  - A unique constraint covering the columns `[projectId]` on the table `project_customers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `project_customers_projectId_key` ON `project_customers`(`projectId`);
