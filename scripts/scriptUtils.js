const childProcess = require('child_process');

class RuntimeError extends Error {
  constructor(message = '', reason = '', ...params) {
    super(message, ...params);
    this.message = message;
    this.reason = reason;
    this.name = 'RuntimeError';
    this.date = new Date();
  }
}

/**
 *
 * @param {string} command The command to run
 * @param {string[]|string[][]} args Extra args to be added. If a given argument is an array of strings, it will be treated as an argument with an additional variable. Single letter arguments are treated as flags
 */
const assembleCommand = (command = '', args = []) => {
  const processedArgs = [];
  args.forEach(arg => {
    if (Array.isArray(arg)) {
      processedArgs.push(` ${arg[0].length > 1 ? ' --' : ' -'}${arg[0]} ${arg[1]}`);
    } else {
      processedArgs.push(` ${arg.length > 1 ? ' --' : ' -'}${arg}`);
    }
  });
  let finalCommand = command;
  processedArgs.forEach(arg => { finalCommand = finalCommand.concat(arg); });
  return finalCommand;
};

const pids = [];

/**
 * Runs a child process asynchronously, resolving or rejecting the promise after execution
 *
 * @param {string} command The command to run for the child process
 * @param {string[]|string[][]} args Extra args to be applied to the process
 */
const execChildAsync = async (command, args = []) => {
  const finalCommand = assembleCommand(command, args);
  console.log(`Command: ${finalCommand}`);

  const process = childProcess.exec(finalCommand);
  pids.push(process.pid);
  console.log(`pid: ${process.pid}`);

  // Handle process output
  process.stdout.on('data', chunk => {
    console.log(`${process.pid}: ${chunk}`);
  });
  process.stderr.on('data', chunk => {
    console.error(`${process.pid}: ${chunk}`);
  });

  // Handle process exited
  const handleExit = (resolve, reject) => {
    process.on('close', code => {
      if (code !== 0) {
        reject('Child process exited with non-zero exit code');
      } else { resolve(); }
    });
  };
  return new Promise(handleExit);
};

const killSubprocesses = () => {
  console.log('Terminating subprocesses...');
  pids.forEach(pid => {
    console.log(`Terminating process with pid ${pid}`);
    try {
      process.kill(pid);
    } catch (err) {
      console.log(`Unable to kill process! Maybe it's already closed?`);
      console.log(JSON.stringify(err, null, 2));
    }
  });
};

module.exports = {
  execChildAsync,
  killSubprocesses,
  RuntimeError,
};
