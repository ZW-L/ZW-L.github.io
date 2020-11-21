## 简介

+ 通过 upstream 设置一系列上游服务器和 weight 设置权重，实现负载均衡



## 示例


### API 服务

+ 简单转发
```sh
upstream api {
  # 设置权重，Nginx 会自动选择转发的目标服务器
  server  123.45.6.7:3000  weight=2;
  server  123.45.6.8:3000  weight=3;
}

server {
  listen  80;
  server_name  api.abc.com;
  
  # 将所有请求转发至上述服务器组
  location / {
    proxy_pass  http://api;  # 这个 api 是上游服务器
  }
}
```

::: tip 备注：
+ 当请求 `http://api.abc.com/getDetail` 会转发至 `http://123.45.6.7:3000/getDetail`
:::


### 重写路径

+ **剔除路径**：当服务器提供 `/get/...` 的 api，而客户端使用 `/api/get/...` 的请求方式，我们又不想改动代码时
```sh
upstream api {
  # 设置权重，Nginx 会自动选择转发的目标服务器
  server  123.45.6.7:3000  weight=2;
  server  123.45.6.8:3000  weight=3;
}

server {
  listen  80;
  server_name  api.abc.com;
  
  # 先拦截 /api 前缀的请求
  # 方法 1: 在 proxy_pass 后面添加一个 /
  location /api/ {
    proxy_pass  http://api/;  # 原来 /api/* 后面的所有内容(*)将会添加到 http://api/*
  }

  # 方法 2: 使用 rewrite 重写请求路径
  #location /api/ {
  # 重写路径后，break 指定使用以下规则后退出；注意与 last 的区别
  #  rewrite  ^/api/(.*)  /$1  break;  
  #  proxy_pass  http://api;
  #}

  # 最后，为不使用 /api 前缀的其他请求路径保留出口
  location / {
    proxy_pass  http://api;
  }
}
```

::: tip 备注：
+ 方法 2 中 `break` 也可以使用 `last`，但 `last` 会再次进入 `server` 选择合适的 `location`；因此这里使用 `break` 性能更好
:::


+ **补充路径**：同样，当服务器提供的是 `/api/get/...` 的 api，而客户端通过 `/get/...` 的方式请求时
+ 事实上这种情况在客户端的配置很简单(如为 axios 的 `baseUrl` 添加一个后缀)，这里仅用于示范 Nginx 的功能
```sh

```