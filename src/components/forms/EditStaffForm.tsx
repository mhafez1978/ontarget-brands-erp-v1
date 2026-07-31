// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import { Input } from "../ui/input";
// // // import { User } from "@/generated/prisma";
// // // import { allCountries } from "country-region-data";
// // // import type { CountryData } from "country-region-data";
// // // import {
// // //   Select,
// // //   SelectTrigger,
// // //   SelectValue,
// // //   SelectContent,
// // //   SelectItem,
// // // } from "../ui/select";
// // // import { Label } from "../ui/label";
// // // import { Button } from "../ui/button";
// // // import { showToast } from "@/hooks/toast";
// // // import { useSession } from "next-auth/react";
// // // import { CircleX, SidebarClose } from "lucide-react";

// // // const countryOptions = (allCountries as CountryData[]).map(
// // //   ([label, value, regions]) => ({
// // //     label,
// // //     value,
// // //     regions: regions.map(([regionName]) => ({ name: regionName })),
// // //   })
// // // );

// // // export const EditStaffForm = ({ user }: { user: User }) => {
// // //   const { data: session, update } = useSession();
// // //   const [loading, setLoading] = useState(false);
// // //   const [selectedCountry, setSelectedCountry] = useState("");
// // //   const [selectedState, setSelectedState] = useState("");
// // //   const [states, setStates] = useState<{ name: string }[]>([]);

// // //   const [formData, setFormData] = useState({
// // //     name: user.name || "",
// // //     email: user.email || "",
// // //     phone: user.phone || "",
// // //     image: user.image || "",
// // //     birthDate: user.birthDate ? new Date(user.birthDate) : null,
// // //     addressLine1: user.addressLine1 || "",
// // //     addressLine2: user.addressLine2 || "",
// // //     city: user.city || "",
// // //     state: user.state || "",
// // //     zipCode: user.zipCode || "",
// // //     country: user.country || "",
// // //     role: (user.role as User["role"]) || "GUEST",
// // //     isActive: user.isActive ?? false,
// // //     password: "",
// // //     repeatPassword: "",
// // //   });

// // //   // const handleChange = (
// // //   //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // //   // ) => {
// // //   //   const { name, value } = e.target;
// // //   //   setFormData((prev) => ({ ...prev, [name]: value }));
// // //   // };
// // //   const handleChange = (
// // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // //   ) => {
// // //     const { name, value } = e.target;

// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: name === "birthDate" ? value : value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// // //     e.preventDefault();
// // //     console.log("Submitting form with data:", formData);

// // //     if (formData.password && formData.password !== formData.repeatPassword) {
// // //       alert("Passwords do not match.");
// // //       return;
// // //     }

// // //     console.log("Form submitted with data:", JSON.stringify(formData, null, 2));
// // //     setLoading(true);

// // //     const res = await fetch(`/api/admin/${user.id}/update`, {
// // //       method: "PATCH",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //       body: JSON.stringify(formData),
// // //     });

// // //     if (!res.ok) {
// // //       alert("Failed to update user");
// // //       setLoading(false);
// // //       showToast("error", "Failed to update user");
// // //       return;
// // //     }

// // //     const updatedUser = await res.json();

// // //     setFormData({
// // //       name: updatedUser.name || "",
// // //       email: updatedUser.email || "",
// // //       phone: updatedUser.phone || "",
// // //       image: updatedUser.image || "",
// // //       birthDate: updatedUser.birthDate ? new Date(updatedUser.birthDate) : null,
// // //       addressLine1: updatedUser.addressLine1 || "",
// // //       addressLine2: updatedUser.addressLine2 || "",
// // //       city: updatedUser.city || "",
// // //       state: updatedUser.state || "",
// // //       zipCode: updatedUser.zipCode || "",
// // //       country: updatedUser.country || "",
// // //       role: updatedUser.role || "STAFF",
// // //       isActive: updatedUser.isActive ?? false,
// // //       password: "",
// // //       repeatPassword: "",
// // //     });

// // //     showToast("success", "User updated successfully");
// // //     setLoading(false);
// // //     window.location.reload();
// // //   };

// // //   useEffect(() => {
// // //     const country = countryOptions.find((c) => c.value === selectedCountry);
// // //     setStates(country?.regions ?? []);
// // //     setSelectedState(""); // Reset on country change
// // //   }, [selectedCountry]);

