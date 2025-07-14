import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubdomainNotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <div className="max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
            <AlertTriangle className="w-8 h-8" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Subdomain Not Found
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          The subdomain you're trying to access doesn’t exist or is not active.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={process.env.NEXT_PUBLIC_BASE_URL || "/"}>
            <Button className="w-full sm:w-auto">Go to Homepage</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full sm:w-auto">
              Contact Support
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Need help? Email{" "}
          <a
            href="mailto:support@ontargeterp.com"
            className="underline text-gray-500 hover:text-black"
          >
            support@ontargeterp.com
          </a>
        </p>
      </div>
    </main>
  );
}
