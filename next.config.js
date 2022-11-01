module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net', 'api.mapbox.com'],
  },
  i18n: {
    locales: ['en-US', 'sv'],
    defaultLocale: 'en-US',
  },
  output: 'standalone',
}
