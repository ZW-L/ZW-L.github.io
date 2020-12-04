## 分类

基本数据类型：
+ `Numbers`：数值类型，其内部还会细分
  + int：整型
  + long：长整型
  + float：浮点型
  + complex：复数类型
+ `Boolean`：布尔值，`True` 或 `False`（注意开头的大写的）
+ `None`：空值，相当于其他语言的 null
+ `String`：字符串，单引号双引号均可以
+ `List`：列表，相当于其他语言的数组
+ `Tuple`：元组，相当于只读的列表，但是使用括号 `()` 而不是 `[]`
+ `Dictionary`：字典，其他语言的对象
+ `Set`：集合，其他语言的哈希表，元素都是不重复的


可以使用 `type()` 函数返回变量的类型：
```py
print(type(1))        # <type 'int'>
print(type(1.2))      # <type 'float'>
print(type('123'))    # <type 'str'>
print(type(True))     # <type 'bool'>
print(type(None))     # <type 'NoneType'>
print(type([1, 2]))   # <type 'list'>
print(type((1, 2)))   # <type 'tuple'>
print(type({ 'age': 22 }))  # <type 'dict'>
```




## 类型转换

可以使用相应的方法对数据类型进行转换：
+ 数值
  + `int(x [, base])`： 转换为整数
  + `long(x [, base])`： 转换为长整数
  + `float(x)`： 转换为浮点数
  + `complex(real [, imag])`： 创建一个复数
  + `ord(x)`： 将字符转换为整数(为其对应的 Unicode 编码)
+ 字符
  + `chr(x)`： 将整数(Unicode 编码)转换为一个字符
  + `unichr(x)`： 将整数转换为一个 Unicode 字符
+ 字符串
  + `str(x)`： 转换为字符串
  + `repr(x)`： 转换为表达式字符串
  + `hex(x)`： 将整数转换为十六进制字符串
  + `oct(x)`： 将整数转换为八进制字符串
+ 列表
  + `list(s)`： 将序列转换为列表
+ 元组
  + `tuple(s)`： 将序列转换为元组
+ 字典
  + `dict(d)`： 以序列元组创建一个字典
+ 集合
  + `set(s)`： 转换为可变集合
  + `frozenset(s)`： 转换为不可变集合
+ 对象
  + `eval(str)`： 计算表达式，返回一个对象