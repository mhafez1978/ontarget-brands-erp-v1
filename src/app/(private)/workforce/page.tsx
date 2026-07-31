import { UsersManagement } from "@/components/erp/UsersManagement";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const UsersManagementPage = async () => {
  const session = await auth();
  if (!session || !session.user) {
    return redirect("/auth");
  }

  if (!session.user.company) {
    return (
      <div className="h-screen w-full px-10 py-4">
        <Card className="max-w-md mt-10 shadow-2xl">
          <CardContent>
            <h2 className="text-black font-black text-2xl">Disabled Feature</h2>
            <p className="w-[60%] text-gray-700 text-sm mt-2">
              This feature will be available once your company profile has been
              created.
            </p>
            <Link
              href="/company"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Create Company Profile
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div className="h-screen w-full">
      <UsersManagement companyId={session.user.company?.id || ""} />
    </div>
  );
};

export default UsersManagementPage;
