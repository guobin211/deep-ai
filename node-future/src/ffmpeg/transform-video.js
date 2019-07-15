'use strict';
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const ffmpegPath = '/usr/local/bin/ffmpeg';

/**
 * 转换视频文件
 * @param file
 * @param target
 * @param processCallback
 * @param completeCallback
 */
function transCodeFile(file, target, processCallback, completeCallback) {
  if (!fs.existsSync(target)) {
    fs.mkdir(target, (err) => {
      console.error(`创建失败: ${err.message}`);
    });
  }
  let outPath = path.join(target, path.basename(file));
  outPath = outPath.substr(0, outPath.length - path.extname(outPath).length) + '.mp4';
  const ffmpeg = spawn(ffmpegPath, ['-i', file, '-y', '-r', 30, outPath]);
  ffmpeg.stdout.on('data', (data) => {
    console.log(`stdout: ${data.toString()}`);
  });
  // ffmpeg进度信息
  ffmpeg.stderr.on('data', (data) => {
    processCallback(data.toString());
  });
  // 完成
  ffmpeg.on('close', (code) => {
    console.log(`退出代码${code}`);
    completeCallback(code === 0);
  });
}


module.exports = exports = {
  transCodeFile: transCodeFile
};
