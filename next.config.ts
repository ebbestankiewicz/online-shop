import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.noroff.dev" },
      { protocol: "https", hostname: "static.cloud.noroff.dev" },
    ],
  },
};

export default nextConfig;
