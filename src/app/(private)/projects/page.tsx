// src/app/projects/page.tsx (or similar)

import { ProjectsManagement } from "@/components/erp/ProjectsManagement";
import { auth } from "@/auth";
import { redirect } from "next/navigation"; // Correct import for Server Components

const ProjectsPage = async () => {
  // 1. Get the session on the server
  const session = await auth();

  // 2. Handle unauthenticated users first (most important guard clause)
  if (!session || !session.user) {
    // If no session, send them to the login page.
    redirect("/auth");
  }

  // 3. Define roles for clarity
  const userRole = session.user.role;
  const authorizedRoles = ["ADMIN", "SUPER_ADMIN", "MANAGER"];

  // 4. Handle the "happy path": users who ARE allowed to see the component
  if (authorizedRoles.includes(userRole)) {
    // The user has a valid role, render the main component for them.
    return <ProjectsManagement />;
  }

  // 5. Handle special cases for other logged-in users
  if (userRole === "CUSTOMER") {
    // A CUSTOMER is logged in but shouldn't be here.
    // We cannot `alert` them, but we can redirect them to a page
    // that explains what they need to do next.
    redirect("/company"); // or /dashboard?error=setup_incomplete
  }

  // 6. Handle all other authenticated users (e.g., STAFF, GUEST)
  // They are logged in but not authorized for this specific page.
  // Send them to a safe default page, not the login page.
  redirect("/dashboard"); // Or your home page "/"
};

export default ProjectsPage;
