/**
 * cut-image
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';
const fs = require('fs');
const gm = require('gm');

const sourceFile = '/Users/guobin/idea/deep-ai/node-future/assets/video/00099.png';
const outFile = '/Users/guobin/idea/deep-ai/node-future/assets/gm.png';

function main() {
  return new Promise(resolve => {
    gm(sourceFile).fill('#f08300').stroke('#f0001a').drawCircle(460, 420, 460, 520)
      .resize(1280, 720).write(outFile, (err) => {
      if (!err) {
        resolve();
      } else {
        console.log(err.message)
      }
    });
  })
}

main().then(() => {
  console.log('success');
  // const file = fs.readFileSync(outFile);
});