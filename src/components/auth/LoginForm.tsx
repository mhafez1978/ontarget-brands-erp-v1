"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import OAuthButtons from "@/components/auth/OAuthButtons";
import { signIn } from "next-auth/react"; // 🔄 use this instead of @/auth for client auth

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res.ok) {
      console.error("Login failed:", res.error);
      setError("Invalid email or password");
    } else if (res.ok) {
      router.push("/dashboard"); // 🔁 redirect to your app dashboard
    }
  };

  return (
    <div className="space-y-6">
      <OAuthButtons />

      {/* Divider */}
      <div className="relative">
        <Separator className="bg-gray-200" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">
            or continue with email
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 border-gray-300 focus:border-black focus:ring-black"
            placeholder="you@company.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 border-gray-300 focus:border-black focus:ring-black"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <button
            type="button"
            className="text-sm text-black hover:text-gray-700 font-medium"
          >
            Forgot password?
          </button>
        </div>

        {error && (
          <div className="text-sm text-red-600 font-medium">{error}</div>
        )}

        <Button
          type="submit"
          className="w-full h-12 bg-black hover:bg-gray-800 text-white font-medium transition-all duration-200"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
