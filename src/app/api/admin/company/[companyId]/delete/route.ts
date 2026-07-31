// import { auth } from "@/auth";
// import { prisma } from "@/lib/prisma";

// export async function DELETE(
//   request: Request,
//   { params }: { params: { companyId: string } }
// ) {
//   const { companyId } = params;
//   if (!companyId) {
//     return new Response(JSON.stringify({ error: "Company ID is required" }), {
//       status: 400,
//     });
//   }

//   try {
//     const session = await auth();

//     if (
//       !session ||
//       !session.user ||
//       !["ADMIN", "SUPER_ADMIN"].includes(session.user.role)
//     ) {
//       return new Response(JSON.stringify({ error: "Unauthorized" }), {
//         status: 401,
//       });
//     }

//     const getCompany = await prisma.company.findUnique({
//       where: { id: companyId },
//     });

//     if (!getCompany) {
//       return new Response(JSON.stringify({ error: "Company not found" }), {
//         status: 404,
//       });
//     }

//     const company = getCompany;

//     if (session.user.id !== company.ownerId) {
//       return new Response(
//         JSON.stringify({
//           error: "You cannot delete this company, you dont have permissions..",
//         }),
//         {
//           status: 403,
//         }
//       );
//     }
//     const deletedCompany = await prisma.company.delete({
//       where: { id: companyId },
//     });

//     return new Response(
//       JSON.stringify({ message: "Company deleted successfully" }),
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     console.error("Error deleting company:", error);
//     return new Response(JSON.stringify({ error: "Failed to delete company" }), {
//       status: 500,
//     });
//   }
// }

import { prisma } from "@/lib/prisma";
import { requireCompanyAccess } from "@/lib/authz";
import { Role } from "@/generated/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  if (!companyId) {
    return new Response(JSON.stringify({ error: "Company ID is required" }), {
      status: 400,
    });
  }

  const authz = await requireCompanyAccess(companyId, [
    Role.SUPER_ADMIN,
    Role.ADMIN,
    Role.ERP_CUSTOMER,
  ]);
  if (!authz.ok) return authz.response;

  try {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return new Response(JSON.stringify({ error: "Company not found" }), {
        status: 404,
      });
    }

    await prisma.company.delete({
      where: { id: companyId },
    });

    return new Response(
      JSON.stringify({ message: "Company deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting company:", error);
    return new Response(JSON.stringify({ error: "Failed to delete company" }), {
      status: 500,
    });
  }
}
