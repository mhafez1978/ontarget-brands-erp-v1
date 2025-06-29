"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const UserPasswordResetManager = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const res = await fetch("/api/admin/reset-user-password", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword }),
    });

    const result = await res.json();
    if (res.ok) {
      setStatus("Password reset successfully.");
    } else {
      setStatus(result.error || "Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-xl font-bold mb-4">Global Password Reset Tool</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};
