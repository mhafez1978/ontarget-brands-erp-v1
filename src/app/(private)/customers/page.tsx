import { CustomersManagement } from "@/components/erp/CustomersManagement";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const CustomersPage = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.company?.id) {
    return redirect("/auth");
  }

  return <CustomersManagement companyId={session.user.company.id} />;
};

export default CustomersPage;
