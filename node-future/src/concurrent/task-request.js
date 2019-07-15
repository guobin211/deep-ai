/**
 * task-request
 *
 * @author GuoBin on 2019-07-11
 */
const request = require('request');

request.get('http://139.198.13.158:9120/sysDict/findTsysDict?type=USET_TYPE', function (err, response, body) {
  if (err) {
    console.log(err);
  }
  console.log(response.headers);
  console.log(body);
});
