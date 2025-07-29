"use client";

import React, { useState } from "react";

export const ConfigureDomainForm = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const [formData, setFormData] = useState({
    subdomain: "",
    customDomain: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //console.log("Domain config:", JSON.stringify(formData, null, 2));
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold mb-2">Configure Domain</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Subdomain</label>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full"
          value={formData.subdomain}
          onChange={(e) => handleChange("subdomain", e.target.value)}
          placeholder="e.g. mycompany"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Custom Domain</label>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full"
          value={formData.customDomain}
          onChange={(e) => handleChange("customDomain", e.target.value)}
          placeholder="e.g. mycompany.com"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
};
