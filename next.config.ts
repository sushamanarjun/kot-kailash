import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kotkailash.com',
      },
      {
        protocol: 'https',
        hostname: 'kotkailash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
};

export default nextConfig;
