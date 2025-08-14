import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [new URL('https://assets.example.com/account123/**')],
    formats: ['image/avif', 'image/webp'],
  },
}
export default nextConfig;
