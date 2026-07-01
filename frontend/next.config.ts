// next.config.ts
import type { NextConfig } from "next";

const backendUrl = new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: backendUrl.protocol.replace(":", "") as "http" | "https",
        hostname: backendUrl.hostname,
        port: backendUrl.port,
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;