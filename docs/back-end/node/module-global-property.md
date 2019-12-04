---
sidebarDepth: 2
---

## 简介

+ `Buffer`: 
+ `__dirname`: 
+ `__filename`: 
+ `console`: 
+ `process`: 
+ `timer`: 


## Buffer

缓冲类，参考 [Buffer](./bs-buffer)。


## __dirname

+ 当前模块的目录名，与 __filename 的 path.dirname() 相同


## __filename

+ 当前模块的文件名，这是当前的模块文件的绝对路径(符号链接会被解析)
+ 对于主程序，这不一定与命令行中使用的文件名相同


## console

+ `Console` 类
  + `new Console(stdout[, stderr][, ignoreErrors])`: 
  + `new Console(options)`: 
  + `console.assert(value[, ...message])`: 
  + `console.clear()`: 
  + `console.count([label])`: 
  + `console.countReset([label])`: 
  + `console.debug(data[, ...args])`: 
  + `console.dir(obj[, options])`: 
  + `console.dirxml(...data)`: 
  + `console.error([data][, ...args])`: 
  + `console.group([...label])`: 
  + `console.groupCollapsed()`: 
  + `console.groupEnd()`: 
  + `console.info([data][, ...args])`: 
  + `console.log([data][, ...args])`: 
  + `console.table(tabularData[, properties])`: 
  + `console.time([label])`: 
  + `console.timeEnd([label])`: 
  + `console.timeLog([label][, ...data])`: 
  + `console.trace([message][, ...args])`: 
  + `console.warn([data][, ...args])`: 
+ 仅用于调试的方法
  + `console.markTimeline([label])`: 
  + `console.profile([label])`: 
  + `console.profileEnd([label])`: 
  + `console.timeStamp([label])`: 
  + `console.timeline([label])`: 
  + `console.timelineEnd([label])`: 



## process

### 事件

+ `beforeExit`: 
+ `disconnect`: 
+ `exit`: 
+ `message`: 
+ `multipleResolves`: 
+ `rejectionHandled`: 
+ `uncaughtException`: 
+ `unhandledRejection`: 
+ `warning`: 

### 属性

+ `process.allowedNodeEnvironmentFlags`: 
+ `process.arch`: 
+ `process.argv`: 
+ `process.argv0`: 
+ `process.channel`: 
+ `process.config`: 
+ `process.connected`: 
+ `process.debugPort`: 
+ `process.env`: 
+ `process.execArgv`: 
+ `process.execPath`: 
+ `process.exitCode`: 
+ `process.mainModule`: 
+ `process.noDeprecation`: 
+ `process.pid`: 
+ `process.platform`: 
+ `process.ppid`: 
+ `process.release`: 
+ `process.report`: 
+ `process.stderr`: 
+ `process.stdin`: 
+ `process.stdout`: 
+ `process.throwDeprecation`: 
+ `process.title`: 
+ `process.traceDeprecation`: 
+ `process.version`: 
+ `process.versions`: 

### 方法

+ `process.abort()`: 
+ `process.chdir(directory)`: 
+ `process.cpuUsage([previousValue])`: 
+ `process.cwd()`: 
+ `process.disconnect()`: 
+ `process.dlopen(module, filename[, flags])`: 
+ `process.emitWarning(warning[, options])`: 
+ `process.emitWarning(warning[, type[, code]][, ctor])`: 
+ `process.exit([code])`: 
+ `process.getegid()`: 
+ `process.geteuid()`: 
+ `process.getgid()`: 
+ `process.getgroups()`: 
+ `process.getuid()`: 
+ `process.hasUncaughtExceptionCaptureCallback()`: 
+ `process.hrtime([time])`: 
+ `process.hrtime.bigint()`: 
+ `process.initgroups(user, extraGroup)`: 
+ `process.kill(pid[, signal])`: 
+ `process.memoryUsage()`: 
+ `process.nextTick(callback[, ...args])`: 
+ `process.resourceUsage()`: 
+ `process.send(message[, sendHandle[, options]][, callback])`: 
+ `process.setegid(id)`: 
+ `process.seteuid(id)`: 
+ `process.setgid(id)`: 
+ `process.setgroups(groups)`: 
+ `process.setuid(id)`: 
+ `process.setUncaughtExceptionCaptureCallback(fn)`: 
+ `process.umask([mask])`: 
+ `process.uptime()`: 


## timer

+ `Immediate` 类:
  + `immediate.hasRef()`: 
  + `immediate.ref()`: 
  + `immediate.unref()`: 
+ `Timeout` 类:
  + `timeout.hasRef()`: 
  + `timeout.ref()`: 
  + `timeout.refresh()`: 
  + `timeout.unref()`: 
+ 预定定时器:
  + `setTimeout()`: 
  + `setInterval()`: 
  + `setImmediate()`: 
+ 取消定时器:
  + `clearTimeout()`: 
  + `clearInterval()`: 
  + `clearImmediate()`: 