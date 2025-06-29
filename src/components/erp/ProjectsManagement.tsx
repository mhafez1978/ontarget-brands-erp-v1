"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
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
import {
  Search,
  Edit,
  Eye,
  Users,
  Clock,
  CheckSquare,
  DollarSign,
  Calendar,
  User,
} from "lucide-react";

import { OffCanvasBtn } from "@/components/OffCanvasBtn";
import { CreateProjectForm } from "../forms/CreateNewProjectForm";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  status: "planning" | "active" | "on-hold" | "completed" | "cancelled";
  startDate: string;
  endDate: string;
  budget: number;
  customers: string[];
  projectLead: string;
  assignedEmployees: string[];
  products: number;
  services: number;
  timeEntries: number;
  tasks: {
    total: number;
    completed: number;
  };
  progress: number;
}

export const ProjectsManagement = () => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return redirect("/auth");
  }
  const managerId = session?.user.id;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [open, setOpen] = useState(false);
  const [companyId, setCompanyId] = useState("");
  const [projects] = useState<Project[]>([
    {
      id: "PRJ-001",
      name: "E-commerce Platform Redesign",
      description: "Complete redesign of the online store platform",
      status: "active",
      startDate: "2024-01-15",
      endDate: "2024-04-30",
      budget: 50000,
      customers: ["ABC Corp", "XYZ Ltd"],
      projectLead: "Sarah Johnson",
      assignedEmployees: ["John Doe", "Mike Smith", "Lisa Brown"],
      products: 5,
      services: 3,
      timeEntries: 245,
      tasks: { total: 28, completed: 18 },
      progress: 65,
    },
    {
      id: "PRJ-002",
      name: "Mobile App Development",
      description: "iOS and Android mobile application",
      status: "planning",
      startDate: "2024-02-01",
      endDate: "2024-07-15",
      budget: 75000,
      customers: ["TechStart Inc"],
      projectLead: "David Wilson",
      assignedEmployees: ["Emma Davis", "Tom Anderson"],
      products: 2,
      services: 4,
      timeEntries: 89,
      tasks: { total: 35, completed: 5 },
      progress: 15,
    },
    {
      id: "PRJ-003",
      name: "Website Migration",
      description: "Migrate legacy website to modern platform",
      status: "completed",
      startDate: "2023-11-01",
      endDate: "2024-01-31",
      budget: 25000,
      customers: ["Global Solutions"],
      projectLead: "Alex Chen",
      assignedEmployees: ["Rachel Green", "Steve Miller"],
      products: 1,
      services: 2,
      timeEntries: 156,
      tasks: { total: 22, completed: 22 },
      progress: 100,
    },
    {
      id: "PRJ-004",
      name: "Data Analytics Dashboard",
      description: "Business intelligence dashboard implementation",
      status: "on-hold",
      startDate: "2024-01-20",
      endDate: "2024-05-20",
      budget: 35000,
      customers: ["DataCorp", "Analytics Plus"],
      projectLead: "Maria Garcia",
      assignedEmployees: ["Kevin Lee", "Nancy White"],
      products: 3,
      services: 2,
      timeEntries: 67,
      tasks: { total: 18, completed: 8 },
      progress: 45,
    },
  ]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.customers.some((customer) =>
        customer.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      project.projectLead.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "planning":
        return <Badge className="bg-blue-100 text-blue-800">Planning</Badge>;
      case "completed":
        return <Badge className="bg-gray-100 text-gray-800">Completed</Badge>;
      case "on-hold":
        return <Badge className="bg-yellow-100 text-yellow-800">On Hold</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress >= 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  const statuses = [
    "all",
    ...Array.from(new Set(projects.map((project) => project.status))),
  ];
  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.status === "active").length;
  const totalBudget = projects.reduce(
    (sum, project) => sum + project.budget,
    0
  );
  const completedProjects = projects.filter(
    (p) => p.status === "completed"
  ).length;

  useEffect(() => {
    if (!managerId) return;

    const fetchCompany = async () => {
      const userId = managerId;
      const result = await fetch(`/api/company/find/${userId}/company`);

      const company = await result.json();

      if (company.id) {
        setCompanyId(company.id);
      }
    };
    fetchCompany();
  }, [managerId]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Projects Management</h1>
          <p className="text-gray-600">Manage projects and track progress</p>
        </div>

        <OffCanvasBtn
          formName="Create New Project"
          buttonText="Create New Project"
        >
          {(close) => (
            <CreateProjectForm
              companyId={companyId}
              managerId={managerId}
              onSuccess={() => {
                // Optional: Refresh project list
                console.log("Project created!");
              }}
              close={() => setOpen(false)}
            />
          )}
        </OffCanvasBtn>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Projects
            </CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalProjects}</div>
            <p className="text-xs text-muted-foreground">All projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeProjects}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalBudget.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              All projects combined
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedProjects}</div>
            <p className="text-xs text-muted-foreground">
              Successfully completed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <CardTitle>Projects Overview</CardTitle>
          <CardDescription>
            View and manage all your projects with their assignments and
            progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search projects, customers, or project leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
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
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Customers</TableHead>
                  <TableHead>Project Lead</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.map((project) => (
                  <TableRow key={project.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {project.description}
                        </div>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            <CheckSquare className="w-3 h-3 mr-1" />
                            {project.tasks.completed}/{project.tasks.total}{" "}
                            tasks
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {project.timeEntries}h logged
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        {project.customers.map((customer, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {customer}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">
                          {project.projectLead}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{project.assignedEmployees.length} members</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {project.products} products, {project.services} services
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getProgressColor(
                              project.progress
                            )}`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {project.progress}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      ${project.budget.toLocaleString()}
                    </TableCell>
                    <TableCell>{getStatusBadge(project.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
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
