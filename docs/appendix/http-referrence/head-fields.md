## 介绍


## 通用头部字段

+ Cache-Control：控制缓存，在不同头部中可使用的值不大一样
  + 共用值
    + no-cache：强制使用最新的值，而不是缓存的值
    + no-store：报文中包含机密信息，不应该被缓存
    + no-transform：缓存不能改变主体的媒体类型，能防止缓存服务器压缩图片等操作
    + max-age：缓存有效期，单位为秒
  + 请求头部常用值
    + min-fresh：要求缓存在指定时间(单位为秒)内返回响应
    + only-if-cached：客户端仅需要缓存服务器缓存的资源，即缓存服务器不会向源服务器转发请求
  + 响应头部常用值 
    + must-revalidate：在本地缓存过期前可以使用，否则必须进行有效性验证
    + public：响应可以被任何对象缓存
    + private：响应只能被特定用户缓存
    + proxy-revalidate：仅适用于共享(public)缓存，私有缓存时忽略
+ Connection
  + Close：关闭此次连接
  + Keep-Alive：HTTP/1.1 默认值。保持持久的连接，下次发送消息时不需要再次建立连接
+ Date：报文创建的时间日期



## 请求头部字段

+ accept：客户端能够支持的内容类型，均为 [MIME 类型/MIME 子类型](./mime-type)，举例：
  + text/html：HTML 文档
  + application/xhtml_xml：XHTML 文档
  + image/webp：图片文件
  + application/xml;q=0.9：XML 文档，`q` 指示权重
  + \*/\*;q=0.8：通配符 `*`，指示 `任意 MIME 类型/任意 MIME 子类型`
+ accept-charset：客户端可以处理的字符集类型，通常不用设置(文本类型有默认的字符集类型)
+ accept-encoding：客户端能够接收的编码方式，通常为某些压缩算法(gzip、compress 等)
+ accept-language：客户端支持的语言类型
+ authorization：告知服务端验证信息；通常在收到 401 请求后添加该字段，值为 `type credentials`
+ host：唯一必须传递的值。要请求的服务器的网址，包括端口号(否则使用默认端口)
+ if-modified-since：通常为日期，确认代理或客户端本地资源的有效性。服务端会根据该值对比资源更新的时间，判断返回最新的资源还是返回 304 响应
+ if-none-match：类似 if-modified-since，用于判断本地缓存是否有效；通常存储为上一次响应头部的 ETag 值，若该值与请求资源的 ETag 值不一致时，服务器才会处理请求


## 响应头部字段

+ age：告知客户端，服务端在多久前(单位为秒)创建了响应；若是缓存服务器创建的，则指的是缓存后的响应再次发起认证到认证完成的时间；代理创建的响应必须包含 age 字段
+ ETag：服务端每次更新资源后生成对资源唯一的标识，其生成算法由服务端指定；还细分为两种：
  + 强 ETag：只要资源发生变化就改变值，格式："asdfc12321"
  + 弱 ETag：只有资源发生较大改变时才改变值，格式：W/"asdfc12321"
+ location：引导客户端至某个与请求 URL 位置不同的资源，一般配合 302 等 3xx 形式的重定向类状态码使用
+ www-authenticate：告知客户端，服务端可接受的认证方案


## 主体头部字段

&emsp;&emsp;主体头部字段包含于请求报文或响应报文的主体部分的头部，用于补充和主体相关的信息。

+ allow：告知客户端，服务端能够支持的 HTTP 请求方法
+ content-encoding；告知客户端，服务端当前响应内容的编码方式(主要为 `gzip`, `compress`, `deflate`, `identity`)
+ content-length：主体部分的大小，单位为字节
+ content-type：对应请求头部的 accept 字段，表明响应主体的 MIME 类型
+ last-modified：资源的最后修改时间，配合缓存使用
+ expires：表示失效日期；若缓存服务器接收到含该字段的响应，会在失效日期前以缓存应答请求，失效后会重新向源服务器发起请求


## 其他头部字段

&emsp;&emsp;HTTP 的头部信息是可以自定义的，服务端和客户端都可以根据需要进行扩展。

+ X-Frame-Options：常用作响应头部字段，表示网站内容是否允许被嵌入其他网站的 iframe 中(值为 `deny` 为禁止，能有效防止常见的点击劫持)