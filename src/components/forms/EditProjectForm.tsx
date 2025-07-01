"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type UserOption = { id: string; name: string };

type Props = {
  companyId: string;
  managerId: string;
  staff: UserOption[];
  customers: UserOption[];
  project?: {
    id?: string;
    name: string;
    description: string;
    status: string;
    startDate?: string;
    endDate?: string;
    budget?: number;
    progress?: number;
    isActive: boolean;
    assignedStaffIds?: string[];
    customerIds?: string[];
  };
  onCancel: () => void;
  onSuccess: () => void;
};

export const EditProjectForm = ({
  companyId,
  managerId,
  staff,
  customers,
  project,
  onCancel,
  onSuccess,
}: Props) => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "PLANNING",
    startDate: "",
    endDate: "",
    budget: "",
    progress: 0,
    isActive: false,
  });

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [noChanges, setNoChanges] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<string[]>([]);
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

  useEffect(() => {
    if (project) {
      setForm({
        name: project.name || "",
        description: project.description || "",
        status: project.status || "PLANNING",
        startDate: project.startDate?.split("T")[0] || "",
        endDate: project.endDate?.split("T")[0] || "",
        budget: project.budget?.toString() || "",
        progress: project.progress ?? 0,
        isActive: project.isActive || false,
      });
      setSelectedStaff(project.assignedStaffIds || []);
      setSelectedCustomers(project.customerIds || []);
    }
  }, [project]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleUser = (
    id: string,
    list: string[],
    setter: (val: string[]) => void
  ) => {
    setter(list.includes(id) ? list.filter((i) => i !== id) : [...list, id]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/projects/${companyId}/update`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        startDate: form.startDate ? new Date(form.startDate) : null,
        endDate: form.endDate ? new Date(form.endDate) : null,
        budget: form.budget ? parseFloat(form.budget) : null,
        progress: form.progress,
        isActive: form.isActive,
        companyId,
        managerId,
        staff: selectedStaff,
        customers: selectedCustomers,
        id: project?.id, // send project ID for update
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.unchanged) {
        setNoChanges(true);
        return;
      }
      setSuccess(true);
      if (onSuccess) onSuccess();
      if (onCancel) onCancel(); // optional close handler
      return;
    } else {
      alert("Failed to update project");
      setFailure(true);
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute right-0 z-50 top-0 bottom-0 min-h-[100vh] space-y-6 p-6 bg-gray-100 shadow max-w-xl w-full overflow-y-auto"
    >
      <h3 className="font-black text-xl">Edit {project?.name} Project</h3>
      {/* //name */}
      <div className="">
        <Label htmlFor="name" className="mb-6">
          Project Name
        </Label>
        <Input
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Enter project name"
          className="mb-4"
        />
      </div>
      {/* description */}
      <div>
        <Label htmlFor="description" className="mb-6">
          Description
        </Label>
        <Textarea
          className="mb-6"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter project description"
        />
      </div>
      {/* Status */}
      <div>
        <Label htmlFor="status" className="mb-6 text-black">
          Status
        </Label>
        <Select
          value={form.status}
          onValueChange={(val) => handleSelectChange("status", val)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {[
              "PLANNING",
              "IN_PROGRESS",
              "ON_HOLD",
              "COMPLETED",
              "CANCELED",
              "ARCHIVED",
            ].map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Start Date & End Date */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="startDate" className="mb-6">
            Start Date
          </Label>
          <Input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="endDate" className="mb-6">
            End Date
          </Label>
          <Input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="budget" className="mb-6">
          Budget (USD)
        </Label>
        <Input
          name="budget"
          type="number"
          step="0.01"
          value={form.budget}
          onChange={handleChange}
          placeholder="Enter budget amount"
        />
      </div>
      <div>
        <div className="w-full">
          <Label htmlFor="progress" className="mb-6">
            Progress
          </Label>

          {/* Slider */}
          <input
            type="range"
            min={0}
            max={100}
            step={10}
            value={form.progress}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, progress: Number(e.target.value) }))
            }
            className="w-full appearance-none h-2 rounded bg-gradient-to-r from-green-600 to-emerald-400"
            style={{
              background: `linear-gradient(to right, #22c55e ${form.progress}%, #e5e7eb ${form.progress}%)`,
            }}
          />

          {/* Tick marks */}
          <div className="flex justify-between text-xs text-gray-700 mt-1 px-1">
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((val) => (
              <span key={val} className="w-[1px] text-center">
                {val}
              </span>
            ))}
          </div>
          {/* Numeric value */}
          <div className="text-sm text-gray-700 mt-2 text-center">
            {form.progress}% complete
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          checked={form.isActive}
          onCheckedChange={(checked) =>
            setForm((prev) => ({ ...prev, isActive: checked }))
          }
        />
        <Label>Active</Label>
      </div>
      <div>
        <Label>Assign Staff (optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="w-full justify-start"
            >
              {selectedStaff.length > 0
                ? `${selectedStaff.length} selected`
                : "Select staff members"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full max-h-64 overflow-auto">
            {staff.map((user) => (
              <div key={user.id} className="flex items-center space-x-2 py-1">
                <Checkbox
                  id={`staff-${user.id}`}
                  checked={selectedStaff.includes(user.id)}
                  onCheckedChange={() =>
                    toggleUser(user.id, selectedStaff, setSelectedStaff)
                  }
                />
                <Label htmlFor={`staff-${user.id}`}>{user.name}</Label>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label>Assign Customers (optional)</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="w-full justify-start"
            >
              {selectedCustomers.length > 0
                ? `${selectedCustomers.length} selected`
                : "Select customers"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full max-h-64 overflow-auto">
            {customers.map((user) => (
              <div key={user.id} className="flex items-center space-x-2 py-1">
                <Checkbox
                  id={`cust-${user.id}`}
                  checked={selectedCustomers.includes(user.id)}
                  onCheckedChange={() =>
                    toggleUser(user.id, selectedCustomers, setSelectedCustomers)
                  }
                />
                <Label htmlFor={`cust-${user.id}`}>{user.name}</Label>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-2">
        <Button type="submit" className="flex-1">
          Update Project
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => onCancel?.()}
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
      <div className="w-full">
        {success && (
          <p className="text-gray-800 text-md">
            Project successfully updated ...
          </p>
        )}
        {noChanges && (
          <p className="text-sky-600 text-md">
            We detected no change in project data, so no updates applied ...
          </p>
        )}
        {failure && (
          <p className="text-red-500 text-md">Project failed to updated ...</p>
        )}
      </div>
    </form>
  );
};

export default EditProjectForm;
