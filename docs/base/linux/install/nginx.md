## 简介

+ Centos 下安装


## 安装

```sh
# 添加 nginx 存储库
sudo yum install epel-release
# 安装
sudo yum install nginx
# 启动
sudo systemctl start nginx
# 查看是否安装成功
ps -ef | grep nginx
# 浏览器访问服务器 ip 地址查看
```