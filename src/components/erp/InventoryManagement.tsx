// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { useSession } from "next-auth/react";
// // // import { redirect } from "next/navigation";
// // // import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// // // import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Badge } from "@/components/ui/badge";
// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableHead,
// // //   TableHeader,
// // //   TableRow,
// // // } from "@/components/ui/table";
// // // import {
// // //   Search,
// // //   Filter,
// // //   CheckCircle,
// // //   AlertTriangle,
// // //   Package,
// // // } from "lucide-react";
// // // import { OffCanvasBtn } from "../OffCanvasBtn";
// // // import { CreateNewProduct } from "../forms/CreateNewProduct";
// // // import { CreateNewSupplier } from "../forms/CreateNewSupplier";
// // // import { Product, Supplier } from "@/generated/prisma";

// // // export const InventoryManagement = ({
// // //   companies,
// // // }: {
// // //   companies: { id: string; name: string }[];
// // // }) => {
// // //   const { data: session } = useSession();
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [activeCompanyId, setActiveCompanyId] = useState<string | null>(null);
// // //   const [companyList, setCompanyList] = useState<
// // //     { id: string; name: string }[]
// // //   >([]);
// // //   const [productsByCompany, setProductsByCompany] = useState<
// // //     Record<string, Product[]>
// // //   >({});

// // //   const [suppliersByCompany, setSuppliersByCompany] = useState<
// // //     Record<string, Supplier[]>
// // //   >({});

// // //   const [search, setSearch] = useState("");
// // //   const [category, setCategory] = useState("all");

// // //   useEffect(() => {
// // //     if (!session || !session.user?.ownedCompanies?.length) return;
// // //     const owned = session.user.ownedCompanies;
// // //     setCompanyList(owned);
// // //     setActiveCompanyId(owned[0].id);
// // //   }, [session]);

// // //   useEffect(() => {
// // //     if (!activeCompanyId || productsByCompany[activeCompanyId]) return;

// // //     const fetchProducts = async () => {
// // //       try {
// // //         const res = await fetch(
// // //           `/api/admin/company/${activeCompanyId}/product/list`
// // //         );
// // //         const json = await res.json();

// // //         // Defensive check
// // //         const data = Array.isArray(json) ? json : json.products ?? [];

// // //         setProductsByCompany((prev) => ({ ...prev, [activeCompanyId]: data }));
// // //       } catch (err) {
// // //         console.error("Failed to fetch products", err);
// // //       }
// // //     };

// // //     const fetchSuppliers = async () => {
// // //       try {
// // //         const res = await fetch(
// // //           `/api/admin/company/${activeCompanyId}/supplier/list`
// // //         );
// // //         const json = await res.json();

// // //         const data = Array.isArray(json) ? json : json.suppliers ?? [];

// // //         setSuppliersByCompany((prev) => ({ ...prev, [activeCompanyId]: data }));
// // //       } catch (err) {
// // //         console.error("Failed to fetch suppliers", err);
// // //       }
// // //     };

// // //     fetchProducts();
// // //     fetchSuppliers();
// // //     setIsLoading(false);
// // //   }, [activeCompanyId]);

// // //   if (
// // //     !session ||
// // //     !["ADMIN", "SUPER_ADMIN", "MANAGER"].includes(session.user.role)
// // //   ) {
// // //     return redirect("/auth");
// // //   }

// // //   const getStatusBadge = (qty?: number | null) => {
// // //     if (!qty || qty === 0)
// // //       return (
// // //         <Badge variant="destructive">
// // //           <Package className="w-3 h-3 mr-1" />
// // //           Out of Stock
// // //         </Badge>
// // //       );
// // //     if (qty < 10)
// // //       return (
// // //         <Badge className="bg-yellow-100 text-yellow-800">
// // //           <AlertTriangle className="w-3 h-3 mr-1" />
// // //           Low Stock
// // //         </Badge>
// // //       );
// // //     return (
// // //       <Badge className="bg-green-100 text-green-800">
// // //         <CheckCircle className="w-3 h-3 mr-1" />
// // //         In Stock
// // //       </Badge>
// // //     );
// // //   };

// // //   const renderCompanyTabContent = (companyId: string) => {
// // //     const products = productsByCompany[companyId] || [];
// // // 
// // //     const filtered = products.filter((item) => {
// // //       const matchesSearch =
// // //         item.name?.toLowerCase().includes(search.toLowerCase()) ||
// // //         item.sku?.toLowerCase().includes(search.toLowerCase());
// // //       const matchesCategory =
// // //         category === "all" ||
// // //         (Array.isArray((item as any).category)
// // //           ? (item as any).category
// // //           : [(item as any).category || ""]
// // //         ).some((cat: string) =>
// // //           cat.toLowerCase().includes(category.toLowerCase())
// // //         );
// // //       return matchesSearch && matchesCategory;
// // //     });

// // //     const categories = [
// // //       "all",
// // //       ...Array.from(
// // //         new Set(products.flatMap((item) => item.categories ?? []))
// // //       ),
// // //     ];

