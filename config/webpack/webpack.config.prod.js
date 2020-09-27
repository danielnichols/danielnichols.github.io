const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const FailOnErrorsPlugin = require('fail-on-errors-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const SriPlugin = require('webpack-subresource-integrity');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig.base, {
  mode: 'production',
  bail: true,

  devtool: baseConfig.shouldUseSourceMap ? 'source-map' : false,

  output: {
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[name].[contenthash].chunk.js',
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|jsx?|tsx?)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'webpack-strip-block',
            options: {
              start: 'PROD-STRIP-START',
              end: 'PROD-STRIP-END',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    mergeDuplicateChunks: true,
    usedExports: true,
  },
  plugins: [
    new SriPlugin({
      hashFuncNames: ['sha512'],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode:
        process.env.OPEN_ANALYZER === 'true' ? 'server' : 'static',
      openAnalyzer: process.env.OPEN_ANALYZER === 'true',
      reportFilename: './analysis/bundleReport.html',
      generateStatsFile: true,
      statsFilename: './analysis/stats.json',
    }),
    new BundleStatsWebpackPlugin({
      outDir: 'analysis',
      baseline: true,
    }),
    new FailOnErrorsPlugin({
      failOnErrors: true,
      failOnWarnings: false,
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
});
