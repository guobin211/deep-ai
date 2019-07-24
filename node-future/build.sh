#!/usr/bin/env bash

# 查看版本号 10.16.0
node -v &&

# 安装依赖
npm install &&

# 打包项目
npm run build &&

# docker镜像
sudo docker image build -t guobin/project-web . &&

# 运行服务
sudo docker run -d --name=project -p 8889:8889 guobin/project-web
