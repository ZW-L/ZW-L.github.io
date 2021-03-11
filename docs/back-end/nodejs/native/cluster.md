---
sidebarDepth: 2
---

## 简介

+ [cluster](http://nodejs.cn/api/cluster.html)模块可以创建共享服务器端口的子进程
+ 单个 Node.js 实例运行在单个线程中，为了充分利用多核系统，有时需要启用一组 Node.js 进程去处理负载任务
+ 工作进程由 `child_process.fork()` 方法创建，它们可以使用 IPC 和父进程通信，使各进程交替处理连接服务
+ 虽然 cluster 模块主要用于网络相关的情况，但同样可以用于其他需要工作进程的情况
+ Node.js 不支持路由逻辑，因此在设计应用时，不应该过分依赖内存数据对象，例如 session 和登陆等


## 原理

**cluster 模块支持两种分发连接**：
1. 循环法：由主进程负责监听端口，接收新连接后再将连接循环分发给工作进程，在分发中使用了一些内置技巧防止工作进程任务过载(除 Windows 外所有平台的默认方法)
2. 主进程创建监听 socket 后发送给感兴趣的工作进程，由工作进程负责直接接收连接

::: tip 备注：
理论上方法2 效率最佳，但实际情况下由于操作系统调度机制难以捉摸，会使分发变得不稳定，可能会出现八个进程中有两个分担了 70% 的负载
:::

**server.listen() 将大部分工作交给主进程完成，导致普通 Node.js 进程与 cluster 工作进程可能有三种差异**：
1. server.listen({fd: 7}) 因为消息会被传给主进程，所以父进程中的文件描述符 7 将会被监听并将句柄传给工作进程，而不是监听文件描述符 7 指向的工作进程
2. server.listen(handle) 显式地监听句柄，会导致工作进程直接使用该句柄，而不是和主进程通信
3. server.listen(0) 正常情况下，这种调用会导致 server 在随机端口上监听。但在 cluster 模式中，所有工作进程每次调用 listen(0) 时会收到相同的“随机”端口。实质上，这种端口只在第一次分配时随机，之后就变得可预料。 如果要使用独立端口的话，应该根据工作进程的 ID 来生成端口号

::: tip 备注：
+ 由于各工作进程是独立的进程，它们可以根据需要随时关闭或重新生成，而不影响其他进程的正常运行
+ 只要有存活的工作进程，服务器就可以继续处理连接
+ 如果没有存活的工作进程，现有连接会丢失，新的连接也会被拒绝
+ Node.js 不会自动管理工作进程的数量，而应该由具体的应用根据实际需要来管理进程池
:::




## 事件

### disconnect

+ 在工作进程的 IPC 管道被断开后触发
+ 可能导致事件触发的原因：工作进程优雅地退出、被杀死、手动断开连接(调用 `worker.disconnect()`)
+ `disconnect` 和 `exit` 事件之间可能存在延迟，它们可以用来检测进程是否在清理过程中被卡住，或是否存在长时间运行的连接
```js
cluster.on('disconnect', (worker) => {
  console.log(`工作进程 #${worker.id} 已断开连接`)
})
```

### exit

+ 任何一个工作进程关闭时触发
+ 可以用于重启工作进程(再次调用 `cluster.fork()`)
```js
cluster.on('exit', (worker, code, signal) => {
  console.log('工作进程 %d 关闭 (%s). 重启中...', worker.process.pid, signal || code)
  cluster.fork()
});
```

### fork

+ 新的工作进程被衍生时触发
+ 可以用来记录工作进程活动，并产生一个自定义的超时
```js
const timeouts = []

function errorMsg() {
  console.error('连接出错')
}

cluster.on('fork', (worker) => {
  timeouts[worker.id] = setTimeout(errorMsg, 2000)
})

cluster.on('listening', (worker, address) => {
  clearTimeout(timeouts[worker.id])
})

