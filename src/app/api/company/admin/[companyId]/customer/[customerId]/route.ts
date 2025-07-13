import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string; customerId: string }> }
) {
  const session = await auth();
  const { companyId, customerId } = await params;

  if (
    !companyId ||
    !customerId ||
    !session ||
    !["ADMIN", "MANAGER", "SUPER_ADMIN"].includes(session.user.role)
  ) {
    return new Response(
      JSON.stringify({
        error: "You don't have permissions to delete this customer",
      }),
      {
        status: 400,
      }
    );
  }

  try {
    const deletedCustomer = await prisma.user.delete({
      where: {
        id: customerId,
      },
    });

    if (!deletedCustomer) {
      return new Response(JSON.stringify({ error: "Customer not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Customer deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting customer:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete customer" }),
      {
        status: 500,
      }
    );
  }
}
