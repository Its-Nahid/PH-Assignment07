import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/signin", destination: "/sign-in" },
      { source: "/signup", destination: "/sign-up" },
    ];
  },
};

export default nextConfig;
