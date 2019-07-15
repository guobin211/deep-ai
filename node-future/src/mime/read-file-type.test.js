'use strict';
const path = require('path');
const ReadFileType = require('./read-file-type');

const filePath = path.resolve(__dirname, '../../assets', 'record.webm');
const targetPath = '/Users/guobin/idea/node-c/lib/node-future/assets/record.mp4';


try {
  // ReadFileType.transformWebm(filePath, targetPath);
  const type = ReadFileType.getType(filePath);
  const extension = ReadFileType.getExtension(type);
  console.log(type);
  console.log(extension);
} catch (e) {
  console.log(e);
}
