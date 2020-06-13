## 介绍

+ 通用头部(General Headers): 同时适用于请求和响应消息，但与最终消息主体中传输的数据无关
+ 请求头部(Request Headers): 包含更多有关要获取的资源或客户端本身信息
+ 响应头部(Response Headers): 包含有关响应的补充信息，如位置或服务器本身(名称和版本等)
+ 主体头部(Entity Headers): 包含有关实体主体的更多信息，如主体长度(Content-Length)或 MIME 类型
+ 其他头部: 可自定义的头部字段，服务端和客户端都可以根据需要进行扩展

## 通用头部字段

**概览：**

|字段|描述|
|-|-|-|
|Cache-Control|控制缓存，在不同头部中可使用的值不大一样|
|Connection|连接的状态|
|Date|报文创建的时间日期|


::: tip 取值
+ **Cache-Control**:
  + 共用值
    + `no-cache`: 强制使用最新的值，而不是缓存的值
    + `no-store`: 报文中包含机密信息，不应该被缓存
    + `no-transform`: 缓存不能改变主体的媒体类型，能防止缓存服务器压缩图片等操作
    + `max-age`: 缓存有效期，单位为秒
  + 请求头部常用值
    + `min-fresh`: 要求缓存在指定时间(单位为秒)内返回响应
    + `only-if-cached`: 客户端仅需要缓存服务器缓存的资源，即缓存服务器不会向源服务器转发请求
  + 响应头部常用值 
    + `must-revalidate`: 在本地缓存过期前可以使用，否则必须进行有效性验证
    + `public`: 响应可以被任何对象缓存
    + `private`: 响应只能被特定用户缓存
    + `proxy-revalidate`: 仅适用于共享(public)缓存，私有缓存时忽略
+ **Connection**: 
  + `keep-alive`: HTTP/1.1 默认值。保持持久的连接，下次发送消息时不需要再次建立连接
  + `close`: 关闭此次连接
:::




## 请求头部字段

**概览：**

|字段|描述|
|-|-|-|
|Accept|客户端能够支持的内容类型|
|Accept-Charset|客户端可以处理的字符集类型|
|Accept-Encoding|客户端能够接收的编码方式|
|Accept-Language|客户端支持的语言类型，可设置权重|
|Authorization|告知服务端验证信息|
|Host|请求的服务器的网址和端口号(唯一必须传递的值)|
|If-Modified-Since|通常为日期，用于确认代理或客户端本地资源的有效性|
|If-None-Match|类似 If-Modified-Since，用于判断本地缓存是否有效|


::: tip 说明
+ **Accept**: 可以设置多个值，彼此之间用逗号隔开，还能用分号附加权重，可用以下方式设置：
  + text/html: 表示 HTML 文档
  + image/webp: 表示图片文件
  + application/xhtml_xml: 表示 XHTML 文档
  + application/xml;q=0.9: 表示 XML 文档，用 `q` 指示权重
  + \*/\*;q=0.8: 用通配符 `*` 指示任意 `MIME 类型/MIME 子类型`，并设置权重
+ **Accept-Encoding**: 通常为某些压缩算法(gzip、compress 等)，可设置权重
+ **Accept-Language**:
  + zh-cn
  + en-us
+ **Authorization**:
  + `type credentials`: 通常在收到 401 请求后添加该字段值
+ **If-Modified-Since**: 服务端会根据该值对比资源更新的时间，判断返回最新的资源还是返回 304 响应
+ **If-None-Match**: 通常存储为上一次响应头部的 ETag 值，若该值与请求资源的 ETag 值不一致时，服务器才会处理请求
:::




## 响应头部字段

**概览：**

|字段|描述|
|-|-|-|
|Age|返回服务端在多久前(秒)创建了响应|
|ETag|服务端每次更新资源后生成对资源唯一的标识，其生成算法由服务端指定|
|Location|引导客户端至某个与请求 URL 位置不同的资源|
|WWW-Authenticate|返回服务端可接受的认证方案|


::: tip 说明
+ **Age**: 若是缓存服务器创建的，则指的是缓存后的响应再次发起认证到认证完成的时间；代理创建的响应必须包含该字段
+ 强 ETag 和弱 ETag
  + 强 ETag: 只要资源发生变化就改变值，格式: "asdfc12321"
  + 弱 ETag: 只有资源发生较大改变时才改变值，格式: W/"asdfc12321"
+ **Location**: 一般配合 302 等 3xx 形式的重定向类状态码使用
:::




## 主体头部字段

&emsp;&emsp;主体头部字段包含于请求报文或响应报文的主体部分的头部，用于补充和主体相关的信息。

**概览：**

|字段|描述|
|-|-|-|
|Allow|返回服务端能够支持的 HTTP 请求方法|
|Content-Encoding|返回服务端当前响应内容的编码方式|
|Content-Length|主体部分的大小，单位为字节|
|Content-Type|对应请求头部的 Accept 字段，表明响应主体的 MIME 类型|
|Last-Modified|资源的最后修改时间，配合缓存使用|
|Expires|失效日期|

::: tip 说明
+ **Content-Encoding**: 常用值有
  + `gzip`
  + `compress`
  + `deflate`
  + `identity`
+ **Expires**: 缓存服务器会在失效日期前以缓存响应请求，失效后重新向源服务器发起请求
:::




## 其他头部字段

&emsp;&emsp;HTTP 的头部信息是可以自定义的，服务端和客户端都可以根据需要进行扩展。通常以 `X` 开头的头部字段都是自定义的。

+ **X-Frame-Options**: 常用作响应头部字段，表示网站内容是否允许被嵌入其他网站的 iframe 中
  + `deny`: 禁止，能有效防止常见的点击劫持