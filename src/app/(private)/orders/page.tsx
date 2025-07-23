import { OrdersManagement } from "@/components/erp/OrdersManagement";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const OrdersPage = async () => {
  const session = await auth();
  if (!session || !session.user.company) return redirect("/company");
  return <OrdersManagement />;
};

export default OrdersPage;
