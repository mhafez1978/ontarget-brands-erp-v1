import { auth } from "@/auth";
import { InventoryManagement } from "@/components/erp/InventoryManagement";

import { redirect } from "next/navigation";

const InventoryPage = async () => {
  const session = await auth();
  if (!session || !session.user) {
    return redirect("/auth");
  }
  //console.log(session);
  const userRole = session.user.role;
  const subscriptionPlan = session.user.company?.subscriptionPlan;
  const companies = session.user.ownedCompanies || [];

  if (
    !userRole ||
    !["ADMIN", "SUPER_ADMIN", "MANAGER", "ERP_CUSTOMER"].includes(userRole)
  ) {
    // Access denied
    return (
      <>
        <div className="pt-4">
          <h2 className="text-5xl font-bold mb-4">Upgrade Required</h2>
          <p className="text-red-500 text-lg mb-2">
            You do not have this feature enabled in your plan.
          </p>
          <p className="text-sm text-gray-500 italic">
            Please upgrade your plan to access Inventory Management.
          </p>
        </div>
      </>
    );
  }

  return <InventoryManagement companies={companies} />;
};

export default InventoryPage;
