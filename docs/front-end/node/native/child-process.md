---
sidebarDepth: 2
---

## 简介

+ [child_process](http://nodejs.cn/api/child_process.html)继承自 `EventEmitter`
+ `child_process` 允许在 Node 程序中执行一些外部程序，`child_process` 的实例代表衍生的子进程
+ 没有构造函数，通过以下方法创建 `child_process` 实例：
  + `child_process.execFile()`：执行外部程序，并得到其输出
  + `child_process.spawn()`：执行外部程序，并得到其输出流
  + `child_process.exec()`：执行一个/多个命令，并得到其结果
  + `child_process.fork()`：执行 Node 模块



### execFile()

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

::: tip 外部程序的 PATH 配置方式：
1. 在系统环境变量中配置
2. 输入完整的路径：`./path/to/app`
3. 在 `process.env.PATH` 中添加：`process.env.PATH += :/path/to/app`
:::


### spawn()

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


### exec()

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


### fork()

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

::: tip 备注：
+ fork 一个 Node 进程大概需要 30ms 和 10MB 内存，不应创建太多进程
+ 通过维护一个一定量的工作池，可以提高性能(节约创建/销毁子进程的开销)
:::


## ChildProcess 类

### 事件

+ `close`：当子进程的 stdio 流被关闭时触发
+ `disconnect`：调用父进程的 `subprocess.disconnect()` 或子进程的 `process.disconnect()` 后触发
+ `error`：当无法衍生进程、无法杀死进程、向子进程发送消息失败时触发
+ `exit`：当子进程结束后触发
+ `message`：当子进程使用 `process.send()` 发送消息时触发


### 属性

+ `subprocess.channel: object | undefined`：子进程的 IPC 通道
+ `subprocess.connected: boolean`：指示是否可以从子进程发送和接收消息
+ `subprocess.killed: boolean`：指示子进程是否已成功接收到信号
+ `subprocess.pid: integer`：子进程的进程标识符 pid
+ `subprocess.stderr: Readable`：子进程的 `stderr` 的可读流
+ `subprocess.stdout: Readable`：子进程的 `stdout` 的可读流
+ `subprocess.stdin: Writable`：子进程的 `stdin` 的可写流
+ `subprocess.stdio: []`：一个到子进程的管道的稀疏数组


### 方法

+ `subprocess.disconnect()`：关闭父进程与子进程之间的 IPC 通道
+ `subprocess.kill(signal?: number | string)`：向子进程发送一个信号
+ `subprocess.send(message: any, sendHandler?: Server | Socket, options?: object, callback: function)`：用于发送消息到子进程（当父进程和子进程之间已建立了一个 IPC 通道时）
+ `subprocess.ref()`：为子进程恢复已删除的引用计数
+ `subprocess.unref()`：父进程的事件循环不会在其引用计数中包括子进程，允许父进程独立于子进程退出（除非子进程与父进程之间已建立了 IPC 通道）