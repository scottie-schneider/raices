const withPlugins = require("next-compose-plugins");
const withOffline = require('next-offline');
const withImages = require('next-images')
const withCSS = require("@zeit/next-css");
const withFonts = require('next-fonts');

const nextConfig = {
  target: 'serverless',
  env: {
    GOOGLE_MAPS: process.env.GOOGLE_MAPS
  },
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

module.exports = withPlugins([withCSS, withFonts, withImages, withOffline], nextConfig);
