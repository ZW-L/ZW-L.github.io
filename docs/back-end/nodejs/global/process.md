---
sidebarDepth: 2
---

## 简介

+ [process](http://nodejs.cn/api/process.html#process_process) 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制
+ `process` 对象是 `EventEmitter` 的实例



## 事件

### beforeExit

+ 触发：当 Node.js 清空其事件循环并且没有其他工作要安排时
+ 回调参数：`process.exitCode` 属性指定的退出码
+ 通常，Node.js 进程将在没有调度工作时退出，但是在 `beforeExit` 事件上注册的监听器可以进行异步调用，从而导致 Node.js 进程继续
+ 对于导致显式终止的条件，不会触发 `beforeExit` 事件，例如调用 `process.exit()` 或未捕获的异常
+ 因此除非打算安排额外的工作，否则不应将 `beforeExit` 用作 `exit` 事件的替代方案
```js
process.on('beforeExit', (code) => {
  console.log('进程 beforeExit 事件的代码: ', code)
})

process.on('exit', (code) => {
  console.log('进程 exit 事件的代码: ', code)
})

console.log('此消息最新显示')

// 此消息最新显示
// 进程 beforeExit 事件的代码: 0
// 进程 exit 事件的代码: 0
```


### exit

+ 触发：显式调用 `process.exit()` 或 Node.js 事件循环不再执行其他工作时
+ 回调参数：`process.exitCode` 属性指定的退出码或传给 `process.exit()` 方法的 `exitCode` 参数
+ 此时无法阻止退出事件循环，一旦所有 `exit` 事件的监听器都已完成运行时，Node.js 进程将终止
+ 监听器函数必须只执行同步操作(此时 Node.js 进程已退出，任何异步操作都会被放弃)
```js
process.on('exit', (code) => {
  setTimeout(() => {
    console.log('此处不会运行')
  }, 0)
})
```


### disconnect

+ 触发：使用 IPC 通道衍生了 Node.js 进程，在 IPC 通道关闭时


### message

+ 触发：使用 IPC 通道衍生了 Node.js 进程，当子进程收到父进程使用 `send()` 发送的消息时触发
+ 消息会进行序列化和解析，生成的消息可能与最初发送的消息不同
+ 如果在衍生进程时设置了 `serialization: advanced`，则 message 参数可以包含 JSON 无法表示的数据


### multipleResolves

+ 触发：当 `Promise` 被 `resolve`/`reject` 不止一次或在两者之间切换时
+ 对于在使用 Promise 构造函数时跟踪应用程序中的潜在错误非常有用，因为会以静默方式吞没多个解决
+ 但事件的发生并不一定表示错误，如 `Promise.race()` 可以触发该事件


### rejectionHandled

+ 触发：当 `Promise` 被拒绝并且错误处理函数附加到晚于一个 Node.js 事件循环时



### unhandledRejection

+ 触发：当 `Promise` 被 reject 但它没有没有绑定错误处理器时
+ 该事件在探测和跟踪 promise 被 reject 且未被处理的场景中是很有用的

::: tip 备注：
+ 使用 Promise 时，异常会以被 reject 的 promise 的形式封装
+ reject 可以被 `promise.catch()` 捕获并处理，并且在 Promise 链中传播
:::


### uncaughtException

+ 触发：未捕获的 JS 异常一直冒泡回到事件循环时
+ 默认情况下，Node.js 通过将堆栈跟踪打印到 stderr 并使用 `exitCode: 1` 来处理此类异常(覆盖先前设置的 `process.exitCode`)
+ 为该事件添加处理程序会覆盖默认行为
+ 更改事件处理程序中的 `process.exitCode` 将导致进程退出并提供退出码，在存在这样的处理程序的情况下，进程将以 0 退出(避免出现无限循环的情况)
+ 设置 `uncaughtExceptionMonitor` 监听器，可以监视该事件，而不会覆盖默认行为以退出该进程


### uncaughtExceptionMonitor

+ 触发：在 `uncaughtException` 事件触发前或调用 `process.setUncaughtExceptionCaptureCallback()`


### warning 

+ 触发：当 Node.js 触发进程警告时
+ 默认打印进程警告到 stderr，使用一些命令行选项
  + `--no-warnings`：阻止从 console 输出信息，但是 `warning` 事件仍会被 process 发出
  + `--trace-warnings`：让默认的控制台输出警告信息时，包含警告的全部堆栈信息
  + `--trace-deprecation`：使自定义的弃用警告作为异常信息抛出来
  + `--throw-deprecation`：使自定义的弃用警告打印到 stderr，包括其堆栈信息
  + `--no-deprecation`：阻止报告所有的自定义的弃用警告
  + `*-deprecation`：只会影响使用名字为 `DeprecationWarning` 的警告





## 属性

+ `allowedNodeEnvironmentFlags: Set`: NODE_OPTIONS 环境变量中允许的特殊只读标志集合
+ `arch: string`: 编译 Node.js 二进制文件的操作系统的 CPU 架构
+ `argv: string[]`: 启动 Node.js 进程时传入的命令行参数
+ `argv0: string`: 启动 Node.js 进程时传入的 argv[0] 的原始值的只读副本
+ `channel: object | undefined`: IPC 通道的引用，否则为 `undefined`
+ `config: object`: 编译当前 Node.js 可执行文件的配置选项
+ `connected: boolean`: 指示 IPC 通道是否连接
+ `debugPort: number`: Node.js 调试器使用的端口
+ `env: object`: 用户环境的对象
+ `execArgv: string[]`: 当 Node.js 进程被启动时，Node.js 特定的命令行选项
+ `execPath: string`: 启动 Node.js 进程的可执行文件的绝对路径名
+ `exitCode: integer`: 默认的进程退出码
+ `mainModule: object | undefined`: 获取 require.main 的替代方式
+ `noDeprecation: boolean`: 指示当前 Node.js 进程是否设置了 --no-deprecation 标志
+ `throwDeprecation: boolean`: 指示当前的 Node.js 进程是否设置了 --throw-deprecation 标志
+ `traceDeprecation: boolean`: 指示当前的 Node.js 进程是否设置了 --trace-deprecation 标志
+ `pid: integer`: 返回进程的 PID
+ `platform: string`: 返回 Node.js 进程的操作系统平台
+ `ppid: integer`: 返回当前父进程的 PID
+ `release: object`: 返回与当前发布相关的元数据
+ `stderr: Stream`: 返回连接到 stderr 的流
+ `stdin: Stream`: 返回连接到 stdin 的流
+ `stdout: Stream`: 返回连接到 stdout 的流
+ `title: string`: 返回当前进程标题
+ `version: string`: 返回 Node.js 的版本信息
+ `versions: object`: 返回 Node.js 和其依赖的版本信息




## 方法

### 进程相关

+ `abort()`：结束进程并生成一个核心文件
+ `cpuUsage([previousValue])`：返回进程的用户 CPU 时间和系统 CPU 时间信息
+ `disconnect()`：关闭连接到父进程的 IPC 通道
+ `dlopen(module, filename[, flags])`：动态加载共享对象
+ `emitWarning(warning[, options])`：触发自定义或应用特定的进程警告
+ `emitWarning(warning[, type[, code]][, ctor])`：触发自定义或应用特定的进程警告
+ `exit([code])`：以指定退出状态码终止进程
+ `hasUncaughtExceptionCaptureCallback()`：是否使用 `setUncaughtExceptionCaptureCallback()` 设置回调
+ `kill(pid[, signal])`：向另一个进程发送信号
+ `memoryUsage()`：返回 Node.js 进程的内存使用情况，包括以下几个属性：
  + `rss`：常驻内存的大小
  + `heapTotal`：动态分配的可用内存
  + `heapUsed`：已使用的堆大小
+ `resourceUsage()`：
+ `send(message[, sendHandle[, options]][, callback])`：将消息发送到父进程(进程必须使用 IPC 通道衍生)
+ `setUncaughtExceptionCaptureCallback(fn)`：
+ `umask([mask])`：设置/返回 Node.js 进程的默认创建文件的权限掩码
+ `uptime()`：返回当前 Node.js 进程运行时间(秒)


### 其他

+ `cwd()`：返回当前的工作目录
+ `chdir(directory)`：切换当前的工作目录
+ `hrtime([time])`：返回当前时间的高精度解析值
+ `hrtime.bigint()`：返回当前的高精度实际时间
+ `nextTick(callback[, ...args])`：将 callback 添加到下一个时间点的事件队列


### POSIX 平台

+ `getgid()`：返回进程的数字标记的组身份
+ `getuid()`：返回进程的数字标记的用户身份
+ `getegid()`：返回 Node.js 进程的有效数字标记的组身份
+ `geteuid()`：返回进程的有效数字标记的用户身份
+ `setgid(id)`：为进程设置组标识
+ `setuid(id)`：为进程设置用户标识
+ `setegid(id)`：为进程设置有效的组标识
+ `seteuid(id)`：为进程设置有效的用户标识
+ `getgroups()`：返回补充的组 ID
+ `setgroups(groups)`：为进程补充组 ID
+ `initgroups(user, extraGroup)`：读取 `/etc/group` 文件并初始化组访问列表，包括了用户所在的所有组