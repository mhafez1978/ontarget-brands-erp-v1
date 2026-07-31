"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useSession } from "next-auth/react";
import { showToast } from "@/hooks/toast";

type FormState = {
  key: string;
  name: string;
  description: string;
  pricePerMonth: number;
  billingCycle: string;
  maxUsers: number;
  maxAdmins: number;
  maxCustomers: number;
  maxManagers: number;
  storageLimitMB: number;
  maxProjects: number;
  features: string[];
};

export const CreatePlanForm = () => {
  const { data: session } = useSession();

  const billingCycleOptions = ["ONE_TIME", "MONTHLY", "QUARTERLY", "ANNUALLY"];
  const featureOptions = [
    "company",
    "projects",
    "inventory",
    "services",
    "orders",
    "customers",
    "accounting",
    "userManagement",
    "AiContentCreation",
    "BusinessWebsite",
  ];

  const [form, setForm] = useState<FormState>({
    key: "starter",
    name: "Starter",
    description: "Starter Plan",
    pricePerMonth: 9.99,
    billingCycle: "Monthly",
    maxUsers: 5,
    maxAdmins: 1,
    maxCustomers: 10,
    maxManagers: 1,
    storageLimitMB: 100,
    maxProjects: 10,
    features: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "number" ? (value === "" ? 0 : parseFloat(value)) : value,
    }));
  };

  const toggleFeature = (feature: string) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      features: form.features.map((key) => ({
        key,
        label: key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())
          .trim(),
      })),
    };

    const res = await fetch("/api/admin/create/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Plan created successfully");
      showToast("success", "Plan created successfully");
      setForm({
        key: "",
        name: "",
        description: "",
        pricePerMonth: 0.0,
        billingCycle: "",
        maxUsers: 1,
        maxAdmins: 1,
        maxCustomers: 10,
        maxManagers: 0,
        storageLimitMB: 100,
        maxProjects: 3,
        features: [],
      });
    } else {
      const err = await res.json();
      showToast("error", err.error || "Failed to create plan");
    }
  };

  if (!session || session.user.role !== "SUPER_ADMIN") {
    return (
      <div className="w-full h-screen max-h-full bg-gray-50 text-gray-700">
        <h2>You do not have access to this feature ...</h2>
        <p>Contact your company administrator.</p>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl p-6 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold">Model Subscription Plan</h2>

      <label className="flex flex-col">
        <span className="font-medium mb-1">Plan Name</span>
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Starter"
          required
        />
      </label>

      <label className="flex flex-col">
        <span className="font-medium mb-1">Plan Key (must be unique)</span>
        <Input
          name="key"
          value={form.key}
          onChange={handleChange}
          placeholder="e.g. starter, standard, premium"
          required
        />
      </label>

      <label className="flex flex-col">
        <span className="font-medium mb-1">Description</span>
        <Textarea
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Plan description"
        />
      </label>

      <label className="flex flex-col">
        <span className="font-medium mb-1">Price Per Month ($)</span>
        <Input
          type="number"
          name="pricePerMonth"
          value={form.pricePerMonth}
          onChange={handleChange}
          min="0"
          step="0.01"
        />
      </label>

      <label className="flex flex-col">
        <span className="font-medium mb-1">Billing Cycle</span>
        <select
          name="billingCycle"
          value={form.billingCycle}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, billingCycle: e.target.value }))
          }
          className="h-12 border border-gray-300 rounded px-3"
          required
        >
          {billingCycleOptions.map((cycle) => (
            <option key={cycle} value={cycle}>
              {cycle.replace("_", " ")} {/* Display nicely */}
            </option>
          ))}
        </select>
      </label>

      <div className="grid grid-cols-2 gap-4">
        {(
          [
            { label: "Max Users", name: "maxUsers" },
            { label: "Max Admins", name: "maxAdmins" },
            { label: "Max Managers", name: "maxManagers" },
            { label: "Storage Limit (MB)", name: "storageLimitMB" },
            { label: "Max Projects", name: "maxProjects", full: true },
          ] as {
            label: string;
            name: "maxUsers" | "maxAdmins" | "maxManagers" | "storageLimitMB" | "maxProjects";
            full?: boolean;
          }[]
        ).map(({ label, name, full }) => (
          <label
            key={name}
            className={`flex flex-col ${full ? "col-span-2" : ""}`}
          >
            <span className="font-medium mb-1">{label}</span>
            <Input
              type="number"
              name={name}
              value={form[name]}
              onChange={handleChange}
              min="0"
            />
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <label className="font-semibold">Select Plan Features:</label>
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-3">
          {featureOptions.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Checkbox
                id={feature}
                checked={form.features.includes(feature)}
                onCheckedChange={() => toggleFeature(feature)}
              />
              <label htmlFor={feature} className="capitalize">
                {feature}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button type="submit">Save to Database... </Button>
    </form>
  );
};
