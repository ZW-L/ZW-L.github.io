## 文件处理

**file对象:**

+ 介绍：用于文件读取、修改
+ 打开文件：`open(file_name)`
+ 函数

|函数|描述|返回值|
|-|-|-|
|`file.close()`|关闭文件|-|
|`file.flush()`|刷新文件内部缓冲，直接把内部缓冲区的数据写入文件，不是被动等待输出缓冲区写入|-|
|`file.fileno()`|返回一个整型的文件描述符，可用于如os模块的read方法等底层操作上|-|
|`file.isatty()`|检测文件是否连接到一个终端设备|True/False|
|`file.next()`|返回文件的下一行|-|
|`file.read([size])`|从文件读取指定的字节数，如果未指定或为负则读取所有|-|
|`file.readline([size])`|读取整行，包括'\n'字符|-|
|`file.readlines([sizehint])`|读取所有行并返回列表|若sizehint>0，返回总和大约为sizeint字节的行|
|`file.seek(offset [, whence])`|设置文件当前位置|-|
|`file.tell()`|返回文件当前位置|-|
|`file.truncate([size])`|截取文件，截取的字节通过size指定，默认为当前文件位置|-|
|`file.write(str)`|将字符串写入文件|-|
|`file.writelines(sequence)`|向文件写入一个序列字符串列表|-|

## 输入\输出

### 输出格式美化

+ `str()`：转化为字符串
+ `repr()`：转化为字符串，保留转义字符

### 旧式字符串格式化

+ 占位符 `%`

### 读取键盘输入

+ `input(str_info)`：显示提示信息，接受键盘输入
+ `print(str)`：输出字符串