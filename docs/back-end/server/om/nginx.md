## 简介



## 反向代理服务器

&emsp;&emsp;以下用 `Nginx` 代理服务器的 80 端口，服务器内部在 8021，8022 端口启动的程序都会映射在 80 端口下，并且分别为 8021，8022 端口赋予不同的域名，就可以实现部署多个不同功能的应用。

+ 浏览器访问 `webmusic.zwlife.top` 相当于访问服务器内 `http://127.0.0.1:8021` 启动的应用
+ 浏览器访问 `h5music.zwlife.top` 相当于访问服务器内 `http://127.0.0.1:8022` 启动的应用

```conf
http {
  # other setting
  server {
    listen 80;
    server_name webmusic.zwlife.top;
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
    server_name h5music.zwlife.top;
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

## 静态资源服务器

&emsp;&emsp;

```conf
http {
  
}
```