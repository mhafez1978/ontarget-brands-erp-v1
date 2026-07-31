"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { Edit3, Save, Trash2, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

interface User {
  id: string;
  name?: string;
  email?: string;
}

interface Company {
  id: string;
  name: string;
  slogan?: string;
  domain?: string;
  phone?: string;
  supportEmail?: string;
  salesEmail?: string;
  category?: string;
  type?: string;
  logo?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  subscriptionPlanId?: string;
  ownerId?: string;
  users?: unknown;
  subscriptionPlan?: { name?: string };
  isActive: boolean;
  owner?: User;
}

// Editable fields are typed as strings once touched; anything else (e.g. the
// raw `users` relation) is shown as an empty input rather than "[object …]".
const fieldEditValue = (
  data: Partial<Company> | undefined,
  key: keyof Company
) => {
  const value = data?.[key];
  return typeof value === "string" ? value : "";
};

const AllCompaniesSearch = () => {
  const { data: session } = useSession();
  const [companySearch, setCompanySearch] = useState("");
  const [companyList, setCompanyList] = useState<Company[]>([]);
  const [editableCompanyData, setEditableCompanyData] = useState<{
    [id: string]: Partial<Company>;
  }>({});
  const [editingCompanyId, setEditingCompanyId] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  // Refs mirror the two flags so the paging effect can guard on their latest
  // values without re-running every time they change.
  const hasMoreRef = useRef(true);
  const loadingRef = useRef(false);

  const searchTerm = companySearch.toLowerCase();
  const filteredCompanies = companyList.filter(
    (company, index, self) =>
      index === self.findIndex((c) => c.id === company.id) &&
      [
        company.name,
        company.slogan,
        company.domain,
        company.phone,
        company.supportEmail,
        company.owner?.name,
        company.owner?.email,
      ]
        .filter(Boolean)
        .some((field) => field?.toLowerCase().includes(searchTerm))
  );

  useEffect(() => {
    if (!session?.user?.id || !hasMoreRef.current || loadingRef.current) return;
    const getCompanies = async () => {
      try {
        loadingRef.current = true;
        setLoading(true);
        const res = await fetch(
          `/api/admin/${session.user.id}/fetch-all?page=${page}`
        );
        if (!res.ok) throw new Error("Failed to fetch companies");
        const data = await res.json();
        if (data.length === 0) {
          hasMoreRef.current = false;
          setHasMore(false);
        }
        setCompanyList((prev) => [
          ...prev,
          ...data.filter(
            (newItem: Company) =>
              !prev.find((existing) => existing.id === newItem.id)
          ),
        ]);
        loadingRef.current = false;
        setLoading(false);
      } catch (err) {
        console.error("Error fetching companies:", err);
        loadingRef.current = false;
        setLoading(false);
      }
    };
    getCompanies();
  }, [session, page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPage((prev) => prev + 1);
    });
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, []);

  const handleEditChange = (
    id: string,
    field: keyof Company,
    value: string
  ) => {
    setEditableCompanyData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleSaveEdit = async (id: string) => {
    const updatedData = editableCompanyData[id];
    if (!updatedData) return;
    try {
      const res = await fetch(`/api/admin/company/${id}/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (!res.ok) throw new Error("Update failed");
      const updated = await res.json();
      setCompanyList((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...updated } : c))
      );
      setEditableCompanyData((prev) => {
        const rest = { ...prev };
        delete rest[id];
        return rest;
      });
      setEditingCompanyId(null);
      setSheetOpen(false);
    } catch (err) {
      console.error(err);
      alert("Failed to save changes");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this company?")) return;
    try {
      const res = await fetch(`/api/admin/company/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      setCompanyList((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete company");
    }
  };

  const handleToggleStatus = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/company/${id}/toggle-disabled`, {
        method: "PATCH",
      });
      if (!res.ok) throw new Error("Toggle failed");
      const data = await res.json();
      setCompanyList((prev) =>
        prev.map((c) => (c.id === id ? { ...c, isActive: data.isActive } : c))
      );
    } catch (err) {
      console.error(err);
      alert("Failed to toggle status");
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <Input
        placeholder="Search companies"
        value={companySearch}
        onChange={(e) => setCompanySearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCompanies.map((company) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-4 shadow-sm border rounded-2xl space-y-3">
              <CardContent className="space-y-2">
                <h3 className="text-lg font-semibold">{company.name}</h3>
                <p className="text-sm text-gray-600">
                  {company.slogan ?? "No slogan"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {company.domain ?? "No domain"}
                </p>
                <p className="text-xs">Phone: {company.phone ?? "—"}</p>
                <p className="text-xs">
                  Support: {company.supportEmail ?? "—"}
                </p>
                <p className="text-xs">Owner: {company.owner?.name ?? "—"}</p>
                <p className="text-xs">
                  Plan: {company.subscriptionPlan?.name ?? "—"}
                </p>
                <div className="flex justify-between items-center pt-2">
                  <Switch
                    checked={company.isActive}
                    onCheckedChange={() => handleToggleStatus(company.id)}
                  />
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        setEditingCompanyId(company.id);
                        setEditableCompanyData((prev) => ({
                          ...prev,
                          [company.id]: {
                            name: company.name,
                            slogan: company.slogan,
                            domain: company.domain,
                            phone: company.phone,
                            supportEmail: company.supportEmail,
                            salesEmail: company.salesEmail,
                            category: company.category,
                            type: company.type,
                            logo: company.logo,
                            addressLine1: company.addressLine1,
                            addressLine2: company.addressLine2,
                            city: company.city,
                            state: company.state,
                            zipCode: company.zipCode,
                            country: company.country,
                            subscriptionPlanId: company.subscriptionPlanId,
                            ownerId: company.ownerId,
                            users: company.users,
                          },
                        }));
                        setSheetOpen(true);
                      }}
                    >
                      <Edit3 size={16} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleDelete(company.id)}
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {loading &&
          Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
      </div>

      {hasMore && <div ref={loadMoreRef} className="h-8"></div>}

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="right"
          className="w-full sm:w-[400px] h-full overflow-auto"
        >
          <SheetHeader>
            <SheetTitle>Edit Company</SheetTitle>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSheetOpen(false)}
              >
                <X size={18} />
              </Button>
            </SheetClose>
          </SheetHeader>
          {editingCompanyId && (
            <div className="flex flex-col gap-4 mt-4">
              {Object.entries({
                name: "Company Name",
                slogan: "Slogan",
                domain: "Domain",
                phone: "Phone",
                supportEmail: "Support Email",
                salesEmail: "Sales Email",
                category: "Category",
                type: "Type",
                logo: "Logo URL",
                addressLine1: "Address Line 1",
                addressLine2: "Address Line 2",
                city: "City",
                state: "State",
                zipCode: "Zip Code",
                country: "Country",
                subscriptionPlanId: "Subscription Plan ID",
                ownerId: "Owner ID",
                users: "Users (JSON)",
              }).map(([key, label]) => (
                <Input
                  key={key}
                  placeholder={label}
                  value={fieldEditValue(
                    editableCompanyData[editingCompanyId],
                    key as keyof Company
                  )}
                  onChange={(e) =>
                    handleEditChange(
                      editingCompanyId,
                      key as keyof Company,
                      e.target.value
                    )
                  }
                />
              ))}
              <Button onClick={() => handleSaveEdit(editingCompanyId)}>
                <Save size={16} className="mr-2" /> Save Changes
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AllCompaniesSearch;
