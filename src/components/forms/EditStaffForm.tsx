"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { User } from "@/generated/prisma";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { showToast } from "@/hooks/toast";

export const EditStaffForm = ({ user }: { user: User }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    image: user.image || "",
    birthDate: user.birthDate
      ? typeof user.birthDate === "string"
        ? user.birthDate
        : user.birthDate.toISOString().split("T")[0]
      : "",
    addressLine1: user.addressLine1 || "",
    addressLine2: user.addressLine2 || "",
    city: user.city || "",
    state: user.state || "",
    zipCode: user.zipCode || "",
    country: user.country || "",
    role: (user.role as User["role"]) || "GUEST",
    isActive: user.isActive ?? false,
    password: "",
    repeatPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);

    if (formData.password && formData.password !== formData.repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Form submitted with data:", JSON.stringify(formData, null, 2));
    setLoading(true);

    const res = await fetch(`/api/admin/${user.id}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      alert("Failed to update user");
      setLoading(false);
      showToast("error", "Failed to update user");
      return;
    }

    const updatedUser = await res.json();

    setFormData({
      name: updatedUser.name || "",
      email: updatedUser.email || "",
      phone: updatedUser.phone || "",
      image: updatedUser.image || "",
      birthDate: updatedUser.birthDate
        ? typeof updatedUser.birthDate === "string"
          ? updatedUser.birthDate
          : updatedUser.birthDate.toISOString().split("T")[0]
        : "",
      addressLine1: updatedUser.addressLine1 || "",
      addressLine2: updatedUser.addressLine2 || "",
      city: updatedUser.city || "",
      state: updatedUser.state || "",
      zipCode: updatedUser.zipCode || "",
      country: updatedUser.country || "",
      role: updatedUser.role || "STAFF",
      isActive: updatedUser.isActive ?? false,
      password: "",
      repeatPassword: "",
    });

    showToast("success", "User updated successfully");
    setLoading(false);
    window.location.reload();
  };

  return (
    <div className="absolute top-0 right-0 w-[30vw] h-full bg-white shadow-lg p-4 z-50">
      <div className="w-full bg-gray-50 px-4 py-8 rounded-lg shadow-md mt-10">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* User ID (read-only) */}
          <div className="flex flex-row gap-2">
            <Label htmlFor="userId" className="w-[20%]">
              User ID:
            </Label>
            <Input disabled id="userId" value={user.id} readOnly />
          </div>

          {/* Basic Fields */}
          {[
            { name: "name", label: "Name" },
            { name: "email", label: "Email" },
            { name: "phone", label: "Phone" },
            { name: "image", label: "Avatar", placeholder: "Image URL" },
            { name: "birthDate", label: "Birth Date", type: "date" },
            { name: "addressLine1", label: "Street Address" },
            { name: "addressLine2", label: "Apt/Suite/Unit" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
            { name: "zipCode", label: "Zipcode" },
            { name: "country", label: "Country" },
          ].map(({ name, label, type = "text", placeholder }) => (
            <div key={name} className="flex flex-row gap-2">
              <Label htmlFor={name} className="w-[20%]">
                {label}
              </Label>
              <Input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder ?? label}
                value={
                  typeof formData[name as keyof typeof formData] === "boolean"
                    ? formData[name as keyof typeof formData]
                      ? "true"
                      : "false"
                    : (formData[name as keyof typeof formData] as string)
                }
                onChange={handleChange}
              />
            </div>
          ))}

          {/* Role Select */}
          <div className="flex flex-row gap-2">
            <Label htmlFor="role" className="w-[20%]">
              Role
            </Label>
            <Select
              defaultValue={formData.role}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  role: value as User["role"],
                }))
              }
            >
              <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ADMIN">Admin</SelectItem>
                <SelectItem value="MANAGER">Manager</SelectItem>
                <SelectItem value="STAFF">Staff</SelectItem>
                <SelectItem value="GUEST">Guest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Status */}
          <div className="flex flex-row gap-2">
            <Label htmlFor="isActive" className="w-[20%]">
              Status
            </Label>
            <Select
              defaultValue={formData.isActive ? "true" : "false"}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  isActive: value === "true",
                }))
              }
            >
              <SelectTrigger id="isActive" className="w-full">
                <SelectValue placeholder="Account Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Enabled</SelectItem>
                <SelectItem value="false">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Password Fields */}
          {[
            {
              name: "password",
              label: "Password",
              type: "password",
              placeholder: "New Password",
            },
            {
              name: "repeatPassword",
              label: "Confirmation",
              type: "password",
              placeholder: "Repeat Password",
            },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name} className="flex flex-row gap-2">
              <Label htmlFor={name} className="w-[20%]">
                {label}
              </Label>
              <Input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={
                  typeof formData[name as keyof typeof formData] === "boolean"
                    ? String(formData[name as keyof typeof formData])
                    : (formData[name as keyof typeof formData] as string)
                }
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="w-full flex flex-row gap-4 ">
            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update"}
            </Button>
            <Button onClick={() => window.location.reload()}>Close</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