// // //   return (
// // //     <div className="absolute w-1/3 top-0 right-0 bottom-0 bg-white py-4 px-10 overflow-scroll z-50">
// // //       <div className="w-full flex flex-row justify-between items-center mb-8">
// // //         <h2 className="font-semibold text-xl">Edit Staff Info</h2>
// // //         <CircleX size={22} />
// // //       </div>
// // //       <form onSubmit={handleSubmit} className="flex flex-col gap-6">
// // //         {/* Hidden User ID */}
// // //         <input
// // //           type="hidden"
// // //           id="userId"
// // //           name="userId"
// // //           value={user.id}
// // //           readOnly
// // //         />

// // //         {/* Basic Fields */}
// // //         {[
// // //           { name: "name", label: "Name" },
// // //           { name: "email", label: "Email" },
// // //           { name: "phone", label: "Phone" },
// // //           { name: "image", label: "Avatar", placeholder: "Image URL" },
// // //           { name: "birthDate", label: "Birth Date", type: "date" },
// // //           { name: "addressLine1", label: "Street Address" },
// // //           { name: "addressLine2", label: "Apt/Suite/Unit" },
// // //           { name: "city", label: "City" },
// // //           { name: "state", label: "State" },
// // //           { name: "zipCode", label: "Zipcode" },
// // //           { name: "country", label: "Country" },
// // //         ].map(({ name, label, type = "text", placeholder }) => (
// // //           <div key={name} className="flex flex-col gap-2 w-full">
// // //             <Label htmlFor={name} className="font-medium text-gray-700">
// // //               {label}
// // //             </Label>
// // //             <Input
// // //               type={type}
// // //               name={name}
// // //               id={name}
// // //               placeholder={placeholder ?? label}
// // //               className="w-full"
// // //               value={
// // //                 name === "birthDate"
// // //                   ? formData.birthDate instanceof Date &&
// // //                     !isNaN(formData.birthDate.getTime())
// // //                     ? formData.birthDate.toISOString().split("T")[0]
// // //                     : ""
// // //                   : typeof formData[name as keyof typeof formData] === "boolean"
// // //                   ? formData[name as keyof typeof formData]
// // //                     ? "true"
// // //                     : "false"
// // //                   : (formData[name as keyof typeof formData] as string)
// // //               }
// // //               onChange={(e) => {
// // //                 const { name, value } = e.target;
// // //                 setFormData((prev) => ({
// // //                   ...prev,
// // //                   [name]: name === "birthDate" ? new Date(value) : value,
// // //                 }));
// // //               }}
// // //             />
// // //           </div>
// // //         ))}

// // //         {/* Role Select */}
// // //         <div className="flex flex-col gap-1 w-full">
// // //           <Label htmlFor="role" className="font-medium text-gray-700">
// // //             Role
// // //           </Label>
// // //           <Select
// // //             defaultValue={formData.role}
// // //             onValueChange={(value) =>
// // //               setFormData((prev) => ({
// // //                 ...prev,
// // //                 role: value as User["role"],
// // //               }))
// // //             }
// // //           >
// // //             <SelectTrigger id="role" className="w-full">
// // //               <SelectValue placeholder="Select Role" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="ADMIN">Admin</SelectItem>
// // //               <SelectItem value="MANAGER">Manager</SelectItem>
// // //               <SelectItem value="STAFF">Staff</SelectItem>
// // //               <SelectItem value="GUEST">Guest</SelectItem>
// // //             </SelectContent>
// // //           </Select>
// // //         </div>

// // //         {/* Status Select */}
// // //         <div className="flex flex-col gap-1 w-full">
// // //           <Label htmlFor="isActive" className="font-medium text-gray-700">
// // //             Status
// // //           </Label>
// // //           <Select
// // //             defaultValue={formData.isActive ? "true" : "false"}
// // //             onValueChange={(value) =>
// // //               setFormData((prev) => ({
// // //                 ...prev,
// // //                 isActive: value === "true",
// // //               }))
// // //             }
// // //           >
// // //             <SelectTrigger id="isActive" className="w-full">
// // //               <SelectValue placeholder="Account Status" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="true">Enabled</SelectItem>
// // //               <SelectItem value="false">Disabled</SelectItem>
// // //             </SelectContent>
// // //           </Select>
// // //         </div>

