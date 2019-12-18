## child_process

+ [child_process](http://nodejs.cn/api/child_process.html)继承自 `EventEmitter`
+ `child_process` 的实例代表衍生的子进程
+ 没有构造函数，`child_process` 实例通过以下方法创建：
  + `child_process.spawn()`
  + `child_process.exec()`
  + `child_process.execFile()`
  + `child_process.fork()`

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



