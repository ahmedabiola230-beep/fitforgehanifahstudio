import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is only needed for the sandbox's production server.
  // Vercel builds with its own output format, so skip it there.
  output: process.env.VERCEL ? undefined : "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
