## os

[os](http://nodejs.cn/api/os.html) 模块提供访问操作系统相关属性的接口。

### 属性

+ `os.EOL: '\n' | '\r\n'`：返回特定操作系统的换行符（Windows 下为 `\r\n`）
+ `os.constants: object`：包含错误码、进程信号等常用的操作系统特定的常量

### 方法

+ `os.type(): 'Linux' | 'Darwin' | 'Windows_NT'`：返回操作系统种类
+ `os.platform(): string`：返回操作系统平台标识（`aix`, `darwin`, `freebsd`, `linux`, `openbsd`, `sunos`, `win32` 等）
+ `os.release(): string`：返回操作系统版本号
+ `os.hostname(): string`：返回操作系统的主机名
+ `os.userInfo(options?: { encoding: string }): object`：返回当前用户的信息
+ `os.homedir(): string`：返回当前用户的主目录路径
+ `os.tmpdir(): string`：返回操作系统的默认临时文件目录
+ `os.uptime(): integer`：返回系统的正常运行时间（单位为秒）
+ `os.totalmem(): integer`：返回系统的内存总量（单位为字节）
+ `os.freemem(): integer`：返回空闲的系统内存量（单位为字节）
+ `os.loadavg(): number[]`：返回一个数组，包含 1/5/15 分钟的平均负载
+ `os.networkInterfaces(): object`：返回已分配网络地址的网络接口信息对象
+ `os.arch(): string`：返回编译 Node.js 二进制文件的操作系统的 CPU 架构（`arm`, `arm64`, `ia32`, `mips`, `mipsel`, `ppc`, `ppc64`, `s390`, `s390x`, `x32`, `x64` 等）
+ `os.cpus(): object[]`：返回一个包含每个逻辑 CPU 内核信息的对象数组
+ `os.endianness(): 'BE' | 'LE'`：返回标识编译 Node.js 二进制文件的 CPU 的字节序
+ `os.getPriority(pid=0?: integer)`：返回由指定进程的调度优先级（默认返回当前进程的优先级）
+ `os.setPriority(pid?=0, priority)`：设置指定进程的调度优先级（默认设置当前进程的优先级）

::: tip 说明：
+ `os.loadavg()`：平均负载是 UNIX 特定的概念，在 Windows 上，返回值始终为 [0, 0, 0]
+ `os.arch()`/`os.platform()` 与 `process.arch()`/`process.platform()` 返回一样的值
:::

### 常量

`os` 常量使用 `os.constants` 获取，细分为以下几种：

+ [信号常量](http://nodejs.cn/api/os.html#os_signal_constants)：`os.constants.signals`
+ [错误常量](http://nodejs.cn/api/os.html#os_error_constants)：`os.constants.errno`
+ [dlopen 常量](http://nodejs.cn/api/os.html#os_dlopen_constants)：`os.constants.dlopen`
+ [优先级常量](http://nodejs.cn/api/os.html#os_priority_constants)：`os.constants.priority`
+ [libuv 常量](http://nodejs.cn/api/os.html#os_libuv_constants)：只有一个 `os.constants.UV_UDP_REUSEADDR`


