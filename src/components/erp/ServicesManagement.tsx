"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Search, Edit, Trash2, Users, ShoppingCart } from "lucide-react";
import { OffCanvasBtn } from "../OffCanvasBtn";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status: "active" | "inactive";
  duration: string;
  linkedCustomers: number;
  linkedOrders: number;
}

export const ServicesManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [services] = useState<Service[]>([
    {
      id: "SRV-001",
      name: "Website Development",
      description: "Custom website development service",
      price: 2500,
      category: "Development",
      status: "active",
      duration: "2-4 weeks",
      linkedCustomers: 15,
      linkedOrders: 8,
    },
    {
      id: "SRV-002",
      name: "SEO Optimization",
      description: "Search engine optimization service",
      price: 800,
      category: "Marketing",
      status: "active",
      duration: "3-6 months",
      linkedCustomers: 22,
      linkedOrders: 12,
    },
    {
      id: "SRV-003",
      name: "Cloud Migration",
      description: "Migrate infrastructure to cloud",
      price: 5000,
      category: "Infrastructure",
      status: "active",
      duration: "4-8 weeks",
      linkedCustomers: 8,
      linkedOrders: 3,
    },
    {
      id: "SRV-004",
      name: "Data Analytics",
      description: "Business intelligence and analytics",
      price: 1200,
      category: "Analytics",
      status: "inactive",
      duration: "1-2 weeks",
      linkedCustomers: 5,
      linkedOrders: 2,
    },
  ]);

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalServices = services.length;
  const activeServices = services.filter((s) => s.status === "active").length;
  const totalRevenue = services.reduce(
    (sum, service) => sum + service.price * service.linkedOrders,
    0
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Services Management</h1>
          <p className="text-gray-600">
            Manage your business services and their connections
          </p>
        </div>
        {/* <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Service
        </Button> */}
        <OffCanvasBtn
          buttonText={"Add New Service"}
          formName={"Add New Service"}
        >
          {() => (
            <>
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
                  Add Service
                </Button>
              </form>
            </>
          )}
        </OffCanvasBtn>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalServices}</div>
            <p className="text-xs text-muted-foreground">
              All registered services
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeServices}</div>
            <p className="text-xs text-muted-foreground">Currently available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">From all services</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Service Price
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              $
              {Math.round(
                services.reduce((sum, s) => sum + s.price, 0) / services.length
              ).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Average pricing</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Services Overview</CardTitle>
          <CardDescription>
            View and manage all your business services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Customers</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {service.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{service.category}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    ${service.price.toLocaleString()}
                  </TableCell>
                  <TableCell>{service.duration}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        service.status === "active" ? "default" : "secondary"
                      }
                    >
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{service.linkedCustomers}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <ShoppingCart className="w-4 h-4 text-muted-foreground" />
                      <span>{service.linkedOrders}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
