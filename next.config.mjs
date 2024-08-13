/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Only include basePath if deploying to a GitHub Pages or custom path
  basePath: process.env.DEPLOYMENT_ENV === 'github-pages' ? '/K-Kulshrestha.github.io/Portfolio' : '',
};

export default nextConfig;