// // //         {/* Password Fields */}
// // //         {[
// // //           {
// // //             name: "password",
// // //             label: "Password",
// // //             type: "password",
// // //             placeholder: "New Password",
// // //           },
// // //           {
// // //             name: "repeatPassword",
// // //             label: "Confirmation",
// // //             type: "password",
// // //             placeholder: "Repeat Password",
// // //           },
// // //         ].map(({ name, label, type, placeholder }) => (
// // //           <div key={name} className="flex flex-col gap-1 w-full">
// // //             <Label htmlFor={name} className="font-medium text-gray-700">
// // //               {label}
// // //             </Label>
// // //             <Input
// // //               id={name}
// // //               name={name}
// // //               type={type}
// // //               placeholder={placeholder}
// // //               className="w-full"
// // //               value={
// // //                 typeof formData[name as keyof typeof formData] === "boolean"
// // //                   ? String(formData[name as keyof typeof formData])
// // //                   : (formData[name as keyof typeof formData] as string)
// // //               }
// // //               onChange={handleChange}
// // //             />
// // //           </div>
// // //         ))}

// // //         {/* Action Buttons */}
// // //         <div className="w-full flex justify-end gap-4 mt-6">
// // //           <Button type="submit" disabled={loading}>
// // //             {loading ? "Updating..." : "Update"}
// // //           </Button>
// // //           <Button
// // //             type="button"
// // //             variant="outline"
// // //             onClick={() => window.location.reload()}
// // //           >
// // //             Close
// // //           </Button>
// // //         </div>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { Input } from "../ui/input";
// // import { User } from "@/generated/prisma";
// // import { allCountries } from "country-region-data";
// // import type { CountryData } from "country-region-data";
// // import {
// //   Select,
// //   SelectTrigger,
// //   SelectValue,
// //   SelectContent,
// //   SelectItem,
// // } from "../ui/select";
// // import { Label } from "../ui/label";
// // import { Button } from "../ui/button";
// // import { showToast } from "@/hooks/toast";
// // import { useSession } from "next-auth/react";
// // import { CircleX } from "lucide-react";

// // const countryOptions = (allCountries as CountryData[]).map(
// //   ([label, value, regions]) => ({
// //     label,
// //     value,
// //     regions: regions.map(([regionName]) => ({ name: regionName })),
// //   })
// // );

// // export const EditStaffForm = ({ user }: { user: User }) => {
// //   const { data: session, update } = useSession();
// //   const [loading, setLoading] = useState(false);
// //   const [selectedCountry, setSelectedCountry] = useState("");
// //   const [states, setStates] = useState<{ name: string }[]>([]);

// //   const [formData, setFormData] = useState({
// //     name: user.name || "",
// //     email: user.email || "",
// //     phone: user.phone || "",
// //     image: user.image || "",
// //     birthDate: user.birthDate ? new Date(user.birthDate) : null,
// //     addressLine1: user.addressLine1 || "",
// //     addressLine2: user.addressLine2 || "",
// //     city: user.city || "",
// //     state: user.state || "",
// //     zipCode: user.zipCode || "",
// //     country: user.country || "",
// //     role: (user.role as User["role"]) || "GUEST",
// //     isActive: user.isActive ?? false,
// //     password: "",
// //     repeatPassword: "",
// //   });

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: name === "birthDate" ? value : value,
// //     }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (formData.password && formData.password !== formData.repeatPassword) {
// //       alert("Passwords do not match.");
// //       return;
// //     }

// //     setLoading(true);
// //     const res = await fetch(`/api/admin/${user.id}/update`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(formData),
// //     });

// //     if (!res.ok) {
// //       alert("Failed to update user");
// //       setLoading(false);
// //       showToast("error", "Failed to update user");
// //       return;
// //     }

// //     const updatedUser = await res.json();

// //     setFormData({
// //       name: updatedUser.name || "",
// //       email: updatedUser.email || "",
// //       phone: updatedUser.phone || "",
// //       image: updatedUser.image || "",
// //       birthDate: updatedUser.birthDate ? new Date(updatedUser.birthDate) : null,
// //       addressLine1: updatedUser.addressLine1 || "",
// //       addressLine2: updatedUser.addressLine2 || "",
// //       city: updatedUser.city || "",
// //       state: updatedUser.state || "",
// //       zipCode: updatedUser.zipCode || "",
// //       country: updatedUser.country || "",
// //       role: updatedUser.role || "STAFF",
// //       isActive: updatedUser.isActive ?? false,
// //       password: "",
// //       repeatPassword: "",
// //     });

