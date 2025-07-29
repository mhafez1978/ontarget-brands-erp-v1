"use client";

import { useState, useEffect, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Supplier } from "@/generated/prisma";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { allCountries } from "country-region-data";
import type { CountryData } from "country-region-data";
import { showToast } from "@/hooks/toast";

countries.registerLocale(enLocale);

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

interface CreateNewSupplierProps {
  companies: { id: string; name: string }[];
}

export const CreateNewSupplier = ({ companies }: CreateNewSupplierProps) => {
  const [states, setStates] = useState<{ name: string; code?: string }[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    website: "",

    salesEmail: "",
    supportEmail: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    companyId: companies[0]?.id || "",
  });

  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    const selected = countryList.find((c) => c.label === formData.country);
    setStates(selected?.regions || []);
  }, [formData.country]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    //console.log("Submitting supplier:", formData);
    const res = await fetch("/api/admin/create/supplier", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error creating supplier:", errorData);
      return;
    }
    const newSupplier: Supplier = await res.json();
    showToast("success", "Supplier created successfully!");
    //console.log("Supplier created successfully:", newSupplier);
    // Optionally, reset form or show success message
    setFormData({
      name: "",
      tagline: "",
      website: "",

      salesEmail: "",
      supportEmail: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      companyId: companies[0]?.id || "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-2xl px-4 py-6"
    >
      <h2 className="text-lg font-semibold">Create New Supplier</h2>

      <div className="flex flex-col gap-4">
        {(
          ["name", "tagline", "website", "salesEmail", "supportEmail"] as const
        ).map((field) => (
          <div key={field} className="space-y-1">
            <Label htmlFor={field} className="capitalize">
              {field.replace(/([A-Z])/g, " $1")}
            </Label>
            <Input
              id={field}
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {(["addressLine1", "addressLine2", "city"] as const).map((field) => (
          <div key={field} className="space-y-1">
            <Label htmlFor={field} className="capitalize">
              {field.replace(/([A-Z])/g, " $1")}
            </Label>
            <Input
              id={field}
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}

        {/* State */}
        <div className="space-y-1">
          <Label>State / Province</Label>
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
        </div>

        <div className="space-y-1">
          <Label>ZipCode</Label>
          <Input placeholder="zip code" />
        </div>

        {/* Country */}
        <div className="space-y-1">
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
        </div>

        {/* Company */}
        <div className="space-y-1 col-span-full md:col-span-2">
          <Label>Company</Label>
          <Select
            value={formData.companyId}
            onValueChange={(val) => handleChange("companyId", val)}
          >
            <SelectTrigger className="w-full h-9">
              <SelectValue placeholder="Select Company" />
            </SelectTrigger>
            <SelectContent>
              {companies.map((company) => (
                <SelectItem key={company.id} value={company.id}>
                  {company.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" className="ml-auto block">
          Save Supplier
        </Button>
      </div>
    </form>
  );
};
