import { auth } from "@/auth";
import { Dashboard } from "@/components/erp/Dashboard";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return redirect("/auth");
  }

  return <Dashboard session={session} />;
};

export default DashboardPage;
