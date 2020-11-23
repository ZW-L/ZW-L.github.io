## 介绍

+ 简介
  + 拥有虚拟机的优点，而且其体积小、启动快、节省硬件资源
  + 拥有持续集成、版本控制、可移植性、隔离性和安全性等优势
  + 还可以使用编排工具批量跨机器操作容器
+ 概念
  + **Image**：镜像。类似操作系统的安装镜像，但是 `Docker` 中的镜像是分层的，可复用的
  + **Container**：容器。镜像运行时的一个载体，可理解为由镜像生成的实例；依托 Docker 的虚拟化技术，给容器创建了独立的端口、进程、文件等，与宿主机隔离；容器与宿主机之间可以进行 `port`、`volumes`、`network` 等的通信
  + **Repository**：仓库。类似 `git` 仓库，同样有仓库名、`tag`，是一个庞大的镜像仓库，也可自定义镜像推送到仓库供他人使用，如官方镜像仓库 [Docker Hub](https://hub.docker.com/)

::: tip 备注
+ Docker 和宿主系统共用硬件设施，只是一个和宿主系统隔离的沙箱容器
+ 简单来说，镜像和容器就是类和实例的关系
:::




## 安装配置

+ 安装 `docker-ce`
```sh
# 安装一些必要的系统工具：
yum install -y yum-utils device-mapper-persistent-data lvm2
# 添加软件源信息：
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 更新 yum 缓存：
yum makecache fast
# 安装 Docker-ce：
yum -y install docker-ce
# 查看安装是否成功
docker --version
# 启动 Docker 后台服务
systemctl start docker
```

+ 镜像加速
```sh
# 进入目录
cd /etc/docker
# 打开/创建 daemon.json 文件
vim daemon.json
# 添加源(不要带注释)
{
  "registry-mirrors": [
    "http://hub-mirror.c.163.com",        # 网易
    "https://cr.console.aliyun.com",      # 阿里云专属镜像源，需要登录配置生成(速度很快，配置也很简单)
    "https://registry.docker-cn.com",     # Docker 官方中国区
    "https://docker.mirrors.ustc.edu.cn", # 中科大
  ]
}

# 重启 Docker 后台服务
systemctl restart docker
```

+ 删除 Docker
```sh
yum remove docker-ce
rm -rf /var/lib/docker
```




## 问题解决

+ 安装提示：package docker-ce-3:19.03.11-3.el7.x86_64 requires containerd.io >= 1.2.2-3 but none of...
```sh
# 解析：需要更高版本的 containerd.io
# 1.通过阿里云镜像库安装符合 docker-ce 最新版本的 containerd.io
yum install -y https://mirrors.aliyun.com/docker-ce/linux/centos/7/x86_64/edge/Packages/containerd.io-1.2.13-3.2.el7.x86_64.rpm
# 2.再继续安装 docker-ce
yum -y install docker-ce docker-ce-cli
```

+ 运行容器时报错：Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?...
```sh
# 解析：需要重启 docker 守护进程
systemctl daemon-reload   # 重新加载守护进程
service docker restart    # 重启 docker 服务
service docker status     # 查看 docker 状态，若看到 Active: active(running) 则成功
docker run hello-world    # 重新运行
```

+ 启动容器后没有提示或查看不到运行的容器
```sh
# 解析：docker 的命令执行完成就会自动退出，为了防止线程退出，可以使用一些参数或命令将线程挂起
docker run -dt --name nodeContainer ubuntu:18.04 /bin/bash
```





## 应用场景

+ 一键配置开发环境
+ Web 应用自动化打包和发布
+ 自动化测试和持续集成
+ 部署服务器生产环境和调整数据库或其他的后台应用
+ 从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境