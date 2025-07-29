"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { allCountries } from "country-region-data";
import type { CountryData } from "country-region-data";
import { showToast } from "@/hooks/toast";

// Define lightweight form model (not full Prisma User)
type StaffFormData = {
  name?: string;
  email?: string;
  password: string;
  confirmPassword?: string;
  phone?: string;
  birthDate?: string;
  image?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  role?: string[];
  isActive?: boolean;
  companyId?: string;
};

const countryOptions = (allCountries as CountryData[]).map(
  ([label, value, regions]) => ({
    label,
    value,
    regions: regions.map(([regionName]) => ({ name: regionName })),
  })
);

const userRoles = ["ADMIN", "MANAGER", "STAFF"];

export const AddNewStaff = ({ companyId }: { companyId: string }) => {
  const [formData, setFormData] = useState<StaffFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthDate: "",
    image: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    role: ["STAFF"],
  });
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedRole, setSelectedRole] = useState("STAFF");
  const [states, setStates] = useState<{ name: string }[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(companyId);
  const { data: session } = useSession();

  if (
    !session ||
    !session.user ||
    ["ADMIN", "MANAGER"].includes(session.user.role) === false ||
    !companyId ||
    !session.user.company
  ) {
    redirect("/auth");
  }

  const handleInputChange = (field: keyof StaffFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name) {
      setFormErrors(["Name is required"]);
      showToast("error", "Name is required ...");
      return false;
    }

    if (!formData.email) {
      setFormErrors(["Email is required"]);
      showToast("error", "Email is required ...");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setFormErrors(["Passwords do not match"]);
      showToast("error", "Passwords do not match ...");
      return false;
    }

    if (formData.password.length < 8) {
      setFormErrors(["Password must be at least 8 characters"]);
      showToast("error", "Password must be at least 8 characters");
      return false;
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      setFormErrors(["Invalid email format"]);
      showToast("error", "Invalid Email");
      return false;
    }

    if (formData.state && !states.some((s) => s.name === formData.state)) {
      setFormErrors(["Invalid state selected"]);
      showToast("error", "Invalid State");
      return false;
    }

    if (
      formData.country &&
      !countryOptions.some((c) => c.value === formData.country)
    ) {
      setFormErrors(["Invalid country selected"]);
      showToast("error", "Invalid Counry");
      return false;
    }

    if (
      formData.role &&
      (Array.isArray(formData.role)
        ? !formData.role.every((role) => userRoles.includes(role))
        : !userRoles.includes(formData.role))
    ) {
      setFormErrors(["Invalid role selected"]);
      showToast("error", "Invalid user role selected");
      return false;
    }

    if (!companyId) {
      setFormErrors(["Company ID is required"]);
      showToast("error", "Company ID is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    validateForm();

    const payload = {
      ...formData,
      companyId: selectedCompanyId,
      state: selectedState,
      country: selectedCountry,
      role: Array.isArray(formData.role)
        ? (formData.role[0] ?? "STAFF").toUpperCase()
        : (formData.role ?? "STAFF").toUpperCase(),
      isActive: formData.isActive,
    };
    try {
      //console.log(
      //   "Creating new hire with payload:",
      //   JSON.stringify(payload, null, 2)
      // );
      const res = await fetch(`/api/company/admin/${companyId}/staff/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create new hire");
      }
      const newHire = await res.json();

      setFormData({
        name: "",
        email: "",
        phone: "",
        image: "",
        birthDate: "",
        password: "",
        confirmPassword: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        companyId: companyId,
        isActive: false,
        role: [],
      });
      setStates([]);
      showToast("success", "Staff member added successfully ...");
      window.location.reload();
      return newHire;
    } catch (error) {
      const errorMessage =
        typeof error === "object" && error !== null && "message" in error
          ? (error as { message?: string }).message
          : "Failed to create new hire";
      showToast("error", errorMessage || "Failed to create new hire");
      return;
    }
  };

  const handleCompanyChange = (
    e: React.FormEvent<HTMLSelectElement>,
    companyId: string
  ) => {
    setSelectedCompanyId(companyId);
  };

  useEffect(() => {
    const country = countryOptions.find((c) => c.value === selectedCountry);
    setStates(country?.regions ?? []);
    setSelectedState(""); // Reset on country change
  }, [selectedCountry]);

  return (
    <div className="w-full px-4 bg-white top-0 bottom-0 right-0 pb-14">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label className="">Name</Label>
          <Input
            name="name"
            value={formData.name ?? ""}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email ?? ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Password</Label>
          <Input
            type="Password"
            name="password"
            value={formData.password ?? ""}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword ?? ""}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Phone</Label>
          <Input
            name="phone"
            value={formData.phone ?? ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Phone"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Birth Date</Label>
          <Input
            type="date"
            name="birthDate"
            value={formData.birthDate ?? ""}
            onChange={(e) => handleInputChange("birthDate", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Avatar URL</Label>
          <Input
            name="image"
            value={formData.image ?? ""}
            onChange={(e) => handleInputChange("image", e.target.value)}
            placeholder="https://..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Street Address</Label>
          <Input
            name="addressLine1"
            value={formData.addressLine1 ?? ""}
            onChange={(e) => handleInputChange("addressLine1", e.target.value)}
            placeholder="Street Address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Apt/Suite/Unit #</Label>
          <Input
            name="addressLine2"
            value={formData.addressLine2 ?? ""}
            onChange={(e) => handleInputChange("addressLine2", e.target.value)}
            placeholder="Address continued"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">City</Label>
          <Input
            name="city"
            value={formData.city ?? ""}
            onChange={(e) => handleInputChange("city", e.target.value)}
            placeholder="City"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">State</Label>
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="h-9 w-full">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {states.map((s) => (
                <SelectItem key={s.name} value={s.name}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Zip Code</Label>
          <Input
            name="zipCode"
            value={formData.zipCode ?? ""}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
            placeholder="Postal Code"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="">Country</Label>
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="h-9 w-full">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countryOptions.map((c) => (
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
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Role</Label>
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger className="h-9 w-full">
              <SelectValue placeholder="Select User Role" />
            </SelectTrigger>
            <SelectContent>
              {userRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="">Account Status</Label>
          <Select
            value={formData.isActive ? "true" : "false"}
            onValueChange={(val) => handleInputChange("isActive", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Account Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Active</SelectItem>
              <SelectItem value="false">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="">Company</Label>
          <Select
            value={formData.companyId ?? ""}
            onValueChange={(val) => handleInputChange("companyId", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Company" />
            </SelectTrigger>
            <SelectContent>
              {Array.isArray(session.user.ownedCompanies) &&
                session.user.ownedCompanies.map(
                  (company: { id: string; name: string }) => (
                    <SelectItem key={company.id} value={company.id}>
                      {company.name}
                    </SelectItem>
                  )
                )}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition-colors"
          >
            Add Staff Member
          </Button>
        </div>
        {formErrors.length > 0 && (
          <div className="text-red-600">
            <ul>
              {formErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};
