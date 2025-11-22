import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
