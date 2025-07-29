"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  ProductAvailability,
  ProductCategory,
  ProductUnit,
} from "@/generated/prisma";
import { showToast } from "@/hooks/toast";

interface CreateNewProductProps {
  companies: { id: string; name: string }[];
  suppliers: { id: string; name: string }[];
  companyId: string;
}

export const CreateNewProduct = ({
  companyId,
  companies,
  suppliers,
}: CreateNewProductProps) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    sku: "",
    upc: "",
    serial: "",
    model: "",
    macAddress: "",
    unit: "",
    quantity: "",
    cost: "",
    price: "",
    brand: "",
    weight: "",
    isActive: false,
    availability: "",
    supplierId: "",
    categoryEnums: [] as string[],
    companyId: companies[0]?.id || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Special handling for isActive (boolean)
    if (name === "isActive") {
      setFormData((prev) => ({
        ...prev,
        [name]: value === "true",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const createProduct = async () => {
      const response = await fetch(
        `/api/admin/company/${formData.companyId}/product/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        console.error("Failed to create product");
        return;
      }
      showToast("success", "Product created successfully!");
      const data = await response.json();
      //console.log("Product created successfully:", data);

      // Optionally reset form or show success message
      setFormData({
        name: "",
        description: "",
        sku: "",
        upc: "",
        serial: "",
        model: "",
        macAddress: "",
        unit: "",
        quantity: "",
        cost: "",
        price: "",
        brand: "",
        weight: "",
        isActive: false,
        availability: "",
        supplierId: "",
        categoryEnums: [],
        companyId: companies[0]?.id || "",
      });
    };

    createProduct();
  };

  if (companies.length === 0) {
    return <h1>No companies found ...</h1>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-20 px-10">
      <Label>Name</Label>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <Label>Description</Label>
      <Input
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <Label>SKU</Label>
      <Input name="sku" value={formData.sku} onChange={handleChange} />

      <Label>UPC</Label>
      <Input name="upc" value={formData.upc} onChange={handleChange} />

      <Label>Serial</Label>
      <Input name="serial" value={formData.serial} onChange={handleChange} />

      <Label>Model</Label>
      <Input name="model" value={formData.model} onChange={handleChange} />

      <Label>MAC Address</Label>
      <Input
        name="macAddress"
        value={formData.macAddress}
        onChange={handleChange}
      />

      <Label>Quantity</Label>
      <Input
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        type="number"
      />

      <Label>Cost</Label>
      <Input
        name="cost"
        value={formData.cost}
        onChange={handleChange}
        type="number"
      />

      <Label>Price</Label>
      <Input
        name="price"
        value={formData.price}
        onChange={handleChange}
        type="number"
      />

      <Label>Brand</Label>
      <Input name="brand" value={formData.brand} onChange={handleChange} />

      <Label>Weight</Label>
      <Input
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        type="number"
      />

      <Label>Product Unit Type</Label>
      <select
        name="unit"
        value={formData.unit}
        onChange={handleChange}
        className="border rounded px-3 py-2"
      >
        <option value="">Select Unit Type</option>
        {Object.values(ProductUnit).map((val) => (
          <option key={val} value={val}>
            {val.replace(/_/g, " ")}
          </option>
        ))}
      </select>

      <Label>Product Active</Label>
      <select
        name="isActive"
        value={formData.isActive.toString()}
        onChange={handleChange}
        className="border rounded px-3 py-2"
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>

      <Label>Availability</Label>
      <select
        name="availability"
        value={formData.availability}
        onChange={handleChange}
        className="border rounded px-3 py-2"
      >
        <option value="">Select Availability</option>
        {Object.values(ProductAvailability).map((val) => (
          <option key={val} value={val}>
            {val.replace(/_/g, " ")}
          </option>
        ))}
      </select>

      <Label>Supplier</Label>
      <select
        name="supplierId"
        value={formData.supplierId}
        onChange={handleChange}
        className="border rounded px-3 py-2"
      >
        <option value="">Select Supplier</option>
        {suppliers.map((supplier: { id: string; name: string }) => (
          <option key={supplier.id} value={supplier.id}>
            {supplier.name}
          </option>
        ))}
      </select>

      <Label>Categories</Label>
      <select
        name="categoryEnums"
        multiple
        value={formData.categoryEnums}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            categoryEnums: Array.from(
              e.target.selectedOptions,
              (opt) => opt.value
            ),
          }))
        }
        className="border rounded px-3 py-2 h-32"
      >
        {Object.values(ProductCategory).map((val) => (
          <option key={val} value={val}>
            {val.replace(/_/g, " ")}
          </option>
        ))}
      </select>

      {/* Supplier Select can be added when suppliers are passed in */}

      <Label>Company</Label>
      <select
        name="companyId"
        value={formData.companyId}
        onChange={handleChange}
        className="border rounded px-3 py-2"
      >
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>

      <Button type="submit">Save</Button>
    </form>
  );
};
