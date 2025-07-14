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
  Filter,
  Eye,
  Package,
  Truck,
  CheckCircle,
  Clock,
} from "lucide-react";
import { OffCanvasBtn } from "../OffCanvasBtn";

const orderData = [
  {
    id: "#ORD-1001",
    customer: "John Doe",
    email: "john@example.com",
    date: "2024-01-15",
    amount: 1234.56,
    status: "completed",
    items: 3,
  },
  {
    id: "#ORD-1002",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "2024-01-15",
    amount: 856.9,
    status: "processing",
    items: 2,
  },
  {
    id: "#ORD-1003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    date: "2024-01-14",
    amount: 2145.3,
    status: "shipped",
    items: 5,
  },
  {
    id: "#ORD-1004",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    date: "2024-01-14",
    amount: 567.8,
    status: "pending",
    items: 1,
  },
  {
    id: "#ORD-1005",
    customer: "David Brown",
    email: "david@example.com",
    date: "2024-01-13",
    amount: 892.45,
    status: "cancelled",
    items: 2,
  },
  {
    id: "#ORD-1006",
    customer: "Lisa Garcia",
    email: "lisa@example.com",
    date: "2024-01-13",
    amount: 1567.22,
    status: "processing",
    items: 4,
  },
];

export const OrdersManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredOrders = orderData.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        );
      case "processing":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Clock className="w-3 h-3 mr-1" />
            Processing
          </Badge>
        );
      case "shipped":
        return (
          <Badge className="bg-purple-100 text-purple-800">
            <Truck className="w-3 h-3 mr-1" />
            Shipped
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Package className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const statuses = [
    "all",
    ...Array.from(new Set(orderData.map((order) => order.status))),
  ];
  const totalOrders = orderData.length;
  const totalRevenue = orderData.reduce((sum, order) => sum + order.amount, 0);
  const completedOrders = orderData.filter(
    (order) => order.status === "completed"
  ).length;
  const pendingOrders = orderData.filter(
    (order) => order.status === "pending" || order.status === "processing"
  ).length;

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Orders Management
          </h1>
          <p className="text-gray-600 mt-1">Track and manage customer orders</p>
        </div>
        {/* <Button className="bg-blue-600 hover:bg-blue-700">
          <Package className="w-4 h-4 mr-2" />
          Create Order
        </Button> */}
        <OffCanvasBtn
          buttonText={"Create New Order"}
          formName={"Create New Order"}
        >
          {(close) => (
            <>
              <h2 className="mb-4">Create New Order</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Order ....
                  </label>
                  <Input placeholder="Enter project name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <Input placeholder="Enter project description" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Budget
                  </label>
                  <Input type="number" placeholder="Enter budget amount" />
                </div>
                <Button type="submit" className="w-full">
                  Create Order
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
              Total Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalRevenue.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {completedOrders}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {pendingOrders}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search orders, customers, or emails..."
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
                      ? "All Statuses"
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
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{order.customer}</span>
                        <span className="text-sm text-gray-500">
                          {order.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {order.date}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{order.items} items</Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      ${order.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
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
