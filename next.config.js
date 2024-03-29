/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // serverRoute: 'http://localhost:7777'
    serverRoute: 'https://nestjs-cloudstorage.onrender.com'
  },
  images: {
    domains: ['localhost','https://nestjs-cloudstorage.onrender.com'],
  },
}

module.exports = nextConfig
