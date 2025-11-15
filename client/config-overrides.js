const { override, addWebpackResolve } = require('customize-cra');

module.exports = override(
  addWebpackResolve({
    // Ensure openapi-fetch is properly resolved
    fallback: {
      // Add any necessary fallbacks if needed
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

    return config;
  }
);

