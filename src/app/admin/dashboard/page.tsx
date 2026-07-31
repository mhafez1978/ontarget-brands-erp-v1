import { auth } from "@/auth";

const AdminDashboardPage = async () => {
  const session = await auth();
  if (
    !session ||
    ["SUPER_ADMIN", "ADMIN"].includes(session.user.role) === false
  ) {
    return <div>You're Unauthorized to Access this Page.... </div>;
  }
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Manage business custom settings, users, and more.
          </p>
        </div>
      </div>

      {/* add more stuff here */}
    </div>
  );
};

export default AdminDashboardPage;
