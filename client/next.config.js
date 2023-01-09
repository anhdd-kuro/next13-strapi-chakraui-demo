/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    loader: "default",
    domains: ["localhost", "picsum.photos"],
  },
};

module.exports = nextConfig;
