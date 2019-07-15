'use strict';
const net = require('net');

const client = net.createConnection({port: 3001}, () => {
  console.log('connected to server port 3001');
  client.write('i am client \r\n');
});

client.on('data', (buff) => {
  console.log(buff.toString());
  client.end(() => {
    console.log('client 断开链接');
  });
});

client.on('end', () => {
  console.log('disconnected from server');
});
