---
sidebarDepth: 2
---

## child_process

+ [child_process](http://nodejs.cn/api/child_process.html)继承自 `EventEmitter`
+ `child_process` 允许在 Node 程序中执行一些外部程序，`child_process` 的实例代表衍生的子进程
+ 没有构造函数，通过以下方法创建 `child_process` 实例：
  + `child_process.execFile()`：执行外部程序，并得到其输出
  + `child_process.spawn()`：执行外部程序，并得到其输出流
  + `child_process.exec()`：执行一个/多个命令，并得到其结果
  + `child_process.fork()`：执行 Node 模块


### 方法

:::: tabs
::: tab execFile()
+ `child_process.execFile(file[, args][, options][, callback])`
+ 执行 `echo`：
```js
const cp = require('child_process')

cp.execFile('echo', ['hello', 'world!'], (err, stdout, stderr) => {
  if (err) console.error(err)
  console.log('stdout: ' + stdout)
  console.log('stderr: ' + stderr || null)
})
```

外部程序的 PATH 配置方式：
1. 在系统环境变量中配置
2. 输入完整的路径：`./path/to/app`
3. 在 `process.env.PATH` 中添加：`process.env.PATH += :/path/to/app`
:::

::: tab spawn()

+ `child_process.spawn(command[, args][, options])`
+ 类似 `execFile()`，但使用流提高性能
+ 模拟管道操作符：
```js
const cp = require('child_process')

const cat = cp.spawn('cat', ['name.txt'])
const sort = cp.spawn('sort')
const uniq = cp.spawn('uniq')

cat.stdout.pipe(sort.stdin)
sort.stdout.pipe(uniq.stdin)
uniq.stdout.pipe(process.stdout)
/* 
Anna
Bob
Zed
*/
```
+ 分离子进程：父进程和子进程的终结互不影响
```js
const fs = require('fs')
const cp = require('child_process')

const outFd = openSync('./longrun.out', 'a')  // 附加输出日志
const errFd = openSync('./longrun.err', 'a')  // 附加错误日志
const child = cp.spawn('./longrun', [], {
  detached: true,   // 1.分离子进程
  stdio: ['ignore', outFd, errFd]   // 2.切断父子进程的 I/O
})

child.unref()   // 3.移除父进程对子进程的引用计数
```
:::

::: tab exec()

+ `child_process.exec(command[, options][, callback])`
+ 执行一系列命令：
```js
const cp = require('child_process')

cp.exec('cat name.txt | sort | uniq', (err, stdout, stderr) => {
  if (err) console.error(err)
  console.log(stdout)
})
/* 
Anna
Bob
Zed
*/
```
:::

::: tab fork()

+ `child_process.fork(modulePath[, args][, options])`
+ 创建一个独立的 Node 进程来处理任务
```js
// sum.js
process.on('message', msg => {
  console.log(`Calculate: sum(${msg})`)
  let sum = 0
  for (let i = msg[0]; i < msg[1]; sum += i++);
  process.send(sum)
})

// index.js
const cp = require('child_process')

const child = cp.fork('./sum')
child.on('message', msg => {
  console.log(`Got result: ${msg}`)
  child.disconnect()  // 由于建立了 IPC 通道，需要手动中断链接
})

child.send([1, 100])

/* 运行 index.js，输出：
Calculate: sum(1,100)
Got result: 4950
*/
```
+ 使用作业池提高性能：
```js

```

+ fork 一个 Node 进程大概需要 30ms 和 10MB 内存，不应创建太多进程
+ 通过维护一个一定量的工作池，可以提高性能(节约创建/销毁子进程的开销)
:::
::::


### ChildProcess 类

:::: tabs
::: tab 事件
+ `close`：当子进程的 stdio 流被关闭时触发
+ `disconnect`：调用父进程的 `subprocess.disconnect()` 或子进程的 `process.disconnect()` 后触发
+ `error`：当无法衍生进程、无法杀死进程、向子进程发送消息失败时触发
+ `exit`：当子进程结束后触发
+ `message`：当子进程使用 `process.send()` 发送消息时触发
:::

::: tab 属性
+ `subprocess.channel: object | undefined`：子进程的 IPC 通道
+ `subprocess.connected: boolean`：指示是否可以从子进程发送和接收消息
+ `subprocess.killed: boolean`：指示子进程是否已成功接收到信号
+ `subprocess.pid: integer`：子进程的进程标识符 pid
+ `subprocess.stderr: Readable`：子进程的 `stderr` 的可读流
+ `subprocess.stdout: Readable`：子进程的 `stdout` 的可读流
+ `subprocess.stdin: Writable`：子进程的 `stdin` 的可写流
+ `subprocess.stdio: []`：一个到子进程的管道的稀疏数组
:::

::: tab 方法
+ `subprocess.disconnect()`：关闭父进程与子进程之间的 IPC 通道
+ `subprocess.kill(signal?: number | string)`：向子进程发送一个信号
+ `subprocess.send(message: any, sendHandler?: Server | Socket, options?: object, callback: function)`：用于发送消息到子进程（当父进程和子进程之间已建立了一个 IPC 通道时）
+ `subprocess.ref()`：为子进程恢复已删除的引用计数
+ `subprocess.unref()`：父进程的事件循环不会在其引用计数中包括子进程，允许父进程独立于子进程退出（除非子进程与父进程之间已建立了 IPC 通道）
:::
::::



## cluster

+ [cluster](http://nodejs.cn/api/cluster.html)模块可以创建共享服务器端口的子进程
+ 单个 Node.js 实例运行在单个线程中，为了充分利用多核系统，有时需要启用一组 Node.js 进程去处理负载任务
+ 工作进程由 `child_process.fork()` 方法创建，它们可以使用 IPC 和父进程通信，使各进程交替处理连接服务
+ 虽然 cluster 模块主要用于网络相关的情况，但同样可以用于其他需要工作进程的情况
+ Node.js 不支持路由逻辑，因此在设计应用时，不应该过分依赖内存数据对象，例如 session 和登陆等


### 原理

**cluster 模块支持两种分发连接**：
1. 循环法：由主进程负责监听端口，接收新连接后再将连接循环分发给工作进程，在分发中使用了一些内置技巧防止工作进程任务过载(除 Windows 外所有平台的默认方法)
2. 主进程创建监听 socket 后发送给感兴趣的工作进程，由工作进程负责直接接收连接

::: tip 备注：
理论上方法2 效率最佳，但实际情况下由于操作系统调度机制难以捉摸，会使分发变得不稳定，可能会出现八个进程中有两个分担了 70% 的负载
:::

**server.listen() 将大部分工作交给主进程完成，导致普通 Node.js 进程与 cluster 工作进程可能有三种差异**：
1. `server.listen({fd: 7})` 因为消息会被传给主进程，所以父进程中的文件描述符 7 将会被监听并将句柄传给工作进程，而不是监听文件描述符 7 指向的工作进程
2. `server.listen(handle)` 显式地监听句柄，会导致工作进程直接使用该句柄，而不是和主进程通信
3. `server.listen(0)` 正常情况下，这种调用会导致 server 在随机端口上监听。但在 cluster 模式中，所有工作进程每次调用 listen(0) 时会收到相同的“随机”端口。实质上，这种端口只在第一次分配时随机，之后就变得可预料。 如果要使用独立端口的话，应该根据工作进程的 ID 来生成端口号

::: tip 备注：
+ 由于各工作进程是独立的进程，它们可以根据需要随时关闭或重新生成，而不影响其他进程的正常运行
+ 只要有存活的工作进程，服务器就可以继续处理连接
+ 如果没有存活的工作进程，现有连接会丢失，新的连接也会被拒绝
+ Node.js 不会自动管理工作进程的数量，而应该由具体的应用根据实际需要来管理进程池
:::




### 事件

:::: tabs
::: tab disconnect
+ 在工作进程的 IPC 管道被断开后触发
+ 可能导致事件触发的原因：工作进程优雅地退出、被杀死、手动断开连接(调用 `worker.disconnect()`)
+ `disconnect` 和 `exit` 事件之间可能存在延迟，它们可以用来检测进程是否在清理过程中被卡住，或是否存在长时间运行的连接
```js
cluster.on('disconnect', (worker) => {
  console.log(`工作进程 #${worker.id} 已断开连接`)
})
```
:::

::: tab exit
+ 任何一个工作进程关闭时触发
+ 可以用于重启工作进程(再次调用 `cluster.fork()`)
```js
cluster.on('exit', (worker, code, signal) => {
  console.log('工作进程 %d 关闭 (%s). 重启中...', worker.process.pid, signal || code)
  cluster.fork()
});
```
:::

::: tab fork
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
:::

::: tab listening
+ 当一个工作进程调用 listen() 后，工作进程上的 server 会触发 'listening' 事件，同时主进程上的 cluster 也会触发 'listening' 事件
+ 事件句柄使用两个参数来执行，其中 worker 包含了工作进程对象， address 包含了以下的连接属性：address、 port 和 addressType。 当工作进程同时监听多个地址时，这些参数非常有用
```js
cluster.on('listening', (worker, address) => {
  console.log(`工作进程已连接到 ${address.address}:${address.port}`)
})
```

+ addressType 可选值：
  + 4：TCPv4
  + 6：TCPv6
  + -1：Unix 域 socket
  + `udp4`/`udp6` (UDP v4/v6)
:::

::: tab message
+ 当集群主进程从任何工作进程接收到消息时触发

:::

::: tab online

+ 当衍生一个新的工作进程后，工作进程应当响应一个上线消息。 当主进程收到上线消息后将会触发此事件
+ 'fork' 事件和 'online' 事件的区别在于，当主进程衍生工作进程时触发 'fork'，当工作进程运行时触发 'online'
```js
cluster.on('online', (worker) => {
  console.log('工作进程被衍生后响应')
})
```
:::

::: tab setup

+ 当 `cluster.setupMaster()` 被调用时触发
+ settings 对象是 `cluster.setupMaster()` 被调用时的 `cluster.settings` 对象；只能查询，因为在一个时间点内 `cluster.setupMaster()` 可以被调用多次；如果精确度十分重要，则使用 `cluster.settings`

:::
::::


### 属性

+ `cluster.isMaster`：标识主进程(由 `process.env.NODE_UNIQUE_ID` 决定，其未定义时该值为 true)
+ `cluster.isWorker`：标识工作进程(与 `isMaster` 相反)
+ `cluster.settings`：配置对象，调用 `cluster.setupMaster()` 或 `cluster.fork()` 之后产生，包括默认值
+ `cluster.schedulingPolicy`：调度策略(可以通过设置 `NODE_CLUSTER_SCHED_POLICY` 环境变量来实现)
+ `cluster.worker`：当前工作进程对象的引用(对主进程无效)
+ `cluster.workers`：一个包含活跃的工作进程对象的哈希表，使用 id 为键名



### 方法

+ `cluster.fork([env])`：衍生一个新的工作进程
+ `cluster.disconnect([callback])`：断开连接，在 `cluster.workers` 的每个工作进程中调用
+ `cluster.setupMaster([settings])`：修改默认的 `fork` 行为，调用后将按照 `cluster.settings` 进行设置




### Worker 类

+ 继承 `EventEmitter`
+ 包含了关于工作进程的所有的公共的信息和方法
+ 在主进程中，可以使用 `cluster.workers` 来获取；在工作进程中，可以使用 `cluster.worker` 来获取

:::: tabs
::: tab 事件
+ `exit`：类似 `cluster.on('exit')` 事件，但特定于此工作进程
+ `online`：类似 `cluster.on('online')` 事件，但特定于此工作进程
+ `message`：类似 `cluster.on('message')` 事件，但特定于此工作进程
+ `listening`：类似 `cluster.on('listening')` 事件，但特定于此工作进程
+ `disconnect`：类似 `cluster.on('disconnect')` 事件，但特定于此工作进程
+ `error`：和 child_process.fork() 提供的事件相同
:::

::: tab 属性
+ `worker.id`：当前工作进程的 id
+ `worker.process`：所有的工作进程都是通过 `child_process.fork()` 来创建的，这个方法返回的对象被存储为 process；在工作进程中， process 属于全局对象
+ `worker.exitedAfterDisconnect`：布尔值
  + `true`：工作进程由于 `kill()` 或 `disconnect()` 而退出
  + `false`：如果工作进程以任何其他方式退出
  + `undefined`：如果工作进程尚未退出
:::

::: tab 方法
+ `worker.isDead()`：当工作进程被终止时(包括自动退出或被发送信号)返回 true
+ `worker.disconnect()`：在一个工作进程内，调用此方法会关闭所有的 server，并等待这些 server 的 'close' 事件执行，然后关闭 IPC 管道；在主进程内，会给工作进程发送一个内部消息，导致工作进程自身调用 .disconnect()
+ `worker.isConnected()`：当工作进程通过 IPC 管道连接至主进程时返回 true(工作进程在创建后会自动连接到它的主进程，当 `disconnect` 事件触发时才会断开连接)
+ `worker.kill([signal])`：杀死工作进程
+ `worker.send(message[, sendHandle[, options]][, callback])`：发送消息给工作进程或主进程，可以选择带上句柄
:::
::::