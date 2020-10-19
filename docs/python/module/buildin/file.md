## 方法

+ 不需要引入，使用 open 函数创建 file 对象
+ 方法
  + file_obj.close(): 关闭文件
  + file_obj.flush(): 刷新缓冲区，直接将缓冲区数据写入文件
  + file_obj.fileno(): 返回文件描述符
  + file_obj.isatty(): 检测文件是否连接到一个终端设备
  + file_obj.next(): 返回文件的下一行
  + file_obj.read([size]): 指定读取文件的字节数，非正整数则读取全部
  + file_obj.readline([size]): 读取整行，包含 '\n' 字符
  + file_obj.readlines([sizehint]): 读取所有行并返回列表
  + file_obj.seek(offset [, whence]): 设置文件当前位置
  + file_obj.tell(): 返回文件当前位置
  + file_obj.truncate([size]): 截取文件的指定字节数，默认位置为文件当前位置
  + file_obj.write(str): 写入文件，无返回值
  + file_obj.wirtelines(sequence): 写入一个序列字符串列表，换行符要手动添加


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