// // //     const totalValue = products.reduce(
// // //       (sum, p) => sum + (p.price || 0) * (p.quantity || 0),
// // //       0
// // //     );

// // //     const lowStock = products.filter((p) => (p.quantity || 0) < 5).length;

// // //     return (
// // //       <div className="space-y-6">
// // //         {/* Summary Cards */}
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// // //           <Card>
// // //             <CardHeader>
// // //               <CardTitle className="text-sm text-muted-foreground">
// // //                 Total Products
// // //               </CardTitle>
// // //             </CardHeader>
// // //             <CardContent>
// // //               <div className="text-2xl font-bold">{products.length}</div>
// // //             </CardContent>
// // //           </Card>
// // //           <Card>
// // //             <CardHeader>
// // //               <CardTitle className="text-sm text-muted-foreground">
// // //                 Inventory Total Value
// // //               </CardTitle>
// // //             </CardHeader>
// // //             <CardContent>
// // //               <div className="text-2xl font-bold">
// // //                 {products
// // //                   .reduce(
// // //                     (sum, p) => sum + (p.price || 0) * (p.quantity || 0),
// // //                     0
// // //                   )
// // //                   .toLocaleString("en-US", {
// // //                     style: "currency",
// // //                     currency: "USD",
// // //                   })}
// // //               </div>
// // //             </CardContent>
// // //           </Card>
// // //           <Card>
// // //             <CardHeader>
// // //               <CardTitle className="text-sm text-muted-foreground">
// // //                 Low Stock Alerts
// // //               </CardTitle>
// // //             </CardHeader>
// // //             <CardContent>
// // //               <div className="text-2xl font-bold text-red-600">{lowStock}</div>
// // //             </CardContent>
// // //           </Card>
// // //           <Card>
// // //             <CardHeader>
// // //               <CardTitle className="text-sm text-muted-foreground">
// // //                 Categories
// // //               </CardTitle>
// // //             </CardHeader>
// // //             <CardContent>
// // //               <div className="text-2xl font-bold">{categories.length - 1}</div>
// // //             </CardContent>
// // //           </Card>
// // //         </div>

// // //         {isLoading ? (
// // //           <div className="min-h-[50vh] text-center text-gray-500">
// // //             Loading...
// // //           </div>
// // //         ) : (
// // //           <>
// // //             {/* Filters & Table */}
// // //             <Card>
// // //               <CardHeader>
// // //                 <CardTitle>Product Inventory</CardTitle>
// // //               </CardHeader>
// // //               <CardContent className="space-y-4">
// // //                 <div className="flex flex-col md:flex-row gap-4">
// // //                   <div className="relative flex-1">
// // //                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
// // //                     <Input
// // //                       placeholder="Search by name or SKU..."
// // //                       value={search}
// // //                       onChange={(e) => setSearch(e.target.value)}
// // //                       className="pl-10"
// // //                     />
// // //                   </div>
// // //                   <select
// // //                     value={category}
// // //                     onChange={(e) => setCategory(e.target.value)}
// // //                     className="px-3 py-2 border border-gray-300 rounded-md"
// // //                   >
// // //                     {categories.map((c) => (
// // //                       <option key={c} value={c}>
// // //                         {c === "all" ? "All Categories" : c}
// // //                       </option>
// // //                     ))}
// // //                   </select>
// // //                   <Button variant="outline">
// // //                     <Filter className="w-4 h-4 mr-2" />
// // //                     More Filters
// // //                   </Button>
// // //                 </div>

// // //                 <div className="border rounded-lg overflow-hidden">
// // //                   <Table>
// // //                     <TableHeader>
// // //                       <TableRow>
// // //                         <TableHead>Product</TableHead>
// // //                         <TableHead>Description</TableHead>
// // //                         <TableHead>SKU</TableHead>
// // //                         <TableHead>UPC</TableHead>
// // //                         <TableHead>Serial</TableHead>
// // //                         <TableHead>Model</TableHead>
// // //                         <TableHead>MAC</TableHead>
// // //                         <TableHead>Unit</TableHead>
// // //                         <TableHead>Quantity</TableHead>
// // //                         <TableHead>Cost</TableHead>
// // //                         <TableHead>Price</TableHead>
// // //                         <TableHead>Brand</TableHead>
// // //                         <TableHead>Weight</TableHead>
// // //                         <TableHead>Availability</TableHead>
// // //                         <TableHead>Supplier</TableHead>
// // //                         <TableHead>Status</TableHead>
// // //                         <TableHead>Actions</TableHead>
// // //                       </TableRow>
// // //                     </TableHeader>

