---
sidebarDepth: 2
---

## 介绍

+ [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/Websockets_API) 是一种在单个 `TCP` 连接上进行全双工通讯的协议，允许服务端主动向客户端推送数据
+ 浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输
+ `WebSocket` 比 `Ajax` 轮循节省服务器资源和带宽，能够更实时地进行通讯，图片取自 [菜鸟教程](https://www.runoob.com/html/html5-websocket.html)

![WebSocket 和 Ajax 轮循](./imgs/websocket.png)


## WebSocket 对象

### 构造函数

`WebSocket(url: String, protocol?='': Array)`：返回一个 `WebSocket` 实例对象
+ `url`: 连接的服务器 URL
+ `protocols`: 可接受的子协议

### 属性

+ `binaryType: readonly String`: 连接使用的二进制数据类型
+ `bufferedAmount: readonly Number`: 数据队列的字节数
+ `extensions: readonly String`: 服务器接受的扩展名
+ `protocol: readonly Array`: 服务器接受的子协议
+ `readyState: readonly Number`: 表示连接状态，取值为
  + 0: 连接尚未建立
  + 1: 连接已建立，可以进行通信
  + 2: 连接正在进行关闭
  + 3: 连接已关闭或不能打开
+ `url: readonly String`: `WebSocket` 连接的服务器 URL

### 方法

+ `send(data)`: 发送数据
+ `close(code?, reason?)`: 关闭连接

### 事件

+ `open()`: 连接建立时
+ `close()`: 连接关闭时
+ `message()`: 接收服务端数据时
+ `error()`: 连接发生错误时


## 简单使用

使用 `WebSocket` 需要服务器的配合响应，这里创建一个本地 `Node` 服务器并使用一个第三方的 `ws` 模块：

```js
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 1234 })
wss.on('connection', ws => {
  ws.on('message', message => {
    ws.send(message)
    ws.send('Server: Hello, I\'m WebSocket!')
  })
})
```

index.html: 

```html
<script>
  const ws = new WebSocket('ws://localhost:1234')
  console.log('Try to connect WebSocket Server...')

  ws.addEventListener('open', () => {
    console.log('Connect Success!')
    ws.send('Client: Hi, WebSocket!')
  })

  ws.addEventListener('message', event => {
    console.log(event.data)
  })
</script>
```

浏览器控制台的输出为：

```
Try to connect WebSocket Server...
Connect Success!
Client: Hi, WebSocket!
Server: Hello, I'm WebSocket!
```