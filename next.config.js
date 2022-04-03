const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['user-images.githubusercontent.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

module.exports = nextConfig;