cluster.on('exit', (worker, code, signal) => {
  clearTimeout(timeouts[worker.id])
  errorMsg()
})
```


### listening

+ 当一个工作进程调用 listen() 后，工作进程上的 server 会触发 'listening' 事件，同时主进程上的 cluster 也会触发 'listening' 事件
+ 事件句柄使用两个参数来执行，其中 worker 包含了工作进程对象， address 包含了以下的连接属性：address、 port 和 addressType。 当工作进程同时监听多个地址时，这些参数非常有用
```js
cluster.on('listening', (worker, address) => {
  console.log(`工作进程已连接到 ${address.address}:${address.port}`)
})
```

::: tip addressType 可选值：
+ 4：TCPv4
+ 6：TCPv6
+ -1：Unix 域 socket
+ `udp4`/`udp6` (UDP v4/v6)
:::


### message

+ 当集群主进程从任何工作进程接收到消息时触发


### online

+ 当衍生一个新的工作进程后，工作进程应当响应一个上线消息。 当主进程收到上线消息后将会触发此事件
+ 'fork' 事件和 'online' 事件的区别在于，当主进程衍生工作进程时触发 'fork'，当工作进程运行时触发 'online'
```js
cluster.on('online', (worker) => {
  console.log('工作进程被衍生后响应')
})
```


### setup

+ 当 `cluster.setupMaster()` 被调用时触发
+ settings 对象是 `cluster.setupMaster()` 被调用时的 `cluster.settings` 对象；只能查询，因为在一个时间点内 `cluster.setupMaster()` 可以被调用多次；如果精确度十分重要，则使用 `cluster.settings`




## 属性

+ `cluster.isMaster`：标识主进程(由 `process.env.NODE_UNIQUE_ID` 决定，其未定义时该值为 true)
+ `cluster.isWorker`：标识工作进程(与 `isMaster` 相反)
+ `cluster.settings`：配置对象，调用 `cluster.setupMaster()` 或 `cluster.fork()` 之后产生，包括默认值
+ `cluster.schedulingPolicy`：调度策略(可以通过设置 `NODE_CLUSTER_SCHED_POLICY` 环境变量来实现)
+ `cluster.worker`：当前工作进程对象的引用(对主进程无效)
+ `cluster.workers`：一个包含活跃的工作进程对象的哈希表，使用 id 为键名



## 方法

+ `cluster.fork([env])`：衍生一个新的工作进程
+ `cluster.disconnect([callback])`：断开连接，在 `cluster.workers` 的每个工作进程中调用
+ `cluster.setupMaster([settings])`：修改默认的 `fork` 行为，调用后将按照 `cluster.settings` 进行设置




## Worker 类

+ 继承 `EventEmitter`
+ 包含了关于工作进程的所有的公共的信息和方法
+ 在主进程中，可以使用 `cluster.workers` 来获取；在工作进程中，可以使用 `cluster.worker` 来获取


### 事件

+ `exit`：类似 `cluster.on('exit')` 事件，但特定于此工作进程
+ `online`：类似 `cluster.on('online')` 事件，但特定于此工作进程
+ `message`：类似 `cluster.on('message')` 事件，但特定于此工作进程
+ `listening`：类似 `cluster.on('listening')` 事件，但特定于此工作进程
+ `disconnect`：类似 `cluster.on('disconnect')` 事件，但特定于此工作进程
+ `error`：和 child_process.fork() 提供的事件相同


### 属性

+ `worker.id`：当前工作进程的 id
+ `worker.process`：所有的工作进程都是通过 `child_process.fork()` 来创建的，这个方法返回的对象被存储为 process；在工作进程中， process 属于全局对象
+ `worker.exitedAfterDisconnect`：布尔值
  + `true`：工作进程由于 `kill()` 或 `disconnect()` 而退出
  + `false`：如果工作进程以任何其他方式退出
  + `undefined`：如果工作进程尚未退出



### 方法

+ `worker.isDead()`：当工作进程被终止时(包括自动退出或被发送信号)返回 true
+ `worker.disconnect()`：在一个工作进程内，调用此方法会关闭所有的 server，并等待这些 server 的 'close' 事件执行，然后关闭 IPC 管道；在主进程内，会给工作进程发送一个内部消息，导致工作进程自身调用 .disconnect()
+ `worker.isConnected()`：当工作进程通过 IPC 管道连接至主进程时返回 true(工作进程在创建后会自动连接到它的主进程，当 `disconnect` 事件触发时才会断开连接)
+ `worker.kill([signal])`：杀死工作进程
+ `worker.send(message[, sendHandle[, options]][, callback])`：发送消息给工作进程或主进程，可以选择带上句柄