/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true, // Desativa a otimização de imagens para exportação estática
  },
}

module.exports = nextConfig