// //     showToast("success", "User updated successfully");
// //     setLoading(false);
// //     window.location.reload();
// //   };

// //   // Load states when country changes
// //   useEffect(() => {
// //     const country = countryOptions.find((c) => c.value === selectedCountry);
// //     setStates(country?.regions ?? []);
// //     setFormData((prev) => ({ ...prev, state: "" }));
// //   }, [selectedCountry]);

// //   // Pre-load state list on initial mount
// //   useEffect(() => {
// //     if (user.country) {
// //       setSelectedCountry(user.country);
// //       const country = countryOptions.find((c) => c.value === user.country);
// //       if (country) {
// //         setStates(country.regions);
// //       }
// //     }
// //   }, [user.country]);

// //   return (
// //     <div className="absolute w-1/3 top-0 right-0 bottom-0 bg-white py-4 px-10 overflow-scroll z-50">
// //       <div className="w-full flex flex-row justify-between items-center mb-8">
// //         <h2 className="font-semibold text-xl">Edit Staff Info</h2>
// //         <CircleX size={22} />
// //       </div>
// //       <form onSubmit={handleSubmit} className="flex flex-col gap-6">
// //         <input type="hidden" name="userId" value={user.id} readOnly />

// //         {[
// //           { name: "name", label: "Name" },
// //           { name: "email", label: "Email" },
// //           { name: "phone", label: "Phone" },
// //           { name: "image", label: "Avatar", placeholder: "Image URL" },
// //           { name: "birthDate", label: "Birth Date", type: "date" },
// //           { name: "addressLine1", label: "Street Address" },
// //           { name: "addressLine2", label: "Apt/Suite/Unit" },
// //           { name: "city", label: "City" },
// //           { name: "zipCode", label: "Zipcode" },
// //         ].map(({ name, label, type = "text", placeholder }) => (
// //           <div key={name} className="flex flex-col gap-2 w-full">
// //             <Label htmlFor={name} className="font-medium text-gray-700">
// //               {label}
// //             </Label>
// //             <Input
// //               type={type}
// //               name={name}
// //               id={name}
// //               placeholder={placeholder ?? label}
// //               className="w-full"
// //               value={
// //                 name === "birthDate"
// //                   ? formData.birthDate instanceof Date &&
// //                     !isNaN(formData.birthDate.getTime())
// //                     ? formData.birthDate.toISOString().split("T")[0]
// //                     : ""
// //                   : typeof formData[name as keyof typeof formData] === "boolean"
// //                   ? formData[name as keyof typeof formData]
// //                     ? "true"
// //                     : "false"
// //                   : (formData[name as keyof typeof formData] as string)
// //               }
// //               onChange={(e) => {
// //                 const { name, value } = e.target;
// //                 setFormData((prev) => ({
// //                   ...prev,
// //                   [name]: name === "birthDate" ? new Date(value) : value,
// //                 }));
// //               }}
// //             />
// //           </div>
// //         ))}

// //         {/* State/Province Select */}
// //         {states.length > 0 && (
// //           <div className="flex flex-col gap-1 w-full">
// //             <Label htmlFor="state" className="font-medium text-gray-700">
// //               State / Province
// //             </Label>
// //             <Select
// //               value={formData.state}
// //               onValueChange={(value) =>
// //                 setFormData((prev) => ({ ...prev, state: value }))
// //               }
// //             >
// //               <SelectTrigger id="state" className="w-full">
// //                 <SelectValue placeholder="Select State/Province" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 {states.map((region) => (
// //                   <SelectItem key={region.name} value={region.name}>
// //                     {region.name}
// //                   </SelectItem>
// //                 ))}
// //               </SelectContent>
// //             </Select>
// //           </div>
// //         )}

// //         {/* Country Select */}
// //         <div className="flex flex-col gap-1 w-full">
// //           <Label htmlFor="country" className="font-medium text-gray-700">
// //             Country
// //           </Label>
// //           <Select
// //             value={formData.country}
// //             onValueChange={(value) => {
// //               setSelectedCountry(value);
// //               setFormData((prev) => ({
// //                 ...prev,
// //                 country: value,
// //                 state: "",
// //               }));
// //             }}
// //           >
// //             <SelectTrigger id="country" className="w-full">
// //               <SelectValue placeholder="Select Country" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               {countryOptions.map((country) => (
// //                 <SelectItem key={country.value} value={country.value}>
// //                   {country.label}
// //                 </SelectItem>
// //               ))}
// //             </SelectContent>
// //           </Select>
// //         </div>

