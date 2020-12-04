## 介绍

+ `WebSocket` 在 `HTML5` 中引入，与 `HTTP` 协议一样都是建立在 `TCP` 协议之上的应用层协议，都属于可靠协议
+ `WebSocket` 连接时需要使用 `HTTP` 协议通信
+ `WebSocket` 只需要完成一次握手就能创建持久性连接(`HTTP` 需要三次握手)
+ `WebSocket` 是有状态的(`HTTP` 是无状态的)，不用再每次发送报文都提供报文信息
+ `WebSocket` 允许双工通信，不仅客户端能向服务端发送消息，而且服务端也能主动向客户端发送消息



## 浏览器使用

+ 更多实例属性和方法 [HTML5 WebSocket](/base/html/html5/websocket)
```js
const ws = new WebSocket(url, protocols)
```
+ `url: String`: 请求 url 地址
+ `protocols='': Array`: 单个协议名称或包含多个协议的数组




## 服务端使用

+ Node.js 中使用第三方模块 `ws`：
```js
const WebSocket = require('ws')
const http = require('ws')

// 两种方式创建 WebSocket 实例
// 1.传入一个对象
const wsServer = new WebSocket.Server({ port: 1234 })

// 2.传入一个 http 实例
const httpServer = new https.createServer()
const wsServer = new WebSocket.Server({ server: httpServer })
```



## 示例

+ 客户端
```js
const ws = new WebSocket('ws://localhost:1234')
console.log('Try to connect WebSocket Server...')

ws.addEventListener('open', () => {
  console.log('Connect Success!')
  ws.send('Client: Hi, WebSocket!')
})

ws.addEventListener('message', event => {
  console.log(event.data)
})
```

+ 服务端
```js
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 1234 })

wss.on('connection', ws => {
  console.log('Server connection success!')
  ws.on('message', message => {
    console.log('received: %s', message)
    ws.send(message)
    ws.send('Server: Hello, I\'m WebSocket!')
  })
})
```