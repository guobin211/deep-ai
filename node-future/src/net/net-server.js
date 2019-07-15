'use strict';
const net = require('net');
const Tools = require('../utils/tools');
console.log(Tools.getAttributes(net));

const str = '{"status":"1","count":"2","info":"OK","infocode":"10000","lives":[{"province":"湖南","city":"长沙市","adcode":"430100","weather":"阵雨","temperature":"25","winddirection":"东北","windpower":"7","humidity":"78","reporttime":"2018-05-06 16:00:00"},{"province":"湖南","city":"长沙县","adcode":"430121","weather":"阵雨","temperature":"25","winddirection":"东北","windpower":"7","humidity":"78","reporttime":"2018-05-06 16:00:00"}]}';

// 标准http响应 header和body用换行隔开
const responseBase = `HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 445
Connection: close
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: *

{"status":"1","count":"2","info":"OK","infocode":"10000","lives":[{"province":"湖南","city":"长沙市","adcode":"430100","weather":"阵雨","temperature":"25","winddirection":"东北","windpower":"7","humidity":"78","reporttime":"2018-05-06 16:00:00"},{"province":"湖南","city":"长沙县","adcode":"430121","weather":"阵雨","temperature":"25","winddirection":"东北","windpower":"7","humidity":"78","reporttime":"2018-05-06 16:00:00"}]}
`;

const server = net.createServer((Socket) => {
  console.log('client connection');
  Socket.on('data', (buff) => {
    console.log(buff.toString());
    Socket.write(responseBase);
    Socket.end();
  });
  Socket.on('end', () => {
    console.log('end');
  });
});
server.on('error', (err) => {
  console.log(err.code);
  console.error(err.message);
});
server.listen(3001, 'localhost', 1, () => {
  console.log('net server port 3001');
});

function handleHttp(str) {
  console.log(Buffer.from(str).length);
  return Buffer.from(str).length;
}

