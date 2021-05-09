const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  future: {
    webpack5: true,
  },
  poweredByHeader: false,
  webpack: (config) => {
    config.node.global = false;

    return config;
  },
  images: {
    domains: ['via.placeholder.com', 'randomuser.me'],
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        handleImages: ['jpeg', 'png', 'webp'],
      },
    ],
  ],
  nextConfig
);
