import { Settings } from "@/components/erp/Settings";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
const SettingsPage = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return redirect("/auth");
  }

  return <Settings />;
};

export default SettingsPage;
