#!/usr/bin/env bash

# 更新apt
sudo apt update -y &&

# 安装nodejs
sudo apt-get install nodejs &&

# 查看版本
node -v
