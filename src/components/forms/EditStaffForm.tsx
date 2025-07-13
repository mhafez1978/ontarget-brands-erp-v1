// import React from "react";
// import { Input } from "../ui/input";
// import { User } from "@/generated/prisma";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "../ui/select";
// import { Label } from "../ui/label";
// import { Button } from "../ui/button";

// export const EditStaffForm = ({ user }: { user: User }) => {
//   const [loading, setLoading] = React.useState(false);
//   const [formData, setFormData] = React.useState({
//     name: user.name || "",
//     email: user.email || "",
//     phone: user.phone || "",
//     image: user.image || "",
//     birthDate: user.birthDate
//       ? typeof user.birthDate === "string"
//         ? user.birthDate
//         : user.birthDate.toISOString().split("T")[0]
//       : "",
//     addressLine1: user.addressLine1 || "",
//     addressLine2: user.addressLine2 || "",
//     city: user.city || "",
//     state: user.state || "",
//     zipCode: user.zipCode || "",
//     country: user.country || "",
//     role: user.role || "STAFF",
//     isActive: user.isActive || false,
//     password: "",
//     repeatPassword: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted with data:", formData);
//   };

//   return (
//     <div className="absolute top-0 right-0 w-[30vw] h-full bg-white shadow-lg p-4 z-50">
//       <div className="w-full bg-gray-50 px-4 py-8 rounded-lg shadow-md mt-10">
//         <form className="w-full flex flex-col justify-center gap-4 ">
//           <div className="w-full flex flex-row justify-center gap-2">
//             <label htmlFor="userId" className="w-[20%]">
//               User ID:
//             </label>
//             <input
//               disabled={true}
//               id="userId"
//               className="w-full"
//               type="text"
//               value={user.id}
//               readOnly
//             />
//           </div>
//           <div className="w-full flex flex-row justify-center gap-2">
//             <label htmlFor="name" className="w-[20%]">
//               Name:
//             </label>
//             <Input
//               placeholder={user.name ?? "Name"}
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full flex flex-row justify-center gap-2">
//             <label htmlFor="email" className="w-[20%]">
//               Email:
//             </label>
//             <Input
//               placeholder={user.email ?? "Email"}
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full flex flex-row justify-center gap-2">
//             <label htmlFor="phone" className="w-[20%]">
//               Phone:
//             </label>
//             <Input
//               placeholder={user.phone ?? "Phone"}
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//           {user.image && (
//             <div className="w-full flex flex-row justify-center gap-2">
//               <label htmlFor="avatar" className="w-[20%]">
//                 Avatar:
//               </label>
//               <Input
//                 placeholder={user.image ?? "Image URL"}
//                 name="image"
//                 value={formData.image}
//                 onChange={handleChange}
//               />
//             </div>
//           )}
//           {!user.image && (
//             <div className="w-full flex flex-row justify-center gap-2">
//               <label htmlFor="avatar" className="w-[20%]">
//                 Avatar:
//               </label>
//               <Input
//                 placeholder={"Image URL"}
//                 name="image"
//                 value={formData.image}
//                 onChange={handleChange}
//               />
//             </div>
//           )}

//           <div className="w-full flex flex-row justify-center gap-2">
//             <Label htmlFor="birthDate" className="w-[20%]">
//               Birth Date
//             </Label>
//             <Input
//               type="date"
//               placeholder={
//                 user.birthDate
//                   ? typeof user.birthDate === "string"
//                     ? user.birthDate
//                     : user.birthDate.toISOString().split("T")[0]
//                   : "<Date>"
//               }
//               name="birthDate"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full flex flex-row justify-center gap-2">
//             <Label htmlFor="addressLine1" className="w-[20%]">
//               Street Address
//             </Label>
//             <Input
//               placeholder={user.addressLine1 ?? "Address Line 1"}
//               name="addressLine1"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full flex flex-row justify-center gap-2">
//             <Label htmlFor="AddressLine2" className="w-[20%]">
//               Apt/Suite/Unit
//             </Label>
//             <Input
//               placeholder={user.addressLine2 ?? "Address Line 2"}
//               name="addressLine2"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full flex flex-row justify-center gap-2">
//             <Label htmlFor="city" className="w-[20%]">
//               City
//             </Label>
//             <Input
//               placeholder={user.city ?? "City"}
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full flex flex-row justify-center gap-2">
//             <Label htmlFor="state" className="w-[20%]">
//               State
//             </Label>
//             <Input
//               placeholder={user.state ?? "State"}
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full flex flex-row justify-center gap-2">
//             <Label htmlFor="AddressLine2" className="w-[20%]">
//               Zipcode
//             </Label>
//             <Input
//               placeholder={user.zipCode ?? "Zip Code"}
//               name="zipCode"
//               value={formData.zipCode}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full flex flex-row justify-center gap-2">
//             <Label htmlFor="AddressLine2" className="w-[20%]">
//               Country
//             </Label>
//             <Input
//               placeholder={user.country ?? "Country"}
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="space-y-2 flex flex-row justify-center gap-2">
//             <Label htmlFor="role" className="w-[20%]">
//               Role
//             </Label>
//             <Select
//               defaultValue={formData.role}
//               name="role"
//               onValueChange={(value) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   role: value as User["role"],
//                 }))
//               }
//             >
//               <SelectTrigger id="role" className="w-full">
//                 <SelectValue placeholder="Select Role" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="ADMIN">Admin</SelectItem>
//                 <SelectItem value="MANAGER">Manager</SelectItem>
//                 <SelectItem value="STAFF">Staff</SelectItem>
//                 <SelectItem value="GUEST">Guest</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="space-y-2 flex flex-row justify-center gap-2">
//             <Label htmlFor="isActive" className="w-[20%]">
//               Role
//             </Label>
//             <Select
//               defaultValue={formData.isActive ? "true" : "false"}
//               name="isActive"
//               onValueChange={(value) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   isActive: value === "true",
//                 }))
//               }
//             >
//               <SelectTrigger id="status" className="w-full">
//                 <SelectValue placeholder="Account Status" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="true">Enabled</SelectItem>
//                 <SelectItem value="false">Disabled</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2 flex flex-row justify-center gap-2">
//             <Label htmlFor="password" className="w-[20%]">
//               Password
//             </Label>
//             <Input
//               id="password"
//               type="password"
//               placeholder={"New Password"}
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="space-y-2 flex flex-row justify-center gap-2">
//             <Label htmlFor="repeatPassword" className="w-[20%]">
//               Confirmation
//             </Label>
//             <Input
//               id="repeatPassword"
//               type="password"
//               placeholder="Repeat Password"
//               value={formData.repeatPassword}
//               onChange={handleChange}
//             />
//           </div>

