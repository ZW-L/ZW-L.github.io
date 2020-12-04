---
sidebarDepth: 2
---

## 介绍

**HTTP/1.1 规范定义了 47 种头部字段**：
+ 通用头部(General Headers): 同时适用于请求和响应消息，但与最终消息主体中传输的数据无关
+ 请求头部(Request Headers): 包含更多有关要获取的资源或客户端本身信息
+ 响应头部(Response Headers): 包含有关响应的补充信息，如位置或服务器本身(名称和版本等)
+ 主体头部(Entity Headers): 包含有关实体主体的更多信息，用于补充和主体相关的信息

**一些特定的字段**：
+ 自定义头部: 自定义的头部字段，服务端和客户端都可根据需要进行扩展，通常以 `X` 开头的头部字段都是自定义的
+ Cookie 相关头部：为 Cookie 服务的字段



## 通用头部字段

|字段|描述|
|-|-|-|
|Cache-Control<i style="color:red;">*</i>|控制缓存的工作机制|
|Connection<i style="color:red;">*</i>|连接的状态|
|Date<i style="color:red;">*</i>|报文创建的时间日期|
|Pragma|报文指令|
|Trailer|报文末端的头部补充|
|Transfer-Encoding|指定报文主体的传输编码方式|
|Upgrade|升级为其他协议|
|Via|代理服务器的信息，用于追踪报文转发和避免请求回环；**必须在经过代理时附加该字段**|
|Warning|错误通知，用于告知用户一些与缓存相关的警告|


### Cache-Control

+ 多个指令之间用 `,` 隔开
+ 缓存请求指令：

|指令|说明|
|-|-|
|no-cache|强制向源服务器再次验证，指的是不使用过期的资源|
|no-store|不缓存请求或响应的内容(敏感信息)|
|no-transform|代理不可更改媒体类型|
|max-age=秒|响应内容的过期时间，在 HTTP/1.1 中优先于 `Expires` 字段，在 HTTP/1.0 中刚好相反|
|max-stale[=秒]|接收不超过指定过期时间的资源；缺省参数时接收任意过期的资源|
|min-fresh=秒|要求服务器返回未经过指定时间的缓存资源|
|only-if-cached|仅从缓存服务器获取资源；资源不存在时会返回 504|
|cache-extension|新指令标记，仅对能理解的缓存服务器有效|

+ 缓存响应指令：

|指令|说明|
|-|-|
|no-cache|缓存前必须先确定其有效性，指的是不使用过期的资源|
|no-store|不缓存请求或响应的内容(敏感信息)|
|no-transform|代理不可更改媒体类型|
|max-age=秒|响应内容的过期时间，在 HTTP/1.1 中优先于 `Expires` 字段，在 HTTP/1.0 中刚好相反|
|cache-extension|新指令标记，仅对能理解的缓存服务器有效|
|public|可向任意方提供响应的缓存|
|private|仅向特定用户返回响应|
|must-revalidate|可缓存但必须再向源服务器进行确认；会忽略 max-stale；失败时返回 504|
|proxy-revalidate|要求中间缓存服务器对缓存的响应有效性再进行确认|
|s-maxage=秒|公共缓存服务器响应的内容过期时间；使用后会忽略 `max-age` 指令和 `Expires` 字段|


### Connection

+ HTTP/1.1 默认值为 `keep-alive`
```sh
Connection: keep-alive  # 保持持久的连接，下次发送消息时不需要再次建立连接
Connection: close       # 关闭此次连接
```


### Pragma

+ 只用于客户端发送的请求中，用于兼容 HTTP/1.0
```sh
# 优先使用 Cache-Control
Cache-Control: no-cache
Pragma: no-cache
```


### Trailer

+ 可应用于分块传输编码时
```sh
HTTP/1.1 200 OK
Cache-Control: private
Connection: keep-alive
...
Date: Thu, 18 Jun 2020 17:26:03 GMT
Trailer: Expires      # 指定在报文主体中补充的字段

...报文主体...
0
Expires: Thu, 18 Jun 2020 17:26:03 GMT  # 补充字段
```


### Transfer-Encoding

+ 仅对分块传输有效
```sh
Transfer-Encoding: chunked
```


### Upgrade

+ 可以指定更高版本的 HTTP 协议，或其他的通信协议
```sh
# 请求头
GET /index.html HTTP/1.1
Upgrade: TLS/1.0      # 指定升级的协议
Connection: Upgrade   # 同时需要指定

# 响应头
HTTP/1.1 101 Switching Protocols  # 允许时响应 101
Upgrade: TLS/1.0 HTTP/1.1
Connection: Upgrade
```


