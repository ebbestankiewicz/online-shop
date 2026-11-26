import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.cloud.noroff.dev" },
    ],
  },
};

export default nextConfig;
