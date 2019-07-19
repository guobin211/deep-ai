/**
 * client
 *
 * @author GuoBin on 2019-07-18
 */
'use strict';
const redis = require('redis');

function main() {
  try {
    const redisClient = redis.createClient({
      host: '127.0.0.1',
      port: 6379
    });

    redisClient.on('error', (err) => {
      console.log(err);
    });

    redisClient.on('message', (data) => {
      console.log(data);
    });

    redisClient.set('person', JSON.stringify({name: 'jack', age: 22}), (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    })
  } catch (e) {
    console.log(e.message);
  }
}

main();