// // //                     <TableBody>
// // //                       {filtered.map((item) => (
// // //                         <TableRow key={item.id}>
// // //                           <TableCell>{item.name}</TableCell>
// // //                           <TableCell className="max-w-[150px] truncate">
// // //                             {item.description}
// // //                           </TableCell>
// // //                           <TableCell>{item.sku}</TableCell>
// // //                           <TableCell>{item.upc}</TableCell>
// // //                           <TableCell>{item.serial}</TableCell>
// // //                           <TableCell>{item.model}</TableCell>
// // //                           <TableCell>{item.macAddress}</TableCell>
// // //                           <TableCell>{item.unit}</TableCell>
// // //                           <TableCell>{item.quantity}</TableCell>
// // //                           <TableCell>${item.cost?.toFixed(2) ?? "—"}</TableCell>
// // //                           <TableCell>
// // //                             ${item.price?.toFixed(2) ?? "—"}
// // //                           </TableCell>
// // //                           <TableCell>{item.brand}</TableCell>
// // //                           <TableCell>{item.weight ?? "—"}</TableCell>
// // //                           <TableCell>{item.availability}</TableCell>
// // //                           <TableCell>{item.supplier?.name ?? "—"}</TableCell>
// // //                           <TableCell>{getStatusBadge(item.quantity)}</TableCell>
// // //                           <TableCell>
// // //                             <div className="flex gap-2">
// // //                               <Button variant="outline" size="sm">
// // //                                 Edit
// // //                               </Button>
// // //                               <Button variant="outline" size="sm">
// // //                                 Restock
// // //                               </Button>
// // //                             </div>
// // //                           </TableCell>
// // //                         </TableRow>
// // //                       ))}
// // //                     </TableBody>
// // //                   </Table>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </>
// // //         )}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div className="p-8 space-y-6">
// // //       <div className="flex items-center justify-between">
// // //         <div>
// // //           <h1 className="text-3xl font-bold text-gray-900">
// // //             Products Management
// // //           </h1>
// // //           <p className="text-gray-600 mt-1">
// // //             Manage your inventory by company and track stock levels
// // //           </p>
// // //         </div>
// // //         <div className="flex flex-row gap-4">
// // //           <OffCanvasBtn
// // //             buttonText="Add Product Category"
// // //             formName="Add Product Category"
// // //           >
// // //             {() => <CreateNewSupplier companies={companies} />}
// // //           </OffCanvasBtn>
// // //           <OffCanvasBtn
// // //             buttonText="Add New Supplier"
// // //             formName="Add New Supplier"
// // //           >
// // //             {() => <CreateNewSupplier companies={companies} />}
// // //           </OffCanvasBtn>
// // //           <OffCanvasBtn buttonText="Add New Product" formName="Add New Product">
// // //             {() => (
// // //               <CreateNewProduct
// // //                 companies={companies}
// // //                 suppliers={suppliersByCompany[activeCompanyId ?? ""] || []}
// // //                 companyId={session.user?.company?.id || ""}
// // //               />
// // //             )}
// // //           </OffCanvasBtn>
// // //         </div>
// // //       </div>

// // //       <Tabs
// // //         value={activeCompanyId ?? ""}
// // //         onValueChange={(id) => setActiveCompanyId(id)}
// // //         className="w-full"
// // //       >
// // //         <TabsList className="w-full overflow-x-auto flex gap-2">
// // //           {companies.map((company) => (
// // //             <TabsTrigger key={company.id} value={company.id}>
// // //               {company.name}
// // //             </TabsTrigger>
// // //           ))}
// // //         </TabsList>

// // //         {companies.map((company) => (
// // //           <TabsContent key={company.id} value={company.id}>
// // //             {renderCompanyTabContent(company.id)}
// // //           </TabsContent>
// // //         ))}
// // //       </Tabs>
// // //     </div>
// // //   );
// // // };

// // // Full inline edit and delete support for products
// // "use client";

// // import { useEffect, useState } from "react";
// // import { useSession } from "next-auth/react";
// // import { redirect } from "next/navigation";
// // import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// // import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Badge } from "@/components/ui/badge";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import {
// //   Search,
// //   Filter,
// //   CheckCircle,
// //   AlertTriangle,
// //   Package,
// //   Trash2,
// //   Save,
// //   X,
// //   Pencil,
// // } from "lucide-react";
// // import { OffCanvasBtn } from "../OffCanvasBtn";
// // import { CreateNewProduct } from "../forms/CreateNewProduct";
// // import { CreateNewSupplier } from "../forms/CreateNewSupplier";
// // import { Product, Supplier } from "@/generated/prisma";

// // export const InventoryManagement = ({
// //   companies,
// // }: {
// //   companies: { id: string; name: string }[];
// // }) => {
// //   const { data: session } = useSession();
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [activeCompanyId, setActiveCompanyId] = useState<string | null>(null);
// //   const [companyList, setCompanyList] = useState(companies);
// //   const [productsByCompany, setProductsByCompany] = useState<
// //     Record<string, Product[]>
// //   >({});
// //   const [suppliersByCompany, setSuppliersByCompany] = useState<
// //     Record<string, Supplier[]>
// //   >({});
// //   const [search, setSearch] = useState("");
// //   const [category, setCategory] = useState("all");
// //   const [editingId, setEditingId] = useState<string | null>(null);
// //   const [editedProduct, setEditedProduct] = useState<Partial<Product>>({});

