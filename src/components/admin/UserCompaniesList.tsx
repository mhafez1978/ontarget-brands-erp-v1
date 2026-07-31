"use client";

import { useEffect, useState } from "react";
import { Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditCompanyForm } from "../forms/EditCompanyForm";
import { Company as PrismaCompany } from "@/generated/prisma";
import Link from "next/link";
import { OffCanvasBtn } from "../OffCanvasBtn";
import { CreateCompanyForm } from "../forms/CreateCompanyForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { showToast } from "@/hooks/toast";
import { OffCanvasMenu } from "../ui/OffCanvasMenu";

type Company = PrismaCompany & {
  subscriptionPlan?: { name?: string };
  owner?: { name?: string };
};

interface Props {
  userId: string;
  refreshSignal: number;
}

export const UserCompaniesList = ({ userId, refreshSignal }: Props) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();

  // Bumped whenever a child asks for a fresh list.
  const [reloadTick, setReloadTick] = useState(0);
  const reloadCompanies = () => setReloadTick((tick) => tick + 1);

  useEffect(() => {
    let cancelled = false;

    const fetchCompanies = async () => {
      try {
        const res = await fetch(`/api/company/find/${userId}/companies`);
        if (!res.ok) throw new Error("Failed to fetch companies");
        const data = await res.json();
        if (!cancelled) setCompanies(data);
      } catch (err) {
        if (!cancelled)
          setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCompanies();

    return () => {
      cancelled = true;
    };
  }, [userId, refreshSignal, reloadTick]);

  // Placed after every hook: an early return here would change the hook count
  // between renders and break React's rules of hooks.
  if (
    !session ||
    !session.user ||
    !["ADMIN", "SUPER_ADMIN", "ERP_CUSTOMER", "MANAGER"].includes(
      session.user.role
    )
  ) {
    // Access denied
    return redirect("/auth");
  }

  const handleDelete = async (company: Company) => {
    //console.log("Deleting company...", company);
    try {
      const res = await fetch(`/api/admin/company/${company.id}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: session.user }),
      });

      if (!res.ok) {
        const err = await res.json();
        showToast("error", "Failed to delete company", err.error);
      }

      showToast("success", "Company was deleted successfully ...");
      setCompanies((prev) => prev.filter((c) => c.id !== company.id));
    } catch (err) {
      console.error("Error deleting company:", err);
    }
  };

  if (loading)
    return (
      <div className="text-gray-500 min-h-[80vh] w-full flex justify-center items-center text-lg">
        Loading companies...
      </div>
    );
  if (error)
    return (
      <p id="err21" className="text-red-500">
        Error: ERR21 ❌ {error}
      </p>
    );
  if (companies.length === 0)
    return (
      <div className="w-full min-h-[60vh] flex justify-center items-center bg-gray-50">
        <div className="flex flex-col gap-6">
          <p className="text-gray-500 italic text-xl">
            Sorry, but we cannot find any companies linked to your account.
          </p>
          <div className="w-1/4">
            <OffCanvasBtn
              formName={"Create New Company"}
              buttonText={"Create Company"}
            >
              {() => <CreateCompanyForm userId={session.user.id} />}
            </OffCanvasBtn>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="w-full flex flex-col gap-4 lg:flex-row ">
        {companies.map((company) => (
          <div
            key={company.id}
            className="w-full bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all lg:w-1/3"
          >
            <div className="w-full flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {company.name}
                </h3>
                <p className="text-sm text-gray-500 italic">
                  {company.slogan || "No slogan"}
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <OffCanvasMenu formName={"Edit Company"}>
                  {(close) => (
                    <EditCompanyForm
                      companyId={company.id}
                      company={company}
                      onSuccess={() => {
                        reloadCompanies();
                        close();
                      }}
                      userId={userId}
                      close={close}
                    />
                  )}
                </OffCanvasMenu>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleDelete(company)}
                  className="text-muted-foreground"
                >
                  <Trash2Icon size={18} />
                </Button>
              </div>
            </div>

            <dl className="flex flex-col gap-4 text-sm text-gray-700">
              <div>
                <dt className="font-black text-gray-600">Domain</dt>
                <dd>
                  <Link
                    href={`http://${company.domain}`}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    {company.domain ? `https://${company.domain}` : "—"}
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="font-black text-gray-600">Owner</dt>
                <dd>{company.owner?.name ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-black text-gray-600">Plan</dt>
                <dd>{company.subscriptionPlan?.name ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-black text-gray-600">Type</dt>
                <dd>
                  {company.type
                    ? company.type
                        .replace(/_/g, " ")
                        .toLowerCase()
                        .replace(/\b\w/g, (c) => c.toUpperCase())
                    : "—"}
                </dd>
              </div>
              <div>
                <dt className="font-black text-gray-600">Category</dt>
                <dd>{company.category ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-black text-gray-600">Phone</dt>
                <dd>{company.phone ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-black text-gray-600">Sales Email</dt>
                <dd>{company.salesEmail ?? "—"}</dd>
              </div>
              <div>
                <dt className="font-black text-gray-600">Support Email</dt>
                <dd>{company.supportEmail ?? "—"}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-black text-gray-600">Main Address</dt>
                <dd>
                  {[company.addressLine1, company.addressLine2]
                    .filter(Boolean)
                    .join(", ") || "—"}
                </dd>
                <dd>
                  {[
                    company.city,
                    company.state,
                    company.zipCode,
                    company.country,
                  ]
                    .filter(Boolean)
                    .join(", ") || "—"}
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </>
  );
};
