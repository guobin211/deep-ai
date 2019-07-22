const net = require('net')
const http = require('http')
const url = require('url')

function request(url) {
	return new Promise(function (resolve, reject) {
		const req = http.get(url, function (res) {
			let data = '';
			res.resume();
			res.on('data', function (buff) {
				data += buff.toString();
			});
			res.on('end', function () {
				resolve(data)
			});
			res.on('error', function (reason) {
				reject(reason)
			});
		})
	})

}

request('http://www.baidu.com').then(res => console.log(res), function (reason) {
	console.log(reason)
})