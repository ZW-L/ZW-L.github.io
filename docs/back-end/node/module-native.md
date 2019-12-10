---
sidebarDepth: 2
---


## 简介

+ `assert`：断言测试模块
+ `child_process`：提供衍生子进程的能力
+ `cluster`：用于创建共享服务器端口的子进程
+ `crypto`：提供加密功能
+ `dgram`：提供 `UDP` 数据包 `socket` 的实现
+ `dns`：域名服务器相关
+ `events`：事件触发器，主要提供 `EventEmitter` 类
+ `fs`：文件系统操作
+ `http`：`HTTP` 服务器和客户端
+ `http2`：`HTTP/2` 协议的实现
+ `https`：基于 `TLS/SSL` 的 `HTTP` 协议
+ `inspector`：与 `Chrome V8` 检查器进行交互
+ `net`：用于创建基于流的 `TCP/IPC` 的服务器与客户端
+ `os`：提供与操作系统相关的方法和属性
+ `path`：提供用于处理文件路径和目录路径的工具
+ `url`：处理与解析 `URL`
+ `util`：内置的实用 `API`
+ `zlib`：提供压缩功能

## [assert](http://nodejs.cn/api/assert.html)

+ 提供一组简单的断言测试，可用于测试不变量
+ 抛出的所有错误都将是 `assert.AssertionError` 类的实例
+ 该模块提供了建议的严格模式和更宽松的遗留模式

**API：**

+ `new assert.AssertionError(options)`：
+ `assert(value[, message])`：
+ `assert.deepEqual(actual, expected[, message])`：
+ `assert.deepStrictEqual(actual, expected[, message])`：
+ `assert.doesNotReject(asyncFn[, error][, message])`：
+ `assert.doesNotThrow(fn[, error][, message])`：
+ `assert.equal(actual, expected[, message])`：
+ `assert.fail([message])`：
+ `assert.fail(actual, expected[, message[, operator[, stackStartFn]]])`：
+ `assert.ifError(value)`：
+ `assert.notDeepEqual(actual, expected[, message])`：
+ `assert.notDeepStrictEqual(actual, expected[, message])`：
+ `assert.notEqual(actual, expected[, message])`：
+ `assert.notStrictEqual(actual, expected[, message])`：
+ `assert.ok(value[, message])`：
+ `assert.rejects(asyncFn[, error][, message])`：
+ `assert.strictEqual(actual, expected[, message])`：
+ `assert.throws(fn[, error][, message])`：


## [child_process](http://nodejs.cn/api/child_process.html)

+ 创建异步的进程
+ 创建同步的进程
+ ChildProcess 类

## [cluster](http://nodejs.cn/api/cluster.html)

+ Worker 类
+ `cluster.disconnect([callback])`：
+ `cluster.fork([env])`：
+ `cluster.isMaster`：
+ `cluster.isWorker`：
+ `cluster.schedulingPolicy`：
+ `cluster.settings`：
+ `cluster.setupMaster([settings])`：
+ `cluster.worker`：
+ `cluster.workers`：

## [crypto](http://nodejs.cn/api/crypto.html)

+ Certificate 类
+ Cipher 类
+ Decipher 类
+ DiffieHellman 类
+ DiffieHellmanGroup 类
+ Hash 类
+ Hmac 类
+ KeyObject 类
+ Sign 类
+ Verify 类


## [dgram](http://nodejs.cn/api/dgram.html)

+ dgram.Socket 类
+ `dgram.createSocket(options[, callback])`
+ `dgram.createSocket(type[, callback])`

## [dns](http://nodejs.cn/api/dns.html)

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



## events

