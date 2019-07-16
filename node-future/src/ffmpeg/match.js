/**
 * match
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';

const fs = require('fs');
const PNG = require('pngjs').PNG;
const PixelMatch = require('pixelmatch');

const file1 = '/Users/guobin/idea/deep-ai/node-future/assets/video/00101.png';
const file2 = '/Users/guobin/idea/deep-ai/node-future/assets/video/00105.png';
const out = '/Users/guobin/idea/deep-ai/node-future/assets/diff.png';

/**
 * compare image
 */
function main() {
  try {
    const img1 = PNG.sync.read(fs.readFileSync(file1));
    const img2 = PNG.sync.read(fs.readFileSync(file2));
    const {width, height} = img1;
    const diff = new PNG({width, height});
    PixelMatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.1});
    fs.writeFileSync(out, PNG.sync.write(diff));
    console.log('success');
  } catch (e) {
    console.log(e.message)
  }
}

main();