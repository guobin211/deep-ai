'use strict';
const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error: \n${err.stack}`);
  server.close();
});

server.on('message', (msg, info) => {
  console.log(msg.toString());
  console.log(info);
  if (msg.toString().includes('close')) {
    server.close();
  }
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind('3010', () => {
  console.log('dgram server: port 3010');
});

server.on('close', () => {
  console.log('server is closed');
});
