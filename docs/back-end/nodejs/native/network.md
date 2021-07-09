---
sidebarDepth: 2
---

## 简介

+ [http](http://nodejs.cn/api/http.html)：提供 HTTP 功能的基础模块
+ [https](http://nodejs.cn/api/https.html)：集成了 SSL 的 HTTP 模块
+ [http2](http://nodejs.cn/api/http2.html)：提供 HTTP2 功能
+ [net](http://nodejs.cn/api/net.html)：用于实现 TCP 服务的模块
+ [dgram](http://nodejs.cn/api/dgram.html)：用于实现 UDP 服务的模块
+ [dns](http://nodejs.cn/api/dns.html)：用于实现 DNS 服务的模块



## http

### API

:::: tabs
::: tab 属性
+ `http.METHODS: string[]`：解析器支持的 HTTP 方法列表
+ `http.STATUS_CODES: object`：所有标准 HTTP 响应状态码的集合，以及每个状态码的简短描述
+ `http.globalAgent: Agent`：Agent 的全局实例，作为所有 HTTP 客户端请求的默认值
+ `http.maxHeaderSize: number`：设置 HTTP 消息头的最大容量（以字节为单位，默认 8KB）
:::

::: tab 方法
+ `http.createServer(options?: object, requestListener?: function): Server`：创建一个 HTTP 服务器
+ `http.get(options: object, callback?: function): ClientRequest`：
+ `http.get(url: string, options: object, callback?: function): ClientRequest`：
+ `http.request(options: object, callback?: function): ClientRequest`：
+ `http.request(url: string, options: object, callback?: function): ClientRequest`：
+ `http.validateHeaderName(name)`：
+ `http.validateHeaderValue(name, value)`：
:::
::::

::: tip 说明：
+ `createServer()` 方法的 options 参数选项取值：
  + `IncomingMessage=IncomingMessage: IncomingMessage`：指定使用的 `IncomingMessage` 类
  + `ServerResponse=ServerResponse: ServerResponse`：指定使用的 `ServerResponse` 类
+ `get()`/`request()` 方法返回的 `ClientRequest` 对象是一个可写流，它们的 options 参数选项可取以下值：
  + `agent=undefined: Agent | false`：控制 Agent 的行为
  + `createConnection: function`：当 agent 选项未被使用时，用来为请求生成套接字或流的函数
  + `family: 4 | 6`：IP 地址版本，默认同时使用 IPv4 和 IPv6
  + `auth: string`：基本的身份认证
  + `headers: object`：请求头对象
  + `host=localhost: string`：服务器域名或 IP 地址
  + `hostname: string`：等同于 host，但优先级高于 host
  + `localAddress: string`：网络连接绑定的本地接口
  + `method=GET: string`：HTTP 请求方法
  + `path=/: string`：请求的路径
  + `defaultPort: number`：端口号
  + `port=defaultPort | 80: number`：远程服务器的端口
  + `protocol=http: string`：使用的协议
  + `setHost=true: boolean`：指定是否自动添加 Host 请求头
  + `socketPath: string`：Unix 域套接字
  + `timeout: number`：套接字超时时间（单位为毫秒）
+ `get()` 方法中 options 参数的 method 值始终为 `GET`，并且会自动调用 `req.end()`；但 `request()` 方法需要手动调用 `req.end()` 方法
:::




### http.Agent 类

+ `Agent` 负责管理 HTTP 客户端的连接持久性和重用
+ 它为给定的主机和端口维护一个待处理请求队列，为每个请求重用单独的套接字连接，直到队列为空，此时套接字被销毁或放入连接池，以便再次用于请求到同一个主机和端口
+ 销毁还是放入连接池取决于 keepAlive 选项
+ 创建一个 Agent 实例：`new Agent(options?: object): Agent`

::: tip options 参数选项取值：
+ `keepAlive=false: boolean`：设置为 true 时将来再次发出请求无需重新建立 TCP 连接
+ `keepAliveMsecs=1000: number`：指定用于 TCP Keep-Alive 数据包的初始延迟（keepAlive 为 true 时才生效）
+ `maxFreeSockets=256: number`：在空闲状态下保持打开的套接字的最大数量（keepAlive 为 true 时才生效）
+ `maxSockets=Infinity: number`：每个主机允许的套接字的最大数量
+ `timeout: number`：套接字的超时时间（单位为毫秒）
:::


:::: tabs
::: tab 属性
+ `agent.maxFreeSockets=256: number`：在空闲状态下保持打开的套接字的最大数量
+ `agent.maxSockets=Infinity: number`：每个主机允许的套接字的最大数量
+ `agent.freeSockets: object`：包含当启用 keepAlive 时代理正在等待使用的套接字数组
+ `agent.requests: object`：包含尚未分配给套接字的请求队列
+ `agent.sockets: object`：包含当前代理正在使用的套接字数组
:::

::: tab 方法
+ `agent.createConnection(options[, callback])`：生成用于 HTTP 请求的套接字或流
+ `agent.keepSocketAlive(socket)`：当 socket 与请求分离并且可以由 Agent 保留时调用
+ `agent.reuseSocket(socket, request)`：由于 keep-alive 选项而在持久化后将 socket 附加到 request 时调用
+ `agent.destroy()`：销毁代理当前使用的所有套接字
+ `agent.getName(options)`：获取一组请求选项的唯一名称
:::
::::





### http.Server 类

+ 继承自 `net.Server`

:::: tabs
::: tab 事件
+ `request`：有请求时触发(每个连接可能有多个请求)
+ `close`：服务器关闭时触发
+ `connect`：客户端请求 HTTP CONNECT 方法时触发，未监听此事件时客户端将关闭其连接
+ `connection`：建立新的 TCP 流时触发
+ `upgrade`：客户端请求 HTTP 升级时触发
+ `clientError`：客户端连接触发 `error` 事件时触发
+ `checkContinue`：每次收到 `HTTP Expect: 100-continue` 的请求时都会触发，未监听此事件时服务器将自动响应 `100 Continue`
+ `checkExpectation`：每次收到带有 `HTTP Expect` 请求头的请求时触发(其值不是 `100-continue`)，未监听此事件时服务器将根据需要自动响应 `417 Expectation Failed`
:::

::: tab 属性
+ `server.headersTimeout`：限制解析器等待接收完整 HTTP 请求头的时间
+ `server.listening`：表明服务器是否正在监听连接
+ `server.maxHeadersCount`：最大传入请求头数
+ `server.timeout`：认定套接字超时的不活动毫秒数
+ `server.requestTimeout`：请求超时时间
+ `server.keepAliveTimeout`：服务器在完成写入最后一个响应之后，在销毁套接字之前需要等待其他传入数据的非活动毫秒数
:::

::: tab 方法
+ `server.close([callback])`：停止服务器接受新连接
+ `server.listen()`：启动 HTTP 服务器用于监听连接
+ `server.setTimeout([msecs][, callback])`：设置套接字的超时值，并触发 `timeout` 事件
:::
::::


### http.ServerResponse 类

+ 继承自 `Stream`
+ 由 HTTP 服务器在内部创建，而不是由用户创建，它会作为第二个参数传给 `request` 事件

:::: tabs
::: tab 事件
+ `close`：在响应完成之前触发(表明响应已完成，或者其底层的连接过早被终止)
+ `finish`：响应发送后触发(但并不意味着客户端已收到任何信息)
:::

::: tab 属性
+ `res.connection`：
+ `res.finished`：
+ `res.headersSent`：如果已发送响应头，则为 true
+ `res.sendDate`：默认为 true，Date 响应头将自动生成并在响应中发送(如果响应头中尚不存在)
+ `res.socket`：指向底层的套接字
+ `res.statusCode`：控制在刷新响应头时将发送到客户端的状态码
+ `res.statusMessage`：控制在刷新响应头时将发送到客户端的状态消息
+ `res.writableEnded`：在调用 `response.end()` 之后为 true
+ `res.writableFinished`：在触发 `finish` 事件之前且所有数据都已刷新到底层的系统时为 true
:::

::: tab 方法
+ `res.addTrailers(headers)`：将 HTTP 尾部响应头添加到响应中
```js
/* 注意：
  1. 只有在使用分块编码进行响应时才会发出尾部响应头; 如果不是(如请求是 HTTP/1.0)，它们将被静默丢弃
  2. HTTP 需要先发送 Trailer 响应头才能发出尾部响应头
*/
res.writeHead(200, { 'Content-Type': 'text/plain', 'Trailer': 'Content-MD5' })
res.write(fileData)
res.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' })
res.end()
```
+ `res.cork()`：类似 `writable.cork()`
+ `res.uncork()`：类似 `writable.uncork()`
+ `res.end([data[, encoding]][, callback])`：向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成；必须在每个响应上调用此方法
+ `res.flushHeaders()`：刷新响应头
+ `res.getHeader(name)`：读出已排队但未发送到客户端的响应头(不区分大小写)
+ `res.getHeaderNames()`：返回一个包含当前传出的响应头的唯一名称(所有响应头名称都是小写的)的数组
+ `res.getHeaders()`：返回当前传出的响应头的浅拷贝(所有响应头名称都是小写的)
+ `res.hasHeader(name)`：判断是否包含指定响应头(不区分大小写)
+ `res.removeHeader(name)`：移除排队等待中的隐式发送的响应头
+ `res.setHeader(name, value)`：设置单个响应头(优先级低于 `res.writeHead()`)
+ `res.setTimeout(msecs[, callback])`：设置套接字的超时值
+ `res.write(chunk[, encoding][, callback])`：发送一块响应主体，可以多次调用该方法以提供连续的响应主体片段
+ `res.writeHead(statusCode[, statusMessage][, headers]): ServerResponse`：向请求发送响应头(只能在消息上调用一次)
+ `res.writeContinue()`：向客户端发送 `HTTP/1.1 100 Continue` 消息，表示应发送请求主体
+ `res.writeProcessing()`：向客户端发送 `HTTP/1.1 102 Processing` 消息，表明可以发送请求主体
:::
::::


### http.ClientRequest 类

+ 继承自 `Stream`
+ 由 `http.request()` 创建并返回，代表正在进行中的请求，其请求头已进入队列
+ 要为请求对象添加 `response` 事件监听以获得响应，否则响应将会被完全地丢弃
+ 如果响应过早关闭，则 `response` 会触发 `aborted` 事件而不是 `error` 事件

:::: tabs
::: tab 事件
+ `abort`：当请求被客户端中止时触发
+ `connect`：当服务器使用 `CONNECT` 方法响应请求时都会触发
+ `continue`：当服务器发送 100 Continue HTTP 响应时触发
+ `information`：当服务器发送 1xx 中间响应（不包括 101 Upgrade）时触发
+ `response`：当收到此请求的响应时触发（仅触发一次）
+ `socket`：将套接字分配给此请求后触发
+ `timeout`：当底层套接字因不活动而超时时触发
+ `upgrade`：每次服务器响应升级请求时触发
:::

::: tab 属性
+ `res.aborted: boolean`：指示请求是否已终止
+ `res.connection`：
+ `res.finished: boolean`：在调用 `res.end()` 之后为 true
+ `res.maxHeadersCount=2000: number`：最大响应头数
+ `res.path: string`：请求的路径
+ `res.socket`：指向底层套接字
+ `res.writableEnded`：在调用 `res.end()` 之后为 true
+ `res.writableFinished`：如果在触发 `finish` 事件之前所有数据都已刷新到底层系统，则为 true
:::

::: tab 方法
+ `res.abort()`：将请求标记为中止，响应中剩余的数据会被丢弃且套接字被销毁
+ `res.flushHeaders()`：刷新请求头
+ `res.getHeader(name: string): any`：读取请求中的一个请求头
+ `res.setHeader(name: string, value: any)`：设置单个请求头
+ `res.removeHeader(name: string)`：删除指定请求头
+ `res.end(data?: string | Buffer, encoding?: string, callback?: function): this`：完成发送请求，若部分请求主体还未发送，则将它们刷新到流中
+ `res.write(chunk?: string | Buffer, encoding: string, callback?: function)`：发送一个请求主体的数据块
+ `res.setNoDelay(noDelay?: boolean)`：一旦将套接字分配给此请求并且连接了套接字，便立即调用 `socket.setNoDelay()`
+ `res.setSocketKeepAlive(enable?: boolean, initialDelay: number)`：一旦将套接字分配给此请求并连接了套接字，便立即调用 `socket.setKeepAlive()`
+ `res.setTimeout(timeout?: number, callback?: function): ClientRequest`：一旦将套接字分配给此请求并且连接了套接字，便立即调用 socket.setTimeout()
:::
::::



### http.IncomingMessage 类

+ 继承自 `stream.Readable`
+ 由 `http.Server` 或 `http.ClientRequest` 创建，并分别作为第一个参数传给 `request` 和 `response` 事件
+ 可用于访问响应状态、消息头、以及数据

:::: tabs
::: tab 事件
+ `aborted`：请求中止时触发
+ `close`：底层连接已关闭触发
:::

::: tab 属性
+ `message.aborted`：如果请求已中止，则为 true
+ `message.complete`：已收到并成功解析完整的 HTTP 消息，则为 true
+ `message.headers`：请求或响应的消息头对象
+ `message.httpVersion`：服务器请求的时表示客户端发送的 HTTP 版本，客户端响应时表示连接到的服务器的 HTTP 版本
+ `message.method`：请求方法，仅对从 `http.Server` 获取的请求有效
+ `message.rawHeaders`：原始请求头/响应头的列表，与接收到的完全一致(键和值位于同一列表中，消息头名称不区分大小写的，并且不会合并重复项)
+ `message.rawTrailers`：原始的请求/响应的尾部消息头的键和值，与接收到的完全一致
+ `message.socket`：与连接关联的 net.Socket 对象
+ `message.trailers`：请求/响应的尾部消息头对象
+ `message.statusCode`：状态码，仅对从 `http.ClientRequest` 获取的响应有效
+ `message.statusMessage`：状态信息，仅对从 `http.ClientRequest` 获取的响应有效
+ `message.url`：请求的 URL 字符串，仅对从 `http.ClientRequest` 获取的响应有效
:::

::: tab 方法
+ `message.destroy([error])`：
+ `message.setTimeout(msecs[, callback])`：
:::
::::



## https

+ https.Agent 类
+ https.Server 类
+ `https.createServer([options][, requestListener])`：
+ `https.get(options[, callback])`：
+ `https.get(url[, options][, callback])`：
+ `https.globalAgent`：
+ `https.request(options[, callback])`：
+ `https.request(url[, options][, callback])`：


## http2

+ Http2Session 类
+ ServerHttp2Session 类
+ ClientHttp2Session 类
+ Http2Stream 类
+ ClientHttp2Stream 类
+ ServerHttp2Stream 类
+ Http2Server 类
+ Http2SecureServer 类
+ `http2.createServer(options[, onRequestHandler])`：
+ `http2.createSecureServer(options[, onRequestHandler])`：
+ `http2.connect(authority[, options][, listener])`：
+ `http2.constants`：
+ `http2.getDefaultSettings()`：
+ `http2.getPackedSettings([settings])`：
+ `http2.getUnpackedSettings(buf)`：


## net

+ `net.Socket`：TCP 套接字，继承自双工流 `Duplex`
+ `net.Server`：继承自 `EventEmitter`
+ `net.createConnection()`：创建 TCP 链接，它有一个别名 `net.connect()`，返回 `net.Socket` 的实例
+ `net.createServer([options][, connectionListener])`：创建 TCP 服务端，返回 `net.Server` 的实例，回调函数中可访问 `net.Socket` 实例
+ `net.isIP(ip)`：检测 IP 地址，对 IPv4 返回 `4`，IPv6 返回 `6`，否则返回 `0`
+ `net.isIPv4(ip)`：检测是否是 IPv4 地址
+ `net.isIPv6(ip)`：检测是否是 IPv6 地址


### 创建 TCP 服务端

使用 `net.createServer()` 创建一个 TCP 服务端：
+ `client` 是一个 `net.Socket` 实例，可将其输出到可写流 `client.pipe(process.stdout)` 或它自身 `client.pipe(client)`
+ `client.write()`：对连接的客户端发送欢迎信息
+ 监听 `end` 事件，当客户端断开连接时，在服务端显示
```js
// server.js
const net = require("net");

let clients = 0;

const server = net.createServer(client => {
  clients++;
  const clientId = clients;
  console.log("Client connect: %d", clientId);

  client.on("end", () => {
    console.log("Client disconnect: %d", clientId);
  });

  client.write("Welcome client: " + clientId + "!\r\n"); // 发送欢迎信息到客户端
  client.pipe(process.stdout); // 打印客户端发送的消息
  client.pipe(client); // 将同样的消息发送给客户端
});

console.log(server instanceof net.Server); // server 是 net.Server 的实例
// 监听 8000 端口
server.listen(8000, () => {
  console.log("Server started on port 8000.");
});
```

打开一个终端（客户端），使用 `telnet` 连接至服务端：
```sh
$ telnet localhost 8000
```

还可以打开多个终端，同时连接到服务端，会显示不同 id 的欢迎消息。

注：若要退出 `telnet`，按下 `Ctrl + ]` 组合键，输入 quit 并回车即可。


### 创建 TCP 客户端

使用 `net.connect()` 创建一个 TCP 连接：
```js
// client.js
const net = require("net");

function runTest() {
  const client = net.connect(8000);

  client.on("data", data => {
    console.log(data.toString()); // 注意 data 是二进制数据
  });

  process.stdin.pipe(client); // 发送消息到服务端
};

runTest();
```

这里只是将 `telnet` 替换为 Node.js 创建的 TCP 客户端，同样，可以创建多个 TCP 客户端，连接到 TCP 服务端：
```sh
# 启动服务端
$ node server.js
# 创建客户端
$ node client.js
```

::: tip 备注
这种方式是利于测试的，将客户端、服务端拆分为模块，这样可以单独测试某一端。
:::


### 优化

TCP 连接后会默认 [Nagle](https://en.wikipedia.org/wiki/Nagle%27s_algorithm) 算法，该算法会延迟数据，然后再通过网络发送数据（尝试以延迟为代价优化吞吐量）；简单来说，为了防止拥堵，Socket 将非常小的数据包收集起来一起发送，从而造成一定的延迟。

由于目前的网络带宽已经有了很大的提升，可以关闭 Nagle 算法来降低延迟，提高用户体验。另外，在实时性要求高的应用（如游戏服务器）中，也建议关闭。

使用 `socket.setNoDelay(true)` 关闭 Nagle 算法；同时，`server.unref()` 会导致在最后一个客户端断开时，关闭服务：
```js
const net = require("net");

const server = net.createServer(client => {
  client.setNoDelay(true); // 关闭 Nagle 算法
  client.write("Welcome!\n", "binary");
  console.log("Client connect.");

  client.on("end", () => {
    console.log("Client disconnect.");
    server.unref(); // 在最后一个客户端断开时，关闭服务
  });

  client.on("data", data => {
    process.stdout.write(data.toString() + "\n");
    client.write(data.toString() + "\n");
  })
});

server.listen(8000, () => {
  console.log("Server started on port 8000.");
});
```


## dgram

+ dgram.Socket 类
+ `dgram.createSocket(options[, callback])`
+ `dgram.createSocket(type[, callback])`



## dns

+ dns.Resolver 类
+ `resolver.cancel()`
+ `dns.getServers()`
+ `dns.lookup(hostname[, options], callback)`
+ `dns.lookupService(address, port, callback)`
+ `dns.resolve(hostname[, rrtype], callback)`
+ `dns.resolve4(hostname[, options], callback)`
+ `dns.resolve6(hostname[, options], callback)`
+ `dns.resolveAny(hostname, callback)`
+ `dns.resolveCname(hostname, callback)`
+ `dns.resolveMx(hostname, callback)`
+ `dns.resolveNaptr(hostname, callback)`
+ `dns.resolveNs(hostname, callback)`
+ `dns.resolvePtr(hostname, callback)`
+ `dns.resolveSoa(hostname, callback)`
+ `dns.resolveSrv(hostname, callback)`
+ `dns.resolveTxt(hostname, callback)`
+ `dns.reverse(ip, callback)`
+ `dns.setServers(servers)`