// //   useEffect(() => {
// //     if (!session || !session.user?.ownedCompanies?.length) return;
// //     const owned = session.user.ownedCompanies;
// //     setCompanyList(owned);
// //     setActiveCompanyId(owned[0].id);
// //   }, [session]);

// //   useEffect(() => {
// //     if (!activeCompanyId || productsByCompany[activeCompanyId]) return;

// //     const fetchProducts = async () => {
// //       try {
// //         const res = await fetch(
// //           `/api/admin/company/${activeCompanyId}/product/list`
// //         );
// //         const json = await res.json();
// //         setProductsByCompany((prev) => ({ ...prev, [activeCompanyId]: json }));
// //       } catch (err) {
// //         console.error("Failed to fetch products", err);
// //       }
// //     };

// //     const fetchSuppliers = async () => {
// //       try {
// //         const res = await fetch(
// //           `/api/admin/company/${activeCompanyId}/supplier/list`
// //         );
// //         const json = await res.json();
// //         setSuppliersByCompany((prev) => ({ ...prev, [activeCompanyId]: json }));
// //       } catch (err) {
// //         console.error("Failed to fetch suppliers", err);
// //       }
// //     };

// //     fetchProducts();
// //     fetchSuppliers();
// //     setIsLoading(false);
// //   }, [activeCompanyId]);

// //   if (
// //     !session ||
// //     !["ADMIN", "SUPER_ADMIN", "MANAGER"].includes(session.user.role)
// //   ) {
// //     return redirect("/auth");
// //   }

// //   const getStatusBadge = (qty?: number | null) => {
// //     if (!qty || qty === 0)
// //       return (
// //         <Badge variant="destructive">
// //           <Package className="w-3 h-3 mr-1" />
// //           Out of Stock
// //         </Badge>
// //       );
// //     if (qty < 10)
// //       return (
// //         <Badge className="bg-yellow-100 text-yellow-800">
// //           <AlertTriangle className="w-3 h-3 mr-1" />
// //           Low Stock
// //         </Badge>
// //       );
// //     return (
// //       <Badge className="bg-green-100 text-green-800">
// //         <CheckCircle className="w-3 h-3 mr-1" />
// //         In Stock
// //       </Badge>
// //     );
// //   };

// //   const handleSave = async (id: string) => {
// //     try {
// //       const res = await fetch(`/api/admin/product/${id}/edit`, {
// //         method: "PATCH",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(editedProduct),
// //       });
// //       if (res.ok) {
// //         setProductsByCompany((prev) => ({
// //           ...prev,
// //           [activeCompanyId!]: prev[activeCompanyId!].map((p) =>
// //             p.id === id ? { ...p, ...editedProduct } : p
// //           ),
// //         }));
// //         setEditingId(null);
// //         setEditedProduct({});
// //       }
// //     } catch (err) {
// //       console.error("Failed to save", err);
// //     }
// //   };

// //   const handleDelete = async (id: string) => {
// //     try {
// //       const res = await fetch(`/api/admin/product/${id}/edit`, {
// //         method: "DELETE",
// //       });
// //       if (res.ok) {
// //         setProductsByCompany((prev) => ({
// //           ...prev,
// //           [activeCompanyId!]: prev[activeCompanyId!].filter((p) => p.id !== id),
// //         }));
// //       }
// //     } catch (err) {
// //       console.error("Failed to delete", err);
// //     }
// //   };

// //   const renderCompanyTabContent = (companyId: string) => {
// //     const products = productsByCompany[companyId] || [];
// //     const suppliers = suppliersByCompany[companyId] || [];
// //     const filtered = products.filter((item) => {
// //       const matchesSearch =
// //         item.name?.toLowerCase().includes(search.toLowerCase()) ||
// //         item.sku?.toLowerCase().includes(search.toLowerCase());
// //       const matchesCategory =
// //         category === "all" ||
// //         (item.categories || []).some((cat: string) =>
// //           cat.toLowerCase().includes(category.toLowerCase())
// //         );
// //       return matchesSearch && matchesCategory;
// //     });
// //     const categories = [
// //       "all",
// //       ...Array.from(
// //         new Set(products.flatMap((item: any) => item.categories || []))
// //       ),
// //     ];

