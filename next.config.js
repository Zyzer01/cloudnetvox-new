/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle JSON files
    config.module.rules.push({
      test: /\.json$/,
      use: "json-loader",
      type: "javascript/auto",
    });

    return config;
  },
  output: "standalone",
};

module.exports = nextConfig;
