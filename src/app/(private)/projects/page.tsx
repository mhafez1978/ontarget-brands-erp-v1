import { ProjectsManagement } from "@/components/erp/ProjectsManagement";
import { auth } from "@/auth";
import { redirect } from "next/navigation"; // Correct import for Server Components
import { companyHasFeature } from "@/lib/features";
import { FEATURE_KEYS } from "@/lib/feature-catalog";

const ProjectsPage = async () => {
  const session = await auth();
  if (!session || !session.user) {
    return redirect("/auth");
  }

  const userRole = session.user.role;
  const companyId = session.user.company?.id;
  const allowed =
    ["ADMIN", "SUPER_ADMIN", "MANAGER"].includes(userRole ?? "") &&
    !!companyId &&
    (await companyHasFeature(companyId, FEATURE_KEYS.projects));

  if (!allowed) {
    // Access denied
    return (
      <>
        <div className="pt-4">
          <h2 className="text-5xl font-bold mb-4">Upgrade Required</h2>
          <p className="text-red-500 text-lg mb-2">
            You do not have this feature enabled in your plan.
          </p>
          <p className="text-sm text-gray-500 italic">
            Please upgrade your plan to access Projects.
          </p>
        </div>
      </>
    );
  }
  return <ProjectsManagement />;
};

export default ProjectsPage;
