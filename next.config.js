/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['p16-sign-va.tiktokcdn.com', 'lf16-tiktok-common.ttwstatic.com'],
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    TIKTOK_CLIENT_KEY: process.env.TIKTOK_CLIENT_KEY,
    TIKTOK_CLIENT_SECRET: process.env.TIKTOK_CLIENT_SECRET,
  },
}

module.exports = nextConfig
