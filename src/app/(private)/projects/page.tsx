// src/app/projects/page.tsx (or similar)

import { ProjectsManagement } from "@/components/erp/ProjectsManagement";
import { auth } from "@/auth";
import { redirect } from "next/navigation"; // Correct import for Server Components

const ProjectsPage = async () => {
  const session = await auth();
  if (!session || !session.user) {
    return redirect("/auth");
  }
  //const userId = session.user.id;
  const userRole = session.user.role;
  const subscriptionPlan = session.user.subscriptionPlan;
  if (
    !userRole ||
    !["ADMIN", "SUPER_ADMIN", "MANAGER"].includes(userRole) ||
    !subscriptionPlan ||
    subscriptionPlan.key.toLowerCase() !== "premium"
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
  return <ProjectsManagement />;
};

export default ProjectsPage;
