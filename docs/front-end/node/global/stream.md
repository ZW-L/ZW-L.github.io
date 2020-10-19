---
sidebarDepth: 2
---

## 介绍

### 概念

参考 [Stream](http://nodejs.cn/api/stream.html):
+ 所有 `Stream` 对象都是 `EventEmitter` 的实例
+ `Stream` 是一个抽象接口，Node 中有很多对象实现了这个接口
+ stream 模块主要用于开发者创建新类型的流实例，对于以消费流对象为主的开发者，极少需要直接使用 stream 模块


::: tip 备注：
+ 流类似 UNIX 中 的管道数据
+ 编写/选择网络或数据库类型的模块时，支持流 API 能提高性能，书写更优美的代码
:::


### 流类型

+ `Writable`: 可写流，如 `fs.createWriteStream()`
+ `Readable`: 可读流，如 `fs.createReadStream()`
+ `Duplex`: 可读写的双工流，如 `net.Socket`
+ `Transform`: 在读写过程中可以修改或转换数据的 `Duplex` 流，如 `zlib.createDeflate()`

::: tip 说明：
+ 可写流和可读流都会在内部的缓冲器中存储数据，可以分别使用的 `writable.writableBuffer`/`readable.readableBuffer` 来获取
+ 可缓冲的数据大小取决于传入流构造函数的 `highWaterMark` 选项
  + 对于普通的流，其指定了字节的总数
  + 对于对象模式的流，其指定了对象的总数
+ 当调用 `stream.push(chunk)` 时，数据会被缓冲在可读流中；如果流的消费者没有调用 `stream.read()`，则数据会保留在内部队列中直到被消费
+ 一旦内部的可读缓冲的总大小达到 `highWaterMark` 指定的阈值时，流会暂时停止从底层资源读取数据，直到当前缓冲的数据被消费
+ 当调用 `writable.write(chunk)` 时，数据会被缓冲在可写流中，并返回一个布尔值(当缓冲区未满时为 true)
+ 因为 `Duplex` 和 `Transform` 都是可读写的，所以它们各自维护着两个相互独立的内部缓冲器用于读取和写入，在维护数据流时，读取和写入两边可以各自独立地运作
:::


### 可读流 VS 可写流

|可读流|可写流|
|-|-|
|客户端的 HTTP 响应|客户端的 HTTP 请求|
|服务器的 HTTP 请求|服务器的 HTTP 响应|
|fs 的读取流|fs 的写入流|
|`process.stdin`|`process.stdout` 和 `process.stderr`|
|子进程 stdout 与 stderr|子进程 stdin|
|zlib 流|zlib 流|
|crypto 流|crypto 流|
|TCP socket|TCP socket|

::: tip 其中：
+ zlib 流/crypto 流/TCP socket 为 Duplex 流
+ zlib 流/crypto 流 又为 Transform 流
:::



### 实现流

+ 实现流必须继承四个基本流类之一，并调用父构造方法，新的流类根据类型必须实现一些方法：

|用例|类|需要实现的方法|
|-|-|-|
|只读|Readable|`_read()`|
|只写|Writable|`_write()`, `_writev()`, `_final()`|
|读写|Duplex|`_read()`, `_write()`, `_writev()`, `_final()`|
|操作写入的数据并读取|Transform|`_transform()`, `_flush()`, `_final()`|


::: tip 备注：
+ 避免重写诸如 `write()`、`end()`、`cork()`、`uncork()`、`read()` 和 `destroy()` 之类的公共方法
+ 避免通过 `emit()` 触发诸如 'error'、 'data'、 'end'、 'finish' 和 'close' 之类的内部事件
+ 否则会破坏当前和未来的流的不变量，从而导致与其他流、流的实用工具、以及用户期望的行为或兼容性问题
:::




## Readable

### 简介

+ 可读流是对提供数据的来源的一种抽象
+ 所有可读流都实现了 `stream.Readable` 类定义的接口
+ 在任意时刻，可读流会处于以下三种状态之一：`readable.readableFlowing === null || false || true`


### 事件

+ `error`：发生错误时触发
+ `readable`：当有数据可从流中读取时触发
+ `data`：当流将数据块传送给消费者后触发
+ `end`：当流中没有数据可供消费时触发
+ `close`：当流或其底层资源(比如文件描述符)被关闭时触发(如果使用 `emitClose` 选项创建可读流，则始终触发)
+ `pause`：当调用 `stream.pause()` 且 `readsFlowing !== false` 时触发
+ `resume`：当调用 `stream.resume()` 且 `readsFlowing !== true` 时触发
```js
const fs = require('fs')

const readable = fs.createReadStream('./test.txt', {
  highWaterMark: 5, // 每次只读取 5 字节
  autoClose: true
})
let count = 0

readable.on('error', console.log)
// 跳过第二次读取
readable.on('readable', () => {
  count++
  if (count === 2) {
    console.log('---Pause---')
    readable.pause()
    setTimeout(() => {
      console.log('---Resume---')
      readable.resume()
    }, 1000)
  } else {
    readable.read() // 读取缓冲数据
  }
})
readable.on('data', chunk => {
  console.log(`times: ${count}, total: ${chunk.length}, data: ${chunk}`)
})
readable.on('end', () => {
  console.log('数据已读取完毕...')
})
readable.on('close', () => {
  console.log('正在关闭流...')
})
/*
times: 1, total: 5, data: hello
---pause---
---Resume---
times: 3, total: 5, data:  worl
times: 4, total: 2, data: d!
数据已读取完毕...
正在关闭流...
*/
```


### 属性

+ `readable.readableEnded`：当 `end` 事件被触发时变为 `true`
+ `readable.destroyed`：在调用 `readable.destroy()` 之后为 `true`
+ `readable.readable`：若调用 `readable.read()` 是安全的，则为 `true`
+ `readable.readableFlowing`：可读流的状态
+ `readable.readableEncoding`：获取用于给定可读流的 `encoding` 属性
+ `readable.readableLength`：此属性包含准备读取的队列中的字节数（或对象数）
+ `readable.readableObjectMode`：获取用于给定可读流的 `objectMode` 属性
+ `readable.readableHighWaterMark`：返回构造可读流时传入的 `highWaterMark` 的值


### 方法

+ `readable.destroy([error])`: 销毁流
+ `readable.isPaused()`: 返回可读流当前的操作状态
+ `readable.pause()`: 使流动模式的流停止触发 `data` 事件，并切换出流动模式，任何可用的数据都会保留在内部缓存中
+ `readable.resume()`: 将被暂停的流恢复触发 `data` 事件，并将流切换到流动模式
+ `readable.setEncoding(encoding)`: 设置从可读流读取的数据使用的字符编码
+ `readable.pipe(destination[, end])`: 绑定可写流和可读流，自动切换到流动模式，并将可读流的所有数据推送到绑定的可写流
+ `readable.unpipe([destination])`: 解绑之前使用 `stream.pipe()` 方法绑定的可写流，没有指定 `destination` 时会解绑所有管道
```js
const fs = require('fs')
const zlib = require('zlib')

const z = zlib.createGzip()
const r = fs.createReadStream('test.txt')
const w = fs.createWriteStream('test.txt.gz')

r.pipe(z).pipe(w)
```
+ `readable.read([size])`: 从内部缓冲拉取并返回数据
+ `readable.unshift(chunk[, encoding])`: EOF 信号会被放在 buffer 的末尾，任何缓冲的数据仍将会被刷新
+ `readable[Symbol.asyncIterator]()`: 




## Writeable

### 简介

+ 所有可写流都实现了 `stream.Writable` 类定义的接口
+ 可写流是对数据要被写入的目的地的一种抽象


### 事件

+ `error`: 写入数据发生错误时触发
+ `close`: 当流或其底层资源(比如文件描述符)被关闭时触发，使用 `emitClose` 选项创建的可写流始终会触发该事件
+ `drain`: 调用 `stream.write(chunk)` 返回 false，且当可以继续写入数据到流时触发
+ `finish`: 调用 `stream.end()` 且缓冲数据都已传给底层系统之后触发
+ `pipe`: 在可读流上调用 `stream.pipe()` 方法时触发
+ `unpipe`: 在可读流上调用 `stream.unpipe()` 方法时触发；当可读流通过管道流向可写流发生错误时也会触发


### 属性

+ `writable.destroyed`：调用 `writable.destroy()` 之后为 true
+ `writable.writable`：若调用 `writable.write()` 是安全的，则为 true
+ `writable.writableEnded`：调用 `writable.end()` 之后为 true
+ `writable.writableLength`：包含准备写入队列中的字节/对象数
+ `writable.writableFinished`：在触发 `finish` 事件之前立即设置为 true
+ `writable.writableHighWaterMark`：返回构造可写流时传入的 `highWaterMark` 的值
+ `writable.writableObjectMode`：获取用于给定 Writable 流的 `objectMode` 属性
+ `writable.writableCorked`：为了完全 uncork 流所需要调用的 `writable.uncork()` 的次数


### 方法

+ `writable.destroy([error])`: 销毁流
+ `writable.cork()`: 强制把所有写入的数据都缓冲到内存中
+ `writable.uncork()`: 将调用 `stream.cork()` 后缓冲的所有数据输出到目标
+ `writable.end([chunk[, encoding]][, callback])`: 表明之后没有数据写入可写流，此时可再写入一块数据
+ `writable.setDefaultEncoding(encoding)`: 为可写流设置默认的 `encoding`
+ `writable.write(chunk[, encoding][, callback])`: 写入数据到流，在数据被完全处理后触发回调




## Duplex

### 简介

+ Duplex 同时实现了 Readable 和 Writable 接口


### 实现



## Transform

### 简介

+ Transform 是一种 Duplex 流，但它的输出与输入是相关联的
+ Transform 流也同时实现了 Readable 和 Writable 接口


### 方法

+ `transform.destroy([error])`: 销毁流，并可选地触发 `error` 事件


### 实现



## 其他 API

+ `stream.Readable.from(iterable, [options])`: 从迭代器中创建可读流
+ `stream.finished(stream[, options], callback)`: 当流不再可读、可写、或遇到错误、或过早关闭事件时该函数会获得通知
+ `stream.pipeline(streams, callback)`: 一个模块方法，使用管道传送多个流，并转发错误和正确地清理，当管道完成时提供回调
+ `stream.pipeline(source[, ...transforms], destination, callback)`：一个模块方法，使用管道传送多个流，并转发错误和正确地清理，当管道完成时提供回调



## 使用技巧

### 流实现静态 web 服务器

+ 响应请求并返回文件数据
```js
// 缺点：将整个文件读入内存，当文件过大/过多时性能下降
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.statusCode = 500
      res.end(String(err))
    } else {
      res.end(data)
    }
  })
}).listen(3000)

console.log('Server is running at http://localhost:3000')
```
+ 优化：使用流
```js
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  fs.createReadStream('./index.html').pipe(res)
}).listen(3000)

console.log('Server is running at http://localhost:3000')
```
+ 使用 gzip 压缩文件体积
```js
const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer((req, res) => {
  res.writeHead(200, { 'content-encoding': 'gzip' })
  fs.createReadStream('./index.html')
    .pipe(zlib.createGzip())
    .pipe(res)
}).listen(3000)

console.log('Server is running at http://localhost:3000')
```