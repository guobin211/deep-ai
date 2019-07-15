'use strict';
const dgram = require('dgram');

const message = Buffer.from('hello udp server!');

const client = dgram.createSocket('udp4');

client.connect(3010, 'localhost', () => {
  console.log('connect');
  client.send(message);
});

client.on('message', (buff) => {
  console.log(buff);
});

client.on('error', (err) => {
  console.log(err);
});

client.on('close', () => {
  console.log('client is closed');
});

setTimeout(() => {
  client.send(Buffer.from('i will close'));
  client.close();
}, 2000);
