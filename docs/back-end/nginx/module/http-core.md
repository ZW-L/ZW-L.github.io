---
sidebarDepth: 2
---

## 简介

+ [ngx_http_core_module](http://nginx.org/en/docs/http/ngx_http_core_module.html)
+ Nginx 的核心配置项，最外层为 `http` 块，内部重要的块有：
  + `server`：虚拟服务器，可以配置多个，提供多个 Web 服务；内部重要的块有：
    + `location`：URI 匹配规则，可以配置多个，优先级从上到下
+ 该模块的很多配置项能在多个块中设置，外层的定义会被内层覆盖，如 `root` 选项：
  + 在 http 中：设置所有请求的根目录
  + 在 server 中：设置请求该服务器的根目录
  + 在 location 中：设置请求特定服务器的特定 URI 的根目录
  + 在 location 的 if 中：条件判断，与在 location 中一样




## 配置项

+ 以下为仅能在 http 中配置的选项
  + [server](#server)：虚拟服务器，可以配置多个，提供多个 Web 服务

|参数|说明|
|-|-|-|
|include|
|keepalive_timeout|
|log_format|配置日志格式
|access_log|日志存储路径
|sendfile|
|gzip|是否开启 gzip 压缩
|server|可以有多个，每个都能配置一个独立的站点，其内部用 `location` 控制路径的访问
|upstream|上游服务器组，用于配置负载均衡，并可指定各个服务器的权重



### root

+ 设置请求的根目录
```
Syntax:	root path;
Default: html;
Context: http, server, location, if in location
```

+ 可以使用变量 `$document_root`, `$realpath_root`
+ 在 location 中设置
```sh
server {
  listen  80;
  server_name  abc.com;

  location / {
    root /srv/www;
    index index.html index.htm;
  }
}
# http://abc.com/index.html -> /srv/www/index.html
# http://abc.com/index.js -> /srv/www/index.js
```


### default_type

+ 设置返回内容的默认 MIME-type
```
Syntax:	default_type mime-type;
Default: default_type text/plain;
Context: http, server, location
```


### limit_rate

+ 限制请求速率，以 byte/s 为单位；默认为 0，表示不限制速率
```
Syntax:	limit_rate rate;
Default: limit_rate 0;
Context: http, server, location, if in location
```

+ 该限制是针对单个请求的，当客户端同时打开两个请求时，速率会是该值的两倍
+ 在 (1.17.0) 前，该设置在变量 `$limit_rate` 中
```sh
server {
  if ($slow) {
    set $limit_rate 4k;
  }
  ...
}
```

+ 但 (1.17.0) 之后，可以使用 map 对不同情况的映射
```sh
map $slow $rate {
    1     4k;
    2     8k;
}

limit_rate $rate;
```





## server

+ 设置虚拟服务器，可以设置多个服务器，搭建多个 Web 服务
+ 以下为仅能在 server 中配置的选项
  + `listen`：设置监听的端口
  + `server_name`：设置服务器名称(或一组服务器名称)
  + [location](#location)：设置 URI 匹配规则(或多个 URI 规则)


### listen

+ 服务器监听的端口
```
Syntax:	特别多可选配置
Default: listen *:80 | *:8000;
```


### server_name

+ 设置服务器名称(或一组服务器名称)
```
Syntax:	server_name name ...;
Default: server_name "";
```




## location

+ location 定义 URI 路径的匹配规则，可以有多个，并且按照从上到下的顺序匹配
+ 切记，将优先级高的 location 放在前面
+ 以下为仅能在 location 中配置的选项
  + `alias`



### alias

+ 为请求 URI 设置别名
```
Syntax:	alias path;
Default: —
Context: location
```

+ alias 不会发生重定向(不同于 rewrite)
```sh
location /i/ {
  alias /data/w3/images/;
}
# 当请求 /i/top.gif 时，会发送 /data/w3/images/top.gif
```

+ 有些时候使用 root 比 alias 要好
```sh
# bad
location /images/ {
  alias /data/w3/images/;
}

# good
location /images/ {
  root /data/w3;
}
```