// //         {/* Role Select */}
// //         <div className="flex flex-col gap-1 w-full">
// //           <Label htmlFor="role" className="font-medium text-gray-700">
// //             Role
// //           </Label>
// //           <Select
// //             value={formData.role}
// //             onValueChange={(value) =>
// //               setFormData((prev) => ({
// //                 ...prev,
// //                 role: value as User["role"],
// //               }))
// //             }
// //           >
// //             <SelectTrigger id="role" className="w-full">
// //               <SelectValue placeholder="Select Role" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="ADMIN">Admin</SelectItem>
// //               <SelectItem value="MANAGER">Manager</SelectItem>
// //               <SelectItem value="STAFF">Staff</SelectItem>
// //               <SelectItem value="GUEST">Guest</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>

// //         {/* Status Select */}
// //         <div className="flex flex-col gap-1 w-full">
// //           <Label htmlFor="isActive" className="font-medium text-gray-700">
// //             Status
// //           </Label>
// //           <Select
// //             value={formData.isActive ? "true" : "false"}
// //             onValueChange={(value) =>
// //               setFormData((prev) => ({
// //                 ...prev,
// //                 isActive: value === "true",
// //               }))
// //             }
// //           >
// //             <SelectTrigger id="isActive" className="w-full">
// //               <SelectValue placeholder="Account Status" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="true">Enabled</SelectItem>
// //               <SelectItem value="false">Disabled</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>

// //         {/* Password Fields */}
// //         {[
// //           {
// //             name: "password",
// //             label: "Password",
// //             type: "password",
// //             placeholder: "New Password",
// //           },
// //           {
// //             name: "repeatPassword",
// //             label: "Confirmation",
// //             type: "password",
// //             placeholder: "Repeat Password",
// //           },
// //         ].map(({ name, label, type, placeholder }) => (
// //           <div key={name} className="flex flex-col gap-1 w-full">
// //             <Label htmlFor={name} className="font-medium text-gray-700">
// //               {label}
// //             </Label>
// //             <Input
// //               id={name}
// //               name={name}
// //               type={type}
// //               placeholder={placeholder}
// //               className="w-full"
// //               value={
// //                 typeof formData[name as keyof typeof formData] === "boolean"
// //                   ? String(formData[name as keyof typeof formData])
// //                   : (formData[name as keyof typeof formData] as string)
// //               }
// //               onChange={handleChange}
// //             />
// //           </div>
// //         ))}

// //         <div className="w-full flex justify-end gap-4 mt-6">
// //           <Button type="submit" disabled={loading}>
// //             {loading ? "Updating..." : "Update"}
// //           </Button>
// //           <Button
// //             type="button"
// //             variant="outline"
// //             onClick={() => window.location.reload()}
// //           >
// //             Close
// //           </Button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// "use client";

// import React, { useEffect, useState } from "react";
// import { Input } from "../ui/input";
// import { User } from "@/generated/prisma";
// import { allCountries } from "country-region-data";
// import type { CountryData } from "country-region-data";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "../ui/select";
// import { Label } from "../ui/label";
// import { Button } from "../ui/button";
// import { showToast } from "@/hooks/toast";
// import { useSession } from "next-auth/react";
// import { CircleX } from "lucide-react";

// // Helper to convert country code to emoji flag
// const getFlagEmoji = (countryCode: string): string =>
//   countryCode
//     .toUpperCase()
//     .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));

// const countryOptions = (allCountries as CountryData[]).map(
//   ([label, value, regions]) => ({
//     label,
//     value,
//     regions: regions.map(([regionName]) => ({ name: regionName })),
//   })
// );

// export const EditStaffForm = ({ user }: { user: User }) => {
//   const { data: session, update } = useSession();
//   const [loading, setLoading] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(user.country || "");
//   const [states, setStates] = useState<{ name: string }[]>([]);

