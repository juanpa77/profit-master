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
    },
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'en'
    }
}



module.exports = nextConfig
