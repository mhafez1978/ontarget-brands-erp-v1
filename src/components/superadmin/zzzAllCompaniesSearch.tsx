"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Edit3, Save, Trash2 } from "lucide-react";

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
  subscriptionPlan?: { name?: string };
  isActive: boolean;
  owner?: User;
}

const AllCompaniesSearch = () => {
  const { data: session } = useSession();

  const [companySearch, setCompanySearch] = useState("");
  const [companyList, setCompanyList] = useState<Company[]>([]);
  const [selectedCompanyIds, setSelectedCompanyIds] = useState<string[]>([]);
  const [editableCompanyData, setEditableCompanyData] = useState<{
    [id: string]: Partial<Company>;
  }>({});
  const [editingCompanyId, setEditingCompanyId] = useState<string | null>(null);

  const searchTerm = companySearch.toLowerCase();
  const filteredCompanies = companyList.filter((company) =>
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
    if (!session?.user?.id) return;
    const getCompanies = async () => {
      try {
        const res = await fetch(`/api/admin/${session.user.id}/fetch-all`);
        if (!res.ok) throw new Error("Failed to fetch companies");
        const data = await res.json();
        setCompanyList(data);
      } catch (err) {
        console.error("Error fetching companies:", err);
      }
    };
    getCompanies();
  }, [session]);

  const handleRowSelect = (id: string, checked: boolean) => {
    setSelectedCompanyIds((prev) =>
      checked ? [...prev, id] : prev.filter((x) => x !== id)
    );
  };

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
      setSelectedCompanyIds((prev) => prev.filter((x) => x !== id));
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

  const handleBulkToggleStatus = async () => {
    try {
      for (const id of selectedCompanyIds) {
        await fetch(`/api/admin/company/${id}/toggle-disabled`, {
          method: "PATCH",
        });
      }
      setCompanyList((prev) =>
        prev.map((company) =>
          selectedCompanyIds.includes(company.id)
            ? { ...company, isActive: !company.isActive }
            : company
        )
      );
    } catch (err) {
      console.error(err);
      alert("Bulk status update failed.");
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <input
        className="w-full border border-gray-400 p-2 rounded-md"
        placeholder="Search companies"
        type="text"
        value={companySearch}
        onChange={(e) => setCompanySearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full table-fixed border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 border w-16">Select</th>
              <th className="p-2 border w-48">Name</th>
              <th className="p-2 border w-48">Slogan</th>
              <th className="p-2 border">Domain</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Support Email</th>
              <th className="p-2 border">Owner</th>
              <th className="p-2 border">Plan</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => {
              const isSelected = selectedCompanyIds.includes(company.id);
              const editable = editableCompanyData[company.id] ?? {};
              const isEditing = editingCompanyId === company.id;

              return (
                <tr
                  key={company.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-2 border text-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) =>
                        handleRowSelect(company.id, e.target.checked)
                      }
                    />
                  </td>

                  <td className="p-2 border w-48">
                    {isEditing ? (
                      <input
                        value={editable.name ?? company.name}
                        onChange={(e) =>
                          handleEditChange(company.id, "name", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    ) : (
                      company.name
                    )}
                  </td>

                  <td className="p-2 border w-48">
                    {isEditing ? (
                      <input
                        value={editable.slogan ?? company.slogan ?? ""}
                        onChange={(e) =>
                          handleEditChange(company.id, "slogan", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                    ) : (
                      company.slogan ?? "—"
                    )}
                  </td>

                  <td className="p-2 border">{company.domain ?? "—"}</td>
                  <td className="p-2 border">{company.phone ?? "—"}</td>
                  <td className="p-2 border">{company.supportEmail ?? "—"}</td>

                  <td className="p-2 border">
                    {company.owner?.name ? (
                      <>
                        {company.owner.name}
                        <br />
                        <span className="text-xs text-gray-500">
                          {company.owner.email}
                        </span>
                      </>
                    ) : (
                      "—"
                    )}
                  </td>

                  <td className="p-2 border">
                    {company.subscriptionPlan?.name ?? "—"}
                  </td>

                  <td className="p-2 border">
                    {company.isActive ? "Active" : "Disabled"}
                  </td>

                  <td className="p-2 border flex gap-2 justify-center items-center">
                    <button
                      onClick={() => handleToggleStatus(company.id)}
                      className={`px-2 py-1 text-xs rounded ${
                        company.isActive
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {company.isActive ? "Disable" : "Enable"}
                    </button>

                    {isEditing ? (
                      <button
                        onClick={() => handleSaveEdit(company.id)}
                        className="text-green-600"
                      >
                        <Save size={18} />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingCompanyId(company.id);
                          setEditableCompanyData((prev) => ({
                            ...prev,
                            [company.id]: {
                              name: company.name,
                              slogan: company.slogan,
                            },
                          }));
                        }}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <Edit3 size={18} />
                      </button>
                    )}

                    <button
                      onClick={() => handleDelete(company.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
            {filteredCompanies.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center p-4 text-gray-500">
                  No companies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-4">
          {selectedCompanyIds.length > 0 && (
            <button
              onClick={handleBulkToggleStatus}
              className="bg-red-600 text-white px-3 py-2 rounded shadow-sm"
            >
              Toggle Status for {selectedCompanyIds.length} selected
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCompaniesSearch;