//   const [formData, setFormData] = useState({
//     name: user.name || "",
//     email: user.email || "",
//     phone: user.phone || "",
//     image: user.image || "",
//     birthDate: user.birthDate ? new Date(user.birthDate) : null,
//     addressLine1: user.addressLine1 || "",
//     addressLine2: user.addressLine2 || "",
//     city: user.city || "",
//     state: user.state || "",
//     zipCode: user.zipCode || "",
//     country: user.country || "",
//     role: (user.role as User["role"]) || "GUEST",
//     isActive: user.isActive ?? false,
//     password: "",
//     repeatPassword: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "birthDate" ? value : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (formData.password && formData.password !== formData.repeatPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     setLoading(true);
//     const res = await fetch(`/api/admin/${user.id}/update`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!res.ok) {
//       alert("Failed to update user");
//       setLoading(false);
//       showToast("error", "Failed to update user");
//       return;
//     }

//     const updatedUser = await res.json();

//     setFormData({
//       name: updatedUser.name || "",
//       email: updatedUser.email || "",
//       phone: updatedUser.phone || "",
//       image: updatedUser.image || "",
//       birthDate: updatedUser.birthDate ? new Date(updatedUser.birthDate) : null,
//       addressLine1: updatedUser.addressLine1 || "",
//       addressLine2: updatedUser.addressLine2 || "",
//       city: updatedUser.city || "",
//       state: updatedUser.state || "",
//       zipCode: updatedUser.zipCode || "",
//       country: updatedUser.country || "",
//       role: updatedUser.role || "STAFF",
//       isActive: updatedUser.isActive ?? false,
//       password: "",
//       repeatPassword: "",
//     });

//     showToast("success", "User updated successfully");
//     setLoading(false);
//     window.location.reload();
//   };

//   // Load states on country change
//   useEffect(() => {
//     const country = countryOptions.find((c) => c.value === selectedCountry);
//     setStates(country?.regions ?? []);
//     setFormData((prev) => ({
//       ...prev,
//       country: selectedCountry,
//       state: "",
//     }));
//   }, [selectedCountry]);

//   // Initial state load (only once)
//   useEffect(() => {
//     if (user.country) {
//       const country = countryOptions.find((c) => c.value === user.country);
//       if (country) {
//         setStates(country.regions);
//       }
//     }
//   }, [user.country]);

//   return (
//     <div className="absolute w-1/3 top-0 right-0 bottom-0 bg-white py-4 px-10 overflow-scroll z-50">
//       <div className="w-full flex flex-row justify-between items-center mb-8">
//         <h2 className="font-semibold text-xl">Edit Staff Info</h2>
//         <CircleX size={22} />
//       </div>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//         <input type="hidden" name="userId" value={user.id} readOnly />

//         {/* Input Fields */}
//         {[
//           { name: "name", label: "Name" },
//           { name: "email", label: "Email" },
//           { name: "phone", label: "Phone" },
//           { name: "image", label: "Avatar", placeholder: "Image URL" },
//           { name: "birthDate", label: "Birth Date", type: "date" },
//           { name: "addressLine1", label: "Street Address" },
//           { name: "addressLine2", label: "Apt/Suite/Unit" },
//           { name: "city", label: "City" },
//           { name: "zipCode", label: "Zipcode" },
//         ].map(({ name, label, type = "text", placeholder }) => (
//           <div key={name} className="flex flex-col gap-2 w-full">
//             <Label htmlFor={name} className="font-medium text-gray-700">
//               {label}
//             </Label>
//             <Input
//               type={type}
//               name={name}
//               id={name}
//               placeholder={placeholder ?? label}
//               className="w-full"
//               value={
//                 name === "birthDate"
//                   ? formData.birthDate instanceof Date &&
//                     !isNaN(formData.birthDate.getTime())
//                     ? formData.birthDate.toISOString().split("T")[0]
//                     : ""
//                   : typeof formData[name as keyof typeof formData] === "boolean"
//                   ? formData[name as keyof typeof formData]
//                     ? "true"
//                     : "false"
//                   : (formData[name as keyof typeof formData] as string)
//               }
//               onChange={(e) => {
//                 const { name, value } = e.target;
//                 setFormData((prev) => ({
//                   ...prev,
//                   [name]: name === "birthDate" ? new Date(value) : value,
//                 }));
//               }}
//             />
//           </div>
//         ))}

