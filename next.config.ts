import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
