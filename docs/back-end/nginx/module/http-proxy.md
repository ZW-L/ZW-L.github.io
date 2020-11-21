---
sidebarDepth: 2
---

## 简介

+ [ngx_http_proxy_module](http://nginx.org/en/docs/http/ngx_http_proxy_module.html)
+ 用于转发请求




## 指令

+ proxy_bind
+ proxy_buffer_size
+ proxy_buffering
+ proxy_buffers
+ proxy_busy_buffers_size
+ proxy_connect_timeout
+ proxy_cookie_domain
+ proxy_cookie_flags
+ proxy_cookie_path
+ proxy_force_ranges
+ proxy_headers_hash_bucket_size
+ proxy_headers_hash_max_size
+ proxy_hide_header
+ proxy_http_version
+ proxy_ignore_client_abort
+ proxy_ignore_headers
+ proxy_intercept_errors
+ proxy_limit_rate
+ proxy_max_temp_file_size
+ proxy_method
+ proxy_next_upstream
+ proxy_next_upstream_timeout
+ proxy_next_upstream_tries
+ proxy_no_cache
+ proxy_pass
+ proxy_pass_header
+ proxy_pass_request_body
+ proxy_pass_request_headers
+ proxy_read_timeout
+ proxy_redirect
+ proxy_request_buffering
+ proxy_send_lowat
+ proxy_send_timeout
+ proxy_set_body
+ proxy_set_header
+ proxy_socket_keepalive
+ proxy_store
+ proxy_store_access
+ proxy_temp_file_write_size
+ proxy_temp_path



### cache

+ proxy_cache
+ proxy_cache_background_update
+ proxy_cache_bypass
+ proxy_cache_convert_head
+ proxy_cache_key
+ proxy_cache_lock
+ proxy_cache_lock_age
+ proxy_cache_lock_timeout
+ proxy_cache_max_range_offset
+ proxy_cache_methods
+ proxy_cache_min_uses
+ proxy_cache_path
+ proxy_cache_purge
+ proxy_cache_revalidate
+ proxy_cache_use_stale
+ proxy_cache_valid



### ssl

+ proxy_ssl_certificate
+ proxy_ssl_certificate_key
+ proxy_ssl_ciphers
+ proxy_ssl_conf_command
+ proxy_ssl_crl
+ proxy_ssl_name
+ proxy_ssl_password_file
+ proxy_ssl_protocols
+ proxy_ssl_server_name
+ proxy_ssl_session_reuse
+ proxy_ssl_trusted_certificate
+ proxy_ssl_verify
+ proxy_ssl_verify_depth




## 示例

### 转发请求

+ `proxy_pass` 指令，常用于实现跨域
```sh
upstream backend {
  server 127.0.0.1:3000  weight=1
  server 47.12.3.4:3000  weight=4
}

server {
  listen  80;
  server_name  abc.com;

  # 直接转发
  locations / {
    proxy_pass  http://backend;
  }
}
```

+ 还可以使用 `proxy_set_header` 设置一些响应头
```sh
upstream backend {
  server 127.0.0.1:3000  weight=1
  server 47.12.3.4:3000  weight=4
}

server {
  listen 80;
  server_name abc.com;

  location / {
    proxy_set_header   Host             $http_host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_redirect     off;
    proxy_pass         http://backend;
  }
}
```


### 代理多个应用

+ [反向代理-代理多个应用](../demo/reverse-proxy.md#代理多个应用)