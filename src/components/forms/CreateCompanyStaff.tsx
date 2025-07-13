"use client";

import { useEffect, useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { allCountries } from "country-region-data";
import type { CountryData } from "country-region-data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { showToast } from "@/hooks/toast";
import { tr } from "@faker-js/faker";

countries.registerLocale(enLocale);

const roleOptions = [
  { label: "Super Admin", value: "SUPER_ADMIN" },
  { label: "Admin", value: "ADMIN" },
  { label: "Manager", value: "MANAGER" },
  { label: "Staff", value: "STAFF" },
  { label: "Guest", value: "GUEST" },
];

const countryList = (allCountries as CountryData[]).map(
  ([name, code, regions]) => ({
    label: name,
    value: code,
    regions: regions.map(([regionName, regionCode]) => ({
      name: regionName,
      code: regionCode,
    })),
  })
);

interface CompanyStaffProps {
  companyId: string;
}

export const CreateCompanyStaff = ({ companyId }: CompanyStaffProps) => {
  const [reload, setReload] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    image: "",
    birthDate: "",
    password: "",
    repeatPassword: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    companyId: companyId,
    isActive: false,
    role: "",
  });

  const [states, setStates] = useState<{ name: string; code?: string }[]>([]);

  useEffect(() => {
    const selected = countryList.find((c) => c.label === formData.country);
    setStates(selected?.regions || []);
  }, [formData.country]);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!companyId) {
      showToast("error", "Company ID is required");
      return;
    }
    showToast("info", "Creating new hire... Please wait...");
    const payload = {
      ...formData,
      role: formData.role.toUpperCase(),
      isActive: formData.isActive === "true",
    };
    try {
      console.log(
        "Creating new hire with payload:",
        JSON.stringify(payload, null, 2)
      );
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
      showToast("success", "New hire created successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        image: "",
        birthDate: "",
        password: "",
        repeatPassword: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        companyId: companyId,
        isActive: false,
        role: "",
      });
      setStates([]);
      //console.log("New hire created:", newHire);
      close(); // Assuming you have a close function to hide the form
      setReload(true);
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

  useEffect(() => {
    if (reload) {
      window.location.reload(); // Reload the page to reflect changes
      setReload(false); // Reset reload state
    }
  }, [reload]);
  // Optionally, you can trigger a refresh of the parent component or data fetching here

  return (
    <form className="flex flex-col gap-4 px-10 py-10" onSubmit={handleSubmit}>
      <div className="flex flex-row gap-2">
        <div className="w-1/2 flex flex-col gap-2">
          <Label> Name</Label>
          <Input
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <div className="w-1/2 flex flex-col gap-2">
          <Label>Email</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Label>Phone</Label>
          <Input
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <div className="w-1/2 flex flex-col gap-2">
          <Label>Birth Date</Label>
          <Input
            type="date"
            value={formData.birthDate}
            onChange={(e) => handleChange("birthDate", e.target.value)}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Label>Image URL</Label>
          <Input
            value={formData.image}
            onChange={(e) => handleChange("image", e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <Label>Street Address</Label>
        <Input
          value={formData.addressLine1}
          onChange={(e) => handleChange("addressLine1", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Apt/Suite/Unit</Label>
        <Input
          value={formData.addressLine2}
          onChange={(e) => handleChange("addressLine2", e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <div className="w-1/2 flex flex-col gap-2">
          <Label>City</Label>
          <Input
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Label>Zip Code</Label>
          <Input
            value={formData.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <div className="w-1/2 flex flex-col gap-2">
          <Label>State/Province</Label>
          <Select
            value={formData.state}
            onValueChange={(val) => handleChange("state", val)}
            disabled={states.length === 0}
          >
            <SelectTrigger className="w-full">
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
        <div className="w-1/2 flex flex-col gap-2">
          <Label>Country</Label>
          <Select
            value={
              countryList.find((c) => c.label === formData.country)?.value || ""
            }
            onValueChange={(code) => {
              const selected = countryList.find((c) => c.value === code);
              if (selected) handleChange("country", selected.label);
            }}
          >
            <SelectTrigger className="w-full">
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
        </div>
      </div>

      <div className="flex flex-row gap-2 mt-8">
        <div className="w-1/2 flex flex-col gap-2">
          <Label>Role</Label>
          <Select
            value={formData.role}
            onValueChange={(val) => handleChange("role", val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              {roleOptions.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Label>Account Status</Label>
          <Select
            value={formData.isActive ? "true" : "false"}
            onValueChange={(val) => handleChange("isActive", val === "true")}
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
      </div>

      {/* Status */}
      <div className="flex flex-col gap-4 mt-8">
        <div className="w-full flex flex-col gap-2">
          <Label>Password</Label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label>Repeat Password</Label>
          <Input
            type="password"
            value={formData.repeatPassword}
            onChange={(e) => handleChange("repeatPassword", e.target.value)}
          />
        </div>
      </div>
      <div className="mt-8">
        <Button variant={"default"} size={"lg"} type="submit">
          Save New Hire
        </Button>
      </div>
    </form>
  );
};
