import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.literal.club'], // 添加你的域名
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
