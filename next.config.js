/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true
  },
  images:{
    domains: ['github.com']
  }
}

module.exports = nextConfig
