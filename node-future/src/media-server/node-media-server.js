/**
 * node-media-server
 *
 * @author GuoBin on 2019-07-18
 */
'use strict';
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1936,
    chunk_size: 10000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 3303,
    allow_origin: '*'
  },
  auth: {
    play: true,
    publish: true,
    secret: '123456'
  }
};

const nodeMediaServer = new NodeMediaServer(config);

nodeMediaServer.on('preConnect', (id, args) => {
  console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nodeMediaServer.on('postConnect', (id, args) => {
  console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nodeMediaServer.on('doneConnect', (id, args) => {
  console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nodeMediaServer.on('prePublish', (id, args) => {
  console.log('[NodeEvent on prePublish]', `id=${id}  args=${JSON.stringify(args)}`);
});

nodeMediaServer.on('postPublish', (id, args) => {
  console.log('[NodeEvent on postPublish]', `id=${id} args=${JSON.stringify(args)}`);

});

nodeMediaServer.on('donePublish', (id, streamPath, args) => {
  console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);

});

nodeMediaServer.on('prePlay', (id, streamPath, args) => {
  console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);

});

nodeMediaServer.on('postPlay', (id, streamPath, args) => {
  console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);

});

nodeMediaServer.on('donePlay', (id, streamPath, args) => {
  console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);

});
nodeMediaServer.run();