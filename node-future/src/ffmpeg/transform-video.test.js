'use strict';
const { transCodeFile } = require('./transform-video');
const inputFile = '/Users/guobin/idea/node-c/lib/node-future/assets/record.webm';
const outDIR = '/Users/guobin/idea/node-c/lib/node-future/assets/ffmpeg';

transCodeFile(inputFile, outDIR, (process) => {
  console.log(process);
}, (bool) => {
  console.log(bool);
});


console.log('test');
