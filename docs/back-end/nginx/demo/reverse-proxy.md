## 代理多个应用

**原理**：用 `Nginx` 代理服务器的 80 端口，服务器内部在 8021/8022 端口启动的程序都会映射在 80 端口下，并且分别为 8021/8022 端口赋予不同的域名，就可以实现部署多个不同功能的应用。
+ 浏览器访问 `api.domain.com` 相当于访问服务器内 `http://127.0.0.1:8021` 启动的应用
+ 浏览器访问 `music.domain.com` 相当于访问服务器内 `http://127.0.0.1:8022` 启动的应用

**配置**：
```sh
http {
  # other setting
  server {
    listen 80;
    server_name api.domain.com;
    location / {
      proxy_set_header   Host      $http_host;
      proxy_pass         http://127.0.0.1:8021;
      proxy_redirect     off;
      proxy_set_header   X-Real-IP       $remote_addr;
      proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
    }
  }
  server {
    listen 80;
    server_name music.domain.com;
    location / {
      proxy_set_header   Host      $http_host;
      proxy_pass         http://127.0.0.1:8022;
      proxy_redirect     off;
      proxy_set_header   X-Real-IP       $remote_addr;
      proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
    }
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