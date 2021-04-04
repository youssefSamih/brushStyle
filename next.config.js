const nextConfig = {
  poweredByHeader: false,
  webpack: (config) => {
    config.devtool = 'source-map';
    config.node.global = false;

    return config;
  },
};
