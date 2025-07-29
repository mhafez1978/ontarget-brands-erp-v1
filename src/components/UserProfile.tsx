"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { showToast } from "@/hooks/toast";
import { User } from "@/generated/prisma";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { allCountries } from "country-region-data";
import type { CountryData } from "country-region-data";
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

export const UserProfile = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState<User | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [states, setStates] = useState<{ name: string; code?: string }[]>([]);

  useEffect(() => {
    if (status === "unauthenticated") redirect("/auth");
    if (session?.user?.id) {
      fetch(`/api/user/${session.user.id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .catch((err) => console.error("Error fetching user profile:", err));
    }
  }, [session?.user?.id, status]);

  useEffect(() => {
    if (!formData?.country) return;
    const selected = countryList.find(
      (c) => c.value === formData.country || c.label === formData.country
    );
    setStates(selected?.regions || []);
  }, [formData?.country]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof User
  ) => {
    setFormData((prev) => (prev ? { ...prev, [field]: e.target.value } : prev));
  };

  const handleSelectChange = (field: keyof User, value: string) => {
    setFormData((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    try {
      let updatedImageUrl = formData.image;

      if (selectedFile && session?.user?.id) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", selectedFile);
        uploadFormData.append("userId", session.user.id);

        const uploadRes = await fetch("/api/upload-avatar", {
          method: "POST",
          body: uploadFormData,
        });

        if (!uploadRes.ok) throw new Error("Image upload failed");

        const { imageUrl } = await uploadRes.json();
        updatedImageUrl = imageUrl;
      }

      const res = await fetch(`/api/user/${formData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          image: updatedImageUrl,
        }),
      });

      if (!res.ok) throw new Error("Failed to update user profile");

      const updatedUser = await res.json();
      setFormData(updatedUser);
      showToast("success", "Profile updated successfully");
    } catch (err) {
      console.error("Error updating user profile:", err);
      showToast("error", "Failed to update profile");
    }
  };

  if (status === "loading") {
    return (
      <div className="w-full h-screen flex items-center justify-center text-lg">
        Loading your profile...
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-lg">
        Loading user data...
      </div>
    );
  }

  return (
    <div className="profile-details flex max-h-screen overflow-scroll flex-col gap-2 px-10">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 bg-white p-10 rounded-2xl shadow-md mt-12 mb-12 lg:w-1/2"
      >
        <div className="w-40 h-40 rounded-full overflow-hidden">
          {formData.image ? (
            <label htmlFor="dropzone-file" className="cursor-pointer">
              <img
                src={formData.image}
                alt="User Avatar"
                className="w-40 h-40 rounded-full border-2 border-sky-300 drop-shadow-sky-600"
              />
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          ) : (
            <img
              className="object-cover w-40 h-40 rounded-full"
              src={`https://robohash.org/${
                session?.user.name || session?.user.id
              }`}
              alt="Default Avatar"
            />
          )}
        </div>

        <label className="flex flex-col">
          Name:
          <input
            type="text"
            value={formData.name ?? ""}
            onChange={(e) => handleChange(e, "name")}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Email:
          <input
            type="email"
            value={formData.email ?? ""}
            disabled
            className="border p-2 rounded bg-gray-200 cursor-not-allowed"
          />
        </label>

        <label className="flex flex-col">
          Phone:
          <input
            type="tel"
            value={formData.phone ?? ""}
            onChange={(e) => handleChange(e, "phone")}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Image URL:
          <input
            type="text"
            value={formData.image ?? ""}
            onChange={(e) => handleChange(e, "image")}
            className="border p-2 rounded"
          />
        </label>

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-sky-300 border-dashed rounded-lg cursor-pointer bg-sky-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  Click to upload your avatar or profile image.
                </span>
                <br />
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Or drag and drop SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <label className="flex flex-col">
          Street Address:
          <input
            type="text"
            value={formData.addressLine1 ?? ""}
            onChange={(e) => handleChange(e, "addressLine1")}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Apt/Suite/Unit:
          <input
            type="text"
            value={formData.addressLine2 ?? ""}
            onChange={(e) => handleChange(e, "addressLine2")}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          City:
          <input
            type="text"
            value={formData.city ?? ""}
            onChange={(e) => handleChange(e, "city")}
            className="border p-2 rounded"
          />
        </label>

        {/* State/Province */}
        <div className="space-y-1">
          <Label>State/Province</Label>
          <Select
            value={formData.state || ""}
            onValueChange={(val) => handleSelectChange("state", val)}
          >
            <SelectTrigger className="w-full h-9">
              <SelectValue placeholder="Select State/Province" />
            </SelectTrigger>
            <SelectContent>
              {states.map((s) => (
                <SelectItem key={s.code || s.name} value={s.name}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <label className="flex flex-col">
          Zip Code:
          <input
            type="text"
            value={formData.zipCode ?? ""}
            onChange={(e) => handleChange(e, "zipCode")}
            className="border p-2 rounded"
          />
        </label>
        {/* Country */}
        <div className="space-y-1">
          <Label>Country</Label>
          <Select
            value={formData.country || ""}
            onValueChange={(code) => {
              const selected = countryList.find((c) => c.value === code);
              if (selected) {
                handleSelectChange("country", selected.value);
                setStates(selected.regions);
                handleSelectChange("state", ""); // reset state
              }
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

        <Button
          type="submit"
          className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
        >
          Update Profile
        </Button>
      </form>
    </div>
  );
};
