'use strict';
const VIDEO_RESOLUTION = {
  Universal240: '320*240',
  Universal480: '648*480',
  MD: '640*360',
  MSD: '720*480',
  SD: '1024*600',
  HD: '1280*720',
  FHD: '1920*1080'
};

/**
 * 获取视频封面图
 * @param videoPath
 * @param timestamp 封面时间戳位置 '00:00:10'
 * @param outFile
 * @returns {*[]}
 */
function getVideoPicture(videoPath, timestamp, outFile) {
  return ['-ss', timestamp, '-i', videoPath, '-f', 'image2', '-y', outFile];
}

/**
 * 压缩视屏
 * @param videoPath
 * @param resolution 目标分辨率
 * @param outFile
 * @returns {*[]}
 */
function zipVideo(videoPath, resolution, outFile) {
  return ['-i', videoPath, '-b:v', '64k', '-r', 29.97, '-c:v', 'libx264', '-s', resolution ? resolution : VIDEO_RESOLUTION.SD,
    '-strict', -2, outFile];
}

module.exports = {
  getVideoPicture: getVideoPicture,
  zipVideo: zipVideo
};
