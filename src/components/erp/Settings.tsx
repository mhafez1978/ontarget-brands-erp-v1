"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  Database,
  Mail,
  Globe,
  CreditCard,
  Users,
  Package,
} from "lucide-react";

import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import { OffCanvasMenu } from "../ui/OffCanvasMenu";
import { OffCanvas } from "../ui/offCanvas";
import { showToast } from "@/hooks/toast";

export const Settings = () => {
  const [isMFAEnabled, setIsMFAEnabled] = useState(false);
  const [isOffCanvasMenuOpen, setIsOffCanvasMenuOpen] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [validationPin, setValidationPin] = useState<string>("");
  const [isLoadingQR, setIsLoadingQR] = useState(false);
  const { update } = useSession();
  const { data: session } = useSession();
  const router = useRouter();

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationPin(e.target.value);
  };

  const validateMFAPin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/mfa/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: validationPin }),
      });

      if (!res.ok) {
        throw new Error("Invalid MFA code.");
      }

      const result = await res.json();

      // You can now refetch session or redirect
      setIsMFAEnabled(true);
      showToast("success", "MFA is enabled now ...");
      setIsOffCanvasMenuOpen(false);
    } catch (error) {
      if (error instanceof Error) {
        alert("Failed to verify OTP: " + error.message);
        showToast("error", "Failed to verify OTP: " + error.message);
      } else {
        alert("Failed to verify OTP: An unknown error occurred.");
        showToast("error", "Failed to verify OTP: An unknown error occurred");
      }
    }
  };

  const disableMFA = async () => {
    try {
      const res = await fetch("/api/mfa/disable", {
        method: "POST",
      });

      if (!res.ok) throw new Error("Failed to disable MFA");

      await update(); // Refresh session
      showToast("success", "MFA has been disabled");
      setIsMFAEnabled(false);
    } catch (error) {
      showToast("error", "Failed to disable MFA: " + (error as Error).message);
    }
  };

  useEffect(() => {
    if (!session || !session.user) {
      router.push("/auth");
    }
  }, [session, router]);

  useEffect(() => {
    if (session && session.user.mfaEnabled === true) {
      setIsMFAEnabled(true);
    }
  }, [session]);

  useEffect(() => {
    const fetchQRCode = async () => {
      setIsLoadingQR(true);
      try {
        const res = await fetch("/api/mfa/setup", {
          method: "POST",
        });

        if (!res.ok) {
          const errorText = await res.text(); // get raw error message
          throw new Error(`Setup failed: ${res.status} - ${errorText}`);
        }

        const data = await res.json(); // only call this after .ok check
        setQrCodeUrl(data.qrCode);
      } catch (error) {
        console.error("Failed to load QR code:", error);
        showToast(
          "error",
          "Failed to load QR code: " + (error as Error).message
        );
      } finally {
        setIsLoadingQR(false);
      }
    };

    if (isOffCanvasMenuOpen) {
      fetchQRCode();
    }
  }, [isOffCanvasMenuOpen]);

  return (
    <>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">
              Manage your ERP system configuration
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Security Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Security & Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-600">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  {isMFAEnabled ? (
                    <Badge className="bg-green-100 text-green-800">
                      Enabled
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-100 text-black">Disabled</Badge>
                  )}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Enable MFA</h4>
                  <div className="space-y-3">
                    {[{ label: "Setup/Configure MFA", enabled: false }].map(
                      (req, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm">{req.label}</span>
                          {/* <Switch
                            checked={isMFAEnabled}
                            onCheckedChange={(checked) => {
                              setIsMFAEnabled(checked);
                              if (checked) {
                                setIsOffCanvasMenuOpen(true);
                              }
                            }}
                          /> */}
                          <Switch
                            checked={isMFAEnabled}
                            onCheckedChange={async (checked) => {
                              if (checked) {
                                setIsOffCanvasMenuOpen(true);
                              } else {
                                await disableMFA();
                              }
                            }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {isOffCanvasMenuOpen && (
        <OffCanvas
          formName="Setup MFA"
          open={isOffCanvasMenuOpen}
          onClose={() => setIsOffCanvasMenuOpen(false)}
        >
          {(close) => (
            <div className="space-y-6">
              {isLoadingQR ? (
                <p className="text-sm text-muted-foreground">
                  Loading QR code...
                </p>
              ) : qrCodeUrl ? (
                <img
                  src={qrCodeUrl}
                  alt="MFA QR Code"
                  className="mx-auto w-48 h-48"
                />
              ) : (
                <p className="text-sm text-red-500 h-[300px]">
                  Unable to load QR code.
                </p>
              )}
              <div>
                <h2>Step 1</h2>
                <p className="text-gray-700 text-sm">
                  Scan the QR code below with your authenticator app (like
                  Google Authenticator or Authy).
                </p>
              </div>
              <div>
                <h2>Step 2</h2>
                <p className="text-sm text-gray-600">
                  After scanning, enter the 6-digit code from your app into the
                  form below to confirm MFA setup.
                </p>
              </div>

              <div>
                <form onSubmit={validateMFAPin} className="flex flex-col gap-2">
                  <Label htmlFor="qrCodeVerify">Enter Code:</Label>
                  <Input
                    name="validationPin"
                    value={validationPin}
                    type="text"
                    placeholder="enter your app code"
                    onChange={handlePinChange}
                  />
                  <Button type="submit">Validate</Button>
                </form>
              </div>
            </div>
          )}
        </OffCanvas>
      )}
    </>
  );
};
