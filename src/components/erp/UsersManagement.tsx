// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Search, Filter } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { OffCanvasBtn } from "@/components/OffCanvasBtn";
// import { showToast } from "@/hooks/toast";
// import { EditStaffForm } from "../forms/EditStaffForm";
// import { Role } from "@/generated/prisma";
// import { AddNewStaff } from "../forms/AddNewStaff";
// import { redirect } from "next/navigation";

// interface StaffData {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   city: string;
//   state: string;
//   country: string;
//   birthDate: Date | null;
//   password?: string;
//   mfaEnabled: boolean;
//   mfaSecret?: string;
//   lastLogin?: Date | null;
//   createdAt: Date;
//   updatedAt: Date;
//   deletedAt?: Date | null;
//   role: string;
//   isActive: boolean;
//   companyId: string;
//   zipCode?: string;
//   addressLine1?: string;
//   addressLine2?: string;
//   emailVerified?: Date | null;
//   image?: string;
//   onSuccess?: (newStaff: StaffData) => void;
// }

// export const UsersManagement = ({ companyId }: { companyId: string }) => {
//   const [staffByCompany, setStaffByCompany] = useState<
//     Record<string, StaffData[]>
//   >({});
//   const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(
//     null
//   );
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedStatus, setSelectedStatus] = useState("all");

//   const [editingStaff, setEditingStaff] = useState<StaffData | null>(null);
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const { data: session } = useSession();

//   const handleEdit =
//     ({ companyId, userId }: { companyId: string; userId: string }) =>
//     () => {
//       const staff = staffByCompany[companyId]?.find((s) => s.id === userId);
//       if (!staff) {
//         showToast("error", "Staff not found");
//         return;
//       }
//       setEditingStaff(staff);
//       setIsEditOpen(true);
//     };

//   const handleDelete =
//     ({ companyId, userId }: { companyId: string; userId: string }) =>
//     async () => {
//       if (!activeCompanyId) return;
//       const confirmed = window.confirm(
//         "Are you sure you want to delete this staff member?"
//       );
//       if (!confirmed) return;

//       const res = await fetch(
//         `/api/company/admin/${companyId}/staff/${userId}/delete`,
//         {
//           method: "DELETE",
//         }
//       );
//       const data = await res.json();
//       if (!res.ok) {
//         showToast("error", data.error || "Failed to delete");
//         return;
//       }

//       showToast("success", "Staff member deleted");
//       setStaffByCompany((prev) => ({
//         ...prev,
//         [selectedCompanyId]: prev[selectedCompanyId].filter(
//           (s) => s.id !== userId
//         ),
//       }));
//     };

//   // const filteredStaff =
//   //   selectedCompanyId &&
//   //   staffByCompany[selectedCompanyId]?.filter((s) => {
//   //     const matchesSearch =
//   //       s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   //       s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//   //       s.phone.includes(searchTerm);
//   //     const matchesStatus =
//   //       selectedStatus === "all" ||
//   //       s.isActive === (selectedStatus === "active");
//   //     return matchesSearch && matchesStatus;
//   //   });
//   const filteredStaff =
//     selectedCompanyId && Array.isArray(staffByCompany[selectedCompanyId])
//       ? staffByCompany[selectedCompanyId].filter((s) => {
//           const matchesSearch =
//             s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             s.phone.includes(searchTerm);
//           const matchesStatus =
//             selectedStatus === "all" ||
//             s.isActive === (selectedStatus === "active");
//           return matchesSearch && matchesStatus;
//         })
//       : [];
//   const statuses = ["all", "active", "inactive"];

//   // Used to trigger a reload of staff data after editing
//   const fetchCompanyStaff = async () => {
//     if (selectedCompanyId) {
//       fetch(`/api/company/admin/${selectedCompanyId}/staff`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setStaffByCompany((prev) => ({
//             ...prev,
//             [selectedCompanyId]: data.staff || [],
//           }));
//           setIsLoading(false);
//         })
//         .catch(() => {
//           showToast("error", "Failed to reload staff data");
//         });
//     }
//   };

//   useEffect(() => {
//     if (
//       !session ||
//       !["ADMIN", "MANAGER", "SUPER_ADMIN"].includes(session.user.role)
//     ) {
//       return redirect("/auth");
//     }

//     if (
//       !session ||
//       !session.user.ownedCompanies ||
//       session.user.ownedCompanies.length === 0
//     ) {
//       showToast("error", "No companies found for the user");
//       return;
//     }

//     const initialCompanyId = session.user.ownedCompanies[0].id;
//     setSelectedCompanyId(initialCompanyId);

