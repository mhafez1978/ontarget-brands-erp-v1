"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { OAuthButtons } from "@/components/auth/OAuthButtons";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pfcounter, setPFCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [cooldown, setCooldown] = useState(0); // seconds remaining

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            setIsDisabled(false);
            setError(null);
            setPFCounter(0);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (pfcounter >= 3) {
      setIsDisabled(true);
      setError("You've exceeded allowed login attempts.");
      setCooldown(30);
      return;
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setPFCounter((prev) => prev + 1);
      setError("Invalid email or password.");
    } else if (res?.ok) {
      setPFCounter(0);
      router.push("/dashboard");
    } else {
      setError("Unexpected error. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <OAuthButtons />

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
            disabled={isDisabled}
            autoComplete="email"
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
            disabled={isDisabled}
            autoComplete="current-password"
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
              disabled={isDisabled}
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

        <Button
          type="submit"
          disabled={isDisabled}
          className="w-full h-12 bg-black hover:bg-gray-800 text-white font-medium transition-all duration-200"
        >
          {isDisabled ? `Access Blocked` : "Sign In"}
        </Button>
      </form>

      {error && (
        <p className="text-red-500 text-sm text-center">
          {isDisabled && cooldown > 0 ? (
            <>
              {error}
              <br />
              Try again in {cooldown} seconds.
            </>
          ) : (
            error
          )}
        </p>
      )}
    </div>
  );
};

export default LoginForm;
