/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // serverRoute: 'http://localhost:7777'
    serverRoute: 'https://nestjs-cloudstorage.onrender.com'
  },
  images: {
    domains: ['localhost','https://aquamarine-travesseiro-8b2493.netlify.app','https://nestjs-cloudstorage.onrender.com'],
  },
}

module.exports = nextConfig
