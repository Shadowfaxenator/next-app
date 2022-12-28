/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
        runtime: 'edge',
      },
  reactStrictMode: false,
}

module.exports = nextConfig
