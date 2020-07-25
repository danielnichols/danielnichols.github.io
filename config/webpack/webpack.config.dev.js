const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge.smart(baseConfig.base, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: false,
    }),
    new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
    new CaseSensitivePathsPlugin(),
  ],
});