//     const fetchStaff = async (companyId: string) => {
//       const res = await fetch(`/api/company/admin/${companyId}/staff`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         showToast("error", data.error || "Failed to fetch staff");
//         return;
//       }

//       setStaffByCompany((prev) => ({
//         ...prev,
//         [companyId]: Array.isArray(data.staff) ? data.staff : [],
//       }));
//     };

//     fetchStaff(initialCompanyId);
//   }, [session]);

//   useEffect(() => {
//     if (selectedCompanyId) {
//       fetchCompanyStaff();
//     }
//   }, [selectedCompanyId]);

//   if (isLoading) {
//     return (
//       <div className="p-8 space-y-8">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">
//               Staff Management
//             </h1>
//             <p className="text-gray-600 mt-1">
//               Manage employees, roles, and permissions
//             </p>
//           </div>
//         </div>
//         <div className="min-h-[80vh] w-full flex justify-center items-center text-lg">
//           <h2>Loading Company Staff ...</h2>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 space-y-8 h-full w-full">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
//           <p className="text-gray-600 mt-1">
//             Manage employees, roles, and permissions
//           </p>
//         </div>
//         <OffCanvasBtn
//           buttonText="Add New Staff Member"
//           formName="Add New Staff Member"
//         >
//           {(close) => (
//             <AddNewStaff
//               companyId={selectedCompanyId ?? session?.user?.company?.id ?? ""}
//             />
//           )}
//         </OffCanvasBtn>
//       </div>

//       <Tabs
//         defaultValue={session?.user?.ownedCompanies?.[0]?.id}
//         onValueChange={setSelectedCompanyId}
//       >
//         <TabsList className="mb-6">
//           {session?.user?.ownedCompanies?.map((company) => (
//             <TabsTrigger key={company.id} value={company.id}>
//               {company.name}
//             </TabsTrigger>
//           ))}
//         </TabsList>

//         {session?.user?.ownedCompanies?.map((company) => (
//           <TabsContent key={company.id} value={company.id}>
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Staff Directory</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
//                   <div className="relative flex-1">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                     <Input
//                       placeholder="Search staff..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="pl-10"
//                     />
//                   </div>
//                   <div className="flex gap-2">
//                     <select
//                       value={selectedStatus}
//                       onChange={(e) => setSelectedStatus(e.target.value)}
//                       className="px-3 py-2 border border-gray-300 rounded-md"
//                     >
//                       {statuses.map((status) => (
//                         <option key={status} value={status}>
//                           {status.charAt(0).toUpperCase() + status.slice(1)}
//                         </option>
//                       ))}
//                     </select>
//                     <Button variant="outline">
//                       <Filter className="w-4 h-4 mr-2" />
//                       More Filters
//                     </Button>
//                   </div>
//                 </div>

