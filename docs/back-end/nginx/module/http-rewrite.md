---
sidebarDepth: 2
---

## 简介

+ [ngx_http_rewrite_module](http://nginx.org/en/docs/http/ngx_http_rewrite_module.html)
+ 通过使用 PCRE 正则表达式去修改请求 URI，返回重定向结果，并有条件地选择配置
+ break, if, return, rewrite, set 指令按照以下顺序处理：
  + 在 http.server 级别上按顺序执行的
  + 重复执行：
    + 匹配一个 http.server.location
    + 在 http.server.location 级别上按顺序执行的
    + 该循环最多执行 10 次，最后不匹配时返回 500



## 指令


### rewrite

+ 根据正则表达式来更改 URI，或修改字符串
```
Syntax:	rewrite regex replacement [flag];
Default: —
Context: server, location, if
```

+ 若 replacement 以 “http://”, “https://”, “$scheme” 开头，将会终止处理并将请求结果以重定向的形式返回给客户端
+ 若 replacement 添加了新的请求参数，之前的参数会附加到其后面；若要避免这种情况，在 replacement 后面加 `?`
```sh
rewrite ^/users/(.*)$ /show?user=$1? last;
```
+ flag 可选选项：
  + `last`：本条规则执行完后，使用重写的 URI 继续匹配新的 location，最多重复 10 次(之后返回 500 状态码)
  + `break`：本条规则执行完后退出
  + `redirect`：返回 302 临时重定向
  + `permanent`：返回 301 永久重定向



::: tip 备注：
+ 完整的请求 URL 受到 `$scheme` 和 `server_name_in_redirect`、`port_in_redirect` 的影响
+ `last` 一般用在 server/if 中，而 `break` 一般用在 location
:::



### if

+ 参考
```
Syntax:	if (condition) { ... }
Default: —
Context: server, location
```
+ 当 condition 是一个变量名时，若其值是空串或 "0" 都会返回 false
+ 符号的使用

|符号|描述|
|-|-|
|=, !=|判断变量是否相等(通过字符串比较)
|~, ~*|使用正则匹配字符串时，是否区分大小写(~)，正则包含 `}`/`;` 时需要使用引号扩起来
|-f, !-f|检测文件是否存在
|-d, !-d|检测文件是否是目录
|-e, !-e|检测文件、目录或符号连接是否存在
|-x, !-x|检测文件是否有可执行权限(x)

+ 示例
```sh
# 设置 cookie
if ($http_cookie ~* "id=([^;]+)(?:;|$)") {
  set $id $1;
}
# 不允许使用 POST 请求
if ($request_method = POST) {
  return 405;
}

if ($slow) {
  limit_rate 10k;
}
# 对无效的 referer 拒绝响应
if ($invalid_referer) {
  return 403;
}
```


### break

+ 指令执行至此处便退出
```
Syntax:	break;
Default: —
Context: server, location, if
```

+ 示例
```sh
if ($slow) {
  limit_rate  10k;
  break;
}
```

+ 在 location 中时，会执行完 location 中的规则
```sh
location /download/ {
  rewrite ^(/download/.*)/media/(.*)\..*$ $1/mp3/$2.mp3 break;
  rewrite ^(/download/.*)/audio/(.*)\..*$ $1/mp3/$2.ra  break;
  return  403;
}
```



### return 

+ 根据规则的执行情况，返回一个状态码给客户端
```
Syntax:	return code [text];
        return code URL;
        return URL;
Default: —
Context: server, location, if
```
+ 可使用值包括：204，400，402～406，408，410，411，413，416，500～504




### set

+ 设置一个变量，可以包含字符串、其它变量、或它们的组合
```
Syntax: set $variable value;
Default: —
Context: server, location, if
```


### uninitialized_variable_warn

+ 是否记录未初始化变量的警告
```
Syntax: uninitialized_variable_warn on | off;
Default: on
Context: http, server, location, if
```