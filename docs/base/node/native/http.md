## 简介

+ [http](http://nodejs.cn/api/http.html) 模块用于实现 HTTP 服务器和客户端
+ `http API`：
+ `http.Agent` 类：
+ `http.ClientRequest` 类：
+ `http.Server` 类：
+ `http.ServerResponse` 类：
+ `http.IncomingMessage` 类：

## API

+ **属性：**
  + `http.METHODS: string[]`：解析器支持的 HTTP 方法列表
  + `http.STATUS_CODES: object`：所有标准 HTTP 响应状态码的集合，以及每个状态码的简短描述
  + `http.globalAgent: Agent`：Agent 的全局实例，作为所有 HTTP 客户端请求的默认值
  + `http.maxHeaderSize: number`：设置 HTTP 消息头的最大容量（以字节为单位），默认 8KB
+ **方法：**
  + `http.createServer(options?: object, requestListener?: function): Server`：创建一个 HTTP 服务器
  + `http.get(options: object, callback?: function): ClientRequest`：
  + `http.get(url: string, options: object, callback?: function): ClientRequest`：
  + `http.request(options: object, callback?: function): ClientRequest`：
  + `http.request(url: string, options: object, callback?: function): ClientRequest`：

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




## Agent

+ **介绍：**
  + `Agent` 负责管理 HTTP 客户端的连接持久性和重用
  + 它为给定的主机和端口维护一个待处理请求队列，为每个请求重用单独的套接字连接，直到队列为空，此时套接字被销毁或放入连接池，以便再次用于请求到同一个主机和端口
  + 销毁还是放入连接池取决于 keepAlive 选项
+ **构造函数：**
  + `new Agent(options?: object): Agent`：创建一个 Agent 实例

::: tip 说明：
+ options 参数选项取值：
  + `keepAlive=false: boolean`：设置为 true 时将来再次发出请求无需重新建立 TCP 连接
  + `keepAliveMsecs=1000: number`：指定用于 TCP Keep-Alive 数据包的初始延迟（keepAlive 为 true 时才生效）
  + `maxFreeSockets=256: number`：在空闲状态下保持打开的套接字的最大数量（keepAlive 为 true 时才生效）
  + `maxSockets=Infinity: number`：每个主机允许的套接字的最大数量
  + `timeout: number`：套接字的超时时间（单位为毫秒）
:::

+ **属性；**
  + `agent.maxFreeSockets=256: number`：在空闲状态下保持打开的套接字的最大数量
  + `agent.maxSockets=Infinity: number`：每个主机允许的套接字的最大数量
  + `agent.freeSockets: object`：包含当启用 keepAlive 时代理正在等待使用的套接字数组
  + `agent.requests: object`：包含尚未分配给套接字的请求队列
  + `agent.sockets: object`：包含当前代理正在使用的套接字数组
+ **方法：**
  + `agent.createConnection(options[, callback])`：生成用于 HTTP 请求的套接字或流
  + `agent.keepSocketAlive(socket)`：当 socket 与请求分离并且可以由 Agent 保留时调用
  + `agent.reuseSocket(socket, request)`：由于 keep-alive 选项而在持久化后将 socket 附加到 request 时调用
  + `agent.destroy()`：销毁代理当前使用的所有套接字
  + `agent.getName(options)`：获取一组请求选项的唯一名称




## ClientRequest

+ **介绍：**
  + 继承自 `Stream`
  + 由 `http.request()` 创建并返回，代表正在进行中的请求，其请求头已进入队列
  + 要为请求对象添加 `response` 事件监听以获得响应，否则响应将会被完全地丢弃
  + 如果响应过早关闭，则 `response` 会触发 `aborted` 事件而不是 `error` 事件
+ **事件：**
  + `abort`：当请求被客户端中止时触发
  + `connect`：当服务器使用 `CONNECT` 方法响应请求时都会触发
  + `continue`：当服务器发送 100 Continue HTTP 响应时触发
  + `information`：当服务器发送 1xx 中间响应（不包括 101 Upgrade）时触发
  + `response`：当收到此请求的响应时触发（仅触发一次）
  + `socket`：将套接字分配给此请求后触发
  + `timeout`：当底层套接字因不活动而超时时触发
  + `upgrade`：每次服务器响应升级请求时触发
+ **属性：**
  + `request.aborted: boolean`：指示请求是否已终止
  + `request.connection`：
  + `request.finished: boolean`：在调用 `request.end()` 之后为 true
  + `request.maxHeadersCount=2000: number`：最大响应头数
  + `request.path: string`：请求的路径
  + `request.socket`：指向底层套接字
  + `request.writableEnded`：在调用 `request.end()` 之后为 true
  + `request.writableFinished`：如果在触发 `finish` 事件之前所有数据都已刷新到底层系统，则为 true
+ **方法：**
  + `request.abort()`：将请求标记为中止，响应中剩余的数据会被丢弃且套接字被销毁
  + `request.flushHeaders()`：刷新请求头
  + `request.getHeader(name: string): any`：读取请求中的一个请求头
  + `request.setHeader(name: string, value: any)`：设置单个请求头
  + `request.removeHeader(name: string)`：删除指定请求头
  + `request.end(data?: string | Buffer, encoding?: string, callback?: function): this`：完成发送请求，若部分请求主体还未发送，则将它们刷新到流中
  + `request.write(chunk?: string | Buffer, encoding: string, callback?: function)`：发送一个请求主体的数据块
  + `request.setNoDelay(noDelay?: boolean)`：一旦将套接字分配给此请求并且连接了套接字，便立即调用 `socket.setNoDelay()`
  + `request.setSocketKeepAlive(enable?: boolean, initialDelay: number)`：一旦将套接字分配给此请求并连接了套接字，便立即调用 `socket.setKeepAlive()`
  + `request.setTimeout(timeout?: number, callback?: function): ClientRequest`：一旦将套接字分配给此请求并且连接了套接字，便立即调用 socket.setTimeout()





## Server

+ **介绍：**
  + 继承自 `net.Server`
+ **事件：**
  + `checkContinue`：
  + `checkExpectation`：
  + `clientError`：
  + `close`：
  + `connect`：
  + `connection`：
  + `request`：
  + `upgrade`：
+ **属性：**
  + `server.headersTimeout`：
  + `server.listening`：
  + `server.maxHeadersCount`：
  + `server.timeout`：
  + `server.keepAliveTimeout`：
+ **方法：**
  + `server.close([callback])`：
  + `server.listen()`：
  + `server.setTimeout([msecs][, callback])`：




## ServerResponse

+ **介绍：**
  + 继承自 `Stream`
+ **事件：**
  + `close`：
  + `finish`：
+ **属性：**
  + `response.connection`：
  + `response.finished`：
  + `response.headersSent`：
  + `response.sendDate`：
  + `response.socket`：
  + `response.statusCode`：
  + `response.statusMessage`：
  + `response.writableEnded`：
  + `response.writableFinished`：
+ **方法：**
  + `response.addTrailers(headers)`：
  + `response.end([data[, encoding]][, callback])`：
  + `response.flushHeaders()`：
  + `response.getHeader(name)`：
  + `response.getHeaderNames()`：
  + `response.getHeaders()`：
  + `response.hasHeader(name)`：
  + `response.removeHeader(name)`：
  + `response.setHeader(name, value)`：
  + `response.setTimeout(msecs[, callback])`：
  + `response.write(chunk[, encoding][, callback])`：
  + `response.writeContinue()`：
  + `response.writeHead(statusCode[, statusMessage][, headers])`：
  + `response.writeProcessing()`：




## IncomingMessage

+ **介绍：**
  + 继承自 `stream.Readable`
+ **事件：**
  + `aborted`：
  + `close`：
+ **属性：**
  + `message.aborted`：
  + `message.complete`：
  + `message.headers`：
  + `message.httpVersion`：
  + `message.method`：
  + `message.rawHeaders`：
  + `message.rawTrailers`：
  + `message.socket`：
  + `message.statusCode`：
  + `message.statusMessage`：
  + `message.trailers`：
  + `message.url`：
+ **方法：**
  + `message.destroy([error])`：
  + `message.setTimeout(msecs[, callback])`：