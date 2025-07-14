import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function Dashboard({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const hostname = (await params).domain;

  // Verify the company exists
  const company = await prisma.company.findFirst({
    where: {
      OR: [{ domain: hostname }, { domain: hostname, isCustomDomain: true }],
    },
  });

  if (!company) {
    return notFound();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>ERP Dashboard for {company.name}</h1>
      {/* Add your ERP features here */}
    </div>
  );
}
