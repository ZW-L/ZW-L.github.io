---
sidebarDepth: 2
---

## 介绍

### Web Worker 简介

+ `Web Workers` 是运行在后台的 `JavaScript`，不会影响页面的性能
+ 由于 `Web Workers` 位于外部文件中，它们无法访问 `window`, `document`, `parent` 等对象

### 接口

[MDN Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) 记录的相关接口：

+ [AbstractWorker](https://developer.mozilla.org/en-US/docs/Web/API/AbstractWorker): `Worker` 抽象类
+ [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker): `Worker` 对象
+ [WorkerLocation](https://developer.mozilla.org/en-US/docs/Web/API/WorkerLocation): 记录 `Worker` 脚本位置的对象，包括 host, port, hash 等信息
+ [WorkerNavigator](https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator): 记录浏览器信息的对象，包括 appCodeName, appName, storage 等信息
+ `ShareWorker`: 
+ `ShareWorkerGlobalScope`: 
+ `WorkerGlobalScope`: 
+ `DedicatedWorkerGlobalScope`: 

::: tip 注意：
+ 对于 `Web Worker` 的使用，主要是 `Worker` 对象，它用于实例化，以及绑定一些事件
:::



## Worker 对象

### 构造函数

+ `Worker(url [, options])`
  + `url`: 严格遵守同源政策
  + `options`: 选项对象，可以设置的属性如下：
    + `type`: 要创建的 `Worker` 程序类型
    + `credentials`: 用于 `Worker` 程序的凭据类型
    + `name`: 表示 `Worker` 程序范围的标识名称，主要用于调试目的

```js
const myWorker = new Worker('worker.js')
```

::: danger 注意：
+ 为了安全，`Worker` 的使用必须遵守同源策略！
:::

### 方法

+ `postMessage(message, [transfer])`: 向 `Worker` 实例发送消息
+ `terminate()`: 终止 `Worker`，此后 `Worker` 实例不再收发信息

::: tip 说明：
+ 浏览器主线程能使用 `Worker` 实例调用 `postMessage()` 向 `Worker` 线程发送信息
+ `Worker` 线程同样能使用 `self` 调用 `postMessage()` 向浏览器主线程发送信息
:::

```js
// main.js
const worker = new Worker('worker.js')
worker.postMessage('Hello, Worker!')

// worker.js
self.postMessage('Hello, Client!')
```

### 事件

+ `message`: 接受到信息时
+ `messageerror`: 接收到信息但不能反序列化时
+ `rejecthandled`: 
+ `unhandledrejection`: 

::: tip 说明：
+ `message`/`messageerror` 事件既能绑定在浏览器线程的 `worker` 实例上，也能绑定在 `Worker` 线程的 `self` 上
:::

```js
// main.js
const worker = new Worker('worker.js')
worker.addEventListener('message', function(e) {
  console.log(`In Client: ${e.data}`)
})

// worker.js
self.addEventListener('message', function(e) {
  console.log(`In Worker: ${e.data}`)
})
```

### 一个完整的对话

main.js:

```js
const worker = new Worker('worker.js') // 创建 Worker 实例

worker.addEventListener('message', function(e) {
  console.log(`In Client: ${e.data}`) // 打印 Worker 线程发送过来的消息
  worker.postMessage('Hello, Worker!') // 发送消息给 Worker 线程
})
```

worker.js:

```js
self.postMessage('Hello, Client!')

self.addEventListener('message', function(e) {
  console.log(`In Worker: ${e.data}`) // 打印来自浏览器线程的消息
})
```

控制台输出为：

```
In Client: Hello, Client!
In Worker: Hello, Worker!
```

::: warning 注意：
+ 需要在本地服务器才能使用 Worker，不能以文件方式打开
:::