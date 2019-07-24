# 这个镜像基于nginx
FROM nginx
# 在nginx镜像中/usr/share/nginx目录下新建project文件夹
RUN mkdir /usr/share/nginx/project
RUN mkdir /usr/share/nginx/project/dist
RUN rm -rf /etc/nginx/nginx.conf
# 宿主机本目录nginx.conf复制到镜像/etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/project/dist
# 开放端口8889
EXPOSE 8889

# 生成镜像，-t将这个镜像命名，最后的那个.不要漏掉
# sudo docker image build -t guobin/project-web .

# 用这个镜像生成名为project的容器，本机8889端口映射到容器8889并后台运行
# sudo docker run -d --name=project -p 8889:8889 guobin/project-web

