"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

// Register the English locale
countries.registerLocale(enLocale);
const countryList = Object.entries(
  countries.getNames("en", { select: "official" })
);

export default function CustomerRegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
  });

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/register/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          role: "ERP_CUSTOMER", // Lock role
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Registration failed");
      }

      alert("Account created! You may now log in.");
      setForm({
        name: "",
        email: "",
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
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      className="max-w-lg mx-auto mt-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="p-6 shadow-md rounded-xl border">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Customer Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "name", label: "Full Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "birthDate", label: "Birth Date", type: "date" },
              { name: "password", label: "Password", type: "password" },
              {
                name: "confirmPassword",
                label: "Confirm Password",
                type: "password",
              },
              { name: "addressLine1", label: "Address Line 1" },
              { name: "addressLine2", label: "Address Line 2" },
              { name: "city", label: "City" },
              { name: "state", label: "State" },
              { name: "zipCode", label: "Zip Code" },
            ].map(({ name, label, type = "text" }) => (
              <div key={name} className="space-y-1">
                <Label htmlFor={name}>{label}</Label>
                <Input
                  id={name}
                  name={name}
                  type={type}
                  value={(form as any)[name]}
                  onChange={handleChange}
                  required={[
                    "name",
                    "email",
                    "password",
                    "confirmPassword",
                  ].includes(name)}
                />
              </div>
            ))}

            {/* Country Select Dropdown */}
            <div className="space-y-1">
              <Label htmlFor="country">Country</Label>
              <select
                id="country"
                name="country"
                className="w-full border rounded px-3 py-2 text-sm"
                value={form.country}
                onChange={handleChange}
                required
              >
                <option value="">Select your country</option>
                {countryList.map(([code, name]) => (
                  <option key={code} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            {/* Error */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Registering..." : "Create Account"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
