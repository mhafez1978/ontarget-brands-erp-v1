"use client";

import { useState, useEffect, FormEvent } from "react";
import { CompanyCategory, BusinessType } from "@/generated/prisma";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { allCountries } from "country-region-data";
import type { CountryData } from "country-region-data";
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

// Initialize i18n-iso-countries
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
  close: () => void;
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

export const CreateCompanyForm = ({ userId, onSuccess }: Props) => {
  const [states, setStates] = useState<{ name: string; code?: string }[]>([]);
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
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

      <form
        onSubmit={handleSubmit}
        className="w-full min-h-screen flex flex-col px-6 gap-6"
      >
        {/* Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Company Details
            </h3>
          </div>
          {(["name", "slogan", "domain", "phone"] as const).map((field) => (
            <div key={field} className="space-y-1">
              <Label htmlFor={field}>{field.replace(/([A-Z])/g, " $1")}</Label>
              <Input
                id={field}
                name={field}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Contact & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Contact &amp; Address
            </h3>
          </div>
          {(
            [
              "supportEmail",
              "salesEmail",
              "addressLine1",
              "addressLine2",
              "city",
              "zipCode",
            ] as const
          ).map((field) => (
            <div key={field} className="space-y-1">
              <Label htmlFor={field}>{field.replace(/([A-Z])/g, " $1")}</Label>
              <Input
                id={field}
                name={field}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </div>
          ))}

          {/* State/Province */}
          {
            <div className="space-y-1">
              <Label>State/Province</Label>
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
          }

          {/* Country */}
          <div className="space-y-1">
            <Label>Country</Label>
            <Select
              value={
                countryList.find((c) => c.label === formData.country)?.value ||
                ""
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Business Details
            </h3>
          </div>
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

        {/* Subscription */}
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Subscription
          </h3>
          <Label htmlFor="subscriptionPlan">Plan</Label>
          <Select
            value={formData.subscriptionPlanId || ""} // ✅ Prevents uncontrolled warning
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

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="ml-auto block"
          >
            {isSubmitting ? "Creating..." : "Create Company"}
          </Button>
        </div>
      </form>
    </>
  );
};
