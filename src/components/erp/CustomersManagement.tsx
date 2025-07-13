"use client";

import { useEffect, useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { getAlpha2Code } from "i18n-iso-countries";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { allCountries } from "country-region-data";
import type { CountryData } from "country-region-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { showToast } from "@/hooks/toast";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, Mail, Phone, MapPin, Star } from "lucide-react";
import { OffCanvasBtn } from "@/components/OffCanvasBtn";
import { useSession } from "next-auth/react";

countries.registerLocale(enLocale);

interface CustomerData {
  id: string;
  name: string;
  email: string;
  image: string;
  phone: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  companyId: string;
  isActive: boolean;
  role: string;
  createdAt: string;
  totalSpent?: number;
  totalOrders?: number;
}

export const CustomersManagement = ({ companyId }: { companyId: string }) => {
  const { data: session } = useSession();
  if (!session || !session.user || !session.user.company?.id) {
    return <div>Please log in to view and manage customers.</div>;
  }
  const [searchTerm, setSearchTerm] = useState("");
  const [states, setStates] = useState<{ name: string; code?: string }[]>([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [customersByCompany, setCustomersByCompany] = useState<
    Record<string, CustomerData[]>
  >({});
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(
    null
  );
  const [formData, setFormData] = useState<
    Omit<CustomerData, "id" | "createdAt">
  >({
    name: "",
    email: "",
    image: "",
    phone: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    companyId: "",
    isActive: true,
    role: "customer",
  });

  const formatPhone = (raw: string, countryName?: string) => {
    const countryCode = countryName
      ? getAlpha2Code(countryName, "en") ?? "US"
      : "US";
    const phoneNumber = parsePhoneNumberFromString(
      raw,
      countryCode as import("libphonenumber-js").CountryCode
    );
    return phoneNumber ? phoneNumber.formatInternational() : raw;
  };

  const countryList = (allCountries as CountryData[]).map(
    ([name, code, regions]) => ({
      label: name,
      value: code,
      regions: regions.map(([regionName]) => ({ name: regionName })),
    })
  );

  useEffect(() => {
    const selected = countryList.find((c) => c.label === formData.country);
    setStates(selected?.regions || []);
  }, [formData.country]);

  useEffect(() => {
    const fetchAllCustomers = async () => {
      if (!session?.user?.ownedCompanies) return;
      const results = await Promise.all(
        session.user.ownedCompanies.map(async (company: any) => {
          const res = await fetch(`/api/customers/${company.id}/list`);
          const data = await res.json();
          return { companyId: company.id, customers: data.customers ?? [] };
        })
      );
      const map: Record<string, CustomerData[]> = {};
      results.forEach(({ companyId, customers }) => {
        map[companyId] = customers;
      });
      setCustomersByCompany(map);
      if (!selectedCompanyId && results.length > 0) {
        setSelectedCompanyId(results[0].companyId);
      }
    };
    fetchAllCustomers();
  }, [session]);

  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent, close: () => void) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return showToast("error", "Passwords do not match");
    }
    const res = await fetch(`/api/company/admin/${companyId}/customer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        avatar: formData.image,
        birthDate: new Date(formData.birthDate).toISOString(),
      }),
    });
    const data = await res.json();
    if (!res.ok) return showToast("error", data.error || "Failed to create");
    showToast("success", "Customer created successfully");
    setCustomersByCompany((prev) => ({
      ...prev,
      [formData.companyId]: [
        data.newCustomer,
        ...(prev[formData.companyId] || []),
      ],
    }));
    close();
  };

  if (!session || !session.user || !session.user.company?.id) {
    return <div>Please log in to view and manage customers.</div>;
  }

  const statuses = ["all", "active", "inactive"];
  const filteredCustomers =
    selectedCompanyId &&
    customersByCompany[selectedCompanyId]?.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.includes(searchTerm);
      const matchesStatus =
        selectedStatus === "all" ||
        c.isActive === (selectedStatus === "active");
      return matchesSearch && matchesStatus;
    });

  function handleEditCustomer(
    id: string
  ): React.MouseEventHandler<HTMLButtonElement> {
    return (e) => {
      e.preventDefault();
      showToast("info", `Edit customer with ID: ${id}`);
      // You can implement opening an edit modal or navigating to an edit page here.
    };
  }
  function handleDeleteCustomer(
    id: string
  ): React.MouseEventHandler<HTMLButtonElement> {
    return async (e) => {
      e.preventDefault();

      if (!window.confirm("Are you sure you want to delete this customer?")) {
        return;
      }
      const customerId = id; // Assuming id is the customer ID
      const res = await fetch(
        `/api/company/admin/${companyId}/customer/${customerId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) return showToast("error", data.error || "Failed to delete");
      showToast("success", "Customer deleted successfully");
      setCustomersByCompany((prev) => ({
        ...prev,
        [selectedCompanyId!]: prev[selectedCompanyId!].filter(
          (c) => c.id !== id
        ),
      }));
    };
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Customers Management
          </h1>
          <p className="text-gray-600 mt-1">Manage your customer data</p>
        </div>
        <OffCanvasBtn formName="Add New Customer" buttonText="Add New Customer">
          {(close) => (
            <form
              onSubmit={(e) => handleSubmit(e, close)}
              className="space-y-3 px-4 flex flex-col gap-2"
            >
              {Object.entries(formData).map(([key, val]) => {
                if (
                  key === "state" ||
                  key === "country" ||
                  key === "companyId"
                ) {
                  return null;
                }
                if (key === "role") {
                  return (
                    <Input
                      className="w-full hidden"
                      key={key}
                      value={val as string}
                      //onChange={(e) => handleChange(key as any, e.target.value)}
                      placeholder={key}
                      type="text"
                      disabled={true}
                    />
                  );
                }
                if (key === "isActive") {
                  return (
                    <Input
                      className="w-full hidden"
                      key={key}
                      value={val as string}
                      //onChange={(e) => handleChange(key as any, e.target.value)}
                      placeholder={key}
                      type="text"
                      disabled={true}
                    />
                  );
                }
                if (key === "birthDate") {
                  return (
                    <Input
                      className="w-full flex flex-row justify-between"
                      key={key}
                      value={val as string}
                      onChange={(e) => handleChange(key as any, e.target.value)}
                      placeholder={key}
                      type="date"
                    />
                  );
                }
                return (
                  <Input
                    key={key}
                    name={key}
                    value={val as string}
                    onChange={(e) => handleChange(key as any, e.target.value)}
                    placeholder={key}
                    type={key.includes("password") ? "password" : "text"}
                  />
                );
              })}
              <Select
                value={formData.state}
                onValueChange={(val) => handleChange("state", val)}
              >
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Select State/Province" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((s) => (
                    <SelectItem key={s.name} value={s.name}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={
                  countryList.find((c) => c.label === formData.country)
                    ?.value || ""
                }
                onValueChange={(code) => {
                  const selected = countryList.find((c) => c.value === code);
                  if (selected) handleChange("country", selected.label);
                }}
              >
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {countryList.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      <span className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/w40/${c.value.toLowerCase()}.png`}
                          alt={c.label}
                          className="w-5 h-4 rounded-sm border"
                        />
                        {c.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={formData.companyId}
                onValueChange={(val) => handleChange("companyId", val)}
              >
                <SelectTrigger className="w-full h-9">
                  <SelectValue placeholder="Select Company" />
                </SelectTrigger>
                <SelectContent>
                  {session.user.ownedCompanies.map((company) => (
                    <SelectItem key={company.id} value={company.id}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="submit">Save</Button>
            </form>
          )}
        </OffCanvasBtn>
      </div>

      <Tabs
        defaultValue={session.user.ownedCompanies[0]?.id}
        onValueChange={setSelectedCompanyId}
        className="w-full"
      >
        <TabsList className="mb-6">
          {session.user.ownedCompanies.map((company) => (
            <TabsTrigger key={company.id} value={company.id}>
              {company.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {session.user.ownedCompanies.map((company) => (
          <TabsContent key={company.id} value={company.id}>
            <Card>
              <CardHeader>
                <CardTitle>Customer Directory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search customers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                      ))}
                    </select>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" /> More Filters
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Orders</TableHead>
                        <TableHead>Total Spent</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {(Array.isArray(filteredCustomers)
                        ? filteredCustomers
                        : []
                      ).map((c) => (
                        <TableRow key={c.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="font-medium">{c.name}</span>
                              <span className="text-sm text-gray-500">
                                {c.id}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>{c.email}</TableCell>
                          <TableCell>
                            {formatPhone(c.phone, c.country)}
                          </TableCell>
                          <TableCell>
                            {[c.city, c.state, c.country]
                              .filter(Boolean)
                              .join(", ")}
                          </TableCell>
                          <TableCell>{c.totalOrders ?? 0}</TableCell>
                          <TableCell>
                            {c.totalSpent ? `$${c.totalSpent.toFixed(2)}` : "—"}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={c.isActive ? "default" : "secondary"}
                            >
                              {c.isActive ? "Active" : "Inactive"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                onClick={handleDeleteCustomer(c.id)}
                                variant="destructive"
                                size="sm"
                              >
                                Delete
                              </Button>
                              <Button
                                onClick={handleEditCustomer(c.id)}
                                variant="default"
                                size="sm"
                              >
                                Edit
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
