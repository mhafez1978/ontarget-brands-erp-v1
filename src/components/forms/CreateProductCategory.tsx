// "use client";

// import React, { useState } from "react";
// import { showToast } from "@/hooks/toast";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "../ui/button";
// import { ProductCategory } from "@/generated/prisma";

// interface CreateProductCategoryProps {
//   companies: { id: string; name: string }[];
//   products: { id: string; name: string }[];
// }

// export const CreateProductCategory = ({
//   companies,
//   products,
// }: CreateProductCategoryProps) => {
//   const [formData, setFormData] = useState({
//     productId: "",
//     productCategory: "" as ProductCategory | "",
//     companyId: companies[0]?.id || "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const { productId, productCategory, companyId } = formData;

//     if (!productId || !productCategory || !companyId) {
//       showToast("error", "Product, Category, and Company are required.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `/api/admin/company/${companyId}/product/category/add`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!response.ok) throw new Error("Failed to create product category");

//       showToast("success", "Product category assigned successfully.");
//       setFormData({
//         productId: "",
//         productCategory: "",
//         companyId,
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       showToast("error", "Failed to create product category.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//       <div>
//         <Label htmlFor="product">Product</Label>
//         <Select
//           value={formData.productId}
//           onValueChange={(value) =>
//             setFormData((prev) => ({ ...prev, productId: value }))
//           }
//         >
//           <SelectTrigger id="product">
//             <SelectValue placeholder="Select Product" />
//           </SelectTrigger>
//           <SelectContent>
//             {products.map((product) => (
//               <SelectItem key={product.id} value={product.id}>
//                 {product.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <div>
//         <Label htmlFor="productCategory">Category</Label>
//         <Select
//           value={formData.productCategory}
//           onValueChange={(value) =>
//             setFormData((prev) => ({
//               ...prev,
//               productCategory: value as ProductCategory,
//             }))
//           }
//         >
//           <SelectTrigger id="productCategory">
//             <SelectValue placeholder="Select Category" />
//           </SelectTrigger>
//           <SelectContent>
//             {Object.values(ProductCategory).map((cat) => (
//               <SelectItem key={cat} value={cat}>
//                 {cat.replace(/_/g, " ")}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <div>
//         <Label htmlFor="company">Company</Label>
//         <Select
//           value={formData.companyId}
//           onValueChange={(value) =>
//             setFormData((prev) => ({ ...prev, companyId: value }))
//           }
//         >
//           <SelectTrigger id="company">
//             <SelectValue placeholder="Select Company" />
//           </SelectTrigger>
//           <SelectContent>
//             {companies.map((company) => (
//               <SelectItem key={company.id} value={company.id}>
//                 {company.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <Button type="submit">Assign Category</Button>
//     </form>
//   );
// };

"use client";

import React, { useState } from "react";
import { showToast } from "@/hooks/toast";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { ProductCategory } from "@/generated/prisma";

interface CreateProductCategoryProps {
  companies: { id: string; name: string }[];
  products: { id: string; name: string }[];
}

export const CreateProductCategory = ({
  companies,
  products,
}: CreateProductCategoryProps) => {
  const [formData, setFormData] = useState({
    productId: "",
    productCategory: "" as ProductCategory | "",
    companyId: companies[0]?.id || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { productId, productCategory, companyId } = formData;

    if (!productId || !productCategory || !companyId) {
      showToast("error", "Product, Category, and Company are required.");
      return;
    }

    try {
      const response = await fetch(
        `/api/admin/company/${companyId}/product/category/add`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, productCategory, companyId }),
        }
      );

      if (!response.ok) throw new Error("Failed to assign category");

      showToast("success", "Product category assigned successfully.");
      setFormData((prev) => ({
        ...prev,
        productId: "",
        productCategory: "",
      }));
    } catch (error) {
      console.error("Error assigning product category:", error);
      showToast("error", "Error assigning product category.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="product">Product</Label>
        <Select
          value={formData.productId}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, productId: value }))
          }
        >
          <SelectTrigger id="product">
            <SelectValue placeholder="Select Product" />
          </SelectTrigger>
          <SelectContent>
            {products.length > 0 ? (
              products.map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name}
                </SelectItem>
              ))
            ) : (
              <div className="p-2 text-muted">No products available</div>
            )}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="productCategory">Category</Label>
        <Select
          value={formData.productCategory}
          onValueChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              productCategory: value as ProductCategory,
            }))
          }
        >
          <SelectTrigger id="productCategory">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(ProductCategory).map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat.replace(/_/g, " ")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Select
          value={formData.companyId}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, companyId: value }))
          }
        >
          <SelectTrigger id="company">
            <SelectValue placeholder="Select Company" />
          </SelectTrigger>
          <SelectContent>
            {companies.map((company) => (
              <SelectItem key={company.id} value={company.id}>
                {company.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Assign Category</Button>
    </form>
  );
};
