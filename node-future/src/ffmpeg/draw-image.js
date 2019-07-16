/**
 * draw-image
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';
const gm = require('gm');

const code = '2f3e';
const out = '/Users/guobin/idea/deep-ai/node-future/assets/code.png';

function main() {
  gm(200, 400, '#ffffff').font("Helvetica.ttf", 12).drawText(10, 50, code).write(out, err => {
    if (!err) {
      console.log('success');
    } else {
      console.log(err.message);
    }
  })
}

main();