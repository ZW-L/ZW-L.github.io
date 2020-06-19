---
sidebarDepth: 2
---


## 简介

+ 一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明
+ Dockerfile 的指令每执行一次都会在 docker 上新建一层，过多无意义的层，会造成镜像膨胀过大



## 指令

### FROM

+ 定制的镜像是基于某个镜像的，这个是唯一一个必须的指令
```dockerfile
FROM centos
```



### RUN

+ 执行命令行命令，在构建镜像(docker build)时执行，可以被命令行输入的覆盖
+ 建议使用 `&&` 连接多条命令，避免产生多个层
```dockerfile
# shell 格式
RUN ./test.php dev offline

# exec 格式
RUN ["./test.php", "dev", "offline"]

# 多条命令在同一个层
RUN yum install wget \
  && wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz" \
  && tar -xvf redis.tar.gz
```



### CMD

+ 与 RUN 类似，但在运行容器(docker run)时执行，可以被命令行输入的覆盖
+ 定义多条时只会执行最后一条
+ 常用于给 ENTRYPOINT 传参
```dockerfile
# shell 格式
CMD ./test.php dev offline

# exec 格式
CMD ["./test.php", "dev", "offline"]

# 为 ENTRYPOINT 指令指定的程序提供默认参数
CMD ["param_1", "param_2", ...]  
```



### ENTRYPOINT

+ 类似 CMD，但是它的参数是固定的，不能被命令行手动输入的覆盖
+ 定义多条时只会执行最后一条
+ 常结合 CMD 使用
```dockerfile
# 启动 nginx 主进程
ENTRYPOINT ["nginx", "-c"]
```



### SHELL

+ 用于覆盖默认 shell；Linux 上默认值为 `["/bin/sh", "-c"]`，Windows 上默认值为 `["cmd", "/S", "/C"]`
+ 可以出现多次，会覆盖所有先前的 SHELL 指令，并影响所有后续的指令
```dockerfile

```



### COPY

+ 复制文件或目录
```dockerfile
COPY test.txt relativeDir/
```


### ADD

+ 与 COPY 类似
```dockerfile

```



### ARG

+ 定义环境变量，只在构建镜像时有效(docker build)，可以被命令行输入的覆盖
```dockerfile
# 定义 node 版本
ARG NODE_VERSION 7.2.0
```



### ENV

+ 定义环境变量
```dockerfile
# 定义 node 版本
ENV NODE_VERSION 7.2.0
RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
  && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc"
```



### VOLUME

+ 定义匿名数据卷，在启动容器时挂载到指定的数据卷，可以被命令行输入的覆盖
+ 可用于避免容器重启或数据扩大时丢失数据
```dockerfile
VOLUME <路径>
VOLUME ["<路径1>", "<路径2>"...]
```



### EXPOSE

+ 声明随机映射的端口，当启动容器带上 `-P` 参数时，会从里面随机映射端口
```dockerfile
EXPOSE <端口1> [<端口2>...]
```



### USER

+ 切换用户/用户组，接下来的命令将以该身份执行
```dockerfile
USER user
USER user:group
```



### WORKDIR

+ 切换工作目录，类似 `cd` 命令，接下来的命令将在该目录下执行
```dockerfile
WORKDIR /path/to/workdir
```



### ONBUILD

+ 镜像触发器，所构建的镜像被用做其它镜像的基础镜像时触发
```dockerfile
ONBUILD COPY hello.txt /root
```



### HEALTHCHECK

+ 指定方式用于让 Docker 检测容器是否在工作
```dockerfile
# 每五分钟检查一次：且确保服务器能在 3 秒内为站点的主页提供服务
HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
```



### STOPSIGNAL

+ 设置将被发送到容器退出的系统调用信号
```dockerfile
STOPSIGNAL signal
```



### LABEL

+ 添加元数据
+ 推荐将所有的元数据通过一条指令指定，以免生成过多的中间镜像
```dockerfile
LABEL version="1.0" description="A description about this image." by="zhiwen"
```



### MAINTAINER

+ 维护者信息
```dockerfile
MAINTAINER ZhiWen Li <zhiwen@163.com>
```