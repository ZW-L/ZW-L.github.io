## 标准库

**概览:**
+ `os`: 与操作系统相关联的函数
+ `sys`: 可调用命令行参数
+ `glob`: 用于从目录通配符搜索中生成文件列表
+ `math`:  为浮点运算提供了对底层C函数库的访问
+ `re`: 提供正则表达式工具
+ `urllib`: 用于访问互联网以及处理网络通信协议
+ `datetime`:  为日期和事件处理提供简单和复杂的方法
+ `zlib`: 支持通用的数据打包和压缩格式
+ `timeit`: 性能度量工具
+ `doctest`: 测试
+ `unitest`: 测试，可以在独立文件里提供更全面的测试集

**其他:**
+ `json`: 对 `JSON` 数据进行编码/解码
+ `time`: 转换日期格式
+ `calendar`: 处理年历和月历
+ `socket`: 网络编程
+ `pymysql`: 用于连接 `MySQL` 数据库
+ `smtplib`: 发送电子邮件，对 `smtp` 协议进行了简单的封装
+ `xml`: 解析 `XML`
+ `_thread`: 多线程(`python3` 之前的 `thread`)
+ `threading`: 多线程(推荐)


## 简介

+ 参考 [python 标准库](https://docs.python.org/zh-cn/3.7/library/index.html)


:::: tabs
::: tab 核心模块

|模块|描述|自动导入|
|-|-|:-:|
|`__buildin__`||✅|
|`exception`|提供了标准异常的层次结构，启动时自动添加到 `__buildin__` 模块中|✅|
|`os`|||
|`os.path`|||
|`stat`|||
|`string`|||
|`re`|||
|`math`|||
|`cmath`|||
|`operator`|||
|`copy`|||
|`sys`|||
|`atexit`|||
|`time`|||
|`types`|||
|`gc`|||
:::


::: tab 更多标准模块

+ `fileinput`：
+ `shutil`：
+ `tempfile`：
+ `StringIO`：
+ `cStringIO`：
+ `mmap`：
+ `UserDict`：
+ `UserList`：
+ `USerString`：
+ `tackback`：
+ `errno`：
+ `getopt`：
+ `getpass`：
+ `glob`：
+ `fnmatch`：
+ `random`：
+ `whrandom`：
+ `md5`：
+ `sha`：
+ `crypto`：
+ `rotor`：
+ `zlib`：
+ `code`：
:::


::: tab 线程和进程

+ `threading`：
+ `thread`：
+ `Queue`：
+ `commands`：
+ `pipes`：
+ `popen2`：
+ `signal`：
:::


::: tab 数据表示

+ `array`：
+ `struct`：
+ `xdrlib`：
+ `marshal`：
+ `pickel`：
+ `cPickel`：
+ `copy_reg`：
+ `pprint`：
+ `repr`：
+ `base64`：
+ `binhex`：
+ `quopri`：
+ `uu`：
+ `binascii`：
:::


::: tab 文件格式

+ `xmllib`：
+ `xml.parse.expat`：
+ `sgmllib`：
+ `htmllib`：
+ `htmlentitydefs`：
+ `formatter`：
+ `ConfigParser`：
+ `netrc`：
+ `shlex`：
+ `zipfile`：
+ `gzip`：
:::


::: tab 邮件和新闻消息处理

+ `rfc822`：
+ `mimetools`：
+ `MimeWriter`：
+ `mailbox`：
+ `mailcap`：
+ `mimetypes`：
+ `packmail`：
+ `mimify`：
+ `multifile`：
:::


::: tab 网络协议

+ `socket`：
+ `select`：
+ `asyncore`：
+ `asynchat`：
+ `urllib`：
+ `urlparser`：
+ `cookie`：
+ `robotparser`：
+ `ftplib`：
+ `gopherlib`：
+ `httplib`：
+ `poplib`：
+ `imaplib`：
+ `smtplib`：
+ `telnetlib`：
+ `nntplib`：
+ `SocketServer`：
+ `BaseHTTPServer`：
+ `SimpleHTTPServer`：
+ `CGIHTTPServer`：
+ `cgi`：
+ `webbrowser`：
:::


::: tab 国际化

+ `locale`：
+ `unicodedata`：
+ `ucnhash`：
:::


::: tab 多媒体

+ `imghdr`：
+ `sndhdr`：
+ `whatsound`：
+ `aifc`：
+ `sunau`：
+ `sunaudio`：
+ `wave`：
+ `audiodev`：
+ `winsound`：
:::


::: tab 数据存储

+ `anydbm`：
+ `whichdb`：
+ `shelve`：
+ `dbhash`：
+ `dbm`：
+ `dumbdbm`：
+ `gdbm`：

:::

::: tab 工具和使用程序

+ `dis`：
+ `pdb`：
+ `bdb`：
+ `profile`：
+ `pstats`：
+ `tabnanny`：
:::


::: tab 其他模块

+ `fcntl`：
+ `pwd`：
+ `grp`：
+ `nis`：
+ `curses`：
+ `termios`：
+ `tty`：
+ `resource`：
+ `syslog`：
+ `msvcrt`：
+ `nt`：
+ `_winreg`：
+ `posix`：
:::


::: tab 执行支持模块

+ `dospath`：
+ `macpath`：
+ `ntpath`：
+ `posixpath`：
+ `strop`：
+ `imp`：
+ `new`：
+ `pre`：
+ `sre`：
+ `py_compile`：
+ `compileall`：
+ `ihooks`：
+ `linecache`：
+ `macurl2path`：
+ `nturl2path`：
+ `tokenize`：
+ `keyword`：
+ `parser`：
+ `symbol`：
+ `token`：
:::


::: tab 其他模块

+ `pyclbr`：
+ `filecmp`：
+ `cmd`：
+ `rexec`：
+ `Bastion`：
+ `readline`：
+ `rlcompleter`：
+ `statvfs`：
+ `calendar`：
+ `sched`：
+ `statcache`：
+ `grep`：
+ `dircache`：
+ `cmp`：
+ `cmpcache`：
+ `util`：
+ `soundex`：
+ `timing`：
+ `posixfile`：
+ `bisect`：
+ `knee`：
+ `tzparser`：
+ `regex`：
+ `regsub`：
+ `reconvert`：
+ `regex_syntax`：
+ `find`：
:::