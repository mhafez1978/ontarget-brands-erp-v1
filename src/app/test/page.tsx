//import { WebsiteManagement } from "@/components/erp/WebsiteManagement";
import { AddNewStaff } from "@/components/forms/AddNewStaff";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import UserProfile from "@/components/UserProfile";
const TestPage = async () => {
  const session = await auth();
  if (!session || !session.user) return redirect("/auth");
  return <UserProfile />;
};

export default TestPage;