// //     return (
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Products</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <Table>
// //             <TableHeader>
// //               <TableRow>
// //                 <TableHead>Name</TableHead>
// //                 <TableHead>SKU</TableHead>
// //                 <TableHead>Qty</TableHead>
// //                 <TableHead>Price</TableHead>
// //                 <TableHead>Brand</TableHead>
// //                 <TableHead>Supplier</TableHead>
// //                 <TableHead>Actions</TableHead>
// //               </TableRow>
// //             </TableHeader>
// //             <TableBody>
// //               {filtered.map((item: any) => (
// //                 <TableRow key={item.id}>
// //                   <TableCell>
// //                     {editingId === item.id ? (
// //                       <Input
// //                         value={editedProduct.name ?? ""}
// //                         onChange={(e) =>
// //                           setEditedProduct((p) => ({
// //                             ...p,
// //                             name: e.target.value,
// //                           }))
// //                         }
// //                       />
// //                     ) : (
// //                       item.name
// //                     )}
// //                   </TableCell>
// //                   <TableCell>
// //                     {editingId === item.id ? (
// //                       <Input
// //                         value={editedProduct.sku ?? ""}
// //                         onChange={(e) =>
// //                           setEditedProduct((p) => ({
// //                             ...p,
// //                             sku: e.target.value,
// //                           }))
// //                         }
// //                       />
// //                     ) : (
// //                       item.sku
// //                     )}
// //                   </TableCell>
// //                   <TableCell>
// //                     {editingId === item.id ? (
// //                       <Input
// //                         type="number"
// //                         value={editedProduct.quantity ?? ""}
// //                         onChange={(e) =>
// //                           setEditedProduct((p) => ({
// //                             ...p,
// //                             quantity: Number(e.target.value),
// //                           }))
// //                         }
// //                       />
// //                     ) : (
// //                       item.quantity
// //                     )}
// //                   </TableCell>
// //                   <TableCell>
// //                     {editingId === item.id ? (
// //                       <Input
// //                         type="number"
// //                         value={editedProduct.price ?? ""}
// //                         onChange={(e) =>
// //                           setEditedProduct((p) => ({
// //                             ...p,
// //                             price: Number(e.target.value),
// //                           }))
// //                         }
// //                       />
// //                     ) : (
// //                       `$${item.price?.toFixed(2) ?? "—"}`
// //                     )}
// //                   </TableCell>
// //                   <TableCell>{item.brand}</TableCell>
// //                   <TableCell>{item.supplier?.name ?? "—"}</TableCell>
// //                   <TableCell>
// //                     {editingId === item.id ? (
// //                       <div className="flex gap-2">
// //                         <Button size="sm" onClick={() => handleSave(item.id)}>
// //                           <Save className="w-4 h-4" />
// //                         </Button>
// //                         <Button
// //                           variant="ghost"
// //                           size="sm"
// //                           onClick={() => setEditingId(null)}
// //                         >
// //                           <X className="w-4 h-4" />
// //                         </Button>
// //                       </div>
// //                     ) : (
// //                       <div className="flex gap-2">
// //                         <Button
// //                           size="sm"
// //                           onClick={() => {
// //                             setEditingId(item.id);
// //                             setEditedProduct(item);
// //                           }}
// //                         >
// //                           <Pencil className="w-4 h-4" />
// //                         </Button>
// //                         <Button
// //                           variant="destructive"
// //                           size="sm"
// //                           onClick={() => handleDelete(item.id)}
// //                         >
// //                           <Trash2 className="w-4 h-4" />
// //                         </Button>
// //                       </div>
// //                     )}
// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </CardContent>
// //       </Card>
// //     );
// //   };

// //   return (
// //     <div className="p-8">
// //       <div className="flex justify-between mb-6">
// //         <h1 className="text-3xl font-bold">Product Inventory</h1>
// //         <OffCanvasBtn buttonText="Add Product" formName="Add Product">
// //           {() => (
// //             <CreateNewProduct
// //               companies={companies}
// //               suppliers={suppliersByCompany[activeCompanyId ?? ""] || []}
// //               companyId={activeCompanyId || ""}
// //             />
// //           )}
// //         </OffCanvasBtn>
// //       </div>
// //       <Tabs value={activeCompanyId ?? ""} onValueChange={setSelectedCompanyId}>
// //         <TabsList>
// //           {companies.map((company) => (
// //             <TabsTrigger key={company.id} value={company.id}>
// //               {company.name}
// //             </TabsTrigger>
// //           ))}
// //         </TabsList>
// //         {companies.map((company) => (
// //           <TabsContent key={company.id} value={company.id}>
// //             {renderCompanyTabContent(company.id)}
// //           </TabsContent>
// //         ))}
// //       </Tabs>
// //     </div>
// //   );
// // };

// // Full inline edit and delete support for products
// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Search,
//   Filter,
//   CheckCircle,
//   AlertTriangle,
//   Package,
//   Trash2,
//   Save,
//   X,
//   Pencil,
// } from "lucide-react";
// import { OffCanvasBtn } from "../OffCanvasBtn";
// import { CreateNewProduct } from "../forms/CreateNewProduct";
// import { CreateNewSupplier } from "../forms/CreateNewSupplier";
// import { Product, Supplier } from "@/generated/prisma";

// export const InventoryManagement = ({
//   companies,
// }: {
//   companies: { id: string; name: string }[];
// }) => {
//   const { data: session } = useSession();
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeCompanyId, setActiveCompanyId] = useState<string | null>(null);
//   const [companyList, setCompanyList] = useState(companies);
//   const [productsByCompany, setProductsByCompany] = useState<
//     Record<string, Product[]>
//   >({});
//   const [suppliersByCompany, setSuppliersByCompany] = useState<
//     Record<string, Supplier[]>
//   >({});
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editedProduct, setEditedProduct] = useState<Partial<Product>>({});

