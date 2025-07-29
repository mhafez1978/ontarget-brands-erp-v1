"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { showToast } from "@/hooks/toast";

export const MFASetupForm = ({
  qrCodeUrl,
  isLoadingQR,
  onClose,
  onSuccess,
}: {
  qrCodeUrl: string | null;
  isLoadingQR: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) => {
  const [validationPin, setValidationPin] = useState("");

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValidationPin(e.target.value);

  const validateMFAPin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/mfa/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: validationPin }),
      });

      if (!res.ok) throw new Error("Invalid MFA code.");

      await res.json();
      showToast("success", "MFA is enabled now.");
      onSuccess();
      onClose();
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Unknown error";
      showToast("error", `Failed to verify OTP: ${msg}`);
    }
  };

  return (
    <div className="space-y-6">
      {isLoadingQR ? (
        <p className="text-sm text-muted-foreground h-24">Loading QR code...</p>
      ) : qrCodeUrl ? (
        <img src={qrCodeUrl} alt="QR" className="mx-auto w-48 h-48" />
      ) : (
        <p className="text-sm text-red-500 h-[300px]">
          Unable to load QR code.
        </p>
      )}

      <div>
        <h2>Step 1</h2>
        <p className="text-sm text-gray-700">
          Scan the QR code below with your authenticator app.
        </p>
      </div>

      <div>
        <h2>Step 2</h2>
        <p className="text-sm text-gray-600">
          After scanning, enter the 6-digit code below to confirm.
        </p>
      </div>

      <form onSubmit={validateMFAPin} className="flex flex-col gap-2">
        <Label htmlFor="validationPin">Enter Code:</Label>
        <Input
          name="validationPin"
          value={validationPin}
          onChange={handlePinChange}
          placeholder="123456"
          className="border-2 border-indigo-400 h-12"
        />
        <Button type="submit">Validate</Button>
      </form>
    </div>
  );
};
