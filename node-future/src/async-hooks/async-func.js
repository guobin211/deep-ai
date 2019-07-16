/**
 * async-func
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';
const http = require('http');

function getJson() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('getJson');
    }, 100)
  })
}

async function getData() {
  try {
    const data = await getJson();
    return data.length > 0 ? data : 'empty data';
  } catch (e) {
    console.log(e.message);
  }
}

getData().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log('complete')
});