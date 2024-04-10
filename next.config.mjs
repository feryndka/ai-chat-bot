/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdns.klimg.com' },
      { hostname: 'fakestoreapi.com' }
    ]
  }
};

export default nextConfig;
