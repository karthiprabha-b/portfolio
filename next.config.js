/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows smooth rendering of local assets without external image servers
  },
};

module.exports = nextConfig;