//         {/* State/Province Select */}
//         {states.length > 0 && (
//           <div className="flex flex-col gap-1 w-full">
//             <Label htmlFor="state" className="font-medium text-gray-700">
//               State / Province
//             </Label>
//             <Select
//               value={formData.state}
//               onValueChange={(value) =>
//                 setFormData((prev) => ({ ...prev, state: value }))
//               }
//             >
//               <SelectTrigger id="state" className="w-full">
//                 <SelectValue
//                   placeholder={
//                     formData.state ? formData.state : "Select State/Province"
//                   }
//                 />
//               </SelectTrigger>
//               <SelectContent>
//                 {states.map((region) => (
//                   <SelectItem key={region.name} value={region.name}>
//                     {region.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         )}

//         {/* Country Select */}
//         <div className="flex flex-col gap-1 w-full">
//           <Label htmlFor="country" className="font-medium text-gray-700">
//             Country
//           </Label>
//           <Select
//             value={formData.country}
//             onValueChange={(value) => setSelectedCountry(value)}
//           >
//             <SelectTrigger id="country" className="w-full">
//               <SelectValue placeholder="Select Country" />
//             </SelectTrigger>
//             <SelectContent>
//               {countryOptions.map((country) => (
//                 <SelectItem key={country.value} value={country.value}>
//                   {getFlagEmoji(country.value)} {country.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Role Select */}
//         <div className="flex flex-col gap-1 w-full">
//           <Label htmlFor="role" className="font-medium text-gray-700">
//             Role
//           </Label>
//           <Select
//             value={formData.role}
//             onValueChange={(value) =>
//               setFormData((prev) => ({
//                 ...prev,
//                 role: value as User["role"],
//               }))
//             }
//           >
//             <SelectTrigger id="role" className="w-full">
//               <SelectValue placeholder="Select Role" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="ADMIN">Admin</SelectItem>
//               <SelectItem value="MANAGER">Manager</SelectItem>
//               <SelectItem value="STAFF">Staff</SelectItem>
//               <SelectItem value="GUEST">Guest</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Status Select */}
//         <div className="flex flex-col gap-1 w-full">
//           <Label htmlFor="isActive" className="font-medium text-gray-700">
//             Status
//           </Label>
//           <Select
//             value={formData.isActive ? "true" : "false"}
//             onValueChange={(value) =>
//               setFormData((prev) => ({
//                 ...prev,
//                 isActive: value === "true",
//               }))
//             }
//           >
//             <SelectTrigger id="isActive" className="w-full">
//               <SelectValue placeholder="Account Status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="true">Enabled</SelectItem>
//               <SelectItem value="false">Disabled</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Password Fields */}
//         {[
//           {
//             name: "password",
//             label: "Password",
//             type: "password",
//             placeholder: "New Password",
//           },
//           {
//             name: "repeatPassword",
//             label: "Confirmation",
//             type: "password",
//             placeholder: "Repeat Password",
//           },
//         ].map(({ name, label, type, placeholder }) => (
//           <div key={name} className="flex flex-col gap-1 w-full">
//             <Label htmlFor={name} className="font-medium text-gray-700">
//               {label}
//             </Label>
//             <Input
//               id={name}
//               name={name}
//               type={type}
//               placeholder={placeholder}
//               className="w-full"
//               value={
//                 typeof formData[name as keyof typeof formData] === "boolean"
//                   ? String(formData[name as keyof typeof formData])
//                   : (formData[name as keyof typeof formData] as string)
//               }
//               onChange={handleChange}
//             />
//           </div>
//         ))}

//         <div className="w-full flex justify-end gap-4 mt-6">
//           <Button type="submit" disabled={loading}>
//             {loading ? "Updating..." : "Update"}
//           </Button>
//           <Button
//             type="button"
//             variant="outline"
//             onClick={() => window.location.reload()}
//           >
//             Close
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { User } from "@/generated/prisma";
import { allCountries } from "country-region-data";
import type { CountryData } from "country-region-data";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { showToast } from "@/hooks/toast";
import { CircleX } from "lucide-react";

const getFlagEmoji = (code: string): string =>
  code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));

const countryOptions = (allCountries as CountryData[]).map(
  ([label, value, regions]) => ({
    label,
    value,
    regions: regions.map(([regionName]) => ({ name: regionName })),
  })
);

