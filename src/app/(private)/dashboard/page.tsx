// import { auth } from "@/auth";
// import { Dashboard } from "@/components/erp/Dashboard";
// import { redirect } from "next/navigation";

// const DashboardPage = async () => {
//   const session = await auth();

//   if (!session || !session.user) {
//     return redirect("/auth");
//   }

//   if (session.mfaPending === true) {
//     return redirect("/auth/otp");
//   }

//   if (session.user.role === "COMPANY_CUSTOMER") {
//     return redirect("/customer/dashboard");
//   }

//   return <Dashboard session={session} />;
// };

// export default DashboardPage;

import { auth } from "@/auth";
import { Dashboard } from "@/components/erp/Dashboard";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  // 🔒 Not logged in
  if (!session || !session.user) {
    redirect("/auth");
  }

  // 🔐 MFA required
  if (session.mfaPending === true) {
    redirect("/auth/otp");
  }

  // 🧑‍💼 Redirect company customers to customer area
  if (session.user.role === "COMPANY_CUSTOMER") {
    redirect("/customer/dashboard");
  }

  // ✅ Render dashboard for valid users
  return <Dashboard session={session} />;
}
