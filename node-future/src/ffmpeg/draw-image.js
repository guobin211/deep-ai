/**
 * draw-image
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';
const gm = require('gm');

const code = 'f9g2';
const out = '/Users/guobin/idea/deep-ai/node-future/assets/code.png';

function main() {
  gm(90, 30, '#ffffff').font("Helvetica.ttf", 28).drawText(10, 24, code)
    .stroke('#f08300')
    .write(out, err => {
    if (!err) {
      console.log('success');
    } else {
      console.log(err.message);
    }
  })
}

main();