//   useEffect(() => {
//     if (!session || !session.user?.ownedCompanies?.length) return;
//     const owned = session.user.ownedCompanies;
//     setCompanyList(owned);
//     setActiveCompanyId(owned[0].id);
//   }, [session]);

//   useEffect(() => {
//     if (!activeCompanyId || productsByCompany[activeCompanyId]) return;

//     const fetchProducts = async () => {
//       try {
//         const res = await fetch(
//           `/api/admin/company/${activeCompanyId}/product/list`
//         );
//         const json = await res.json();
//         setProductsByCompany((prev) => ({ ...prev, [activeCompanyId]: json }));
//       } catch (err) {
//         console.error("Failed to fetch products", err);
//       }
//     };

//     const fetchSuppliers = async () => {
//       try {
//         const res = await fetch(
//           `/api/admin/company/${activeCompanyId}/supplier/list`
//         );
//         const json = await res.json();
//         setSuppliersByCompany((prev) => ({ ...prev, [activeCompanyId]: json }));
//       } catch (err) {
//         console.error("Failed to fetch suppliers", err);
//       }
//     };

//     fetchProducts();
//     fetchSuppliers();
//     setIsLoading(false);
//   }, [activeCompanyId]);

//   if (
//     !session ||
//     !["ADMIN", "SUPER_ADMIN", "MANAGER"].includes(session.user.role)
//   ) {
//     return redirect("/auth");
//   }

//   const getStatusBadge = (qty?: number | null) => {
//     if (!qty || qty === 0)
//       return (
//         <Badge variant="destructive">
//           <Package className="w-3 h-3 mr-1" />
//           Out of Stock
//         </Badge>
//       );
//     if (qty < 10)
//       return (
//         <Badge className="bg-yellow-100 text-yellow-800">
//           <AlertTriangle className="w-3 h-3 mr-1" />
//           Low Stock
//         </Badge>
//       );
//     return (
//       <Badge className="bg-green-100 text-green-800">
//         <CheckCircle className="w-3 h-3 mr-1" />
//         In Stock
//       </Badge>
//     );
//   };

//   const handleSave = async (id: string) => {
//     try {
//       const res = await fetch(`/api/admin/product/${id}/edit`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(editedProduct),
//       });
//       if (res.ok) {
//         setProductsByCompany((prev) => ({
//           ...prev,
//           [activeCompanyId!]: prev[activeCompanyId!].map((p) =>
//             p.id === id ? { ...p, ...editedProduct } : p
//           ),
//         }));
//         setEditingId(null);
//         setEditedProduct({});
//       }
//     } catch (err) {
//       console.error("Failed to save", err);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       const res = await fetch(`/api/admin/product/${id}/edit`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         setProductsByCompany((prev) => ({
//           ...prev,
//           [activeCompanyId!]: prev[activeCompanyId!].filter((p) => p.id !== id),
//         }));
//       }
//     } catch (err) {
//       console.error("Failed to delete", err);
//     }
//   };

//   const renderCompanyTabContent = (companyId: string) => {
//     const products = productsByCompany[companyId] || [];
//     const suppliers = suppliersByCompany[companyId] || [];
//     const filtered = products.filter((item) => {
//       const matchesSearch =
//         item.name?.toLowerCase().includes(search.toLowerCase()) ||
//         item.sku?.toLowerCase().includes(search.toLowerCase());
//       const matchesCategory =
//         category === "all" ||
//         (item.categories || []).some((cat: string) =>
//           cat.toLowerCase().includes(category.toLowerCase())
//         );
//       return matchesSearch && matchesCategory;
//     });
//     const categories = [
//       "all",
//       ...Array.from(
//         new Set(products.flatMap((item: any) => item.categories || []))
//       ),
//     ];

