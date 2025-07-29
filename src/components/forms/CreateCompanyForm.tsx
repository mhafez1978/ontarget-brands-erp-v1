"use client";

import { useState, useEffect, FormEvent } from "react";
import { CompanyCategory, BusinessType } from "@/generated/prisma";

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

import { showToast } from "@/hooks/toast";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { allCountries } from "country-region-data";
import type { CountryData } from "country-region-data";
import { useSession } from "next-auth/react";
countries.registerLocale(enLocale);

interface Feature {
  id: string;
  key: string;
  label: string;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  pricePerMonth: string;
  description: string | null;
  maxUsers: number;
  maxAdmins: number;
  maxManagers: number;
  maxCustomers: number;
  storageLimitMB: number;
  maxProjects: number;
  features: Feature[];
}

interface Props {
  userId: string;
  onSuccess?: () => void;
  close?: () => void;
}

interface FormData {
  name: string;
  slogan: string;
  domain: string;
  phone: string;
  supportEmail: string;
  salesEmail: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  category: CompanyCategory | "";
  type: BusinessType | "";
  subscriptionPlanId: string;
}

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

export const CreateCompanyForm = ({ userId, onSuccess, close }: Props) => {
  const [states, setStates] = useState<{ name: string; code?: string }[]>([]);
  const { data: session, update } = useSession();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    slogan: "",
    domain: "",
    phone: "",
    supportEmail: "",
    salesEmail: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    category: "" as CompanyCategory,
    type: "" as BusinessType,
    subscriptionPlanId: "",
  });

  const [subscriptionPlans, setSubscriptionPlans] = useState<
    SubscriptionPlan[]
  >([]);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.country || !formData.subscriptionPlanId) {
      setError(
        "Please fill in all required fields (Name, Country, Subscription Plan)"
      );
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/company/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ownerId: userId }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to create company");
      }

      setSuccess("Company created successfully");
      showToast("success", "Company created successfully");

      setFormData({
        name: "",
        slogan: "",
        domain: "",
        phone: "",
        supportEmail: "",
        salesEmail: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        category: "" as CompanyCategory,
        type: "" as BusinessType,
        subscriptionPlanId: "",
      });

      onSuccess?.();
      close?.();
      if (session && session.user) {
        await update();
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
      showToast("error", err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("/api/subscription-plans");
        const data = await res.json();
        setSubscriptionPlans(data);
      } catch {
        setError("Failed to load subscription plans");
      }
    };
    fetchPlans();
  }, []);

  useEffect(() => {
    const plan = subscriptionPlans.find(
      (p) => p.id === formData.subscriptionPlanId
    );
    setSelectedPlan(plan || null);
  }, [formData.subscriptionPlanId, subscriptionPlans]);

  useEffect(() => {
    const selected = countryList.find((c) => c.label === formData.country);
    setStates(selected?.regions || []);
  }, [formData.country]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col min-h-screen px-6 gap-6"
    >
      {/* Company Details */}
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="slogan">Slogan</Label>
          <Input
            id="slogan"
            value={formData.slogan}
            onChange={(e) => handleChange("slogan", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="domain">Domain</Label>
          <Input
            id="domain"
            value={formData.domain}
            onChange={(e) => handleChange("domain", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>

      {/* Contact & Address */}
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <Label htmlFor="supportEmail">Support Email</Label>
          <Input
            id="supportEmail"
            value={formData.supportEmail}
            onChange={(e) => handleChange("supportEmail", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="salesEmail">Sales Email</Label>
          <Input
            id="salesEmail"
            value={formData.salesEmail}
            onChange={(e) => handleChange("salesEmail", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="addressLine1">Address Line 1</Label>
          <Input
            id="addressLine1"
            value={formData.addressLine1}
            onChange={(e) => handleChange("addressLine1", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="addressLine2">Address Line 2</Label>
          <Input
            id="addressLine2"
            value={formData.addressLine2}
            onChange={(e) => handleChange("addressLine2", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>

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
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input
            id="zipCode"
            value={formData.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
          />
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
      </div>

      {/* Business Details */}
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <Label>Category</Label>
          <Select
            value={formData.category}
            onValueChange={(val) => handleChange("category", val)}
          >
            <SelectTrigger className="w-full h-9">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(CompanyCategory).map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat.replace(/_/g, " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label>Business Type</Label>
          <Select
            value={formData.type}
            onValueChange={(val) => handleChange("type", val)}
          >
            <SelectTrigger className="w-full h-9">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(BusinessType).map((type) => (
                <SelectItem key={type} value={type}>
                  {type.replace(/_/g, " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Subscription Plan */}
      <div className="space-y-1">
        <Label htmlFor="subscriptionPlan">Plan</Label>
        <Select
          value={formData.subscriptionPlanId || ""}
          onValueChange={(val) => handleChange("subscriptionPlanId", val)}
        >
          <SelectTrigger className="w-full h-9" id="subscriptionPlan">
            <SelectValue placeholder="Select Plan" />
          </SelectTrigger>
          <SelectContent>
            {subscriptionPlans.length > 0 ? (
              subscriptionPlans.map((plan) => (
                <SelectItem key={plan.id} value={plan.id}>
                  {plan.name} (${Number(plan.pricePerMonth).toFixed(2)}/mo)
                </SelectItem>
              ))
            ) : (
              <div className="p-2 text-sm text-muted-foreground">
                No plans available
              </div>
            )}
          </SelectContent>
        </Select>
      </div>

      {/* Plan Summary */}
      {selectedPlan && (
        <div className="text-sm bg-muted p-4 rounded border">
          <h4 className="font-medium mb-2">Plan Features</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Price:</strong> ${selectedPlan.pricePerMonth}/mo
            </li>
            <li>
              <strong>Max Users:</strong> {selectedPlan.maxUsers}
            </li>
            <li>
              <strong>Storage:</strong> {selectedPlan.storageLimitMB} MB
            </li>
            <li>
              <strong>Projects:</strong> {selectedPlan.maxProjects}
            </li>
            {selectedPlan.features.map((f, index) => (
              <li key={index}>{f.label}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Submit */}
      <div className="pt-4">
        <Button type="submit" disabled={isSubmitting} className="ml-auto block">
          {isSubmitting ? "Creating..." : "Create Company"}
        </Button>
      </div>
      <div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}
      </div>
    </form>
  );
};
