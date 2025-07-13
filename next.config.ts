import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.jsdelivr.net"],
    remotePatterns: [new URL("https://cdn.jsdelivr.net/**")],
  },
  typescript: {
    //ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
