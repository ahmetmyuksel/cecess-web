import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: process.platform === "win32" ? undefined : "standalone",

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;
