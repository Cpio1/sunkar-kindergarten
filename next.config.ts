import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [420, 640, 828, 1080, 1440, 1920],
    imageSizes: [96, 160, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    // Два корневых layout (kk и ru), поэтому страница 404 задаётся отдельно.
    globalNotFound: true,
  },
};

export default nextConfig;
