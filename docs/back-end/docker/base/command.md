---
sidebarDepth: 2
---

## 参考

+ [Docker - base command](https://docs.docker.com/engine/reference/commandline)
+ [从 0 开始了解 Docker](https://juejin.im/post/5ad3172c5188257ddb10109a#heading-0)
+ [菜鸟教程 - Docker](https://www.runoob.com/docker/docker-tutorial.html)



## 镜像操作

### docker pull

+ 从镜像仓库拉取镜像
+ 命令
```sh
# 拉取镜像到本地，名字格式：用户仓库名/命名空间:标签
docker pull zhiwen93/node:v1
```


### docker search

+ 从 Docker Hub 查找镜像
+ 命令
```sh
# 查找镜像
docker search httpd
```


### docker images

+ 查看本地镜像列表
+ 命令
```sh
# 显示本地镜像列表
docker images
```


### docker commit

+ 从现有容器的更改中创建一个新的镜像
+ 命令
```sh
# 指定镜像描述、作者、镜像名或 hash、新镜像名称
docker commit -m="my image" -a="zhiwen93" e218ed zhiwen93/node:v1
```


### docker build

+ 从 Dockerfile 构建镜像
+ 命令
```sh
# -t 后面为新镜像名称，并要求指定 Dockerfile 路径
docker build -t zhiwen93/node:v1 ./dockerfile/path
```


### docker tag

+ 修改镜像标签
+ 命令
```sh
docker tag 860c27 zhiwen93/node:v2
```


### docker push

+ 将镜像或仓库推送到镜像仓库(需要注册 docker hub，并在命令行内登录)
+ 命令
```sh
# 登录
docker login

# 登出
docker logout

# 推送本地镜像到仓库
docker push zhiwen93/node:v1
```


### docker rmi

+ 删除指定镜像(需要暂停并删除使用了该镜像的容器)
+ 命令：
```sh
# 删除镜像
docker rmi centos:7

# 强制删除镜像
docker rmi -f centos:7
```




## 容器操作

### docker ps

+ 查看容器列表
+ 命令
```sh
# 显示正在运行的容器
docker ps

# 显示所有容器，包括暂停的
docker ps -a
```



### docker stats

+ 查看容器消耗的资源
+ 命令：
```sh
# 仅显示运行中的容器
docker stats

# 显示所有容器
docker stats -a

# 显示指定容器
docker stats 7da8c1 da4612
```


### docker create

+ 创建新容器(并不会运行)
+ 命令
```sh
# 从指定镜像创建新容器，镜像不存在时会从远程拉取
docker create centos:7

# 指定新容器名
docker create --name centos7 centos:7
```


### docker start

+ 启动容器
+ 命令
```sh
# 启动容器并保持运行
docker start centos7 /bin/bash
```


### docker run

+ 快捷创建并启动容器(相当于 create 和 start 结合)，**常用**
+ 命令
```sh
docker run [-itdpv] [--name [name]] <image> [command]

# i: 
# t: 
# d: 指示容器在后台运行(不进入容器)
# p: 接 端口映射，如 8080:3000(主机端口:容器端口)
# v: 接 目录映射，如 /data/jenkins_home:/var/jenkins_home(主机目录:容器目录)
# --name: 接 容器名，否则 Docker 会使用随机名字
# image: 使用的镜像
# command: 创建容器后执行的 shell 命令
```

+ 参考
```sh
# 创建并启动容器，默认会进入容器内(若从容器内退出会暂停容器)
docker run -it --name centos7 centos:7 /bin/bash

# 添加 -d 参数，容器启动后在后台运行，不会进入容器
docker run -itd --name centos7 centos:7 /bin/bash

# 带 /bin/bash 命令是为了在容器开启一个 shell，用来将容器挂起，否则容器执行完任务后会自动暂停
docker run -itd --name centos7 centos:7

# 一些容器创建后会开启一个进程将容器挂起，容器不会自动暂停
docker run -itd --name jenkins jenkins/jenkins

# 添加端口映射，这样外网可以访问容器
docker run -itd --name jenkins -p 9000:8080 jenkins/jenkins

# 添加目录映射，该目录被宿主机和容器共享，修改文件十分方便
docker run -itd --name jenkins -p 9000:8080 -v /data/jenkins_home:/var/jenkins_home jenkins/jenkins
```

::: tip 备注：
+ docker 使用 iptables 作端口转发(其实在安装 docker 时会捆绑安装 iptables)
+ [官方](https://docs.docker.com/network/iptables/)不建议修改 iptables 的 DOCKER 链，建议修改 DOCKER-USER 链去实现一些限制
:::


### docker stop

+ 暂停容器
+ 命令
```sh
# 暂停指定容器
docker stop 7da8c1

# 指定时间后暂停容器，秒为单位
docker stop -t 60 7da8c1
```


### docker restart

+ 重启容器
+ 命令
```sh
docker restart 7da8c1

# 指定时间后暂停容器，秒为单位
docker restart -t 60 7da8c1
```


### docker rm

+ 删除容器(要先暂停容器)
+ 命令
```sh
# 删除容器
docker rm 7da8c1

# 强制删除容器
docker rm -f 7da8c1

# 删除指定链接
docker rm -l 7da8c1

# 删除与容器关联的卷
docker rm -v 7da8c1
```




## 容器交互

### docker attach

+ 进入指定容器，但退出后会关闭容器
+ 参考
```sh
docker attach 7da8c1
```


### docker exec

+ 进入指定容器，退出后不会关闭容器
+ 命令
```sh
docker [-it] <name> <command>

# i:
# t:
# name: 容器名，可以是 hash
# command: shell 命令
```

+ 参考
```sh
# 初始化 jenkins 时，可以将 cat 命令传入 jenkins 容器来获取密码
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword

# 通过 pm2 运行一个 node 服务(该容器已安装 pm2)
docker exec api pm2 start /srv/www/app.js

# 进入容器，创建一个 shell
docker exec -it 7da8c1 /bin/bash
```


### docker cp

+ 在宿主机和容器之间拷贝文件(命令在宿主机中使用，不要求容器启动)
+ 参考
```sh
# 将宿主机文件拷贝至指定容器的目录下
docker cp ~/hello.txt centos7:/root

# 将指定容器的文件拷贝至宿主机
docker cp centos7:root/hello.txt ~/
```