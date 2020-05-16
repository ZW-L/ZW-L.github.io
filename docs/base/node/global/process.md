## 简介

+ [process](http://nodejs.cn/api/process.html#process_process) 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。
+ `process` 对象是 `EventEmitter` 的实例




## 事件

+ `beforeExit`：当 Node.js 清空其事件循环并且没有其他工作要安排时触发
+ `exit`：调用 `process.exit()` 或 Node.js 事件循环不再执行其他工作时触发
+ `disconnect`：使用 IPC 通道衍生了 Node.js 进程，在 IPC 通道关闭时触发
+ `message`：使用 IPC 通道衍生了 Node.js 进程，当子进程收到父进程使用 `send()` 发送的消息时触发
+ `multipleResolves`：当 `Promise` 被 `resolve`/`reject` 不止一次或在两者之间切换时触发
+ `rejectionHandled`：当 `Promise` 被拒绝并且错误处理函数附加到晚于一个 Node.js 事件循环时触发
+ `uncaughtException`：当未捕获的 `JavaScript` 异常一直冒泡回到事件循环时触发
+ `unhandledRejection`：当 `Promise` 被 `reject` 但它没有没有绑定错误处理器时触发
+ `warning`：当 Node.js 触发进程警告时触发

::: tip 说明：
+ 通常，Node.js 进程将在没有调度工作时退出，但是在 `beforeExit` 事件上注册的监听器可以进行异步调用，从而导致 Node.js 进程继续（因此除非打算安排额外的工作，否则不应将 `beforeExit` 用作 `exit` 事件的替代方案）
:::




## 属性

+ `process.allowedNodeEnvironmentFlags: Set`: NODE_OPTIONS 环境变量中允许的特殊只读标志集合
+ `process.arch: string`: 编译 Node.js 二进制文件的操作系统的 CPU 架构
+ `process.argv: string[]`: 启动 Node.js 进程时传入的命令行参数
+ `process.argv0: string`: 启动 Node.js 进程时传入的 argv[0] 的原始值的只读副本
+ `process.channel: object | undefined`: IPC 通道的引用，否则为 `undefined`
+ `process.config: object`: 编译当前 Node.js 可执行文件的配置选项
+ `process.connected: boolean`: 指示 IPC 通道是否连接
+ `process.debugPort: number`: Node.js 调试器使用的端口
+ `process.env: object`: 用户环境的对象
+ `process.execArgv: string[]`: 当 Node.js 进程被启动时，Node.js 特定的命令行选项
+ `process.execPath: string`: 启动 Node.js 进程的可执行文件的绝对路径名
+ `process.exitCode: integer`: 默认的进程退出码
+ `process.mainModule: object | undefined`: 获取 require.main 的替代方式
+ `process.noDeprecation: boolean`: 指示当前 Node.js 进程是否设置了 --no-deprecation 标志
+ `process.throwDeprecation: boolean`: 指示当前的 Node.js 进程是否设置了 --throw-deprecation 标志
+ `process.traceDeprecation: boolean`: 指示当前的 Node.js 进程是否设置了 --trace-deprecation 标志
+ `process.pid: integer`: 返回进程的 PID
+ `process.platform: string`: Node.js 进程的操作系统平台
+ `process.ppid: integer`: 返回当前父进程的 PID
+ `process.release: object`: 返回与当前发布相关的元数据
+ `process.stderr: Stream`: 返回连接到 stderr 的流
+ `process.stdin: Stream`: 返回连接到 stdin 的流
+ `process.stdout: Stream`: 返回连接到 stdout 的流
+ `process.title: string`: 返回当前进程标题
+ `process.version: string`: 返回 Node.js 的版本信息
+ `process.versions: object`: 返回 Node.js 和其依赖的版本信息





## 方法

+ **其他：**
  + `process.abort()`：结束进程并生成一个核心文件
  + `[process.chdir(directory)`：切换当前的工作目录
  + `process.cwd()`：返回当前的工作目录
  + `process.cpuUsage([previousValue])`：返回进程的用户 CPU 时间和系统 CPU 时间信息
  + `process.disconnect()`：关闭连接到父进程的 IPC 通道
  + `process.dlopen(module, filename[, flags])`：动态加载共享对象
  + `process.emitWarning(warning[, options])`：触发自定义或应用特定的进程警告
  + `process.emitWarning(warning[, type[, code]][, ctor])`：触发自定义或应用特定的进程警告
  + `process.exit([code])`：以指定退出状态码终止进程
  + `process.hasUncaughtExceptionCaptureCallback()`：指示是否使用了 `setUncaughtExceptionCaptureCallback()` 设置回调
  + `process.hrtime([time])`：返回当前时间的高精度解析值
  + `process.hrtime.bigint()`：返回当前的高精度实际时间
  + `process.kill(pid[, signal])`：向另一个进程发送信号
  + `process.memoryUsage()`：返回 Node.js 进程的内存使用情况，有以下几个属性：
    + `rss`：常驻内存的大小
    + `heapTotal`：动态分配的可用内存
    + `heapUsed`：已使用的堆大小
  + `process.nextTick(callback[, ...args])`：将 callback 添加到下一个时间点的队列
  + `process.resourceUsage()`：
  + `process.send(message[, sendHandle[, options]][, callback])`：将消息发送到父进程（进程必须使用 IPC 通道衍生）
  + `process.setUncaughtExceptionCaptureCallback(fn)`：
  + `process.umask([mask])`：设置/返回 Node.js 进程的默认创建文件的权限掩码
  + `process.uptime()`：返回当前 Node.js 进程运行时间秒长
+ **标识：仅适用 POSIX 平台**
  + `process.getgid()`：返回进程的数字标记的组身份
  + `process.getuid()`：返回进程的数字标记的用户身份
  + `process.getegid()`：返回 Node.js 进程的有效数字标记的组身份
  + `process.geteuid()`：返回进程的有效数字标记的用户身份
  + `process.setgid(id)`：为进程设置组标识
  + `process.setuid(id)`：为进程设置用户标识
  + `process.setegid(id)`：为进程设置有效的组标识
  + `process.seteuid(id)`：为进程设置有效的用户标识
  + `process.getgroups()`：返回补充的组 ID
  + `process.setgroups(groups)`：为进程补充组 ID
  + `process.initgroups(user, extraGroup)`：读取 `/etc/group` 文件并初始化组访问列表，包括了用户所在的所有组