## 原生模块

+ 事件系统
  + `events`：包含了 `EventEmitter` 类和一些方法
+ 网络
  + `http`：实现 HTTP 服务器和客户端
  + `https`：HTTPS 的支持
  + `http2`：HTTP2 的支持
  + `dns`：
  + `net`：
  + `dgram`：
+ 系统和文件
  + `os`：访问操作系统
  + `fs`：与文件系统进行交互（以类似于标准 POSIX 函数的方式）
  + `zlib`：提供压缩功能
  + `path`：处理文件、目录路径
+ 进程
  + `child_process`：用于衍生子进程，继承自 `EventEmitter`
  + `cluster`：创建共享服务器端口的子进程
+ 其他工具
  + `assert`：断言工具
  + `crypto`：加密工具
  + `inspector`：
  + `url`：处理与解析 URL
  + `util`：一些实用 API


## 第三方模块

+ 网络：
  + `socket-io`