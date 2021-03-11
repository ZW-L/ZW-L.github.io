## 简介

[os](http://nodejs.cn/api/os.html) 模块提供访问操作系统相关属性的接口


## 属性

+ `os.EOL: '\n' | '\r\n'`：返回特定操作系统的换行符（Windows 下为 `\r\n`）
+ `os.constants: object`：包含错误码、进程信号等常用的操作系统特定的常量


## 方法

|返回值|方法|描述|
|-|-|-|
|系统种类|`os.type(): string`|Linux, Darwin, Windows_NT|
|系统版本号|`os.release(): string`
|系统的主机名|`os.hostname(): string`
|系统临时目录|`os.tmpdir(): string`
|正常运行时间|`os.uptime(): integer`|秒
|系统平均负载|`os.loadavg(): number[]`|分别为 1/5/15 分钟
|系统内存总量|`os.totalmem(): integer`|字节
|系统空闲内存|`os.freemem(): integer`|字节
|系统平台标识|`os.platform(): string`|
|CPU 架构|`os.arch(): string`|
|网络接口信息|`os.networkInterfaces(): object`|均已分配网络地址
|用户信息|`os.userInfo(options?: { encoding: string }): object`|针对当前用户
|主目录路径|`os.homedir(): string`|针对当前用户
|CPU 字节序|`os.endianness(): string`|`BE`/`LE`
|CPU 内核|`os.cpus(): object[]`|包含每个逻辑 CPU 信息
|返回进程 pid|`os.getPriority(pid?: integer)`|默认针对当前进程
|设置进程 pid|`os.setPriority(pid?: integer, priority: integer)`|默认针对当前进程


::: tip 说明：
+ 系统平台标识：`aix`, `darwin`, `freebsd`, `linux`, `openbsd`, `sunos`, `win32` 等
+ 系统 CPU 架构：`arm`, `arm64`, `ia32`, `mips`, `mipsel`, `ppc`, `ppc64`, `s390`, `s390x`, `x32`, `x64` 等
+ `os.loadavg()`：平均负载是 UNIX 特定的概念，在 Windows 上，返回值始终为 [0, 0, 0]
+ `os.arch()`/`os.platform()` 与 `process.arch()`/`process.platform()` 返回一样的值
:::


## 常量

+ 并不是所有的常量在每一个操作系统上都是可用的
+ `os` 常量使用 `os.constants` 获取，细分：
  + [信号常量](http://nodejs.cn/api/os.html#os_signal_constants)：`os.constants.signals`
  + [错误常量](http://nodejs.cn/api/os.html#os_error_constants)：`os.constants.errno`
  + [dlopen 常量](http://nodejs.cn/api/os.html#os_dlopen_constants)：`os.constants.dlopen`
  + [优先级常量](http://nodejs.cn/api/os.html#os_priority_constants)：`os.constants.priority`
  + [libuv 常量](http://nodejs.cn/api/os.html#os_libuv_constants)：只有一个 `os.constants.UV_UDP_REUSEADDR`