## 简介

**应用场景：**

+ 一键配置开发环境
+ Web 应用自动化打包和发布
+ 自动化测试和持续集成
+ 部署服务器生产环境和调整数据库或其他的后台应用
+ 从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境

**理解：**

&emsp;&emsp;简单来说，Repository(仓库)是官方或相关网站提供的 `docker hub`，里面有大量供下载的镜像，也可以将自己打包的镜像发布；Image(镜像)用于创建容器；Container(容器)则是使用虚拟化技术生成的具有独立端口、进程、文件的微型服务器(也可理解为互不影响的集装箱)。

&emsp;&emsp;Docker 不仅拥有虚拟机的优点，而且其体积小、启动快、节省硬件资源，拥有持续集成、版本控制、可移植性、隔离性和安全性等优势，还可以使用编排工具批量跨机器操作容器。

+ Image：镜像。类似操作系统的安装镜像，但是 `Docker` 中的镜像是分层的，可复用的。
+ Container：容器。镜像运行时的一个载体，可理解为由镜像生成的实例；依托 Docker 的虚拟化技术，给容器创建了独立的端口、进程、文件等，与宿主机隔离；容器与宿主机之间可以进行 `port`、`volumes`、`network` 等的通信。
+ Repository：仓库。类似 `git` 仓库，同样有仓库名、`tag`，是一个庞大的镜像仓库，也可自定义镜像推送到仓库供他人使用。


## 安装

**Linux 版本；** CentOS-7-x86_64-1810

1. 安装 `docker-ce`

```powershell
# 1.安装一些必要的系统工具：
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
# 2.添加软件源信息：
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 3.更新 yum 缓存：
sudo yum makecache fast
# 4.安装 Docker-ce：
sudo yum -y install docker-ce
# 5.查看安装是否成功
docker --version
# 6.启动 Docker 后台服务
sudo systemctl start docker
```

2. 镜像加速

```powershell
# 1.进入目录
cd /etc/docker
# 2.打开/创建 daemon.json 文件
vi daemon.json
# 3.添加源
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
# 其他源
# https://registry.docker-cn.com (Docker 官方中国区)
# http://hub-mirror.c.163.com (网易)
# https://docker.mirrors.ustc.edu.cn (ustc)

# 4.重启 Docker 后台服务
systemctl restart docker
# 5.运行示例
docker run hello-world
```

## 删除

使用以下命令删除 `Docker`：

```powershell
sudo yum remove docker-ce
sudo rm -rf /var/lib/docker
```


## 常用命令

查看 [完整命令](docs/appendix/docker-command.md)

+ `docker pull`：拉取镜像
+ `docker images`：查看本地镜像
+ `docker create`：创建容器
+ `docker start`：运行容器
+ `docker ps`：查看容器
+ `docker exec`：在容器中执行命令
+ `docker run`：快捷创建容器
+ `docker stop`：暂停容器
+ `docker restart`：重启容器
+ `docker rm`：删除容器
+ `docker commit`：创建镜像
+ `docker push`：推送镜像

## 问题解决

1. 安装后，运行 `docker run hello-world` 报错：`Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?`

```powershell
systemctl daemon-reload # 重新加载守护进程
service docker restart # 重启 docker 服务
service docker status # 查看 docker 状态，若看到 Active: active(running) 则成功
docker run hello-world # 重新运行
```

2. `docker start` 启动容器后 `docker ps` 查看不到运行的容器

&emsp;&emsp;docker 的命令执行完成就会自动退出，为了防止线程退出，可以使用一些参数或命令将线程挂起：

```powershell
docker run -d -t --name nodeContainer ubuntu:18.04 /bin/bash
```


## 技巧

1. 快速启动容器，并映射到指定的端口

```powershell
docker run -d -p 3000:5000 training/webapp python app.py
```

**以上命令将会:**

+ 运行容器(容器名为 `training/webapp`)
+ 在容器内部执行命令创建一个 python 服务器(`python app.py`)
+ 指定后台运行容器(`-d`)
+ 将容器的 5000 端口映射为主机的 3000 端口(`-p 3000:5000`)



## 安装应用

**Node：**

```powershell
apt-get update
apt-get install wget
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

# 安装完之后可能当前 session 读不到 nvm 命令，可以 exit 之后再进入终端环境
nvm install 8.0.0
node -v
```

**Nginx：**

**MySQL：**

**MongoDB：**


## dockerfile

