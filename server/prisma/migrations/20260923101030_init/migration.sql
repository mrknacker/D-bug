/*
  Warnings:

  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MemberToTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_userId_fkey";

-- DropForeignKey
ALTER TABLE "_MemberToTeam" DROP CONSTRAINT "_MemberToTeam_A_fkey";

-- DropForeignKey
ALTER TABLE "_MemberToTeam" DROP CONSTRAINT "_MemberToTeam_B_fkey";

-- DropTable
DROP TABLE "Member";

-- DropTable
DROP TABLE "Subscription";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_MemberToTeam";

-- DropEnum
DROP TYPE "SubscriptionPlan";
