/**
 * post
 *
 * @author GuoBin on 2019-07-19
 */
'use strict';
const request = require('request');

let id = 25;

function send(id) {
  const req = request.post('http://139.198.13.158:9120/routingMonitoring/BuyGreenBeansV2', {
    form: {
      id: id,
      userId: 4,
      transactionPwd: 123456
    }
  }, (error, response, body)=>{
    if (error) {
      console.error(error);
    }
    console.log(response && response.statusCode);
    req.end();
  });
}

for (let i = 1000; i < 1200; i++) {
  id = id + i;
  send(id);
}
