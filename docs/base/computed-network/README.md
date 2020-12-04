---
sidebarDepth: 2
---

## 简介

+ 计算机网络可以说是计算机诞生后最伟大的发明之一，从网上冲浪到万物互联，它担任了非常重要的角色
+ 计算机网络的功能：
  + **数据通信**：所有其他功能的基础，无论在什么地方，只要有网络，就可以通信
  + **资源共享**：局域网、广域网、互联网等为我们共享硬件、软件和数据提供了基础
  + **负载均衡**：可以使用一个计算机集群提供更稳定、高性能的 Web 服务
  + ...
+ 计算机网络是复杂的，但是它又是层次分明的：

![计算机分层模型对比](./imgs/network-intro_01.png)





## Web 开发

### TCP/IP

+ `TCP/IP`(Transmission Control Protocol/Internet Protocol, 传输控制协议/网络互联协议)是一组用于实现网络互联的通信协议，是 Internet 最基本的协议和互联网络的基础
+ 实际上，日常所说的 `TCP/IP` 不限于 TCP 和 IP 两个协议，而是包括了许多不同功能且相互关联的协议，组成了 TCP/IP 协议簇：

![TCP/IP 分层结构](./imgs/tcp-ip.png)

+ 发展到当前，众多的网络产品厂家都支持 TCP/IP 协议，成为了一个真正的工业标准


### HTTP

+ `HTTP`(Hyper Text Transfer Protocol，超文本传输协议)是基于 `TCP` 协议实现的
+ 用于传输 `HTML`(Hyper Text Markup Language，超文本标记语言)文档
+ 在 Web 开发中最常见的就是状态吗，以下为一些常见 `HTTP` 状态码(查看[全部状态码](/base/computed-network/http/status-code))

状态码|标识|含义
-|-|-
200|OK|服务器成功处理并响应客户端的请求。
204|No Content|请求已经成功处理，但是响应主体不返回内容
206|Partial Content|服务端成功处理并返回客户端指定某资源的某部分
301|Moved Permanently|请求的资源被永久移动到指定的 URL 上
302|Found|请求的资源暂时移动到指定的 URL 上
304|Not Modified|请求访问的资源未被修改，可以使用缓存的内容
307|Temporary Redirect|请求的资源暂时被移动到指定的 URL 上
400|Bad Request|客户端请求有语法错误(或请求参数错误)，不能被服务器所理解
401|Unauthorized|请求未经授权
403|Forbidden|服务器有能力处理该请求，但是拒绝授权访问
404|Not Found|服务器无法找到所请求的资源
500|Internal Server Error|服务器遇到不知道如何处理的情况
502|Bad Gateway|网关(或代理服务器)向上游服务器发起请求时得到无效的响应
503|Service Unavailable|服务端暂时处于超负载或正在进行停机维护，无法处理请求
504|Gateway Timeout|网关/代理服务器请求上游服务器/辅助服务器时未能收到响应



### DNS

+ DNS(Domain Name System)是一个分级的、基于域名的命名机制的分布式数据库系统
+ 用于实现域名和 IP 地址之间的转换



### WebSocket

