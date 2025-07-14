"use client";

import React, { useState } from "react";

export const ConfigureSMTPForm = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const [formData, setFormData] = useState({
    host: "",
    port: "",
    user: "",
    password: "",
    fromEmail: "",
    replyTo: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SMTP config:", JSON.stringify(formData, null, 2));
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold mb-2">Configure SMTP</h3>

      {[
        { label: "SMTP Host", key: "host" },
        { label: "SMTP Port", key: "port" },
        { label: "SMTP Username", key: "user" },
        { label: "SMTP Password", key: "password", type: "password" },
        { label: "From Email", key: "fromEmail" },
        { label: "Reply-to Email", key: "replyTo" },
      ].map(({ label, key, type }) => (
        <div key={key} className="mb-4">
          <label className="block text-sm font-medium mb-1">{label}</label>
          <input
            type={type || "text"}
            className="border border-gray-300 p-2 w-full"
            value={formData[key as keyof typeof formData]}
            onChange={(e) =>
              handleChange(key as keyof typeof formData, e.target.value)
            }
          />
        </div>
      ))}

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save SMTP Settings
      </button>
    </form>
  );
};