//                 <div className="w-full border rounded-lg overflow-scroll z-10">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Staff</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Phone</TableHead>
//                         <TableHead>Birth Date</TableHead>
//                         <TableHead>Location</TableHead>
//                         <TableHead>Role</TableHead>
//                         <TableHead>Status</TableHead>
//                         <TableHead>Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {(Array.isArray(filteredStaff) ? filteredStaff : []).map(
//                         (s: StaffData, index: number) => (
//                           <TableRow
//                             key={s.id}
//                             className={`${
//                               index % 2 === 0 ? "bg-white" : "bg-gray-50"
//                             } hover:bg-gray-100`}
//                           >
//                             <TableCell>{s.name}</TableCell>
//                             <TableCell>{s.email}</TableCell>
//                             <TableCell>{s.phone}</TableCell>
//                             <TableCell>
//                               {s.birthDate
//                                 ? new Intl.DateTimeFormat("en-US", {
//                                     year: "numeric",
//                                     month: "short",
//                                     day: "numeric",
//                                     timeZone: "UTC",
//                                   }).format(new Date(s.birthDate))
//                                 : "-"}
//                             </TableCell>
//                             <TableCell>
//                               {[
//                                 s.addressLine1,
//                                 s.addressLine2,
//                                 s.city,
//                                 s.state,
//                                 s.zipCode,
//                                 s.country,
//                               ]
//                                 .filter(Boolean)
//                                 .join(", ")}
//                             </TableCell>
//                             <TableCell>
//                               <Badge
//                                 className="py-2 bg-[#ffba01] text-white"
//                                 variant="outline"
//                               >
//                                 {s.role}
//                               </Badge>
//                             </TableCell>
//                             <TableCell>
//                               <Badge
//                                 className={
//                                   s.isActive
//                                     ? "bg-[#7eba00] py-2"
//                                     : "bg-[#f8510c] py-2"
//                                 }
//                               >
//                                 {s.isActive ? "Active" : "Inactive"}
//                               </Badge>
//                             </TableCell>
//                             <TableCell>
//                               <div className="flex gap-2">
//                                 <Button
//                                   variant="default"
//                                   size="sm"
//                                   onClick={handleEdit({
//                                     companyId: activeCompanyId!,
//                                     userId: s.id,
//                                   })}
//                                 >
//                                   Edit
//                                 </Button>
//                                 <Button
//                                   variant="destructive"
//                                   size="sm"
//                                   onClick={handleDelete({
//                                     companyId: activeCompanyId!,
//                                     userId: s.id,
//                                   })}
//                                 >
//                                   Delete
//                                 </Button>
//                               </div>
//                             </TableCell>
//                           </TableRow>
//                         )
//                       )}
//                     </TableBody>
//                   </Table>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         ))}
//       </Tabs>
//       {editingStaff && isEditOpen && (
//         <>
//           <EditStaffForm
//             user={{
//               id: editingStaff.id,
//               name: editingStaff.name ?? "",
//               email: editingStaff.email,
//               emailVerified: editingStaff.emailVerified ?? null,
//               image: editingStaff.image ?? "",
//               phone: editingStaff.phone ?? "",
//               birthDate: editingStaff.birthDate,
//               password: editingStaff.password ?? "",
//               mfaEnabled: editingStaff.mfaEnabled,
//               mfaSecret: editingStaff.mfaSecret ?? null,
//               addressLine1: editingStaff.addressLine1 ?? "",
//               addressLine2: editingStaff.addressLine2 ?? "",
//               city: editingStaff.city ?? "",
//               state: editingStaff.state ?? "",
//               zipCode: editingStaff.zipCode ?? "",
//               country: editingStaff.country ?? "",
//               role: editingStaff.role as Role,
//               isActive: editingStaff.isActive,
//               companyId: editingStaff.companyId,
//               lastLogin: null,
//               createdAt: new Date(),
//               updatedAt: new Date(),
//               deletedAt: null,
//             }}
//           />
//         </>
//       )}
//     </div>
//   );
// };

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { OffCanvasBtn } from "@/components/OffCanvasBtn";
import { showToast } from "@/hooks/toast";
import { EditStaffForm } from "../forms/EditStaffForm";
import { Role } from "@/generated/prisma";
import { AddNewStaff } from "../forms/AddNewStaff";
import { redirect } from "next/navigation";

interface StaffData {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  birthDate: Date | null;
  password?: string;
  mfaEnabled: boolean;
  mfaSecret?: string;
  lastLogin?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  role: string;
  isActive: boolean;
  companyId: string;
  zipCode?: string;
  addressLine1?: string;
  addressLine2?: string;
  emailVerified?: Date | null;
  image?: string;
  onSuccess?: (newStaff: StaffData) => void;
}

