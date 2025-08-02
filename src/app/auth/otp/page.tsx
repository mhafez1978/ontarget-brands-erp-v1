"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function MfaPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session, status, update } = useSession();

  // 🔄 Redirect if already verified
  useEffect(() => {
    if (status === "authenticated" && session && !session.mfaPending) {
      router.push("/dashboard");
    }
  }, [status, session, router]);

  // const handleVerify = async () => {
  //   setError("");
  //   setLoading(true);
  //   try {
  //     const res = await fetch("/api/mfa/verify-login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ token }),
  //     });

  //     if (!res.ok) {
  //       const msg = await res.text();
  //       throw new Error(msg || "Failed to verify code");
  //     }

  //     // 🔁 Refresh session after verification to clear `mfaPending`
  //     await update();

  //     router.push("/dashboard");
  //   } catch (err: any) {
  //     setError(err.message || "Error verifying code");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/mfa/verify-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (res.redirected) {
        router.push(res.url); // will be /dashboard
        return;
      }

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to verify code");
      }
    } catch (err: any) {
      setError(err.message || "Error verifying code");
    } finally {
      setLoading(false);
    }
  };

  // 🚫 Don't show the form unless session is ready
  if (status === "loading" || !session?.mfaPending) return null;

  return (
    <div className="w-full min-h-screen flex flex-col bg-[url('/business.jpg')] bg-cover bg-center bg-no-repeat pt-[33vh]">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Multi-Factor Authentication
        </h1>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Enter the 6-digit code from your authenticator app.
        </p>
        <form onSubmit={handleVerify}>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="123456"
            inputMode="numeric"
            maxLength={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-500 mb-2 text-center tracking-widest text-lg"
            disabled={loading}
            autoFocus={true}
          />
          {error && (
            <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || token.length !== 6}
            className={`w-full py-2 rounded-md text-white font-medium transition ${
              loading || token.length !== 6
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Verifying..." : "Verify & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
