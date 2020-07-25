// This is the additional config used for a webpack dev server
const { paths } = require('./webpack.config.base');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = {
  compress: true,
  // clientLogLevel: 'none',
  contentBase: paths.appPublic,
  watchContentBase: true,
  hot: true,
  transportMode: 'ws',
  injectClient: true,
  publicPath: '/',
  // quiet: true,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  https: protocol === 'https',
  host,
  overlay: true,
  historyApiFallback: {
    // Paths with dots should still use the history fallback.
    // See https://github.com/facebook/create-react-app/issues/387.
    disableDotRule: true,
    verbose: true,
  },
  writeToDisk: false,
  inline: true,
  lazy: false,
};
