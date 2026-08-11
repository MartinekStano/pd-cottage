import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/janosikove-dni-ubytovanie",
        destination: "/cennik",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
