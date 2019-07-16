/**
 * child-process.test
 *
 * @author GuoBin on 2019-06-30
 */
'use strict';
const {spawn, exec, execFile, fork} = require('child_process');
const util = require('util');

/**
 * 测试执行命令
 */
function testSpawn() {
  const ls = spawn('ls', ['-lh', '/usr']);

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`子进程退出, 代码为:${code}`);
  });
}

/**
 * 使用子进程执行任务
 */
function testProcessSend() {
  const childTask = fork(process.cwd() + '/process-send.js');
  childTask.on('message', (msg) => {
    console.log('收到消息' + msg);
  });
  childTask.on('close', () => {
    console.log('子进程结束');
  });
}

testProcessSend();

/**
 * 调用bash命令
 * @returns {PromisePro<void>}
 */
async function testCommand() {
  const {stdout, stderr} = await util.promisify(exec)('ls');
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
}

testCommand().then();
