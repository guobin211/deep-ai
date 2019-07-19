/**
 * token
 *
 * @author GuoBin on 2019-07-18
 */
'use strict';

const crypto = require('crypto');
const fs = require('fs');
const redis = require('redis');
const redisClient = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});
const secret = fs.readFileSync('./.rsa');
const user = { username: 'jack', password: 'admin888', uuid: 'jack20190718000001'};

/**
 * 生成token存放到redis
 * @param userData
 * @returns {string}
 */
function buildToken(userData) {
  try {
    const token = crypto.createHmac('sha256', secret).update(userData.name + userData.uuid + new Date().toDateString()).digest('hex');
    redisClient.set(token, new Date().getTime().toString(), (err, res) => {
      if (err) {
        throw new Error('redis save token error')
      }
    });
    return token;
  } catch (e) {
    console.log(e.message);
  }
}

/**
 * 从redis中查找token
 * @param token
 */
function checkToken(token) {
  redisClient.get(token, (err, reply) => {
    if (err) {
      throw new Error('redis find token error');
    }
    if (reply) {
      if (new Date().getTime() > parseInt(reply)) {
        console.log('删除过期的 token');
        console.log('token 过期');
      } else {
        console.log('token 校验通过');
      }
    } else {
      console.log('token 错误')
    }
  })
}

function main() {
  const tk = '6cbdc06df7d12cb55a4146dfcd60b9f53d6988179beb71bc2eb7b930d402133f';
  try {
    const token = buildToken(user);
    console.log(token);
  } catch (e) {
    console.log(e);
  }

  checkToken(tk);
}

main();