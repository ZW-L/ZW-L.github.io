---
sidebarDepth: 2
---

## 介绍

+ 参考
  + [Nginx 官方文档](http://nginx.org/en/docs/)
  + [Nginx 中文文档](https://www.nginx.cn/doc/)
  + [菜鸟教程 安装配置](https://www.runoob.com/linux/nginx-install-setup.html)
  + [Nginx可以做什么？看完这篇你就懂了](https://blog.csdn.net/qq_36125138/article/details/84144932)
  + [Nginx 相关介绍(Nginx是什么?能干嘛?)](https://www.cnblogs.com/wcwnina/p/8728391.html)
+ 俄罗斯人 Igor Sysoev 编写的轻量级Web服务器
+ 不仅是一个高性能的 HTTP 和反向代理服务器，同时也是一个 IMAP/POP3/SMTP 代理服务器
+ 占用很少的系统资源，能支持更多的并发连接，达到更高的访问效率
+ 支持热部署，启动速度特别快，还可以在不间断服务的时对软件版本或配置进行升级，即使运行数月也无需重新启动
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
nginx -t

# 查看版本
nginx -v

# 查看已安装模块
nginx -V

# 重新加载配置文件(平滑加载)
nginx -s reload

# 启动
nginx -c

# 关闭
nginx -s stop
```


## 配置简介

### 全局配置

+ `user`：使用 Nginx 服务的用户(注意用户权限，否则会产生 403 forbidden)
+ `worker_processes`：工作进程数，一般与 CPU 保持一致
+ `err_log`：错误日志路径
+ `pid`：Nginx 服务启动时的进程 pid


### 内置模块

|模块|描述|
|-|-|
|Http|核心模块，最重要最常用的部分
|events|模块
|HttpLog|处理日志
|HttpGzip|支持在线实时压缩输出数据流
|HttpProxy|代理请求，通常用于实现跨域、配置负载均衡
|HttpRewrite|允许使用正则表达式改变 URI，配置重新匹配 location 或重定向等




### 第三方模块





### 变量

+ 包含内置变量和自定义变量
+ 变量名都使用 `$` 前缀，引用也是
+ 使用 `set` 自定义变量，并且它们仅能被自身或内部块引用
```
set $variable_name value
```

+ 内置变量列表

|变量|描述|
|-|-|
|<Badge>Nginx 控制</Badge>||
|$limit_rate|用于限制连接速率
|$nginx_version|nginx 版本号
|<Badge>请求相关</Badge>||
|$args|GET 请求中的参数，该变量只可以被修改
|$arg_PARAMETER|GET 请求中变量名 PARAMETER 参数的值
|$is_args|如果 $args 设置则为 "?"，否则为 ""
|$query_string|与 $args 相同
|$body_bytes_sent|传送页面的字节数
|$content_length|请求头中的 Content-Length 字段
|$content_type|请求头中的 Content-Type 字段
|$cookie_COOKIE|cookie_COOKIE 的值
|$document_root|当前请求在 root 指令中指定的值
|$document_uri|与 $uri 相同
|$uri|请求中的当前URI，不包括协议和主机名不带请求参数，参数位于 args<br>不同于浏览器传递的 args 和 request_uri 的值<br>可以通过内部重定向，或者使用 index 指令进行修改
|$host|请求中的主机头(Host)字段，值为小写，不包含端口<br>如果请求中的主机头不可用或者空，则为处理请求的 server 的 server_name 值
|$hostname|机器名使用 gethostname 系统调用的值
|$request_filename|当前连接请求的文件路径，由 root 或 alias 指令与 URI 请求生成
|$request_body|包含请求的主要信息<br>在使用 proxy_pass 或 fastcgi_pass 指令的 location 中比较有意义
|$request_body_file|客户端请求主体信息的临时文件名
|$request_completion|请求成功时设为 "OK"，如果请求未完成或不是一系列请求中最后一部分则设为空
|$request_method|客户端请求的方法，通常为 GET 或 POST<br>0.8.20 及之前的版本中，值为 main request 设置的值<br>如果当前请求是一个子请求，并不使用这个当前请求的方法
|$request_uri|包含一些客户端请求参数的原始 URI，它无法修改，请查看$uri更改或重写URI
|$scheme|请求所用的协议，如 http/https
|$http_HEADER|HTTP 请求头中的内容，HEADER 为 HTTP 请求中的内容转为小写<br> - 变为 _，如：$http_user_agent(User-Agent)
|$sent_http_HEADER|HTTP 响应头中的内容，HEADER 为HTTP 响应中的内容转为小写<br> - 变为 _，如：$sent_http_cache_control, $sent_http_content_type
|<Badge>客户端相关</Badge>||
|$binary_remote_addr|二进制码形式的客户端地址
|$remote_addr|客户端的 IP 地址
|$remote_port|客户端的端口(port)
|$remote_user|已经通过 Auth Basic Module 验证的用户名
|<Badge>服务器相关</Badge>||
|$server_addr|服务器地址，在完成一次系统调用后可以确定这个值<br>如果要绕开系统调用，则必须在 listen 中指定地址并且使用 bind 参数
|$server_name|服务器名称
|$server_port|请求到达服务器的端口号
|$server_protocol|请求使用的协议，通常是 HTTP/1.0 或 HTTP/1.1




## 排错

+ [解决nginx 403forbidden问题](https://blog.csdn.net/yishuifengxiao/article/details/80574769)