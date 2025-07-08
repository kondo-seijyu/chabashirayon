/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Vercelデプロイ時にLintエラーでビルドを止めないようにする
    ignoreDuringBuilds: true,
  },
  experimental: {},
}

export default nextConfig