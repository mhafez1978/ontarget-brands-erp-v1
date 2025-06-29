"use client";

import { useState, useEffect, FormEvent } from "react";
//import { useRouter } from "next/navigation";
import {
  CompanyCategory,
  BusinessType,
  Company as PrismaCompany,
} from "../../../generated/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export const EditCompanyForm = ({ company, onSuccess, companyId }: Props) => {
  //  const router = useRouter();

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
      const res = await fetch(`/api/admin/company/${companyId}/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");

      setSuccess("Company updated successfully");
      onSuccess?.();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Update</CardTitle>
      </CardHeader>
      <CardContent>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
          {[
            "name",
            "slogan",
            "domain",
            "phone",
            "supportEmail",
            "salesEmail",
            "addressLine1",
            "addressLine2",
            "city",
            "state",
            "zipCode",
            "country",
          ].map((field) => (
            <div key={field} className="space-y-1">
              <Input
                id={field}
                name={field}
                value={formData[field] ?? ""}
                placeholder={formData[field] ?? ""}
                onChange={(e) =>
                  handleChange(field as keyof PrismaCompany, e.target.value)
                }
              />
            </div>
          ))}

          <div className="w-full space-y-1">
            <Label>Business Category:</Label>
            <Select
              value={formData.category || ""}
              onValueChange={(val) =>
                handleChange("category", val as CompanyCategory)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(CompanyCategory).map((cat) => (
                  <SelectItem className="w-full" key={cat} value={cat}>
                    {cat.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full space-y-1">
            <Label>Business Type:</Label>
            <Select
              value={formData.type || ""}
              onValueChange={(val) => handleChange("type", val as BusinessType)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {Object.values(BusinessType).map((type) => (
                  <SelectItem className="w-full" key={type} value={type}>
                    {type.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full space-y-1 md:col-span-2">
            <Label className="w-full">Subscription Plan:</Label>
            <Select
              value={formData.subscriptionPlanId || ""}
              onValueChange={(val) => handleChange("subscriptionPlanId", val)}
            >
              <SelectTrigger className="w-full">
                {" "}
                {/* ✅ Add w-full here */}
                <SelectValue placeholder="Select Plan" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {subscriptionPlans.map((plan) => (
                  <SelectItem className="w-full" key={plan.id} value={plan.id}>
                    {plan.name} (${plan.pricePerMonth}/mo)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedPlan && (
            <div className="md:col-span-2 text-sm bg-sky-100 p-4 rounded border">
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
                {selectedPlan.features.map((f) => (
                  <li key={f.id}>{f.label}</li>
                ))}
              </ul>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="col-span-full"
          >
            {isSubmitting ? "Updating..." : "Update Company"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
