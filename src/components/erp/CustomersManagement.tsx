"use client";

import { useState } from "react";
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

import { Search, Filter, Mail, Phone, MapPin, Star } from "lucide-react";
import { OffCanvasBtn } from "@/components/OffCanvasBtn";

const customerData = [
  {
    id: "CUST-001",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    totalOrders: 12,
    totalSpent: 2458.9,
    lastOrder: "2024-01-15",
    status: "active",
    rating: 4.8,
  },
  {
    id: "CUST-002",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 234-5678",
    location: "Los Angeles, CA",
    totalOrders: 8,
    totalSpent: 1876.45,
    lastOrder: "2024-01-14",
    status: "active",
    rating: 4.6,
  },
  {
    id: "CUST-003",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago, IL",
    totalOrders: 15,
    totalSpent: 3247.8,
    lastOrder: "2024-01-10",
    status: "vip",
    rating: 4.9,
  },
  {
    id: "CUST-004",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+1 (555) 456-7890",
    location: "Houston, TX",
    totalOrders: 3,
    totalSpent: 567.3,
    lastOrder: "2024-01-08",
    status: "new",
    rating: 4.5,
  },
  {
    id: "CUST-005",
    name: "David Brown",
    email: "david@example.com",
    phone: "+1 (555) 567-8901",
    location: "Phoenix, AZ",
    totalOrders: 0,
    totalSpent: 0,
    lastOrder: "Never",
    status: "inactive",
    rating: 0,
  },
];

export const CustomersManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredCustomers = customerData.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);
    const matchesStatus =
      selectedStatus === "all" || customer.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "vip":
        return (
          <Badge className="bg-purple-100 text-purple-800">
            <Star className="w-3 h-3 mr-1" />
            VIP
          </Badge>
        );
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "new":
        return <Badge className="bg-blue-100 text-blue-800">New</Badge>;
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const statuses = [
    "all",
    ...Array.from(new Set(customerData.map((customer) => customer.status))),
  ];
  const totalCustomers = customerData.length;
  const activeCustomers = customerData.filter(
    (c) => c.status === "active" || c.status === "vip"
  ).length;
  const newCustomers = customerData.filter((c) => c.status === "new").length;
  const avgOrderValue =
    customerData.reduce((sum, c) => sum + c.totalSpent, 0) / totalCustomers;

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Customers Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your customer relationships and data
          </p>
        </div>
        <OffCanvasBtn buttonText={"Add New Customer"}>
          <h2 className="mb-4">Add New Customer</h2>
          <form>
            <input
              type="text"
              placeholder="Service Name"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Category"
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
              Save
            </Button>
          </form>
        </OffCanvasBtn>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCustomers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {activeCustomers}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              New This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {newCustomers}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Avg. Order Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${avgOrderValue.toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Table */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status === "all"
                      ? "All Customers"
                      : status.charAt(0).toUpperCase() + status.slice(1)}
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
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{customer.name}</span>
                        <span className="text-sm text-gray-500">
                          {customer.id}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-sm">
                          <Mail className="w-3 h-3 mr-1 text-gray-400" />
                          {customer.email}
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="w-3 h-3 mr-1 text-gray-400" />
                          {customer.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-3 h-3 mr-1 text-gray-400" />
                        {customer.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {customer.totalOrders}
                        </span>
                        <span className="text-xs text-gray-500">
                          Last: {customer.lastOrder}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      ${customer.totalSpent.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {customer.rating > 0 ? (
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm">
                            {customer.rating}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400">No rating</span>
                      )}
                    </TableCell>
                    <TableCell>{getStatusBadge(customer.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
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
