/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['external-content.duckduckgo.com', 'lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
