/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/K-Kulshrestha.github.io',
};
