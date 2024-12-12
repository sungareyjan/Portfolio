import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:true,
  distDir:'build',
  output:'export',
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
