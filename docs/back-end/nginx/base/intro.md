---
sidebarDepth: 2
---

## 介绍

+ 参考
  + [Nginx 中文文档](https://www.nginx.cn/doc/)
  + [菜鸟教程 安装配置](https://www.runoob.com/linux/nginx-install-setup.html)
+ 俄罗斯人 Igor Sysoev 编写的轻量级Web服务器
+ 不仅是一个高性能的 HTTP 和反向代理服务器，同时也是一个 IMAP/POP3/SMTP 代理服务器
+ 占用很少的系统资源，能支持更多的并发连接，达到更高的访问效率
+ 支持热部署，启动速度特别快，还可以在不间断服务的情况下对软件版本或配置进行升级，即使运行数月也无需重新启动
+ 在微服务的体系之下，Nginx 正在被越来越多的项目采用作为网关来使用，配合 Lua 做限流、熔断等控制




## 安装

+ Centos 环境下：
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


## 常用命令

```sh
# 检查配置文件是否有误
nginx -t /path/to/nginx.conf

# 重新加载配置文件
nginx -s reload

# 启动
nginx -c /path/to/nginx.conf

# 关闭
nginx -s stop
```