## docker 部署流程

### 端口号

```text

   项目名 project (可自行替换)
   端口号 8889 （ 修改方式: 修改 Dockerfile, nginx.conf 中的端口号）

```

### 文件
```bash
    # docker配置
    Dockerfile
    # nginx配置
    nginx.conf
    # 发布前安装依赖
    publish.sh
    # 构建发布
    build.sh
    
```
