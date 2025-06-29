// components/CompanyManagementWrapper.tsx
"use client";

import { ReactNode, useState } from "react";
import { CreateCompanyForm } from "../forms/CreateCompanyForm";
import { UserCompaniesList } from "../admin/UserCompaniesList";
import { OffCanvasBtn } from "../OffCanvasBtn";

interface Props {
  userId: string;
}

export const CompanyManagementWrapper = ({ userId }: Props) => {
  const [refreshSignal, setRefreshSignal] = useState(0);

  const handleSuccess = () => {
    setRefreshSignal((prev) => prev + 1); // triggers list reload
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Company Management</h1>
          <p className="text-gray-600">Create and manage companies</p>
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
              close={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          )}
        </OffCanvasBtn>
      </div>

      <div className="w-full border border-red-500">
        <h2 className="text-sm font-semibold mb-2">
          You Manage The Following Companies.
        </h2>
        <UserCompaniesList userId={userId} refreshSignal={refreshSignal} />
      </div>
    </div>
  );
};
