/**
 * test
 *
 * @author GuoBin on 2019-06-30
 */
const { spawn } = require('child_process');

const terminal = spawn('node', ['-v']);

terminal.stdout.on('data', (buff) => {
  console.log(buff.toString());
});

terminal.stdout.on('close', () => {
  console.log('close');
});

terminal.stderr.on('data', (err) => {
  console.log(err.toString());
});