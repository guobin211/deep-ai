/**
 * http-client.test
 *
 * @author GuoBin on 2019-07-11
 */
const http = require('http');
const url = require('url');
const qs = require('querystring');
const request = require('request');

function post(href, formUrl) {
  console.time('api-start');
  request.post(href, {form: formUrl}, (err, httpResponse, body) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(httpResponse.headers.date);
    console.timeEnd('api-start');
    httpResponse.on('error', (e) => {
      console.error(e.message);
    });
    httpResponse.on('close', () => {
      console.log('close');
    });
    console.log(body);
  })
}

const form = {
  page: 1,
  pageSize: 10
};

// post('http://127.0.0.1:9001/root/', form);

const api = 'http://139.198.13.158:9120/routingMonitoring/getPersonalTradingRecord';
const params = {
  pageSize: 5,
  page: 1,
  userId: 4
};

post(api, params);

