const { override, addWebpackResolve } = require('customize-cra');

module.exports = override(
  addWebpackResolve({
    // Ensure openapi-fetch is properly resolved
    fallback: {
      // Fix MetaMask SDK async-storage issue (React Native dependency not needed for web)
      '@react-native-async-storage/async-storage': false,
    },
    // Add alias to ensure proper module resolution
    alias: {
      // This helps webpack properly resolve the default export
    },
  }),
  (config) => {
    // Configure webpack to properly handle ESM modules
    config.module.rules.push({
      test: /node_modules[\\/]openapi-fetch[\\/]/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // Ensure proper handling of .mjs files
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    // Silence noisy third-party source map warnings so real issues stand out
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      (warning) =>
        typeof warning === 'string'
          ? warning.includes('Failed to parse source map')
          : warning.message && warning.message.includes('Failed to parse source map'),
    ];

    return config;
  }
);

