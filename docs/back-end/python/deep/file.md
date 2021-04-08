## 文件处理

**file对象:**

+ 介绍：用于文件读取、修改
+ 不需要引入，使用 `open(file_name)` 函数打开文件，创建 file 对象

:::: tabs
::: tab 函数
+ file.close(): 关闭文件
+ file.flush(): 刷新缓冲区，直接将缓冲区数据写入文件
+ file.fileno(): 返回文件描述符
+ file.isatty(): 检测文件是否连接到一个终端设备
+ file.next(): 返回文件的下一行
+ file.read([size]): 指定读取文件的字节数，非正整数则读取全部
+ file.readline([size]): 读取整行，包含 '\n' 字符
+ file.readlines([sizehint]): 读取所有行并返回列表
+ file.seek(offset [, whence]): 设置文件当前位置
+ file.tell(): 返回文件当前位置
+ file.truncate([size]): 截取文件的指定字节数，默认位置为文件当前位置
+ file.write(str): 写入文件，无返回值
+ file.wirtelines(sequence): 写入一个序列字符串列表，换行符要手动添加
:::

::: tab 文件读写
```py
# with 保证在程序过程中若出现问题，关闭文件
# 写入，会清空文件内容再写入
with open('test.txt', 'w') as f:
    f.write('Hello world!\n')
    f.write('Hello python!\n')

# 读取所有内容
# with open('test.txt', 'r') as f:
#     print(f.read())

# 读取一行
# with open('test.txt', 'r') as f:
#     print(f.readline())

# 读取所有行，返回一个列表
with open('test.txt', 'r') as f:
    file_list = f.readlines()
print(file_list)
```
:::


::: tab 序列化

:::

::: tab 操作文件和目录


:::

::: tab StringIO & BytesIO

:::
::::


## json

+ 函数
  + 处理字符串
    + json.dumps(python-data)
    + json.loads(json-string)
  + 处理文件
    + json.dump(python-data, json-file-path)
    + json.load(json-file-path)
  + 附加参数
    + 语法： json.dump(python-data, json-file-path, ensure_ascii=False, indent=4)
    + ensure_ascii=False： 写入为非 ascii 格式，否则字符(包括中文)会以 ascii 字符写入
    + indent=4： 设置缩进
+ 转换
  + dict          <=>   object
  + list, tuple   <=>   array
  + string        <=>   string
  + int, float..  <=>   number
  + True          <=>   true
  + False         <=>   false
  + None          <=>   null


```py
# -*- coding: UTF-8 -*-
import os
import json

print(os.getcwd())
# os.system('type nul>test.json')
users = [
    {
        'name': 'Alice',
        'age': 24
    },
    {
        'name': 'Anna',
        'age': 26
    }
]
try:
    with open('test.json', 'w') as file_obj:
        json.dump(users, file_obj)
except Exception as e:
    print('Error: ' + e)
else:
    print('Write successful!')

```


## os

:::: tabs
::: tab 函数
+ os.getcwd(): 返回当前工作目录，不包含文件名
+ os.system('command'): 执行命令行命令
+ os.rename(src, dst): 重命名目录或文件
+ os.remove(path): 删除文件，若是文件夹则报错
+ os.rmdir(path): 删除空目录，若非空则报错
+ os.removeddirs(path): 递归删除目录
:::

::: 案例

+ 获取路径
```py
print(os.getcwd())
```

+ 执行命令行命令
```py
os.system('python -V')
os.system('mkdir mydocs')
os.system('type nul>test.json')
os.system('echo helloworld>test.txt')
```

+ 切换工作目录
```py
import os

os.chdir('g:/')
os.system('mkdir page1')
os.chdir('g:/page1')
os.system('echo helloworld>hello.txt')
os.chdir('g:/')
os.system('mkdir page2')
os.chdir('g:/page2')
os.system('echo helloworld>world.txt')
```

:::
::::