[events](http://nodejs.cn/api/events.html) 模块包含一个 `EventEmitter` 类和一个 `once()` 方法。

### EventEmitter

`EventEmitter` 类是


**事件：**

+ `newListener`：新增监听器时触发，事件回调接收参数为目标事件名、目标事件绑定的事件回调
  + callback: `(eventName: string | symbol, listener: function)`
+ `removeListener`：移除已存在监听器时触发，事件回调接收参数为目标事件名、目标事件绑定的事件回调
  + callback: `(eventName: string | symbol, listener: function)`

```js
const EventEmitter = require('events').EventEmitter
const myEmitter = new EventEmitter()

function sayHi() {
  console.log('Hello World!')
}

myEmitter.on('newListener', (eventName, listener) => {
  console.log(`Add new listener: ${eventName}`)
})
myEmitter.on('removeListener', (eventName, listener) => {
  console.log(`Remove listener: ${eventName}`)
})

myEmitter.on('A', sayHi)
myEmitter.on('B', sayHi)
myEmitter.emit('A')
myEmitter.removeListener('A', sayHi)
myEmitter.removeListener('B', sayHi)
```

打印结果为：

```
Add a new listener. removeListener
Add new listener: A
Add new listener: B
Hello World!
Remove listener: A
Remove listener: B
```

::: tip 说明：
+ 可以看出，如果先监听 `newListener` 事件，后面监听 `removeListener` 事件时会触发 `newListener` 事件
+ `newListener`/`removeListener` 的事件处理函数都保留了目标事件的处理函数句柄，因此都可以调用该函数：
```js
myEmitter.on('newListener', (eventName, listener) => {
  console.log(`Add new listener: ${eventName}`)
  listener() // Hello World!
})
myEmitter.on('removeListener', (eventName, listener) => {
  console.log(`Remove listener: ${eventName}`)
  listener() // Hello World!
})
```
:::

**属性：**

+ `EventEmitter.defaultMaxListeners: number`：获取/设置默认的最大事件监听器数（会影响至所有 `EventEmitter` 实例）

**方法：**

+ 添加事件监听：
  + `emitter.addListener(eventName: string, listener: function): EventEmitter`：相当于 `emitter.on()`
  + `emitter.on(eventName: string, listener: function): EventEmitter`：添加事件监听器
  + `emitter.once(eventName: string, listener: function): EventEmitter`：添加事件监听器，只会触发一次
  + `emitter.prependListener(eventName: string, listener: function): EventEmitter`：添加一个函数在指定事件的监听器数组的开头
  + `emitter.prependOnceListener(eventName: string, listener: function): EventEmitter`：添加一个函数在指定事件的监听器数组的开头，但只触发一次

+ 移除事件监听：
  + `emitter.off(eventName: string, listener: function): EventEmitter`：移除指定事件监听器
  + `emitter.removeListener(eventName: string, listener: function): EventEmitter`：相当于 `emitter.off()`
  + `emitter.removeAllListeners(eventName?: Array): EventEmitter`：移除所有事件监听器或指定的事件监听器

+ 触发事件：
  + `emitter.emit(eventName: string, ...args: any): boolean`：按照监听器注册的顺序，同步地调用所有监听器，并传入参数列表

+ 其他：
  + `emitter.getMaxListeners(): number`：获取实例的最大监听数
  + `emitter.setMaxListeners(n: number): EventEmitter`：设置实例的最大监听数
  + `emitter.eventNames(): string[]`：返回已注册监听器的事件名数组
  + `emitter.listeners(eventName: string): function[]`：返回指定事件的监听器数组的副本
  + `emitter.listenerCount(eventName: string): number`：返回正在监听指定事件的监听器的数量
  + `emitter.rawListeners(eventName): function[]`：返回指定事件的监听器数组的拷贝

::: tip 说明：
+ 设置 `EventEmitter.defaultMaxListeners` 属性会影响所有的 `EventEmitter` 实例，当只需要对某个实例起作用时，使用 `emitter.setMaxListeners(n)` 更好
:::

### once()

&emsp;&emsp;用于创建一个 `Promise`，当一个 `EventEmitter` 实例触发指定事件时则会被 `resolve`，触发 `error` 时会被 `reject`。

**语法：** `events.once(emitter: EventEmitter, eventName: string): Promise`

```js

```



## [fs](http://nodejs.cn/api/fs.html)

+ fs.Dir 类
+ fs.Dirent 类
+ fs.FSWatcher 类
+ fs.ReadStream 类
+ fs.Stats 类
+ fs.WriteStream 类
+ ...

## http

[http](http://nodejs.cn/api/http.html) 模块用于实现 HTTP 服务器和客户端。主要包含：

+ `http API`：
+ `http.Agent` 类：
+ `http.ClientRequest` 类：
+ `http.Server` 类：
+ `http.ServerResponse` 类：
+ `http.IncomingMessage` 类：

### API

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


### Agent

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


### ClientRequest

+ **事件：**
  + `abort`：
  + `connect`：
  + `continue`：
  + `information`：
  + `response`：
  + `socket`：
  + `timeout`：
  + `upgrade`：

+ **属性：**
  + `request.aborted`：
  + `request.connection`：
  + `request.finished`：
  + `request.maxHeadersCount`：
  + `request.path`：
  + `request.socket`：
  + `request.writableEnded`：
  + `request.writableFinished`：

+ **方法：**
  + `request.abort()`：
  + `request.end([data[, encoding]][, callback])`：
  + `request.flushHeaders()`：
  + `request.getHeader(name)`：
  + `request.removeHeader(name)`：
  + `request.setHeader(name, value)`：
  + `request.setNoDelay([noDelay])`：
  + `request.setSocketKeepAlive([enable][, initialDelay])`：
  + `request.setTimeout(timeout[, callback])`：
  + `request.write(chunk[, encoding][, callback])`：

### Server

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


### ServerResponse

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


### IncomingMessage

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




## [http2](http://nodejs.cn/api/http2.html)

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

## [https](http://nodejs.cn/api/https.html)

+ https.Agent 类
+ https.Server 类
+ `https.createServer([options][, requestListener])`：
+ `https.get(options[, callback])`：
+ `https.get(url[, options][, callback])`：
+ `https.globalAgent`：
+ `https.request(options[, callback])`：
+ `https.request(url[, options][, callback])`：

## [inspector](http://nodejs.cn/api/inspector.html)

+ inspector.close()
+ inspector.console
+ inspector.open([port[, host[, wait]]])
+ inspector.url()
+ inspector.waitForDebugger()
+ inspector.Session 类

## [net](http://nodejs.cn/api/net.html)

+ net.Server
+ net.Socket
+ net.connect()
+ net.createConnection()
+ `net.createServer([options][, connectionListener])`：
+ `net.isIP(input)`：
+ `net.isIPv4(input)`：
+ `net.isIPv6(input)`：

## os

[os](http://nodejs.cn/api/os.html) 模块提供访问操作系统相关属性的接口。

### 属性

+ `os.EOL: '\n' | '\r\n'`：返回特定操作系统的换行符（Windows 下为 `\r\n`）
+ `os.constants: object`：包含错误码、进程信号等常用的操作系统特定的常量

### 方法

+ `os.type(): 'Linux' | 'Darwin' | 'Windows_NT'`：返回操作系统种类
+ `os.platform(): string`：返回操作系统平台标识（`aix`, `darwin`, `freebsd`, `linux`, `openbsd`, `sunos`, `win32` 等）
+ `os.release(): string`：返回操作系统版本号
+ `os.hostname(): string`：返回操作系统的主机名
+ `os.userInfo(options?: { encoding: string }): object`：返回当前用户的信息
+ `os.homedir(): string`：返回当前用户的主目录路径
+ `os.tmpdir(): string`：返回操作系统的默认临时文件目录
+ `os.uptime(): integer`：返回系统的正常运行时间（单位为秒）
+ `os.totalmem(): integer`：返回系统的内存总量（单位为字节）
+ `os.freemem(): integer`：返回空闲的系统内存量（单位为字节）
+ `os.loadavg(): number[]`：返回一个数组，包含 1/5/15 分钟的平均负载
+ `os.networkInterfaces(): object`：返回已分配网络地址的网络接口信息对象
+ `os.arch(): string`：返回编译 Node.js 二进制文件的操作系统的 CPU 架构（`arm`, `arm64`, `ia32`, `mips`, `mipsel`, `ppc`, `ppc64`, `s390`, `s390x`, `x32`, `x64` 等）
+ `os.cpus(): object[]`：返回一个包含每个逻辑 CPU 内核信息的对象数组
+ `os.endianness(): 'BE' | 'LE'`：返回标识编译 Node.js 二进制文件的 CPU 的字节序
+ `os.getPriority(pid=0?: integer)`：返回由指定进程的调度优先级（默认返回当前进程的优先级）
+ `os.setPriority(pid?=0, priority)`：设置指定进程的调度优先级（默认设置当前进程的优先级）

::: tip 说明：
+ `os.loadavg()`：平均负载是 UNIX 特定的概念，在 Windows 上，返回值始终为 [0, 0, 0]
+ `os.arch()`/`os.platform()` 与 `process.arch()`/`process.platform()` 返回一样的值
:::

### 常量

`os` 常量使用 `os.constants` 获取，细分为以下几种：

+ [信号常量](http://nodejs.cn/api/os.html#os_signal_constants)：`os.constants.signals`
+ [错误常量](http://nodejs.cn/api/os.html#os_error_constants)：`os.constants.errno`
+ [dlopen 常量](http://nodejs.cn/api/os.html#os_dlopen_constants)：`os.constants.dlopen`
+ [优先级常量](http://nodejs.cn/api/os.html#os_priority_constants)：`os.constants.priority`
+ [libuv 常量](http://nodejs.cn/api/os.html#os_libuv_constants)：只有一个 `os.constants.UV_UDP_REUSEADDR`



## path

[path](http://nodejs.cn/api/path.html) 模块提供用于处理文件路径和目录路径的实用工具。


### 属性

+ `path.delimiter: ':' | ';'`：返回操作系统特定的路径定界符（Windows 为 `;`）
+ `path.sep: '\' | '/'`：返回操作系统特定的路径片段分隔符（Windows 为 `\`）
+ `path.posix: object`：提供对 `path` 方法的 POSIX 特定实现的访问
+ `path.win32: object`：提供对 `path` 方法的 Windows 特定实现的访问

### 方法

+ `path.basename(path: string, ext?: string): string`：返回指定路径的最后一部分，即最后一个 `/` 之后的内容（指定了 `ext` 参数后返回值不包含 `ext` 部分）
+ `path.dirname(path: string): string`：返回指定路径的目录名，即最后一个 `/` 之前的内容
+ `path.extname(path: string): string`：返回指定路径的扩展名，即最后一个 `.` 以及之后的内容
+ `path.parse(path: string): object`：返回一个表示指定路径的各个属性的对象
+ `path.format(pathObj: object): string`：返回路径字符串，与 `parser()` 相反
+ `path.isAbsolute(path: string): boolean`：检测是否为绝对路径
+ `path.relative(from: string, to: string): string`：根据当前工作目录返回 from 到 to 的相对路径
+ `path.join(...path: string): string`：使用操作系统特定的路径定界符将所有给定的路径片段连接
+ `path.normalize(path: string): string`：将给定的路径规范化
+ `path.resolve(...path: string)`：将路径或路径片段的序列解析为绝对路径
+ `path.toNamespacedPath(path: string): string`：返回指定路径的等效名称空间前缀路径（仅用于 Windows 系统）


## url

[url](http://nodejs.cn/api/url.html) 模块用于处理与解析 URL。包含两个类（`URL`, `URLSearchParams`）和一些方法。

### URL

&emsp;&emsp;浏览器兼容的 URL 类，根据 WHATWG URL 标准实现。

+ **构造函数**：
  + `new URL(input: string, base?: string): URL`：创建一个 URL 对象，当 `input` `是相对路径是，base` 是必须的

+ **属性**：
  + `url.hash: string`：获取/设置的哈希片段
  + `url.host: string`：获取/设置的主机名和端口
  + `url.hostname: string`：获取/设置的主机名
  + `url.origin: string`：获取/设置的源
  + `url.username: string`：获取/设置的用户名
  + `url.password: string`：获取/设置的密码
  + `url.pathname: string`：获取/设置的路径名
  + `url.port: string`：获取/设置的端口号
  + `url.protocol: string`：获取/设置的协议名称
  + `url.search: string`：获取/设置的查询字符串
  + `url.href: string`：获取/设置 URL，等同于 `url.toString()`
  + `url.searchParams: readonly URLSearchParams`：表示 URL 查询参数的 `URLSearchParams` 对象

+ **方法**：
  + `url.toString()`：返回序列化的 URL
  + `url.toJSON()`：返回序列化的 URL

::: tip 说明：
+ `url.href`/`url.toString()`/`url.toJSON()` 三者是一样的
+ 一些协议的默认端口号如下：
  + `ftp`: 21
  + `file`: 无
  + `gopher`: 70
  + `http`/`ws`: 80
  + `https`/`wss`: 443
:::

### URLSearchParams

&emsp;&emsp;URLSearchParams 提供对 URL 查询部分的读写权限，有四个不同的构造函数，并且可以在全局对象上使用。

+ **构造函数**：
  + `new URLSearchParams(): URLSearchParams`：创建一个空的查询字符串
  + `new URLSearchParams(str: string): URLSearchParams`：将字符串解析成一个查询字符串
  + `new URLSearchParams(obj: object): URLSearchParams`：将对象解析成一个查询字符串
  + `new URLSearchParams(iter: iterator): URLSearchParams`：将迭代器解析成一个查询字符串

+ **方法**：
  + `urlSearchParams.append(name: string, value: string)`：在查询字符串中添加一个新的键值对
  + `urlSearchParams.delete(name: string)`：删除所有指定名字的字符串
  + `urlSearchParams.keys(): Iterator`：返回一个所有键名的迭代器
  + `urlSearchParams.values(): Iterator`：返回一个所有键对应的值的迭代器
  + `urlSearchParams.entries(): Iterator`：返回一个键值对的迭代器
  + `urlSearchParams[Symbol.iterator]()`：相当于 `urlSearchParams.entries()`
  + `urlSearchParams.forEach(fn: function, thisArg?: object)`：在查询字符串中迭代每个键值对
  + `urlSearchParams.has(name: string): boolean`：判断是否包含指定键名
  + `urlSearchParams.get(name: string): string | null`：返回指定键名的第一个值
  + `urlSearchParams.getAll(name: string): []`：返回指定键名的所有值
  + `urlSearchParams.set(name: string, value: string)`：设置匹配的键对应的值；不存在时会新建；若存在多个匹配的键，会设置第一对并删除其他对
  + `urlSearchParams.sort()`：按现有名称就地排列所有的键值对（稳定排序）
  + `urlSearchParams.toString(): string`：返回查询参数序列化后的字符串

::: tip 说明：
+ `URLSearchParams` 类和 `querystring` 模块类似，但是 `querystring` 模块更加通用，因为它可以定制分隔符（`&`, `=`）

:::


### 其他方法

+ `url.domainToASCII(domain: string): string`：返回 Punycode ASCII 序列化后的域名
+ `url.domainToUnicode(domain: string): string`：返回 Unicode 序列化后的的域名
+ `url.format(url: URL, options?: object): string`：返回自定义序列化的 URL
+ `url.fileURLToPath(url: URL | string): string`：返回文件 URL 对象对应的路径
+ `url.pathToFileURL(path: string): URL`：返回文件路径对应的 URL 对象

::: tip 说明：
+ `domainToASCII()`/`domainToUnicode()` 是一对逆运算
+ `fileURLToPath()`/`pathToFileURL()` 也算是一对逆运算
:::


## util

[util](http://nodejs.cn/api/util.html) 模块主要用于支持 Node.js 内部 API 的需求，内置了一些的实用 API。主要有以下几部分：

+ util API
+ `util.TextDecoder` 类：解码
+ `util.TextEncoder` 类：编码
+ `util.types` 类：提供给 `TextEncoder` 实例使用的一系列类型判断函数 


### API

+ `util.callbackify(original: function): function`：将 async 异步函数（或者一个返回值为 Promise 的函数）转换成异常优先的回调风格的函数
+ `util.promisify(original: function): function`：将异常优先的回调风格的函数转换成一个 Promise 版本的函数
+ `util.inherits(sub: function, super: function)`：原型继承（现在建议使用 ES6 的 `extends` 语法）
+ `util.getSystemErrorName(err): string`：
+ `util.debuglog(section: string): function`：创建基于 NODE_DEBUG 环境变量调试函数
+ `util.deprecate(fn, msg[, code])`：
+ `util.format(format, ...arg?: any)`：返回一个格式化后的字符串
+ `util.formatWithOptions(inspectOptions, format[, ...args])`：
+ `util.inspect(object[, options])`：
+ `util.inspect(object[, showHidden[, depth[, colors]]])`：
+ `util.isDeepStrictEqual(val1, val2)`：


### TextDecoder

在 WHAT WG 编码标准上实现的 API，用于文本解码：

+ `new TextDecoder([encoding[, options]])`:
+ `textDecoder.decode([input[, options]])`:
+ `textDecoder.encoding`:
+ `textDecoder.fatal`:
+ `textDecoder.ignoreBOM`:


### TextEncoder

在 WHAT WG 编码标准上实现的 API，只支持 `UTF-8` 编码，用于文本编码：

+ `textEncoder.encode([input])`：
+ `textEncoder.encodeInto(src, dest)`：
+ `textEncoder.encoding`：


### types

提供给 TextEncoder 实例使用的 API，提供各种类型的内置对象的类型检查：

+ `util.types.isAnyArrayBuffer(value)`：
+ `util.types.isArgumentsObject(value)`：
+ `util.types.isArrayBuffer(value)`：
+ `util.types.isAsyncFunction(value)`：
+ `util.types.isBigInt64Array(value)`：
+ `util.types.isBigUint64Array(value)`：
+ `util.types.isBooleanObject(value)`：
+ `util.types.isBoxedPrimitive(value)`：
+ `util.types.isDataView(value)`：
+ `util.types.isDate(value)`：
+ `util.types.isExternal(value)`：
+ `util.types.isFloat32Array(value)`：
+ `util.types.isFloat64Array(value)`：
+ `util.types.isGeneratorFunction(value)`：
+ `util.types.isGeneratorObject(value)`：
+ `util.types.isInt8Array(value)`：
+ `util.types.isInt16Array(value)`：
+ `util.types.isInt32Array(value)`：
+ `util.types.isMap(value)`：
+ `util.types.isMapIterator(value)`：
+ `util.types.isModuleNamespaceObject(value)`：
+ `util.types.isNativeError(value)`：
+ `util.types.isNumberObject(value)`：
+ `util.types.isPromise(value)`：
+ `util.types.isProxy(value)`：
+ `util.types.isRegExp(value)`：
+ `util.types.isSet(value)`：
+ `util.types.isSetIterator(value)`：
+ `util.types.isSharedArrayBuffer(value)`：
+ `util.types.isStringObject(value)`：
+ `util.types.isSymbolObject(value)`：
+ `util.types.isTypedArray(value)`：
+ `util.types.isUint8Array(value)`：
+ `util.types.isUint8ClampedArray(value)`：
+ `util.types.isUint16Array(value)`：
+ `util.types.isUint32Array(value)`：
+ `util.types.isWeakMap(value)`：
+ `util.types.isWeakSet(value)`：
+ `util.types.isWebAssemblyCompiledModule(value)`：



## zlib

[zlib](http://nodejs.cn/api/zlib.html) 模块提供压缩功能。

### API



+ zlib.constants
+ Options 类
+ BrotliOptions 类
+ zlib.BrotliCompress 类
+ zlib.BrotliDecompress 类
+ zlib.Deflate 类
+ zlib.DeflateRaw 类
+ zlib.Gunzip 类
+ zlib.Gzip 类
+ zlib.Inflate 类
+ zlib.InflateRaw 类
+ zlib.Unzip 类
+ zlib.ZlibBase 类
+ `zlib.createBrotliCompress([options])`：
+ `zlib.createBrotliDecompress([options])`：
+ `zlib.createDeflate([options])`：
+ `zlib.createDeflateRaw([options])`：
+ `zlib.createGunzip([options])`：
+ `zlib.createGzip([options])`：
+ `zlib.createInflate([options])`：
+ `zlib.createInflateRaw([options])`：
+ `zlib.createUnzip([options])`：