export const EditStaffForm = ({ user }: { user: User }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    image: user.image || "",
    birthDate: user.birthDate ? new Date(user.birthDate) : null,
    addressLine1: user.addressLine1 || "",
    addressLine2: user.addressLine2 || "",
    city: user.city || "",
    state: countryOptions
      .find((c) => c.value === user.country)
      ?.regions.some((r) => r.name === user.state)
      ? user.state || ""
      : "",
    zipCode: user.zipCode || "",
    country: user.country || "",
    role: (user.role as User["role"]) || "GUEST",
    isActive: user.isActive ?? false,
    password: "",
    repeatPassword: "",
  });

  const states =
    countryOptions.find((c) => c.value === formData.country)?.regions ?? [];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "birthDate" ? value : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    const res = await fetch(`/api/admin/${user.id}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      alert("Failed to update user");
      setLoading(false);
      showToast("error", "Failed to update user");
      return;
    }

    showToast("success", "User updated successfully");
    setLoading(false);
    window.location.reload();
  };

  return (
    <div className="absolute w-1/3 top-0 right-0 bottom-0 bg-white py-4 px-10 overflow-scroll z-50">
      <div className="w-full flex flex-row justify-between items-center mb-8">
        <h2 className="font-semibold text-xl">Edit Staff Info</h2>
        <CircleX size={22} onClick={() => window.location.reload()} />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input type="hidden" name="userId" value={user.id} readOnly />

        {[
          { name: "name", label: "Name" },
          { name: "email", label: "Email" },
          { name: "phone", label: "Phone" },
          { name: "image", label: "Avatar", placeholder: "Image URL" },
          { name: "birthDate", label: "Birth Date", type: "date" },
          { name: "addressLine1", label: "Street Address" },
          { name: "addressLine2", label: "Apt/Suite/Unit" },
          { name: "city", label: "City" },
        ].map(({ name, label, type = "text", placeholder }) => (
          <div key={name} className="flex flex-col gap-2 w-full">
            <Label htmlFor={name} className="font-medium text-gray-700">
              {label}
            </Label>
            <Input
              type={type}
              name={name}
              id={name}
              placeholder={placeholder ?? label}
              className="w-full"
              value={
                name === "birthDate"
                  ? formData.birthDate instanceof Date &&
                    !isNaN(formData.birthDate.getTime())
                    ? formData.birthDate.toISOString().split("T")[0]
                    : ""
                  : (formData[name as keyof typeof formData] as string)
              }
              onChange={(e) => {
                const { name, value } = e.target;
                setFormData((prev) => ({
                  ...prev,
                  [name]: name === "birthDate" ? new Date(value) : value,
                }));
              }}
            />
          </div>
        ))}

        {/* State / Province */}
        {states.length > 0 && (
          <div className="flex flex-col gap-1 w-full">
            <Label htmlFor="state" className="font-medium text-gray-700">
              State / Province
            </Label>
            <Select
              value={formData.state}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, state: value }))
              }
            >
              <SelectTrigger id="state" className="w-full">
                <SelectValue placeholder="Select State/Province">
                  {formData.state || "Select State/Province"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {states.map((region) => (
                  <SelectItem key={region.name} value={region.name}>
                    {region.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Zip Code */}
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="zipCode" className="font-medium text-gray-700">
            Zip Code
          </Label>
          <Input
            name="zipCode"
            id="zipCode"
            placeholder="Zip Code"
            className="w-full"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1 w-full">
          <Label htmlFor="country" className="font-medium text-gray-700">
            Country
          </Label>
          <Select
            value={formData.country}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, country: value, state: "" }))
            }
          >
            <SelectTrigger id="country" className="w-full">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countryOptions.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  {getFlagEmoji(country.value)} {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Role */}
        <div className="flex flex-col gap-1 w-full">
          <Label htmlFor="role" className="font-medium text-gray-700">
            Role
          </Label>
          <Select
            value={formData.role}
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

        {/* Status */}
        <div className="flex flex-col gap-1 w-full">
          <Label htmlFor="isActive" className="font-medium text-gray-700">
            Status
          </Label>
          <Select
            value={formData.isActive ? "true" : "false"}
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

        {/* Passwords */}
        {[
          {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "New Password",
          },
          {
            name: "repeatPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Repeat Password",
          },
        ].map(({ name, label, type, placeholder }) => (
          <div key={name} className="flex flex-col gap-1 w-full">
            <Label htmlFor={name} className="font-medium text-gray-700">
              {label}
            </Label>
            <Input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              className="w-full"
              value={formData[name as keyof typeof formData] as string}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* Action Buttons */}
        <div className="w-full flex justify-end gap-4 mt-6">
          <Button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => window.location.reload()}
          >
            Close
          </Button>
        </div>
      </form>
    </div>
  );
};
