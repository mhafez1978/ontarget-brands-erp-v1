"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

interface Company {
  id: string;
  name: string;
  slogan?: string;
  category?: string;
  type?: string;
  logo?: string;
  domain?: string;
  phone?: string;
  supportEmail?: string;
  salesEmail?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  gmailConnected?: boolean;
  office365Connected?: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  owner: {
    id: string;
    name?: string | null;
  };
}

interface Props {
  userId: string;
}

const IntegrationButton = ({
  label,
  href,
  connected,
  showSuccess,
}: {
  label: string;
  href: string;
  connected?: boolean;
  showSuccess: boolean;
}) => (
  <div className="flex items-center gap-4">
    <button
      onClick={() => (window.location.href = href)}
      className="w-[220px] px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      {label}
    </button>
    <span
      className={`inline-block w-8 h-8 rounded-full shadow-2xl ${
        connected ? "bg-green-600" : "bg-red-600"
      }`}
    />
    {showSuccess && (
      <span className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded">
        ✅ Email account connected successfully!
      </span>
    )}
  </div>
);

export const EmailIntegrationBlock = ({ userId }: Props) => {
  const [company, setCompany] = useState<Company | null>(null);
  const params = useSearchParams();
  const { data: session } = useSession();

  const effectiveUserId = session?.user.id || userId;

  // Derived straight from the URL during render — no state mirror needed.
  const showSuccess = params.get("emailConnected") === "true";

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await fetch(`/api/company/find/${userId}/company`);
        const data = await res.json();
        setCompany(data);
      } catch (error) {
        console.error("Failed to fetch company:", error);
        setCompany(null);
      }
    };

    if (effectiveUserId) {
      fetchCompany();
    }
  }, [effectiveUserId, userId]);

  return (
    <div className="w-full space-y-4">
      <IntegrationButton
        label="Connect Gmail"
        href="/api/oauth/google"
        connected={company?.gmailConnected}
        showSuccess={showSuccess}
      />
      <IntegrationButton
        label="Connect Office365"
        href="/api/oauth/office"
        connected={company?.office365Connected}
        showSuccess={showSuccess}
      />
    </div>
  );
};
