import { auth } from "@/auth";
import { redirect } from "next/navigation";

const CustomerDashboardPage = async () => {
  const session = await auth();

  if (!session || session.user.role !== "COMPANY_CUSTOMER") {
    return redirect("/auth");
  }

  return (
    <>
      <div className="p-10">
        <h1>Welcome, {session.user.name}</h1>
        <h4>
          you have been a customer since{" "}
          {session.user.createdAt
            ? new Date(session.user.createdAt).toLocaleDateString()
            : "unknown"}
        </h4>
        <p>You are a customer of {session.user.company?.name}</p>
        <p className="mt-6 mb-6">Features Coming soon:</p>
        <ol className="list-disc">
          <li>Customer can see previous orders</li>
          <li>Customer can place a new order</li>
          <li>Customer can link a bank account to make payments</li>
          <li>Customer can view and pay invoices</li>
          <li>Customer can view all invoice history</li>
          <li>Send a message to the company </li>
          <li>Read a message from company staff</li>
          <li>if customer has open projects will see status of work</li>
        </ol>
      </div>
    </>
  );
};

export default CustomerDashboardPage;
