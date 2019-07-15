#!/usr/bin/env bash

# -T {
#   text/plain
#   application/json
#   application/x-www-form-urlencoded
# }

ab -c 100 -n 1000  -p post.json -T 'application/json' http://139.198.13.158:9120/routingMonitoring/getMungBeanTradingMarketPage
