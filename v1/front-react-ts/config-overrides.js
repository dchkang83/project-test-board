const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '~': path.resolve(__dirname, 'src'),
  }),
);


// const webpack = require('webpack');
// // const JsconfigPathsPlugins = require('jsconfig-paths-webpack-plugin');
// const TsconfigPathsPlugins = require('tsconfig-paths-webpack-plugin');

// module.exports = {
//   webpack: function override(config, _) {
//     for (let i = 0; i < config.plugins.length; i++) {
//       const current = config.plugins[i]
//       if (current instanceof webpack.DefinePlugin) {
//         config.plugins[i] = new webpack.DefinePlugin({
//           ...current,
//           'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost/api'),
//           'process.env.ONLY_DEV': JSON.stringify(process.env.NODE_ENV),
//         })
//       }
//     }

//     return {
//       ...config,
//       // resolve: {
//       //   ...config.resolve,
//       //   plugins: [
//       //     ...config.resolve.plugins,
//       //     // JsconfigPathsPlugins,
//       //     TsconfigPathsPlugins,
//       //   ]
//       // },
//       // plugins: [
//       //   ...config.plugins,
//       // ]
//     }
//   }
// }