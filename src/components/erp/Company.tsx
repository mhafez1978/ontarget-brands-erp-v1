import { redirect } from "next/navigation";
import { CreateCompanyForm } from "../forms/CreateCompanyForm";
import { OffCanvasBtn } from "../OffCanvasBtn";
import { auth } from "@/auth";
import { UserCompaniesList } from "../admin/UserCompaniesList";

export const CompanyManagement = async () => {
  const session = await auth();
  if (!session || !session.user) {
    return redirect("/auth");
  }

  const userId = session.user.id;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Company Management</h1>
          <p className="text-gray-600">Create and manage companies</p>
        </div>
        <OffCanvasBtn
          formName="Create New Company"
          buttonText={"Create Company"}
        >
          {(close) => <CreateCompanyForm userId={userId} close={close} />}
        </OffCanvasBtn>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Your Companies</h2>
        <UserCompaniesList userId={userId} refreshSignal={1} />
      </div>
    </div>
  );
};
