import { UsersManagement } from "@/components/erp/UsersManagement";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const UsersManagementPage = async () => {
  const session = await auth();
  if (!session || !session.user || !session.user.company?.id) {
    redirect("/auth");
  }

  return <UsersManagement companyId={session.user.company.id} />;
};

export default UsersManagementPage;
