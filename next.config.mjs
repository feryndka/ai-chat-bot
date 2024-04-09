/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdns.klimg.com' }
    ]
  }
};

export default nextConfig;