export const UsersManagement = ({ companyId }: { companyId: string }) => {
  const [staffByCompany, setStaffByCompany] = useState<
    Record<string, StaffData[]>
  >({});
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [editingStaff, setEditingStaff] = useState<StaffData | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  const activeCompanyId =
    selectedCompanyId ?? session?.user?.ownedCompanies?.[0]?.id ?? companyId;

  const handleEdit =
    ({ companyId, userId }: { companyId: string; userId: string }) =>
    () => {
      const staff = staffByCompany[companyId]?.find((s) => s.id === userId);
      if (!staff) {
        showToast("error", "Staff not found");
        return;
      }
      setEditingStaff(staff);
      setIsEditOpen(true);
    };

  const handleDelete =
    ({ companyId, userId }: { companyId: string; userId: string }) =>
    async () => {
      if (!activeCompanyId) return;
      const confirmed = window.confirm(
        "Are you sure you want to delete this staff member?"
      );
      if (!confirmed) return;

      const res = await fetch(
        `/api/company/admin/${companyId}/staff/${userId}/delete`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        showToast("error", data.error || "Failed to delete");
        return;
      }

      showToast("success", "Staff member deleted");
      setStaffByCompany((prev) => ({
        ...prev,
        [activeCompanyId]: (prev[activeCompanyId] || []).filter(
          (s) => s.id !== userId
        ),
      }));
    };

  const filteredStaff = Array.isArray(staffByCompany[activeCompanyId ?? ""])
    ? staffByCompany[activeCompanyId!].filter((s) => {
        const matchesSearch =
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.phone.includes(searchTerm);
        const matchesStatus =
          selectedStatus === "all" ||
          s.isActive === (selectedStatus === "active");
        return matchesSearch && matchesStatus;
      })
    : [];

  const statuses = ["all", "active", "inactive"];

  useEffect(() => {
    if (
      !session ||
      !["ADMIN", "MANAGER", "SUPER_ADMIN"].includes(session.user.role)
    ) {
      return redirect("/auth");
    }

    if (
      !session.user.ownedCompanies ||
      session.user.ownedCompanies.length === 0
    ) {
      showToast("error", "No companies found for the user");
    }
  }, [session]);

  useEffect(() => {
    if (!activeCompanyId) return;

    const fetchCompanyStaff = async (targetCompanyId: string) => {
      try {
        const res = await fetch(
          `/api/company/admin/${targetCompanyId}/staff`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        if (!res.ok) {
          showToast("error", data.error || "Failed to fetch staff");
          return;
        }
        setStaffByCompany((prev) => ({
          ...prev,
          [targetCompanyId]: Array.isArray(data.staff) ? data.staff : [],
        }));
      } catch {
        showToast("error", "Failed to reload staff data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanyStaff(activeCompanyId);
  }, [activeCompanyId]);

  if (isLoading) {
    return (
      <div className="p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
        <div className="min-h-[80vh] w-full flex justify-center items-center text-lg">
          <h2>Loading Company Staff ...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 h-full w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-gray-600 mt-1">
            Manage employees, roles, and permissions
          </p>
        </div>
        <OffCanvasBtn
          buttonText="Add New Staff Member"
          formName="Add New Staff Member"
        >
          {() => (
            <AddNewStaff
              companyId={activeCompanyId ?? session?.user?.company?.id ?? ""}
            />
          )}
        </OffCanvasBtn>
      </div>

      <Tabs
        defaultValue={session?.user?.ownedCompanies?.[0]?.id}
        onValueChange={setSelectedCompanyId}
      >
        <TabsList className="mb-6">
          {session?.user?.ownedCompanies?.map((company) => (
            <TabsTrigger key={company.id} value={company.id}>
              <span className="capitalize font-black text-2xl hover:cursor-pointer">
                {company.name} Co.
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {session?.user?.ownedCompanies?.map((company) => (
          <TabsContent key={company.id} value={company.id}>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Staff Directory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search staff..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                      ))}
                    </select>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      More Filters
                    </Button>
                  </div>
                </div>

                <div className="w-full border rounded-lg overflow-scroll z-10">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Staff</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Birth Date</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStaff.map((s, index) => (
                        <TableRow
                          key={s.id}
                          className={`${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          } hover:bg-gray-100`}
                        >
                          <TableCell>{s.name}</TableCell>
                          <TableCell>{s.email}</TableCell>
                          <TableCell>{s.phone}</TableCell>
                          <TableCell>
                            {s.birthDate
                              ? new Intl.DateTimeFormat("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                  timeZone: "UTC",
                                }).format(new Date(s.birthDate))
                              : "-"}
                          </TableCell>
                          <TableCell>
                            {[
                              s.addressLine1,
                              s.addressLine2,
                              s.city,
                              s.state,
                              s.zipCode,
                              s.country,
                            ]
                              .filter(Boolean)
                              .join(", ")}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className="py-2 bg-[#ffba01] text-white"
                              variant="outline"
                            >
                              {s.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={
                                s.isActive
                                  ? "bg-[#7eba00] py-2"
                                  : "bg-[#f8510c] py-2"
                              }
                            >
                              {s.isActive ? "Active" : "Inactive"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="default"
                                size="sm"
                                onClick={handleEdit({
                                  companyId: activeCompanyId!,
                                  userId: s.id,
                                })}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={handleDelete({
                                  companyId: activeCompanyId!,
                                  userId: s.id,
                                })}
                              >
                                Delete
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
          </TabsContent>
        ))}
      </Tabs>

      {editingStaff && isEditOpen && (
        <EditStaffForm
          user={{
            ...editingStaff,
            role: editingStaff.role as Role,
            emailVerified: editingStaff.emailVerified ?? null,
            image: editingStaff.image ?? "",
            password: editingStaff.password ?? "",
            mfaSecret: editingStaff.mfaSecret ?? null,
            lastLogin: editingStaff.lastLogin ?? null,
            deletedAt: editingStaff.deletedAt ?? null,
            addressLine1: editingStaff.addressLine1 ?? null,
            addressLine2: editingStaff.addressLine2 ?? null,
            city: editingStaff.city ?? null,
            state: editingStaff.state ?? null,
            zipCode: editingStaff.zipCode ?? null,
            name: editingStaff.name ?? null,
            phone: editingStaff.phone ?? null,
            country: editingStaff.country ?? null,
          }}
        />
      )}
    </div>
  );
};