//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>Products</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex gap-4 mb-4">
//             <Input
//               placeholder="Search by name or SKU..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="max-w-sm"
//             />
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-md"
//             >
//               {categories.map((c) => (
//                 <option key={c} value={c}>
//                   {c === "all" ? "All Categories" : c}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Description</TableHead>
//                 <TableHead>SKU</TableHead>
//                 <TableHead>UPC</TableHead>
//                 <TableHead>Serial</TableHead>
//                 <TableHead>Model</TableHead>
//                 <TableHead>MAC</TableHead>
//                 <TableHead>Unit</TableHead>
//                 <TableHead>Qty</TableHead>
//                 <TableHead>Cost</TableHead>
//                 <TableHead>Price</TableHead>
//                 <TableHead>Brand</TableHead>
//                 <TableHead>Weight</TableHead>
//                 <TableHead>Availability</TableHead>
//                 <TableHead>Supplier</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filtered.map((item: any) => (
//                 <TableRow key={item.id}>
//                   <TableCell>{item.name}</TableCell>
//                   <TableCell>{item.description}</TableCell>
//                   <TableCell>{item.sku}</TableCell>
//                   <TableCell>{item.upc}</TableCell>
//                   <TableCell>{item.serial}</TableCell>
//                   <TableCell>{item.model}</TableCell>
//                   <TableCell>{item.macAddress}</TableCell>
//                   <TableCell>{item.unit}</TableCell>
//                   <TableCell>{item.quantity}</TableCell>
//                   <TableCell>${item.cost?.toFixed(2) ?? "—"}</TableCell>
//                   <TableCell>${item.price?.toFixed(2) ?? "—"}</TableCell>
//                   <TableCell>{item.brand}</TableCell>
//                   <TableCell>{item.weight ?? "—"}</TableCell>
//                   <TableCell>{item.availability}</TableCell>
//                   <TableCell>{item.supplier?.name ?? "—"}</TableCell>
//                   <TableCell>{getStatusBadge(item.quantity)}</TableCell>
//                   <TableCell>
//                     <div className="flex gap-2">
//                       <Button
//                         size="sm"
//                         onClick={() => {
//                           setEditingId(item.id);
//                           setEditedProduct(item);
//                         }}
//                       >
//                         <Pencil className="w-4 h-4" />
//                       </Button>
//                       <Button
//                         variant="destructive"
//                         size="sm"
//                         onClick={() => handleDelete(item.id)}
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     );
//   };

//   return (
//     <div className="p-8">
//       <div className="flex justify-between mb-6">
//         <h1 className="text-3xl font-bold">Product Inventory</h1>
//         <div className="flex gap-4">
//           <OffCanvasBtn
//             buttonText="Add Product Category"
//             formName="Add Product Category"
//           >
//             {() => <CreateNewSupplier companies={companies} />}
//           </OffCanvasBtn>
//           <OffCanvasBtn buttonText="Add Supplier" formName="Add Supplier">
//             {() => <CreateNewSupplier companies={companies} />}
//           </OffCanvasBtn>
//           <OffCanvasBtn buttonText="Add Product" formName="Add Product">
//             {() => (
//               <CreateNewProduct
//                 companies={companies}
//                 suppliers={suppliersByCompany[activeCompanyId ?? ""] || []}
//                 companyId={activeCompanyId || ""}
//               />
//             )}
//           </OffCanvasBtn>
//         </div>
//       </div>
//       <Tabs value={activeCompanyId ?? ""} onValueChange={setActiveCompanyId}>
//         <TabsList>
//           {companies.map((company) => (
//             <TabsTrigger key={company.id} value={company.id}>
//               {company.name}
//             </TabsTrigger>
//           ))}
//         </TabsList>
//         {companies.map((company) => (
//           <TabsContent key={company.id} value={company.id}>
//             {renderCompanyTabContent(company.id)}
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// Full inline edit and delete support for products
"use client";

import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
  CheckCircle,
  AlertTriangle,
  Package,
  Trash2,
  Save,
  X,
  Pencil,
} from "lucide-react";
import { OffCanvasBtn } from "../OffCanvasBtn";
import { CreateNewProduct } from "../forms/CreateNewProduct";
import { CreateNewSupplier } from "../forms/CreateNewSupplier";
import { Product, Supplier } from "@/generated/prisma";
import { CreateProductCategory } from "../forms/CreateProductCategory";

type ProductWithRelations = Product & {
  supplier?: { name: string } | null;
  categories?: string[];
};

