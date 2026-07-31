"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { OffCanvasBtn } from "@/components/OffCanvasBtn";
import { CreatePlanForm } from "@/components/forms/CreatePlanForm";
import { UserPasswordResetManager } from "@/components/superadmin/UserPasswordResetManager";
import AllCompaniesSearch from "./AllCompaniesSearch";

export const SuperAdminModelsManager = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (
    !session ||
    !session.user ||
    !["SUPER_ADMIN", "ADMIN"].includes(session.user.role)
  ) {
    router.replace("/auth");
    return null;
  }

  return (
    <div className="relative p-6 space-y-6">
      <div className="flex flex-col justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Super Admin</h1>
          <p className="text-gray-600">Manage company information</p>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="w-1/4 flex flex-row gap-4 pt-10">
            <OffCanvasBtn
              formName="Create Subscription Plan"
              buttonText={"Define A Subscription Plan"}
            >
              {() => <CreatePlanForm />}
            </OffCanvasBtn>
            <OffCanvasBtn
              formName="Reset Password Form"
              buttonText={"Reset user password"}
            >
              {() => <UserPasswordResetManager />}
            </OffCanvasBtn>
          </div>
          <div className="flex flex-1 gap-4">
            <AllCompaniesSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
