---
sidebarDepth: 2
---

## 简介

+ [ngx_http_upstream_module](http://nginx.org/en/docs/http/ngx_http_upstream_module.html)
+ 配置上游服务器，可被以下配置引用：
  + `proxy_pass`
  + `fastcgi_pass`
  + `uwsgi_pass`
  + `scgi_pass`
  + `mencached_pass`
  + `grpc_pass`
+ upstream 配置项用于 http 块中
```
Syntax:	upstream name { ... }
Default: —
Context: http
```


## 配置项

+ 这些配置项只能用在 upstream 块内

### server

+ 指定一个服务器
```
Syntax:	server address [parameters];
Default: —
```

+ 可选的 parameters：

|参数|值|描述|
|-|-|-|
|weight|number|默认 1，服务器对应的权重
|max_conns|number|默认 0(不限制)，限制最大连接数
|max_fails|number|默认 1，在 fail_timeout 限制的时间内允许请求失败的最大次数
|fail_timeout|number|默认 10s，在指定时间内请求失败会重试
|backend|-|标记为后端服务器，当主服务器不可用时会被使用
|down|-|标记服务器永久不可用
|resolve|-|
|route|string|
|service|name|
|slow_start|time|
|drain|-|




### zone
### state
### hash
### ip_hash
### keepalive
### keepalive_requests
### keepalive_timeout
### ntlm
### least_conn
### least_time
### queue
### random
### resolver
### resolver_timeout
### sticky
### sticky_cookie_insert
