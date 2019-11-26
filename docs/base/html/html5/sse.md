---
sidebarDepth: 2
---


## 介绍

&emsp;&emsp;服务器发送事件(Service-Sent Events)使得网页能自动获取来自服务器的更新。

使用步骤：

+ 创建 `EventSource` 对象的实例，并且传入发送更新的页面的 URL 作为参数
+ 在该实例上添加 `onmessage` 事件监听，接收事件对象的 `data` 属性

```js
let sse = new EventSource('http://localhost:8081/')

sse.addEventListener('message', function (e) {
  console.log(`Get message: ${e.data}`)
})
```

+ 最后，还必须在服务器的响应头上设置 `'Content-Type': 'text/event-stream'`

```js
res.setHeader('Content-Type', 'text/event-stream')
```

::: tip 说明：
+ 事实上，创建 `EventSource` 对象相当于向服务器发送一个请求，接着会建立与对应服务器的长连接
:::


## API

### 属性

+ `readyState`: 表示连接状态，取值：`CONNECTION`(0), `OPEN`(1), `CLOSED`(2)
+ `url`: 源 URL
+ `withCredentials`: 默认 false。

### 方法

+ `close()`: 关闭连接，并将 `readyState` 设置为 `CLOSED`

### 事件

+ `onopen`: 与事件源的连接打开时，一般只触发一次(因为接下来会保持连接)
+ `onmessage`: 从事件源接收到数据时
+ `onerror`: 与事件源的连接无法打开时

### 响应数据的字段格式

+ `event`: 消息的事件类型
+ `id`: 消息的 ID，客户端接收到消息后，会把该 ID 作为内部属性 `Last-Event-ID`(该属性会在在断开重连成功后发送给服务器)
+ `retry`: 客户端重连的时间，单位是毫秒
+ `data`: 消息的数据字段

::: danger 注意：
+ 每个字段的格式类似 `event: update\n`，字段后必须带冒号，而且事件的字段之间至少用一个换行符分隔(`\n`)
+ 每个不同事件的响应数据结尾一定有两个换行符(`\n\n`)分隔，否则响应会出错
:::


## 简单的 Demo

index.html:

```html
<button id="start">开始接收</button>
<button id="stop">停止接收</button>
<div id="box"></div>

<script>
  const start = document.getElementById('start')
  const stop = document.getElementById('stop')
  const box = document.getElementById('box')

  let sse

  start.addEventListener('click', function (e) {
    sse = new EventSource('/currentTime')
    sse.addEventListener('message', function (e) {
      console.log('Get message success!')
      box.textContent = e.data
    })
  })

  stop.addEventListener('click', function (e) {
    sse.close()
    sse = null
  })
</script>
```

server.js:

```js
const http = require('http')

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  if (req.url === '/') {
    // 定时发送消息
    setInterval(function() {
      res.write(`data: ${new Date()}\n\n`)
    }, 1000)
  }
}).listen(8081)

console.log('listening at http://localhost:8081/')
```

&emsp;&emsp;在本地用 Node 启动 `server.js` 后在浏览器打开 `index.html` 文件，点击按钮便可以看到从服务器推送的时间。


## 响应多个事件

index.html:

```html
<div id="name"></div>
<div id="age"></div>
<script>
  const name = document.getElementById('name')
  const age = document.getElementById('age')

  const sse = new EventSource('http://localhost:8081')

  sse.addEventListener('name', function (e) {
    name.textContent = e.data
  })

  sse.addEventListener('age', function (e) {
    age.textContent = e.data
  })
</script>
```

server.js: 1秒后推送数据 `Alice`，2秒后推送数据 `24`

```js
const http = require('http')

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  console.log(req.url)

  if (req.url === '/') {
    setTimeout(() => {
      res.write('event: name\n')
      res.write('data: Alice\n\n') // 必须使用两个换行符
    }, 1000);

    setTimeout(() => {
      res.write(`event: age\n`)
      res.write(`data: 24\n\n`) // 必须使用两个换行符
    }, 2000);
  }
}).listen(8081)

console.log('listening at http://localhost:8081/')
```