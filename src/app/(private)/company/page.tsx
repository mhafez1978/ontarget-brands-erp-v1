import { CompanyManagementWrapper } from "@/components/admin/CompanyManagementWrapper";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const CompanyPage = async () => {
  const session = await auth();

  if (
    !session ||
    !session.user ||
    !["CUSTOMER", "ADMIN", "MANAGER", "SUPER_ADMIN"].includes(session.user.role)
  ) {
    return redirect("/auth");
  }

  const userId = session.user.id;
  return <CompanyManagementWrapper userId={userId} />;
};

export default CompanyPage;
