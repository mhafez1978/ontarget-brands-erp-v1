// File: components/inventory/CompanyInventory.tsx

"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Package, AlertTriangle, CheckCircle } from "lucide-react";
import { OffCanvasBtn } from "../OffCanvasBtn";
import { CreateNewProduct } from "../forms/CreateNewProduct";

interface CompanyInventoryProps {
  companyId: string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export const CompanyInventory = ({
  companyId,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: CompanyInventoryProps) => {
  const [inventoryData, setInventoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const params = new URLSearchParams({
        companyId,
        search: searchTerm,
        category: selectedCategory !== "all" ? selectedCategory : "",
      });
      const res = await fetch(`/api/products?${params.toString()}`);
      const data = await res.json();
      setInventoryData(data);
      setLoading(false);
    };

    fetchData();
  }, [companyId, searchTerm, selectedCategory]);

  const categories = [
    "all",
    ...Array.from(
      new Set(inventoryData.flatMap((item) => item.categories || []))
    ),
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-stock":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            In Stock
          </Badge>
        );
      case "low-stock":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Low Stock
          </Badge>
        );
      case "out-of-stock":
        return (
          <Badge variant="destructive">
            <Package className="w-3 h-3 mr-1" />
            Out of Stock
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Product Inventory
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage products for this company
          </p>
        </div>
        <OffCanvasBtn buttonText="Add Product" formName="Add New Product">
          {(close) => (
            <CreateNewProduct
              companyId={companyId}
              companies={[]} // TODO: Replace with actual companies data
              suppliers={[]} // TODO: Replace with actual suppliers data
            />
          )}
        </OffCanvasBtn>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search products or SKU..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Categories</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryData.map((item) => (
                    <TableRow key={item.id} className="hover:bg-gray-50">
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell className="space-x-1">
                        {(item.categories || []).map((cat: string) => (
                          <Badge key={cat} variant="outline">
                            {cat.replace(/_/g, " ")}
                          </Badge>
                        ))}
                      </TableCell>
                      <TableCell>{item.quantity ?? 0}</TableCell>
                      <TableCell>${item.price?.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
