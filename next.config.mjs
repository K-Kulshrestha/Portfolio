/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const config = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/K-Kulshrestha.github.io',
};

export default config;
