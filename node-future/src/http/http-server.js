/**
 * http-server
 *
 * @author GuoBin on 2019-07-04
 */
const http = require('http');
const {readFileSync} = require('fs');
const mime = require('mime');
const html = readFileSync('./index.html');
const css = readFileSync('./index.css');

/**
 * 处理http请求
 * @param url
 * @param response
 */
const handleStatic = (url, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', mime.getType(url) + ';charset=utf-8');
  response.setHeader('Version', '12.5');
  response.write(css);
  response.end();
};

/**
 *
 * @param request
 * @param response
 */
const handleRequest = (request, response) => {
  const { method, url } = request;
  console.log(method);
  console.log(url);
  if (url === '/' || url === '/index.html') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.setHeader('Version', '12.5');
    response.write(html);
    response.end();
  } else if (url === '/index.css') {
    handleStatic(url, response);
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.setHeader('Version', '12.5');
    response.write(new Date().toString());
    response.end();
  }
};

const server = http.createServer(handleRequest);

server.listen(3003, 'localhost', () => {
  console.info(`server is listen http:localhost:3003`);
});

