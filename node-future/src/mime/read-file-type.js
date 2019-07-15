'use strict';
const fs = require('fs');
const mime = require('mime');

class ReadFileType {
  constructor() {}
  /**
   * 获取Blob文件对象 mime类型
   * @param filePath
   * @returns {string}
   */
  getType(filePath) {
    return mime.getType(filePath);
  }

  /**
   * 获取扩展名
   * @param type
   * @returns {string}
   */
  getExtension(type) {
    return mime.getExtension(type);
  }

  /**
   * webm文件格式转换mp4
   * @param src
   * @param target
   */
  transformWebm(src, target) {
    console.time('转换耗时:');
    const inputStream = fs.createReadStream(src);
    const outputStream = fs.createWriteStream(target);
    inputStream.on('data', (buff) => {
      outputStream.write(buff);
    });
    inputStream.on('close', () => {
      outputStream.close();
      console.timeEnd('转换耗时:');
    });
  }
}

module.exports = new ReadFileType();
