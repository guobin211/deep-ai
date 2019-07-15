/**
 * concurrent
 *
 * @author GuoBin on 2019-07-11
 */

const request = require('request');
const fs = require('fs');
const {exec, execSync, execFile, execFileSync, spawn, spawnSync} = require('child_process');
const options = {
  maxConcurrent: 200,
  maxTimes: 1000,
  api: 'http://139.198.13.158:9120/sysDict/findTsysDict?type=USET_TYPE',
  home: 'http://139.198.13.158:9096/#/login'
};
const res = '/Users/guobin/idea/node-c/lib/node-future/src/concurrent/result.txt';

function main(config) {
  let complete = false;
  const stream = fs.createWriteStream(res);
  const terminal = spawn('ab', ['-c', config.maxConcurrent, '-n', config.maxTimes, config.home]);
  terminal.stderr.on('data', (data) => {
    console.error(data.toString());
    if (data.toString().includes('Finished')) {
      complete = true;
    } else if (data.toString().includes('close')) {
      complete = true;
    }
  });
  terminal.stdout.on('data', (data) => {
    console.log(data.toString());
    if (complete) {
      stream.write(data.toString());
    }
  });
  terminal.on('close', () => {
    stream.close();
  });
  terminal.on('error', (e) => {
    console.log(e.message);
  })
}

main(options);