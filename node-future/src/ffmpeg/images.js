/**
 * images
 *
 * @author GuoBin on 2019-07-16
 */

'use strict';
const images = require('images');

const sourceFile = '/Users/guobin/idea/deep-ai/node-future/assets/video/00099.png';
const out = '/Users/guobin/idea/deep-ai/node-future/assets/images-out.png';

function main() {
  try {
    images(sourceFile).size(800).save(out, { quality: 50});
  } catch (e) {
    console.log(e.message);
  }
}

main();