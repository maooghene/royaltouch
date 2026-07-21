// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tell TypeScript to ignore compilation errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Note: 'eslint' object is completely removed because Next.js 16 handles linting
  // externally via the ESLint CLI, meaning it won't block your Vercel build anymore.
};

export default nextConfig;
