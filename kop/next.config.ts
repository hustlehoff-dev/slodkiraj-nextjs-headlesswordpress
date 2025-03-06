import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "slodkirajchojnice.pl",
        pathname: "/cms/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
