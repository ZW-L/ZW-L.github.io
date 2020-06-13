## 导入模块

+ `import module_1`: 导入模块
+ `import module_1.func`: 导入包下的模块或子包
+ `from module_1 import func`: 导入包下的模块或子包（推荐）
+ `from module_1 import *`: 导入模块的所有内容（不推荐）

## 深入模块

**属性：**
+ `__name__`
+ `dir()`

**包：**
+ 只有包含了 `__init__.py` 文件的目录才能被认为时一个包
+ `__init__.py` 可以为空，可定义变量 `__all__` 指定 `from package_1 import *` 导入的包
+ 一个包可以包含子包或各种模块文件

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