## 简介

`proxy_pass` 参数用于配置反向代理：
+ 其值可以是一个域名，如在同一个服务器中开启了多个服务，使用 Nginx 来管理
+ 其值还可以是其他服务器提供的 web 服务，这完美实现了**跨域请求**
+ 其值可以是一组上游服务器，用来实现[负载均衡](./load-balance.md)



## 代理多个应用

+ 域名可以增加三级、四级域名的解析，此时可以通过功能区分域名(二级域名为 `abc.com`)
  + API 服务：`api.abc.com`
  + 应用服务：`shop.abc.com`
+ 再用 Nginx 代理所有域名的 80 端口：
  + 访问 `api.abc.com` 相当于访问服务器内 `http://127.0.0.1:8021` 启动的应用
  + 访问 `shop.abc.com` 相当于访问服务器内 `http://127.0.0.1:8022` 启动的应用
```sh
server {
  listen 80;
  server_name api.abc.com;    # api 服务
  location / {
    proxy_set_header   Host             $http_host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_redirect     off;
    proxy_pass         http://127.0.0.1:8021;
  }
}

server {
  listen 80;
  server_name shop.abc.com;   # 应用服务
  location / {
    proxy_set_header   Host             $http_host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_redirect     off;
    proxy_pass         http://127.0.0.1:8022;
  }
}
```


::: tip 备注
+ 必须为使用的所有域名都解析到该服务器上(记录类型为 `A` 类型，并设置相应的记录值)
+ 使用这种方式，可以绕过备案系统，直接绑定域名和服务器
+ 还可以添加三级域名的解析(但是会降低域名解析的速度)：
```sh
# music 应用
music.domain.com      # web 端页面
h5.music.domain.com   # 移动端页面
api.music.domain.com  # api 服务

# 商城应用
shop.domain.com      # web 端页面
h5.shop.domain.com   # 移动端页面
api.shop.domain.com  # api 服务
```
+ 使用一个域名和一个服务器就可以搭建很多的小应用，但是应用变大就要拆分了
:::