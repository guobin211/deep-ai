#!/usr/bin/env bash

# -c 并发
# -n 总数
# -s 超时时间10s

ab -c 300 -n 600 http://139.198.13.158:9120/sysDict/findTsysDict?type=USET_TYPE