### Warning

```sh
# 格式
Warning: <警告码> <Host> <警告内容> [日期]

# 示例
Warning: 113 ge.hackr.jp:8080 "some message."
```




## 请求头部字段

|字段|描述|
|-|-|-|
|Accept<i style="color:red;">*</i>|客户端能够支持的内容类型|
|Accept-Charset<i style="color:red;">*</i>|客户端可以处理的字符集类型|
|Accept-Encoding<i style="color:red;">*</i>|客户端能够接收的编码方式|
|Accept-Language<i style="color:red;">*</i>|客户端支持的语言类型，可设置权重|
|Authorization<i style="color:red;">*</i>|告知服务端验证信息，通常在收到 401 请求后添加该字段值(值为证书内容)|
|Proxy-Authorization|类似 Authorization，但发生在客户端和代理服务器之间|
|Host<i style="color:red;">*</i>|请求的服务器的网址和端口号 **(唯一必须传递的值)**|
|If-Range|资源未更新时发送实体 Byte 的范围请求，和 Range 一起使用|
|If-Match|比较实体标记(ETag)|
|If-None-Match|比较实体标记(ETag)，与 If-Match 相反|
|If-Modified-Since|通常为日期，用于确认代理或客户端本地资源的有效性|
|If-Unmodified-Since|比较资源的更新时间，与 If-Modified-Since 相反|
|Expect|期待服务器的特定行为，目前仅支持 `100-continue`，设置其他值会返回 417|
|From|使用用户代理的用户的电子邮箱地址(通常在使用代理时设置)|
|Max-Forwards|最大转发次数，每经过一层代理转发，次数减1|
|Range|字节范围请求的字节范围(如 bytes=5001-10000)，和 If-Range 一起使用|
|Referer|客户端请求资源的原始 URI|
|TE|指定传输编码的优先级；类似 Accept-Encoding 的取值，和特殊值 trailers|
|User-Agent|浏览器的种类信息；经过代理服务器时可能会添加，爬虫时也可自定义添加|

::: tip 说明
+ **Host**：主要是为了当单个服务器部署多个域名时能识别出是哪个域名对应的请求；若服务器未设置主机名，可以传空值
+ **Max-Forwards**：常用于掌控传输路径的通信状态(如在哪一层请求失败、发生请求闭环时)
:::


### Accept-*

+ 可以设置多个值，彼此之间用逗号隔开；还能用分号附加权重
```sh
# Accept：MIME类型/MINE子类型的格式
Accept: image/webp
Accept: text/html,application/xml;q=0.9
Accept: \*/\*

# Accept-Charset
Accept-Charset: iso-8859-5,unicode-1-1;q=0.8

# Accept-Encoding：通常为某些压缩算法(gzip、compress、deflate 等)
Accept-Encoding: gzip, deflate, br

# Accept-Language
Accept-Language: zh-CN,zh;q=0.9
```


### If-*

+ 一系列条件请求字段
```sh
# If-Match：资源的 ETag 匹配时返回 200，否则返回 412
If-Match: "123456"
If-Match: *

# If-None-Match：资源的 ETag 不匹配时返回 200，否则返回 412
If-None-Match: "123456"
If-None-Match: *

# If-Modified-Since：资源在指定时间后更新过则返回 200，否则返回 304
If-Modified-Since: Fri, 19 Jun 2019 01:16:37 GMT

# If-Unmodified-Since：资源在指定时间前更新过则返回 200，否则返回 304
If-Unmodified-Since: Fri, 19 Jun 2019 01:16:37 GMT

# If-Range：值为 ETag；要结合 Range 字段使用，用于发送范围请求
If-Range: "123456"      # ETag 匹配时，返回范围资源和 206
Range: bytes=5001-10000

If-Range: "123456"      # ETag 不匹配时，返回全部资源和 200
Range: bytes=5001-10000
```

+ `If-Range`：只发送一次请求，性能优于 `If-Match`(当资源匹配失败时，会返回 412 提示客户端再次发送请求，这样客户端需要发送两个请求才能得到数据)




## 响应头部字段

