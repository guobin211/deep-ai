/**
 * capture
 *
 * @author GuoBin on 2019-07-15
 */
'use strict';
const fs = require('fs');
const { spawn } = require('child_process');
const ffmpegPath = '/usr/local/bin/ffmpeg';

const video = '/Users/guobin/idea/node-c/lib/node-future/assets/video/1.mp4';
const out = '/Users/guobin/idea/node-c/lib/node-future/assets/video/%05d.png';

const terminal = spawn(ffmpegPath, ['-i', video, '-r', 10, '-f', 'image2', out]);

terminal.stderr.on('data', (data) => {
  console.log(data.toString());
});
terminal.stdout.on('data', (data) => {
  console.log(data.toString());
});

terminal.on('close', (code) => {
  console.log('close with code: ' + code)
});

function deleteUnused(p, num) {
  for (let i = 0; i < num; i++) {
    const file = '/Users/guobin/idea/node-c/lib/node-future/assets/video/' + (p + num) + '.png';
  }
}