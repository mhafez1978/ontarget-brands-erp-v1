"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { OAuthButtons } from "./OAuthButtons";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          role: "ERP_CUSTOMER",
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to register");
      }

      // Optionally redirect or show success
      alert("Account created!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <OAuthButtons isRegister />

      <div className="relative">
        <Separator className="bg-gray-200" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">
            or create account with email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
              autoComplete="given-name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
              autoComplete="family-name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            autoComplete="email"
            placeholder="name@company.com"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
            autoComplete="new-password"
            placeholder="Enter your password"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            required
            autoComplete="new-password"
            placeholder="Re-enter your password"
          />
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={(e) =>
              handleInputChange("agreeToTerms", e.target.checked)
            }
            required
          />
          <label className="text-sm text-gray-600">
            I agree to the{" "}
            <span className="font-medium underline cursor-pointer">Terms</span>{" "}
            and{" "}
            <span className="font-medium underline cursor-pointer">
              Privacy Policy
            </span>
          </label>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !formData.agreeToTerms}
        >
          {isSubmitting ? "Creating..." : "Create Account"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
