const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const optsDev = require('../config/webpack/webpack.config.dev');
const optsProd = require('../config/webpack/webpack.config.prod');
const serverOpts = require('../config/webpack/webpack.config.server');
const {
  execChildAsync,
  RuntimeError,
  killSubprocesses,
} = require('./scriptUtils');

const isDev = process.env.NODE_ENV !== 'production';

const opts = isDev ? optsDev : optsProd;

const port = process.env.PORT || 8080;

/**
 * Promise based timer
 *
 * @param {number} time Time in ms to wait
 */
const wait = time => new Promise(resolve => setTimeout(() => {
  resolve();
}, time));

// Prepares env for dev
const prepare = async () => {
  // clean build
  console.log(chalk.magenta.bold('\nStep: Prepare'));
  await execChildAsync('yarn run clean:build')
    .catch(err => {
      throw new RuntimeError('Unable to clean build directory', err.message);
    });
};

/**
 * Runs the dev server and returns once the first compile is complete
 */
const watch = async () => {
  console.log(chalk.magenta.bold('\nStep: Watch Source Files'));
  // This promise will only resolve once the before hook has been called.
  const p = new Promise(resolve => {
    serverOpts.before = (app, server, compiler) => {
      compiler.hooks.done.tap('finishCompile', async compilation => {
        // Gets called once compiler has finished first run
        await wait(100);
        console.log('\n');
        resolve(compilation);
      });
    };
  });
  if (!isDev)serverOpts.hot = false;

  const server = new WebpackDevServer(webpack(opts), serverOpts);
  server.listen(port, '0.0.0.0', err => {
    if (err) {
      console.error(err);
    }
  });
  await p;
};

const runDevServer = async () => {
  console.log(chalk.yellowBright.bold('Begin task execution'));
  try {
    await prepare();
    await watch();
  } catch (err) {
    console.error(chalk.red.bold(`
ERROR: One of the steps has failed:
       ${err.message}
       ${err.reason}`));
  }
};

runDevServer();

process.on('beforeExit', () => {
  console.log(chalk.blueBright.bold('\nProcess Exiting'));
  killSubprocesses();
});
