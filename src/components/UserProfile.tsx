"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { showToast } from "@/hooks/toast";

type UserProfileType = {
  id: string;
  name?: string;
  email?: string;
  image?: string | null;
  phone?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  country?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

const UserProfile = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState<UserProfileType | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetch(`/api/user/${session?.user?.id}`);
        if (!res.ok) throw new Error("Failed to fetch user profile");
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };

    if (session?.user?.id) fetchUserProfile();
  }, [session?.user?.id]);

  if (status === "loading" || !formData) return <div>Loading...</div>;
  if (status === "unauthenticated") redirect("/auth");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserProfileType
  ) => {
    setFormData((prev) => (prev ? { ...prev, [field]: e.target.value } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    try {
      let updatedImageUrl = formData.image;

      // If a file was selected, upload it first
      if (selectedFile && session?.user?.id) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", selectedFile);
        uploadFormData.append("userId", session.user.id); // assuming user ID is from session

        const uploadRes = await fetch("/api/upload-avatar", {
          method: "POST",
          body: uploadFormData,
        });

        if (!uploadRes.ok) {
          throw new Error("Image upload failed");
        }

        const { imageUrl } = await uploadRes.json();
        updatedImageUrl = imageUrl;
      }

      // Now send PATCH with possibly updated image URL
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

  return (
    <div className="profile-details flex flex-col gap-2">
      <form
        className="flex flex-col gap-4 mt-6 w-1/2 bg-white p-10 rounded-2xl shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="w-40 h-40 rounded-full overflow-hidden">
          {formData.image && (
            <div className="w-full flex justify-center mb-4">
              <img
                src={formData.image}
                alt="User Avatar"
                className="w-40 h-40 rounded-full border-10 border-slate-800 mb-4"
              />
            </div>
          )}
          {!formData.image && (
            <img
              className="object-cover w-full h-full"
              src="https://robohash.org/123?size=300x300&set=set1&bgset=bg2"
              alt="Custom RoboHash Avatar"
            />
          )}
        </div>

        {[
          { label: "Name", name: "name", disabled: false },
          { label: "Email", name: "email", disabled: true },
          { label: "Phone", name: "phone", disabled: false },
          { label: "Image URL", name: "image", disabled: false },
          { label: "Address Line 1", name: "addressLine1", disabled: false },
          { label: "Address Line 2", name: "addressLine2", disabled: false },
          { label: "City", name: "city", disabled: false },
          { label: "State", name: "state", disabled: false },
          { label: "Zip Code", name: "zipCode", disabled: false },
          { label: "Country", name: "country", disabled: false },
        ].map(({ label, name, disabled }) => (
          <label key={name} className="flex flex-col">
            {label}:
            <input
              type="text"
              name={name}
              defaultValue={formData[name as keyof UserProfileType] ?? ""}
              className={`border p-2 rounded ${
                disabled ? "bg-gray-200 cursor-not-allowed" : ""
              }`}
              disabled={disabled}
              onChange={(e) => handleChange(e, name as keyof UserProfileType)}
            />
          </label>
        ))}
        <label className="flex flex-col">
          Or Upload Avatar:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
