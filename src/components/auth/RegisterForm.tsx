// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import OAuthButtons from "./OAuthButtons";

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     company: "",
//     agreeToTerms: false,
//   });

//   const handleInputChange = (field: string, value: string | boolean) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Register attempt:", formData);
//   };

//   return (
//     <div className="space-y-6">
//       {/* OAuth Buttons */}
//       <OAuthButtons isRegister />

//       {/* Divider */}
//       <div className="relative">
//         <Separator className="bg-gray-200" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="bg-white px-4 text-sm text-gray-500">
//             or create account with email
//           </span>
//         </div>
//       </div>

//       {/* Register Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <label
//               htmlFor="firstName"
//               className="text-sm font-medium text-gray-700"
//             >
//               First Name
//             </label>
//             <Input
//               id="firstName"
//               type="text"
//               value={formData.firstName}
//               onChange={(e) => handleInputChange("firstName", e.target.value)}
//               className="h-12 border-gray-300 focus:border-black focus:ring-black"
//               placeholder="John"
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <label
//               htmlFor="lastName"
//               className="text-sm font-medium text-gray-700"
//             >
//               Last Name
//             </label>
//             <Input
//               id="lastName"
//               type="text"
//               value={formData.lastName}
//               onChange={(e) => handleInputChange("lastName", e.target.value)}
//               className="h-12 border-gray-300 focus:border-black focus:ring-black"
//               placeholder="Doe"
//               required
//             />
//           </div>
//         </div>

//         {/* <div className="space-y-2">
//           <label
//             htmlFor="company"
//             className="text-sm font-medium text-gray-700"
//           >
//             Company
//           </label>
//           <Input
//             id="company"
//             type="text"
//             value={formData.company}
//             onChange={(e) => handleInputChange("company", e.target.value)}
//             className="h-12 border-gray-300 focus:border-black focus:ring-black"
//             placeholder="Your Company"
//             required
//           />
//         </div> */}

//         <div className="space-y-2">
//           <label
//             htmlFor="registerEmail"
//             className="text-sm font-medium text-gray-700"
//           >
//             Email Address
//           </label>
//           <Input
//             id="registerEmail"
//             type="email"
//             value={formData.email}
//             onChange={(e) => handleInputChange("email", e.target.value)}
//             className="h-12 border-gray-300 focus:border-black focus:ring-black"
//             placeholder="you@company.com"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <label
//             htmlFor="registerPassword"
//             className="text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <Input
//             id="registerPassword"
//             type="password"
//             value={formData.password}
//             onChange={(e) => handleInputChange("password", e.target.value)}
//             className="h-12 border-gray-300 focus:border-black focus:ring-black"
//             placeholder="Create a password"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <label
//             htmlFor="confirmPassword"
//             className="text-sm font-medium text-gray-700"
//           >
//             Confirm Password
//           </label>
//           <Input
//             id="confirmPassword"
//             type="password"
//             value={formData.confirmPassword}
//             onChange={(e) =>
//               handleInputChange("confirmPassword", e.target.value)
//             }
//             className="h-12 border-gray-300 focus:border-black focus:ring-black"
//             placeholder="Confirm your password"
//             required
//           />
//         </div>

//         <div className="flex items-start space-x-2">
//           <input
//             id="terms"
//             type="checkbox"
//             checked={formData.agreeToTerms}
//             onChange={(e) =>
//               handleInputChange("agreeToTerms", e.target.checked)
//             }
//             className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black mt-1"
//             required
//           />
//           <label htmlFor="terms" className="text-sm text-gray-600 leading-5">
//             I agree to the{" "}
//             <button
//               type="button"
//               className="text-black hover:text-gray-700 font-medium"
//             >
//               Terms of Service
//             </button>{" "}
//             and{" "}
//             <button
//               type="button"
//               className="text-black hover:text-gray-700 font-medium"
//             >
//               Privacy Policy
//             </button>
//           </label>
//         </div>

//         <Button
//           type="submit"
//           className="w-full h-12 bg-black hover:bg-gray-800 text-white font-medium transition-all duration-200"
//           disabled={!formData.agreeToTerms}
//         >
//           Create Account
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import OAuthButtons from "./OAuthButtons";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          role: "CUSTOMER",
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to register");
      }

      // Optionally redirect or show success
      alert("Account created!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <OAuthButtons isRegister />

      <div className="relative">
        <Separator className="bg-gray-200" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">
            or create account with email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            required
          />
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={(e) =>
              handleInputChange("agreeToTerms", e.target.checked)
            }
            required
          />
          <label className="text-sm text-gray-600">
            I agree to the{" "}
            <span className="font-medium underline cursor-pointer">Terms</span>{" "}
            and{" "}
            <span className="font-medium underline cursor-pointer">
              Privacy Policy
            </span>
          </label>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !formData.agreeToTerms}
        >
          {isSubmitting ? "Creating..." : "Create Account"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
