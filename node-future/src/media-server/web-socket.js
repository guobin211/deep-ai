/**
 * web-socket
 *
 * @author GuoBin on 2019-07-22
 */
'use strict';
const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');

const clients = new Set();
const img = '/Users/guobin/idea/deep-ai/node-future/src/media-server/';
let log = 1;

const wss = new WebSocket.Server({
  port: 12011,
  perMessageDeflate: {
    zlibDeflateOptions: {
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
  }
});

wss.on('connection', (ws) => {
  // web连接上
  clients.add(ws);
  ws.on('message', (data) => {
    // 收到数据
    console.log('收到消息');
    if (log < 10) {
      console.log(data.length);
      log++;
      fs.writeFileSync(img + log + '.png', data.toString());
    }
  })
});
