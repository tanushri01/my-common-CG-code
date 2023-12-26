/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  rewrites: async () => [
    {
      source: '/',
      destination: '/home',
    },
    {
      source: '/auth',
      destination: '/auth/signin',
    },
  ],
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig;
