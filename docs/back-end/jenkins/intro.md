## 简介

+ [Jenkins](https://www.jenkins.io/)是一款持续集成工具
+ 对比 Travis
+ 常用功能：
  + WebHook 触发器
  + SSH 登录
  + 执行 Shell
  + 邮件通知






## 安装

### 本地安装

+ Mac 系统下



::: tip 备注：
+ 不建议本地安装，因为它会占用本机资源，可能会影响你的其他工作
+ 本地安装只能本机登录，不能协作
+ 无法触发 Gitee 的 WebHook，因为 Gitee 需要提供一个服务器地址发起 POST 请求(但可以手动触发构建)
:::


### 服务器安装

+ 安装
```sh
$ yum install jenkins -y
$ service jenkins status  # 查看状态
$ service jenkins [start|stop|restart]  # 启动|暂停|重启
```

::: tip 备注：
+ 若开启了防火墙，需要开放 8080 端口(jenkins 服务默认占用的端口)
:::



### 使用 Docker

+ 最推荐的方式
+ 安装：
```sh
# 拉取官方最新镜像
$ docker pull jenkins/jenkins
# 运行镜像，映射至宿主的 9000 端口
$ docker run -d --name jenkins -p 9000:8080 -v /data/docker/jenkins_home:/var/jenkins_home jenkins/jenkins
# 查看运行状态
$ docker ps
```




## 配置

### 初始化

1. 浏览器登录 `47.113.123.231:9000`(主机:jenkins 端口)
2. 等待初始化，直至提示输入密码，拷贝路径，使用 docker 命令获取:
```sh
$ docker exec jenkins cat /var/lib/jenkins_home/secrets/initialAdminPassword
```
3. 安装默认的插件，等待插件安装完成
4. 设置用户名和密码
5. Done













## 应用

### 配置 Gitee 构建 Vue 应用

+ 关联 Gitee 仓库
+ 添加 WebHook
+ 配置构建环境
+ SSH 登录服务器
+ 执行 Shell
+ 发送邮件通知








## 问题解决





::: tip 备注：
+ 构建失败若找不到原因，可先清空工作空间再重试
:::