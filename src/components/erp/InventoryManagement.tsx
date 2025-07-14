"use client";
import { ReactNode, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import {
  Search,
  Plus,
  Filter,
  Package,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { OffCanvasBtn } from "../OffCanvasBtn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const inventoryData = [
  {
    id: "INV-001",
    name: "Wireless Headphones",
    sku: "WH-001",
    category: "Electronics",
    stock: 150,
    minStock: 20,
    price: 89.99,
    status: "in-stock",
  },
  {
    id: "INV-002",
    name: "Cotton T-Shirt",
    sku: "CT-002",
    category: "Clothing",
    stock: 8,
    minStock: 10,
    price: 24.99,
    status: "low-stock",
  },
  {
    id: "INV-003",
    name: "Smart Watch",
    sku: "SW-003",
    category: "Electronics",
    stock: 0,
    minStock: 5,
    price: 199.99,
    status: "out-of-stock",
  },
  {
    id: "INV-004",
    name: "Running Shoes",
    sku: "RS-004",
    category: "Sports",
    stock: 45,
    minStock: 15,
    price: 129.99,
    status: "in-stock",
  },
  {
    id: "INV-005",
    name: "Desk Lamp",
    sku: "DL-005",
    category: "Home & Garden",
    stock: 12,
    minStock: 8,
    price: 34.99,
    status: "in-stock",
  },
  {
    id: "INV-006",
    name: "Coffee Maker",
    sku: "CM-006",
    category: "Home & Garden",
    stock: 3,
    minStock: 5,
    price: 89.99,
    status: "low-stock",
  },
];

export const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

  const categories = [
    "all",
    ...Array.from(new Set(inventoryData.map((item) => item.category))),
  ];
  const totalValue = inventoryData.reduce(
    (sum, item) => sum + item.stock * item.price,
    0
  );
  const lowStockItems = inventoryData.filter(
    (item) => item.status === "low-stock" || item.status === "out-of-stock"
  ).length;

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Products Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your products inventory and stock levels
          </p>
        </div>
        {/* <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button> */}
        <OffCanvasBtn
          buttonText={"Add New Product"}
          formName={"Add New Product"}
        >
          {(close) => (
            <>
              <h2 className="mb-4">Add New Product</h2>
              <form>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Product Description"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <Select>
                  <SelectTrigger className="w-full mb-2">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home-garden">Home & Garden</SelectItem>
                  </SelectContent>
                </Select>
                <input
                  type="number"
                  placeholder="Quntity"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Duration"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <textarea
                  placeholder="Description"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Save Product
                </Button>
              </form>
            </>
          )}
        </OffCanvasBtn>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventoryData.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalValue.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {lowStockItems}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length - 1}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search products or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInventory.map((item) => (
                  <TableRow key={item.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="text-gray-600">{item.sku}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{item.stock}</span>
                        <span className="text-xs text-gray-500">
                          Min: {item.minStock}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">${item.price}</TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Restock
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