export const InventoryManagement = ({
  companies,
}: {
  companies: { id: string; name: string }[];
}) => {
  const { data: session } = useSession();
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(
    null
  );
  const [productsByCompany, setProductsByCompany] = useState<
    Record<string, ProductWithRelations[]>
  >({});
  const [suppliersByCompany, setSuppliersByCompany] = useState<
    Record<string, Supplier[]>
  >({});
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedProduct, setEditedProduct] = useState<Partial<Product>>({});
  const fetchedCompanyIds = useRef<Set<string>>(new Set());

  const activeCompanyId =
    selectedCompanyId ?? session?.user?.ownedCompanies?.[0]?.id ?? null;

  useEffect(() => {
    if (!activeCompanyId || fetchedCompanyIds.current.has(activeCompanyId))
      return;
    fetchedCompanyIds.current.add(activeCompanyId);

    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `/api/admin/company/${activeCompanyId}/product/list`
        );
        const json = await res.json();
        setProductsByCompany((prev) => ({ ...prev, [activeCompanyId]: json }));
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    const fetchSuppliers = async () => {
      try {
        const res = await fetch(
          `/api/admin/company/${activeCompanyId}/supplier/list`
        );
        const json = await res.json();
        setSuppliersByCompany((prev) => ({ ...prev, [activeCompanyId]: json }));
      } catch (err) {
        console.error("Failed to fetch suppliers", err);
      }
    };

    fetchProducts();
    fetchSuppliers();
  }, [activeCompanyId]);

  if (
    !session ||
    !["ADMIN", "SUPER_ADMIN", "MANAGER"].includes(session.user.role)
  ) {
    return redirect("/auth");
  }

  const getStatusBadge = (qty?: number | null) => {
    if (!qty || qty === 0)
      return (
        <Badge variant="destructive">
          <Package className="w-3 h-3 mr-1" />
          Out of Stock
        </Badge>
      );
    if (qty < 10)
      return (
        <Badge className="bg-yellow-100 text-yellow-800">
          <AlertTriangle className="w-3 h-3 mr-1" />
          Low Stock
        </Badge>
      );
    return (
      <Badge className="bg-green-100 text-green-800">
        <CheckCircle className="w-3 h-3 mr-1" />
        In Stock
      </Badge>
    );
  };

  const handleSave = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/product/${id}/edit`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedProduct),
      });
      if (res.ok) {
        setProductsByCompany((prev) => ({
          ...prev,
          [activeCompanyId!]: prev[activeCompanyId!].map((p) =>
            p.id === id ? { ...p, ...editedProduct } : p
          ),
        }));
        setEditingId(null);
        setEditedProduct({});
      }
    } catch (err) {
      console.error("Failed to save", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/product/${id}/edit`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProductsByCompany((prev) => ({
          ...prev,
          [activeCompanyId!]: prev[activeCompanyId!].filter((p) => p.id !== id),
        }));
      }
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  const renderCell = (item: ProductWithRelations, field: keyof Product) => {
    return editingId === item.id ? (
      <Input
        value={editedProduct[field]?.toString() ?? ""}
        onChange={(e) =>
          setEditedProduct((prev) => ({ ...prev, [field]: e.target.value }))
        }
      />
    ) : (
      <>{String(item[field] ?? "")}</>
    );
  };

  const renderCompanyTabContent = (companyId: string) => {
    const products = productsByCompany[companyId] || [];
    const filtered = products.filter((item) => {
      const matchesSearch =
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.sku?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "all" ||
        (Array.isArray(item.categories) ? item.categories : []).some((cat) =>
          cat.toLowerCase().includes(category.toLowerCase())
        );
      return matchesSearch && matchesCategory;
    });
    const categories = [
      "all",
      ...Array.from(
        new Set(products.flatMap((item) => item.categories ?? []))
      ),
    ];

    return (
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Input
              placeholder="Search by name or SKU..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All Categories" : c}
                </option>
              ))}
            </select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>UPC</TableHead>
                <TableHead>Serial</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>MAC</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{renderCell(item, "name")}</TableCell>
                  <TableCell>{renderCell(item, "description")}</TableCell>
                  <TableCell>{renderCell(item, "sku")}</TableCell>
                  <TableCell>{renderCell(item, "upc")}</TableCell>
                  <TableCell>{renderCell(item, "serial")}</TableCell>
                  <TableCell>{renderCell(item, "model")}</TableCell>
                  <TableCell>{renderCell(item, "macAddress")}</TableCell>
                  <TableCell>{renderCell(item, "unit")}</TableCell>
                  <TableCell>{renderCell(item, "quantity")}</TableCell>
                  <TableCell>{renderCell(item, "cost")}</TableCell>
                  <TableCell>{renderCell(item, "price")}</TableCell>
                  <TableCell>{renderCell(item, "brand")}</TableCell>
                  <TableCell>{renderCell(item, "weight")}</TableCell>
                  <TableCell>{renderCell(item, "availability")}</TableCell>
                  <TableCell>{item.supplier?.name ?? "—"}</TableCell>
                  <TableCell>{getStatusBadge(item.quantity)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {editingId === item.id ? (
                        <>
                          <Button size="sm" onClick={() => handleSave(item.id)}>
                            <Save className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingId(null)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => {
                            setEditingId(item.id);
                            setEditedProduct(item);
                          }}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                      >
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
    );
  };

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Product Inventory</h1>
        <div className="flex gap-4">
          <OffCanvasBtn
            buttonText="Add Product Category"
            formName="Add Product Category"
          >
            {() => (
              <CreateProductCategory
                companies={companies}
                products={(productsByCompany[activeCompanyId ?? ""] || []).map(
                  (p) => ({
                    id: p.id,
                    name: p.name,
                  })
                )}
              />
            )}
          </OffCanvasBtn>
          <OffCanvasBtn buttonText="Add Supplier" formName="Add Supplier">
            {() => <CreateNewSupplier companies={companies} />}
          </OffCanvasBtn>
          <OffCanvasBtn buttonText="Add Product" formName="Add Product">
            {() => (
              <CreateNewProduct
                companies={companies}
                suppliers={suppliersByCompany[activeCompanyId ?? ""] || []}
                companyId={activeCompanyId || ""}
              />
            )}
          </OffCanvasBtn>
        </div>
      </div>
      <Tabs value={activeCompanyId ?? ""} onValueChange={setSelectedCompanyId}>
        <TabsList>
          {companies.map((company) => (
            <TabsTrigger key={company.id} value={company.id}>
              {company.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {companies.map((company) => (
          <TabsContent key={company.id} value={company.id}>
            {renderCompanyTabContent(company.id)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