//           <Button variant={"default"} type="submit">
//             Update ...
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { User } from "@/generated/prisma";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export const EditStaffForm = ({ user }: { user: User }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    image: user.image || "",
    birthDate: user.birthDate
      ? typeof user.birthDate === "string"
        ? user.birthDate
        : user.birthDate.toISOString().split("T")[0]
      : "",
    addressLine1: user.addressLine1 || "",
    addressLine2: user.addressLine2 || "",
    city: user.city || "",
    state: user.state || "",
    zipCode: user.zipCode || "",
    country: user.country || "",
    role: user.role || "STAFF",
    isActive: user.isActive ?? false,
    password: "",
    repeatPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Form submitted with data:", JSON.stringify(formData, null, 2));
    // TODO: Submit to backend
  };

  return (
    <div className="absolute top-0 right-0 w-[30vw] h-full bg-white shadow-lg p-4 z-50">
      <div className="w-full bg-gray-50 px-4 py-8 rounded-lg shadow-md mt-10">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* User ID (read-only) */}
          <div className="flex flex-row gap-2">
            <Label htmlFor="userId" className="w-[20%]">
              User ID:
            </Label>
            <Input disabled id="userId" value={user.id} readOnly />
          </div>

          {/* Basic Fields */}
          {[
            { name: "name", label: "Name" },
            { name: "email", label: "Email" },
            { name: "phone", label: "Phone" },
            { name: "image", label: "Avatar", placeholder: "Image URL" },
            { name: "birthDate", label: "Birth Date", type: "date" },
            { name: "addressLine1", label: "Street Address" },
            { name: "addressLine2", label: "Apt/Suite/Unit" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
            { name: "zipCode", label: "Zipcode" },
            { name: "country", label: "Country" },
          ].map(({ name, label, type = "text", placeholder }) => (
            <div key={name} className="flex flex-row gap-2">
              <Label htmlFor={name} className="w-[20%]">
                {label}
              </Label>
              <Input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder ?? label}
                value={
                  typeof formData[name as keyof typeof formData] === "boolean"
                    ? formData[name as keyof typeof formData]
                      ? "true"
                      : "false"
                    : (formData[name as keyof typeof formData] as string)
                }
                onChange={handleChange}
              />
            </div>
          ))}

          {/* Role Select */}
          <div className="flex flex-row gap-2">
            <Label htmlFor="role" className="w-[20%]">
              Role
            </Label>
            <Select
              defaultValue={formData.role}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  role: value as User["role"],
                }))
              }
            >
              <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ADMIN">Admin</SelectItem>
                <SelectItem value="MANAGER">Manager</SelectItem>
                <SelectItem value="STAFF">Staff</SelectItem>
                <SelectItem value="GUEST">Guest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Status */}
          <div className="flex flex-row gap-2">
            <Label htmlFor="isActive" className="w-[20%]">
              Status
            </Label>
            <Select
              defaultValue={formData.isActive ? "true" : "false"}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  isActive: value === "true",
                }))
              }
            >
              <SelectTrigger id="isActive" className="w-full">
                <SelectValue placeholder="Account Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Enabled</SelectItem>
                <SelectItem value="false">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Password Fields */}
          {[
            {
              name: "password",
              label: "Password",
              type: "password",
              placeholder: "New Password",
            },
            {
              name: "repeatPassword",
              label: "Confirmation",
              type: "password",
              placeholder: "Repeat Password",
            },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name} className="flex flex-row gap-2">
              <Label htmlFor={name} className="w-[20%]">
                {label}
              </Label>
              <Input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={
                  typeof formData[name as keyof typeof formData] === "boolean"
                    ? String(formData[name as keyof typeof formData])
                    : (formData[name as keyof typeof formData] as string)
                }
                onChange={handleChange}
              />
            </div>
          ))}

          <Button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </Button>
        </form>
      </div>
    </div>
  );
};
