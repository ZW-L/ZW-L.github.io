## os

[os](http://nodejs.cn/api/os.html) 模块提供访问操作系统相关属性的接口


### 属性

+ `os.EOL: '\n' | '\r\n'`：返回特定操作系统的换行符（Windows 下为 `\r\n`）
+ `os.constants: object`：包含错误码、进程信号等常用的操作系统特定的常量


### 方法

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


### 常量

+ 并不是所有的常量在每一个操作系统上都是可用的
+ `os` 常量使用 `os.constants` 获取，细分：
  + [信号常量](http://nodejs.cn/api/os.html#os_signal_constants)：`os.constants.signals`
  + [错误常量](http://nodejs.cn/api/os.html#os_error_constants)：`os.constants.errno`
  + [dlopen 常量](http://nodejs.cn/api/os.html#os_dlopen_constants)：`os.constants.dlopen`
  + [优先级常量](http://nodejs.cn/api/os.html#os_priority_constants)：`os.constants.priority`
  + [libuv 常量](http://nodejs.cn/api/os.html#os_libuv_constants)：只有一个 `os.constants.UV_UDP_REUSEADDR`



## zlib

[zlib](http://nodejs.cn/api/zlib.html) 模块提供压缩功能。

### API



+ zlib.constants
+ Options 类
+ BrotliOptions 类
+ zlib.BrotliCompress 类
+ zlib.BrotliDecompress 类
+ zlib.Deflate 类
+ zlib.DeflateRaw 类
+ zlib.Gunzip 类
+ zlib.Gzip 类
+ zlib.Inflate 类
+ zlib.InflateRaw 类
+ zlib.Unzip 类
+ zlib.ZlibBase 类
+ `zlib.createBrotliCompress([options])`：
+ `zlib.createBrotliDecompress([options])`：
+ `zlib.createDeflate([options])`：
+ `zlib.createDeflateRaw([options])`：
+ `zlib.createGunzip([options])`：
+ `zlib.createGzip([options])`：
+ `zlib.createInflate([options])`：
+ `zlib.createInflateRaw([options])`：
+ `zlib.createUnzip([options])`：


## path

+ [path](http://nodejs.cn/api/path.html) 模块提供用于处理文件路径和目录路径的实用工具




### 属性

+ `path.delimiter: ':' | ';'`：返回操作系统特定的路径定界符（Windows 为 `;`）
+ `path.sep: '\' | '/'`：返回操作系统特定的路径片段分隔符（Windows 为 `\`）
+ `path.posix: object`：提供对 `path` 方法的 POSIX 特定实现的访问
+ `path.win32: object`：提供对 `path` 方法的 Windows 特定实现的访问




### 方法

+ `path.basename(path: string, ext?: string): string`：返回指定路径的最后一部分，即最后一个 `/` 之后的内容（指定了 `ext` 参数后返回值不包含 `ext` 部分）
+ `path.dirname(path: string): string`：返回指定路径的目录名，即最后一个 `/` 之前的内容
+ `path.extname(path: string): string`：返回指定路径的扩展名，即最后一个 `.` 以及之后的内容
+ `path.parse(path: string): object`：返回一个表示指定路径的各个属性的对象
+ `path.format(pathObj: object): string`：返回路径字符串，与 `parser()` 相反
+ `path.isAbsolute(path: string): boolean`：检测是否为绝对路径
+ `path.relative(from: string, to: string): string`：根据当前工作目录返回相对路径
+ `path.join(...path: string): string`：使用操作系统特定的路径定界符将所有路径片段连接
+ `path.normalize(path: string): string`：将给定的路径规范化
+ `path.resolve(...path: string)`：将路径或路径片段的序列解析为绝对路径
+ `path.toNamespacedPath(path: string): string`：返回指定路径的等效名称空间前缀路径（Windows）


## fs

+ [fs](http://nodejs.cn/api/fs.html) 模块可用于与文件系统进行交互（以类似于标准 POSIX 函数的方式）
+ 所有的文件系统操作都具有同步的、回调的、基于 promise 的三种形式


### 使用方式

+ **异步回调**：传给回调的参数取决于具体方法，但第一个参数总是预留给异常；如果操作被成功地完成，则第一个参数会为 `null` 或 `undefined`
```js
const fs = require('fs')

fs.unlink('文件', (err) => {
  if (err) throw err
  console.log('已成功地删除文件')
})
```
+ **同步调用**：会阻止 Node.js 事件循环，异常会被立即抛出(可以使用 `try…catch` 处理，也可以冒泡)
```js
const fs = require('fs')

try {
  fs.unlinkSync('文件')
  console.log('已成功地删除文件')
} catch (err) {
  // 处理错误
}
```
+ **Promise**：基于 Promise 的操作会返回 Promise，当异步操作完成时会被解决
```js
const fs = require('fs/promises')

(async function(path) {
  try {
    await fs.unlink(path)
    console.log(`已成功地删除文件 ${path}`)
  } catch (error) {
    console.error('出错：', error.message)
  }
})('文件')
```


::: tip 备注：
+ 使用异步操作时，若需要保证顺序，必须将后面的操作嵌套到前一个操作的回调中执行
```js
const fs = require('fs')

fs.rename('旧文件', '新文件', (err) => {
  if (err) throw err
  fs.stat('新文件', (err, stats) => {
    if (err) throw err
    console.log(`文件属性: ${JSON.stringify(stats)}`)
  })
});
```
+ 或者使用 Promise
```js
const fs = require('fs/promises')

(async function(from, to) {
  try {
    await fs.rename(from, to)
    const stats = await fs.stat(to)
    console.log(`文件属性: ${JSON.stringify(stats)}`)
  } catch (error) {
    console.error('出错：', error.message)
  }
})('旧文件', '新文件')
```
:::


### 文件路径

+ 大多数 fs 操作接受的文件路径可以为：字符串、Buffer、URL 对象(`file:` 协议)
+ 字符串形式的路径会被解释为 UTF-8 字符序列(标识绝对或相对的文件名)
+ `file:` URL 始终是绝对路径：
```js
const fs = require('fs')

const fileUrl = new URL('file:///文件')
fs.readFileSync(fileUrl)
```


### 文件描述符

+ 文件描述符(fd)是在操作系统中管理在进程中打开的文件所关联的一些数字或索引，一些常规文件描述：

|流|fd|描述|
|-|-|-|
|stdin|0|标准输入|
|stdout|1|标准输出|
|stderr|2|标准错误|

+ 大多数操作系统限制在任何给定时间内可能打开的文件描述符的数量，因此当操作完成时关闭描述符至关重要(如果不这样做将导致内存泄漏，最终导致应用程序崩溃)
+ `fs.open()` 方法用于分配新的文件描述符，一旦被分配，则文件描述符可用于从文件读取数据、向文件写入数据、或请求关于文件的信息
```js
fs.open('/open/some/file.txt', 'r', (err, fd) => {
  if (err) throw err
  fs.fstat(fd, (err, stat) => {
    if (err) throw err
    // 使用文件属性

    // 始终关闭文件描述符！
    fs.close(fd, (err) => {
      if (err) throw err
    })
  })
})
```


### 线程池

+ 所有的 fs API，除了 `fs.FSWatcher()` 和那些显式同步的方法外，都使用 libuv 的线程池，这对某些应用程序可能会产生意外和负面的性能影响




### 常用 API

+ 只收录异步的 API，同步的 API 大同小异(没有回调，但会返回一些参数)，还可以使用 [Promise API](http://nodejs.cn/api/fs.html#fs_fs_promises_api)
+ 这些方法主要是对标准 POSIX 文件 I/O 调用的封装，大部分都有相同的名字


#### 读

+ `fs.open(path[, flags[, mode]], cb)`：打开/创建一个文件，用于读写
+ `fs.close(fd, cb)`：关闭文件描述符
+ `fs.read(fd[, buffer, offset, length, position], cb)`：读取文件数据
+ `fs.readFile(path[, encoding, flag], cb)`：读取文件的全部内容(不指定编码时会返回原始 buffer)
+ `fs.readlink(path[, encoding], cb)`：读取硬链接的内容
+ `fs.readdir(path[, encoding, withFileTypes], cb)`：读取目录的内容
+ `fs.readv(fd, buffers[, position], cb)`：


#### 写

+ `fs.write(fd, string[, position[, encoding]], cb)`：写入 string 到文件
+ `fs.write(fd, buffer[, offset[, length[, position]]], cb)`：写入 buffer 到文件
+ `fs.writev(fd, buffers[, position], cb)`：将 `ArrayBufferView` 数组写入指定文件
+ `fs.writeFile(file, data[, options], cb)`：写入数据到文件，file 参数为 fd 时等同于 `write()`
+ `fs.appendFile(path, data[, options], cb)`：追加数据到文件，尚文件不存在则创建文件

::: tip 备注：
+ 等待回调就对同一个文件多次使用 `fs.writeFile()` 是不安全的，建议使用 `fs.createWriteStream()`
+ 当 `writeFile()` 的第一个参数为文件名时，多次调用它只会覆盖文件内容；为 fd 时，相当于附加数据
:::


#### 流操作

+ `fs.createReadStream(path[, options])`：创建一个可读流
+ `fs.createWriteStream(path[, options])`：创建一个可写流


#### 监听

+ `fs.watch(filename[, options][, listener])`：监听文件/目录的更改
+ `fs.watchFile(filename[, options], listener)`：监听文件/目录的更改
+ `fs.unwatchFile(filename[, listener])`：移除文件/目录的监听

::: tip 备注：
+ `watch()` 更可靠(文件改变的事件总能执行)和更快(事件发生时能立即通知到 Node.js 进程)
+ `watchFile()` 没有渗入到通知操作系统，二是在一个时间段内不断轮询地看文件有没有发生变化，但其**跨平台**和**在网络文件系统上更可靠**
:::


#### 辅助

|方法|描述|
|-|-|
|`fs.chmod(path, mode, cb)`|**更改文件的权限**
|`fs.fchmod(fd, mode, cb)`|类似 chmod，但使用 fd 作参数
|`fs.lchmod(path, mode, cb)`|类似 chmod，但不解析符号链接
|`fs.chown(path, uid, gid, cb)`|**更改文件的所有者和群组**
|`fs.fchown(fd, uid, gid, cb)`|类似 chown，但使用 fd 作参数
|`fs.lchown(path, uid, gid, cb)`|类似 chown，但不解析符号链接
|`fs.utimes(path, atime, mtime, cb)`|**更改文件的读取和修改时间**
|`fs.futimes(fd, atime, mtime, cb)`|类似 utimes，但使用 fd 作参数
|`fs.lutimes(path, atime, mtime, cb)`|类似 utimes，但不解析符号链接
|`fs.stat(path[, bigint], cb)`|**返回文件状态信息**，一个 [Stats](#fs-stats) 对象
|`fs.fstat(fd[, bigint], cb)`|类似 stat，但使用 fd 作参数
|`fs.lstat(path[, bigint], cb)`|类似 stat，但内容关于符号链接
|`fs.truncate(path[, len], cb)`|**截取文件或扩展文件**
|`fs.ftruncate(fd[, len], cb)`|类似 truncate，但使用 fd 作参数
|`fs.mkdir(path[, options], cb)`|创建目录
|`fs.mkdtemp(prefix[, options], cb)`|创建一个唯一的临时目录
|`fs.rmdir(path[, maxRetries, recursive, retryDelay], cb)`|删除目录
|`fs.opendir(path[, options], cb)`|打开目录
|`fs.link(existingPath, newPath, cb)`|创建硬链接
|`fs.symlink(target, path[, type], cb)`|创建软链接
|`fs.unlink(path)`|删除硬链接
|`fs.realpath(path[, encoding], cb)`|返回当前计算机规范的路径名
|`fs.realpath.native(path[, encoding], cb)`|
|`fs.rename(oldPath, newPath, cb)`|重命名文件
|`fs.fsync(fd, cb)`|同步磁盘中的文件数据
|`fs.access(path[, mode], callback)`|测试用户对指定路径的权限
|`fs.fdatasync(fd, callback)`|
|`fs.existsSync(path)`|路径存在性检测(`exists(path)` 已废弃)
|`fs.copyFile(src, dest[, mode], callback)`|将源文件拷贝为目标文件



### fs.Dir 类

+ 由 `fs.opendir()` 相关方法创建的表示目录流的类


#### 属性

+ `dir.path`：目录的只读路径，与提供给 `fs.opendir()` 等的一样

#### 方法

+ `dir.close()`：异步地关闭目录的底层资源句柄，返回一个 Promise
+ `dir.close(callback)`：异步地关闭目录的底层资源句柄
+ `dir.closeSync()`：同步地关闭目录的底层资源句柄
+ `dir.read()`：异步地读取下一个目录项，返回一个 Promise
+ `dir.read(callback)`：异步地读取下一个目录项
+ `dir.readSync()`：同步地读取下一个目录项
+ `dir[Symbol.asyncIterator]()`：异步地遍历目录，直到读取所有的目录项


### fs.Dirent 类

+ 目录项（可以是文件或目录中的子目录）的表示，通过读取 `fs.Dir` 返回
+ 目录项是文件名和文件类型对的组合

#### 属性

+ `dirent.name`：Dirent 对象指向的文件名

#### 方法

+ `dirent.isFile()`：该对象描述**普通的文件**时返回 true
+ `dirent.isDirectory()`：该对象描述**文件系统目录**时返回 true
+ `dirent.isFIFO()`：该对象描述**先进先出（FIFO）管道**时返回 true
+ `dirent.isSocket()`：该对象描述**套接字**时返回 true
+ `dirent.isSymbolicLink()`：该对象描述**符号链接**时返回 true
+ `dirent.isBlockDevice()`：该对象描述**块设备**时返回 true
+ `dirent.isCharacterDevice()`：该对象描述**字符设备**时返回 true



### fs.Stats 类

+ 由 `fs.stat()`、`fs.lstat()`、`fs.fstat()` 以及它们的同步方法返回的一个对象，包含路径的描述信息

#### 方法

+ `stats.isFile()`：该对象描述**普通的文件**时返回 true
+ `stats.isDirectory()`：该对象描述**文件系统目录**时返回 true
+ `stats.isFIFO()`：该对象描述**先进先出（FIFO）管道**时返回 true
+ `stats.isSocket()`：该对象描述**套接字**时返回 true
+ `stats.isSymbolicLink()`：该对象描述**符号链接**时返回 true
+ `stats.isBlockDevice()`：该对象描述**块设备**时返回 true
+ `stats.isCharacterDevice()`：该对象描述**字符设备**时返回 true


#### 属性

+ number 版本
```js
Stats {
  dev: 2114,       // 文件的设备的数字标识符
  ino: 48064969,   // 文件系统特定的文件索引节点编号
  mode: 33188,     // 描述文件类型和模式的位字段
  nlink: 1,        // 硬链接数
  uid: 85,         // 拥有该文件（POSIX）的用户的数字型用户标识符
  gid: 100,        // 拥有该文件（POSIX）的群组的数字型群组标识符
  rdev: 0,         // 若文件表示一个设备，则此值为数字型设备标识符
  size: 527,       // 文件的大小（以字节为单位）
  blksize: 4096,   // 用于 I/O 操作的文件系统块的大小
  blocks: 8,       // 为此文件分配的块数
  atimeMs: 1318289051000.1,     // 上次访问此文件的时间戳，以 POSIX 纪元以来的毫秒数表示
  mtimeMs: 1318289051000.1,     // 上次修改此文件的时间戳，以 POSIX 纪元以来的毫秒数表示
  ctimeMs: 1318289051000.1,     // 上次更改文件状态的时间戳，以 POSIX 纪元以来的毫秒数表示
  birthtimeMs: 1318289051000.1, // 此文件的创建时间的时间戳，以 POSIX 纪元以来的毫秒数表示
  atime: Mon, 10 Oct 2011 23:24:11 GMT,     // 上次访问此文件的时间戳
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,     // 上次修改此文件的时间戳
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,     // 上次更改文件状态的时间戳
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT  // 此文件的创建时间的时间戳
}
```
+ bigint 版本
```js
BigIntStats {
  dev: 2114n,
  ino: 48064969n,
  mode: 33188n,
  nlink: 1n,
  uid: 85n,
  gid: 100n,
  rdev: 0n,
  size: 527n,
  blksize: 4096n,
  blocks: 8n,
  atimeMs: 1318289051000n,
  mtimeMs: 1318289051000n,
  ctimeMs: 1318289051000n,
  birthtimeMs: 1318289051000n,
  atimeNs: 1318289051000000000n,      // 上次访问此文件的时间戳，以 POSIX 纪元以来的纳秒数表示
  mtimeNs: 1318289051000000000n,      // 上次修改此文件的时间戳，以 POSIX 纪元以来的纳秒数表示
  ctimeNs: 1318289051000000000n,      // 上次更改文件状态的时间戳，以 POSIX 纪元以来的纳秒数表示
  birthtimeNs: 1318289051000000000n,  // 此文件的创建时间的时间戳，以 POSIX 纪元以来的纳秒数表示
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT
}
```



### fs.StatWatcher 类

+ 由 `fs.watchFile()` 返回的一个对象
+ `watcher.ref()`：
+ `watcher.unref()`：



### fs.FSWatcher 类

+ 由 `fs.watch()` 返回的一个 FSWatcher 实例

#### 事件

+ `change`：当监视的目录/文件发生更改时触发
+ `close`：当监视器停止监视更改时触发
+ `error`：当监视文件时发生错误时触发

#### 方法

+ `watcher.close()`：停止监视更改
+ `watcher.ref()`：
+ `watcher.unref()`：



### fs.ReadStream 类

+ 由 `fs.createReadStream()` 返回的 ReadStream 实例

#### 事件

+ `open`：当 ReadStream 的文件描述符打开时触发
+ `close`：当 ReadStream 的底层文件描述符已关闭时触发
+ `ready`：当 ReadStream 准备好使用时触发(`open` 事件之后立即触发)

#### 属性

+ `readStream.path`：流正在读取的文件的路径
+ `readStream.pending`：如果底层的文件还未被打开(即在触发 `ready` 事件之前)，则此属性为 true
+ `readStream.bytesRead`：到目前为止已读取的字节数



### fs.WriteStream 类

+ 由 `fs.createWriteStream()` 返回的 WriteStream 实例

#### 事件

+ `open`：当 WriteStream 的文件打开时触发
+ `close`：当 WriteStream 的底层文件描述符已关闭时触发
+ `ready`：当 WriteStream 准备好时触发(`open` 事件之后立即触发)

#### 属性

+ `writeStream.path`：流正在写入的文件的路径
+ `writeStream.pending`：如果底层的文件还未被打开(触发 `ready` 事件之前)，则为 true
+ `writeStream.bytesWritten`：已写入的字节数