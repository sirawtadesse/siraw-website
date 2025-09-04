/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,
  },
  images: {
    domains: ['sirawdev.com.et', 'localhost'],
    unoptimized: true, // If you're having image optimization issues
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://sirawdev.com.et' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
  // If you're having issues with static exports
  output: 'standalone',
};

module.exports = nextConfig;
