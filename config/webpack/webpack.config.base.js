const fs = require('fs');
const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackBarPlugin = require('webpackbar');
require('dotenv').config(); // Add vars from .env file to process.env

const appPackage = require('../../package.json');

const isDev = process.env.NODE_ENV !== 'production';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const paths = {
  appRoot: resolveApp('.'),
  appPublic: resolveApp('public'),
  entry: './src/index.tsx',
  buildOutput: path.join(__dirname, '..', '..', 'build'),
  publicPath: process.env.CDN_URL || '/',
  tsConfig: resolveApp('tsconfig.json'),
  recordsPath: resolveApp('node_modules/.cache/webpack-records/records.json'),
};

const baseConfig = {
  entry: paths.entry,
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '~src': path.resolve(__dirname, '../../src'),
      '~components': path.resolve(__dirname, '../../src/components'),
      '~utils': path.resolve(__dirname, '../../src/utils'),
      '~assets': path.resolve(__dirname, '../../src/assets'),
      '~public': path.resolve(__dirname, '../../public'),

      // Ensure that lodash isn't included twice
      // 'lodash-es': 'lodash',
      lodash: 'lodash-es',
    },
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    path: paths.buildOutput,
    publicPath: paths.publicPath,

    // FUTURE: remove this when upgrading to webpack 5
    futureEmitAssets: true,
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },

      // SCRIPTS => Linting
      {
        test: /\.(mjs|jsx?|tsx?)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            options: {
              cache: true,
              eslintPath: 'eslint',
              formatter: 'react-dev-utils/eslintFormatter',
              resolvePluginsRelativeTo: __dirname,

            },
            loader: 'eslint-loader',
          },
        ],
      },

      // TS => ts-loader (cached) => babel (cached, threaded)
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        use: [
          // This runs in reverse order, so last entry is actually first
          {
            loader: 'thread-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          { // Only cache ts-loader as it's the heaviest process, and because babel-loader includes its own cache
            loader: 'cache-loader',
          },
          {
            loader: 'ts-loader',
            options:
            {
              happyPackMode: true,
              configFile: paths.tsConfig,
            },
          },

        ],
      },
      // JS => babel (cached, threaded)
      {
        test: /\.(mjs|jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },

      // CSS => css-loader => MiniCssExtractPlugin
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // Extra resources (Like images and fonts)
      {
        oneOf: [
          // RASTER IMAGES
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'file-loader',
            options: {
              name: isDev ? 'static/media/[name].[ext]' : 'static/media/[name].[contenthash:8].[ext]',
              esModule: false,
            },
          },

          // VECTOR IMAGES (xml based)
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: {
              loader: 'file-loader',
              options: {
                mimetype: 'image/svg+xml',
                name: isDev ? 'static/media/[name].[ext]' : 'static/media/[name].[contenthash:8].[ext]',
              },
            },
          },
          // Last resort loader
          {
            loader: 'file-loader',
            exclude: [/\.(mjs|jsx?|tsx?)$/, /\.html$/, /\.json$/, /\.css$/],
            options: {
              name: isDev ? 'static/media/[name].[ext]' : 'static/media/[name].[contenthash:8].[ext]',
              esModule: false,
            },
          },
        ],
      },

    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            safari10: true,
          },
          output: {
            // Fixes emojis and regex
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: shouldUseSourceMap,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
      name: false,
      maxInitialRequests: 20,
      minSize: 0,
      maxSize: 256000, // Disable this line to better analyze bundling
      cacheGroups: {
        vendorReact: { // React is split separately because it shouldn't update often and it is quite large
          test: /[\\/]node_modules[\\/](react|react-dom|react-router.*)[\\/]/,
          name: 'vendorsReact',
          priority: 1,
        },
        vendorCommon: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendorsCommon',
          priority: -1,
        },
      },
    },
    // Keep the runtime chunk separated to enable long term caching
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
  },
  plugins: [
    new WebpackBarPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: paths.tsConfig,
        diagnosticOptions: {
          syntactic: true,
        },
      },
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: '/',
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          const newManifest = manifest;
          newManifest[file.name] = file.path;
          return newManifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter(
          fileName => !fileName.endsWith('.map'),
        );

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/*',
          to: '[name].[ext]',
          globOptions: {
            ignore: ['index.html', '**.png', '**.ico'],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.appPublic, 'index.html'),
      cache: false,
    }),
    new FaviconsWebpackPlugin({
      logo: path.join(paths.appPublic, 'logo512.png'),
      prefix: 'static/media/',
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'DEBUG',
    ]),
  ],
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

module.exports = {
  base: baseConfig,
  appPackage,
  paths,
  shouldUseSourceMap,
};
