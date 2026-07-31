import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Specific hosts only — never a wildcard, which would let any origin be
    // proxied through the image optimizer.
    // Object form rather than new URL(): the URL form also matches the query
    // string, so it rejects sources like Unsplash that carry ?w=&h= params.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
