import { CompanyManagementWrapper } from "@/components/admin/CompanyManagementWrapper";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const CompanyPage = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return redirect("/auth");
  }

  if (!["ADMIN", "CUSTOMER", "SUPER_ADMIN"].includes(session.user.role)) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-gray-600">
          You do not have permission to view this page.
        </p>
      </div>
    );
  }

  const userId = session.user.id;
  return <CompanyManagementWrapper userId={userId} />;
};

export default CompanyPage;
