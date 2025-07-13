"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { EditCompanyForm } from "../forms/EditCompanyForm";
import { Company as PrismaCompany } from "@/generated/prisma";
import Link from "next/link";
import { OffCanvasBtn } from "../OffCanvasBtn";
import { CreateCompanyForm } from "../forms/CreateCompanyForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

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
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [companyId2Edit, setCompanyId2Edit] = useState("");
  const { data: session } = useSession();

  if (
    !session ||
    !session.user ||
    !["ADMIN", "SUPER_ADMIN", "CUSTOMER", "MANAGER"].includes(session.user.role)
  ) {
    // Access denied
    return redirect("/auth");
  }

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/company/find/${userId}/companies`);
      if (!res.ok) throw new Error("Failed to fetch companies");
      const data = await res.json();
      setCompanies(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, [userId, refreshSignal]);

  const handleEdit = (company: Company) => {
    setSelectedCompany(company);
    setCompanyId2Edit(company.id);
    console.log("#########" + companyId2Edit);
  };

  // const handleDelete = async (company: Company) => {
  //   console.log("Deleting company...", company);
  //   try {
  //     const res = await fetch(`/api/admin/company/${company.id}/delete`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(company),
  //     });

  //     if (!res.ok) {
  //       const err = await res.json();
  //       throw new Error(err.error || "Failed to delete company");
  //     }
  //     // console.log("##### Response body ######");
  //     // console.log(res.body);
  //     // console.log("###### Response JSON #####");
  //     // console.log(res.json);
  //     // console.log("######. Response Headers #####");
  //     // console.log(res.headers);
  //     console.log("Company deleted successfully.");

  //     // Optional: refresh or update state here
  //   } catch (err) {
  //     console.error("Error deleting company:", err);
  //   }
  // };

  const handleDelete = async (company: Company) => {
    //console.log("Deleting company...", company);
    try {
      const res = await fetch(`/api/admin/company/${company.id}/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(company),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to delete company");
      }

      //console.log("Company deleted successfully.");

      // 🔥 Update local state to remove the deleted company
      setCompanies((prev) => prev.filter((c) => c.id !== company.id));
    } catch (err) {
      console.error("Error deleting company:", err);
    }
  };

  const handleClose = () => {
    setSelectedCompany(null);
  };

  if (loading) return <p className="text-gray-500">Loading companies...</p>;
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
              {(close) => (
                <CreateCompanyForm
                  userId={session.user.id}
                  close={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              )}
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
              <div className="flex flex-row-gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleEdit(company)}
                  className="text-muted-foreground"
                >
                  <Pencil size={18} />
                </Button>
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
                    href={`http://${company.domain || ""}`}
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

      <Sheet open={!!selectedCompany} onOpenChange={handleClose}>
        <SheetTitle className="text-lg text-black font-semibold"></SheetTitle>
        <SheetContent
          side="right"
          className="w-full px-4 lg:min-w-[30vw] pt-10"
        >
          {selectedCompany && (
            <EditCompanyForm
              companyId={selectedCompany.id}
              company={selectedCompany}
              onSuccess={() => {
                setSelectedCompany(null);
                fetchCompanies();
              }}
              userId={""}
              close={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
