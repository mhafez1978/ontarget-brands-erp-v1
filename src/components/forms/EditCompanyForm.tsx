"use client";

import { useState, useEffect, FormEvent } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { allCountries } from "country-region-data";
import type { CountryData } from "country-region-data";
import {
  CompanyCategory,
  BusinessType,
  Company as PrismaCompany,
} from "@/generated/prisma";
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
import { json } from "stream/consumers";

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

type CompanyWithRelations = PrismaCompany & {
  subscriptionPlan?: { name?: string };
  owner?: { name?: string };
};

interface Props {
  company: CompanyWithRelations;
  companyId: string;
  onSuccess?: () => void;
}

const normalizeNullableStrings = (obj: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, v === null ? "" : v])
  );

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

export const EditCompanyForm = ({
  company,
  onSuccess,
  companyId,
  userId,
}: Props) => {
  //  const router = useRouter();
  const [states, setStates] = useState<{ name: string; code?: string }[]>([]);
  const [formData, setFormData] = useState(() =>
    normalizeNullableStrings({ ...company })
  );

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

  const handleChange = (key: keyof PrismaCompany, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!companyId) {
      setError("Missing companyId. Cannot update.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      console.log("Submitting form data:", JSON.stringify(formData, null, 2));
      const res = await fetch(`/api/admin/company/${companyId}/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");

      setSuccess("Company updated successfully");
      showToast("success", "Company updated successfully");
      onSuccess?.();
    } catch (err: any) {
      setError(err.message);
      showToast("error", err.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="w-full flex flex-col px-6">
        {/* Company Details */}
        <div className="w-full flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold">Edit Company</h2>
          <p className="text-sm text-muted-foreground">
            Update your company details below.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="min-h-20 md:col-span-2"></div>
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
          <Label>Plan</Label>
          <Select
            value={formData.subscriptionPlanId}
            onValueChange={(val) => handleChange("subscriptionPlanId", val)}
          >
            <SelectTrigger className="w-full h-9">
              <SelectValue placeholder="Select Plan" />
            </SelectTrigger>
            <SelectContent>
              {subscriptionPlans.map((plan) => (
                <SelectItem key={plan.id} value={plan.id}>
                  {plan.name} (${plan.pricePerMonth}/mo)
                </SelectItem>
              ))}
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
            {isSubmitting ? "Saving ..." : "Update Company"}
          </Button>
        </div>
      </form>
    </>
  );
};
