const fs = require('fs');

const publicPath = '/Users/guobin/idea/deep-ai/node-future/public/';

const fileBuff1 = fs.readFileSync(publicPath + 'pic1.png');
const fileBuff2 = fs.readFileSync(publicPath + 'pic2.png');

function compareBuff(buff1, buff2) {
  const diff = new Map();
  const buff3 = Buffer.alloc(buff1.length);
  for (let i = 0; i < buff1.length; i++) {
    if (buff1[i] !== buff2[i]) {
      diff.set(i, {a: buff1[i], b: buff2[i]});
    }
    buff3[i] = buff1[i];
  }
  console.log(buff3);
  console.log(buff3[1]);
  fs.writeFileSync(publicPath + 'pic3.png', buff3, {
    flag: 'w',
    encoding: 'utf8'
  });
  return diff;
}

const res = compareBuff(fileBuff1, fileBuff2);
console.log(res.values());