|字段|描述|
|-|-|-|
|Age<i style="color:red;">*</i>|源服务器在多久前(秒)创建了响应|
|ETag<i style="color:red;">*</i>|服务端每次更新资源后生成对资源唯一的标识，其生成算法由服务端指定|
|Location<i style="color:red;">*</i>|引导客户端请求另一个 URI 的资源；一般配合 3xx 形式的重定向类状态码使用|
|WWW-Authenticate<i style="color:red;">*</i>|返回服务端可接受的认证方案，401 状态码必须包含该字段|
|Accept-Ranges|是否接收字节范围请求；值：none(不接受)，bytes(接受)|
|Proxy-Authenticate|代理服务器对客户端的认证信息|
|Retry-After|提示再次发起请求的信息，可配合 503、3xx 状态码使用|
|Server|关于服务器的信息(服务器版本、版本号等)|
|Vary|源服务器告知代理服务器对缓存的控制|

::: tip 说明
+ **Age**：两种情况
  + 若是源服务器响应缓存服务器发出请求，指定源服务器在多久前(秒)创建了响应
  + 若是缓存服务器创建的响应其必须包含该字段，指定缓存后的响应再次发起认证到认证完成的时间
+ **ETag**：
```sh
# 强 ETag: 只要资源发生变化就改变值
ETag: "asdfc12321"
# 弱 ETag: 只有资源发生较大改变时才改变值，只用于提示资源是否相同
ETag: W/"asdfc12321"
```
:::




## 主体头部字段

|字段|描述|
|-|-|-|
|Allow<i style="color:red;">*</i>|服务端能够支持的 HTTP 请求方法，一般在 405 中附加|
|Last-Modified<i style="color:red;">*</i>|资源的最后修改时间，配合缓存使用|
|Expires<i style="color:red;">*</i>|资源的失效日期，过期后会缓存服务器会重新向源服务器请求|
|Content-Encoding<i style="color:red;">*</i>|服务端当前响应内容的编码方式(gzip、compress、deflate 等)|
|Content-Type<i style="color:red;">*</i>|对应请求头部的 Accept 字段，表明响应主体的 MIME类型/MINE子类型|
|Content-Location|报文主体返回资源的 URI(不同于 Location 字段)|
|Content-Length<i style="color:red;">*</i>|报文主体部分的大小，单位为字节|
|Content-Language|报文主体使用的语言(zh, zh-CN, en 等)|
|Content-MD5|报文摘要(用 MD5 算法将报文主体加密后再使用 Base64 编码)|
|Content-Range|报文主体的位置范围|
|Content-Type|报文主体的媒体类型|

::: tip 说明
+ **Content-MD5**：因为头部字段无法记录二进制值，所以再次使用 Base64 编码；客户端可以使用同样方法生成摘要，用来校验报文完整性(只能用于一般校验，当遭到恶意篡改时，该值也夜景被篡改过了)
+ **Content-Range**：除了指定和范围请求一样的值，还会指定资源的总长度
```sh
# 范围请求
If-Range: "123456"
Range: bytes=5001-10000

# 响应
Content-Range bytes 5001-10000/10000
```
:::




## 其他头部字段

+ `X-Frame-Options`: 常用作响应头部字段，表示网站内容是否允许被嵌入其他网站的 iframe 中
```sh
# 禁止，能有效防止常见的点击劫持
X-Frame-Options: deny
# 仅允许同源页面
X-Frame-Options: sameorigin
```

+ `X-XSS-Protection`：控制浏览器防护 XSS
```sh
# 关闭 XSS 过滤
X-XSS-Protection: 0
# 开启 XSS 过滤
X-XSS-Protection: 1
```



## Cookie 相关头部

+ `Set-Cookie`：用于响应头部，由服务器发送给客户端
```sh
# 键值对：<name>=<value>
token="some-token"

# 有效期：expires=<date>
expires: 2020-11-25T09:17:54.000Z
expires: Session

# 限制发送范围：path=<path>；但有其他方法避开限制
path: /   # 默认值

# 可发送的域名后缀：domain=<domain>；不指定该值会显得更安全
domain: example.com   # 后缀相同的二级/三级域名都可发送 Cookie

# 强制 HTTPS：secure；Cookie 仅会在 HTTPS 下才可发送
secure

# 防窃取：HttpOnly；主要是防止 XSS 攻击，此后 document.cookie 无法读取 Cookie
HttpOnly
```

+ `Cookie`：用于请求头部，由客户端发送给服务器
```sh
# 多用于向服务器发送信息，用于验证客户端身份
Cookie: token="some-token"
```