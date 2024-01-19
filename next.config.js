/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    serverRoute: 'http://localhost:7777'
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
