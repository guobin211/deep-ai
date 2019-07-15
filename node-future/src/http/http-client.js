/**
 * http-client
 *
 * @author GuoBin on 2019-07-04
 */
const http = require('http');
const url = require('url');
const qs = require('querystring');

function postJson(url, data) {
  const request = http.request({
    href: url, method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }, (response) => {
    const res = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      res += chunk.toString();
    });
    response.on('close', () => {
      console.log('response close');
    });
    response.on('end', () => {
      return res;
    });
  });
  request.write(data);
}

function getJson() {
  http.get('http://nodejs.org/dist/index.json', (res) => {
    const {statusCode} = res;
    const contentType = res.headers['content-type'];
    const reg = /^application\/json/;
    let error;
    if (statusCode !== 200) {
      error = new Error(`request failed code: ${statusCode}`);
    } else if (!reg.test(contentType)) {
      error = new Error('contentType error: ' + contentType);
    }
    if (error) {
      console.log(error.message);
      res.resume();
    }
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (data) => {
      console.log(data);
      rawData += data;
    });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        // console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`get error ${e.message}`);
  });
}

getJson();

function parseUrl() {
  const str = '/user?name=jack&age=22';
  console.log(url.parse(str, true));
}

function httpRequest() {
  const HOST = 'www.baidu.com';
  const PORT = 80;
  const options = {
    hostname: HOST,
    port: PORT,
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  const request = http.request(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', chunk => {
      console.log(chunk.toString());
    });
  });
  request.on('error', (error) => {
    console.log(error.message);
  });
  request.write(qs.stringify({'msg': '百度'}));
}

