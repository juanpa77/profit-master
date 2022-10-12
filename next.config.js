/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    images: {
      unoptimized: true
    },
  webpack: (
      config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
      return config
    }
}



module.exports = nextConfig
