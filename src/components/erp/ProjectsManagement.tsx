"use client";

import React, { useState, useEffect } from "react";
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
  Clock,
  CheckSquare,
  DollarSign,
  Calendar,
  User,
} from "lucide-react";

import { OffCanvasBtn } from "@/components/OffCanvasBtn";
import { CreateProjectForm } from "../forms/CreateNewProjectForm";
import { useSession } from "next-auth/react";
import EditProjectForm from "../forms/EditProjectForm";

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  budget: number;
  progress: number;
  customerName?: string | null;
  managerId: string;
  manager: {
    id: string;
    name: string;
    email?: string;
    image?: string;
    role: string;
  };
  assignedAdminsOrManagers: {
    id: string;
    name: string;
    email: string;
    role: string;
    image?: string;
  }[];
  products: number;
  services: number;
  timeEntries: number;
  tasks: { id: string }[];
  isActive: boolean;
}

export const ProjectsManagement = () => {
  const { data: session } = useSession();
  if (!session || !session.user) return redirect("/auth");

  const managerId = session.user.id;
  const [companyId, setCompanyId] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [editProjectForm, setEditProjectForm] = useState(false);
  const [projectBeingEdited, setProjectBeingEdited] = useState<Project | null>(
    null
  );
  const [staff, setStaff] = useState<{ id: string; name: string }[]>([]);
  const [customers, setCustomers] = useState<{ id: string; name: string }[]>(
    []
  );

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);

        const companyRes = await fetch(
          `/api/company/find/${managerId}/company`
        );
        if (!companyRes.ok) throw new Error("Failed to fetch company");
        const company = await companyRes.json();
        setCompanyId(company.id);

        const [projectsRes, staffRes, customersRes] = await Promise.all([
          fetch(`/api/projects/${company.id}/list`),
          fetch(`/api/users/${company.id}/staff`),
          fetch(`/api/customers/${company.id}/list`),
        ]);

        if (!projectsRes.ok) throw new Error("Failed to fetch projects");
        if (!staffRes.ok) throw new Error("Failed to fetch staff");
        if (!customersRes.ok) throw new Error("Failed to fetch customers");

        const [projectsData, staffData, customersData] = await Promise.all([
          projectsRes.json(),
          staffRes.json(),
          customersRes.json(),
        ]);

        setProjects(projectsData.projects || []);
        setStaff(staffData.users || []);
        setCustomers(customersData.customers || []);
      } catch (err: any) {
        console.error("Error loading data:", err);
        setError(err.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    if (managerId) fetchInitialData();
  }, [managerId]);

  const handleProjectEdit = (project: Project) => {
    setProjectBeingEdited(project);
    setEditProjectForm(true);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.manager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.assignedAdminsOrManagers.some((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const fetchProjects = async () => {
    try {
      const res = await fetch(`/api/projects/${companyId}/list`);
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      setProjects(data.projects || []);
    } catch (err) {
      console.error("Failed to refetch updated project list", err);
    }
  };

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
              close={close} // ✅ Actually closes the drawer
              onSuccess={fetchProjects} // ✅ Refreshes the table
              staff={staff}
              customers={customers}
            />
          )}
        </OffCanvasBtn>
      </div>

      {/* Project Table Render Here */}
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
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Statuses</option>
              {[...new Set(projects.map((p) => p.status))].map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Project Manager</TableHead>
                  <TableHead>Staff Assigned</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {project.description}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {project.customerName ?? "N/A"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">
                          {project.manager?.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {project.assignedAdminsOrManagers.map((user) => (
                        <Badge
                          key={user.id}
                          variant="outline"
                          className="text-xs whitespace-nowrap"
                        >
                          {user.name} ({user.role})
                        </Badge>
                      ))}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-green-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {project.progress}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      ${project.budget}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{project.status}</Badge>
                    </TableCell>
                    <TableCell>
                      {project.isActive ? "Active" : "Inactive"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleProjectEdit(project)}
                          variant="ghost"
                          size="sm"
                        >
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

      {editProjectForm && projectBeingEdited && (
        <EditProjectForm
          companyId={companyId}
          managerId={managerId}
          staff={staff}
          customers={customers}
          project={{
            id: projectBeingEdited.id,
            name: projectBeingEdited.name,
            description: projectBeingEdited.description,
            status: projectBeingEdited.status,
            startDate: projectBeingEdited.startDate,
            endDate: projectBeingEdited.endDate,
            budget: projectBeingEdited.budget,
            isActive: projectBeingEdited.isActive,
            assignedStaffIds: projectBeingEdited.assignedAdminsOrManagers.map(
              (u) => u.id
            ),
            customerIds: [],
          }}
          onCancel={() => {
            setEditProjectForm(false);
            setProjectBeingEdited(null);
          }}
          onSuccess={() => {
            fetchProjects(); // ✅ Refresh the project list
            setEditProjectForm(false);
            setProjectBeingEdited(null);
          }}
        />
      )}
    </div>
  );
};
