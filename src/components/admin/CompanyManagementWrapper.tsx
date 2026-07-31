// components/CompanyManagementWrapper.tsx
"use client";

import { useState } from "react";
import { CreateCompanyForm } from "../forms/CreateCompanyForm";
import { UserCompaniesList } from "../admin/UserCompaniesList";
import { OffCanvasBtn } from "../OffCanvasBtn";
import { redirect } from "next/navigation";

interface Props {
  userId: string;
}

export const CompanyManagementWrapper = ({ userId }: Props) => {
  const [refreshSignal, setRefreshSignal] = useState(0);

  if (!userId) {
    return redirect("/auth");
  }

  const handleSuccess = () => {
    setRefreshSignal((prev) => prev + 1); // triggers list reload
  };

  return (
    <div className="w-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Company Management</h1>
          <p className="text-gray-600">
            Create and manage your companies legal entities.
          </p>
          <p className="text-gray-500 text-xs">
            You can have a single company entity or multiple company entities.
          </p>
        </div>
        <OffCanvasBtn
          buttonText={"Create Company"}
          formName={"Create New Company"}
        >
          {(close) => (
            <CreateCompanyForm
              userId={userId}
              onSuccess={() => {
                handleSuccess();
                close(); // close the drawer after successful creation
              }}
            />
          )}
        </OffCanvasBtn>
      </div>

      <div className="w-full">
        <UserCompaniesList userId={userId} refreshSignal={refreshSignal} />
      </div>
    </div>
  );
};
