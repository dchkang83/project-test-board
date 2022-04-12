// const { DefinePlugin } = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");

// module.exports = {
//   webpack: function override(config, env) {
//     config.module = {
//       rules: [
//         {
//           test: /\.js$|\.jsx$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader",
//             options: {
//               presets: [
//                 "@babel/preset-env",
//                 "@babel/preset-react",
//                 "@babel/preset-typescript",
//               ],
//             },
//           },
//         },
//       ],
//     };

//     config.plugins = [
//       new HtmlWebpackPlugin({
//         template: path.resolve(__dirname, "public/index.html"),
//         origin: "http://localhost:3000",
//       }),
//       new DefinePlugin({}),
//     ];
//     return config;
//   },
// };


const webpack = require('webpack');
// const TsconfigPathsPlugins = require('tsconfig-paths-webpack-plugin');
const JsconfigPathsPlugins = require('jsconfig-paths-webpack-plugin');

module.exports = {
  webpack: function override(config, _) {
    for (let i = 0; i < config.plugins.length; i++) {
      const current = config.plugins[i]
      if (current instanceof webpack.DefinePlugin) {
        config.plugins[i] = new webpack.DefinePlugin({
          ...current,
          'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost/api'),
          'process.env.ONLY_DEV': JSON.stringify(process.env.NODE_ENV),
        })
      }
    }

    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [
          ...config.resolve.plugins,
          JsconfigPathsPlugins,
          // TsconfigPathsPlugins,
        ]
      },
      plugins: [
        ...config.plugins,
      ]
    }
  }
}