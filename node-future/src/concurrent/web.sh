#!/usr/bin/env bash

# web页面调10个api接口,api并发100 * 10 = 1000
ab -c 1000 -n 1000 http://139.198.13.158:9096/index.html

#ab -c 200 -n 400 http://localhost:6067/#/login

#ab -c 1000 -n 1000 https://www.baidu.com/