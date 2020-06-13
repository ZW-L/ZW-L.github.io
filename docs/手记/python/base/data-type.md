## 基本数据类型
  + `Numbers`：数字
  + `String`：字符串，单引号双引号均可以
  + `List`：列表，相当于数组
  + `Tuple`：元组，不能二次赋值，相当于只读的列表，但是使用括号 `()`
  + `Sets`：集合，一个无序不重复元素的序列
  + `Dictionary`：字典，相当于对象

## 检测数据类型的方法

+ `type(variable)`

```python
type(12) == int
type(12.0) == float
type('hello') == str
type([1, 2, 3]) == list
type((1, 2, 3)) == tuple
type({'name': 'Anna'}) == dict
```

## Numbers

&emsp;&emsp;数字

+ 注意：
  + `python3` 取消了 `long` 类型的数值，采用 `int` 表示长整型
  + `python2` 没有布尔类型，而是用 `1/0` 表示 `True/False`，`python3` 定义了关键字 `True/False`，并且可以和数字直接相加
+ `Numbers` 类型细分：
  + `int`：整型
  + `float`：浮点型
  + `bool`：布尔值
  + `complex`：复数类型
+ 函数，需要引入 **math 模块**
  + 数学函数
    + `fabs(x)`：绝对值，以浮点数表示
    + `ceil(x)`：上取整
    + `floor(x)`：下取整
    + `cmp(x, y)`：比较，python3 废弃
    + `exp(x)`：e 的 x 次幂
    + `pow(x, y)`：x 的 y 次幂
    + `log(x)`：以 e 为低的对数
    + `log10(x)`：以 10 为低的对数
    + `max(x1, x2, ...)`：返回参数最大值，参数可以为序列
    + `min(x1, x2, ...)`：返回参数最小值，参数可以为序列
    + `modf(x)`：返回 x 的整数部分和小数部分，整数部分以浮点数表示
    + `round(x [, n])`：浮点数的四舍五入值，n 值代表舍入到小数点后的位数
    + `sqrt(x)`：x 的平方根
  + 三角函数
    + `acos(x)`：返回 x 的反余弦弧度值
    + `asin(x)`
    + `atan(x)`
    + `atan2(y, x)：返回给定坐标的反正切值
    + `cos(x)` ：返回 x 的弧度的余弦值
    + `sin(x)`
    + `tan(x)`
    + `hypot(x, y)`：返回欧几里得范数(`x^2 + y^2`)
    + `degress(x)`：将弧度转换为角度
    + `radians(x)`：将角度转换为弧度
  + 常量
    + `pi`
    + `e`
  + 随机数函数
    + `choice(seq)`：从序列 seq 中随机挑选一个元素
    + `randrange([start, ] stop [, step])`：从指定范围内按指定基数递增的集合中获取一个随机数，基数缺省值为1
    + `random()`：返回 [0, 1) 之间的随机数
    + `uniform(x, y)`：返回 [x, y] 之间的随机数
    + `seed([x])`：改变随机数生成器的种子 seed
    + `shuffle(lst)`：将序列的所有元素随机排序

## String

&emsp;&emsp;字符串，单引号双引号均可以

+ 注意：
  + `python` 不支持单字符类型
  + `python2` 中普通字符串是 8 位的 `ASCII` 码存储的，加上前缀 `u` 才会存储为 16 位的 `Unicode` 字符串，而 `python3` 所有字符串都是 `Unicode字符串`
  + 字符串的字符是只读的
  + 字符串使用单引号或双引号均可以
  + 使用三引号(`'''str'''` 或 `"""str"""`)表示多行字符串
  + 使用反斜杠(`\`)进行字符转义，若不想反斜杠转义，在字符串前面添加字母 `r`(或`R`)，表示原始字符串
  + 使用 `+` 连接字符串，使用 `*` 指代字符串重复
  + 可以使用截取运算符 `[:]`
  + 使用 `in / not in` 成员运算符判断字符串中是否包含给定字符/字符序列
  + 使用 `%` 格式化字符串

  ```python
    say = 'hello world'
    a = say + '!'   # hello world!
    b = say * 2     # hello worldhello world
    c = say[0]      # h
    d = say[0:]     # hello world
    e = say[0:5]    # hello
    f = say[2:-1]   # 11o worl
  ```

+ 字符串转义

|转义符|描述|
|-|-|
|`\`|续行符|
|`\\`|反斜杠符号|
|`\'`|单引号|
|`\"`|双引号|
|`\a`|响铃|
|`\b`|退格|
|`\e`|转义|
|`\n`|换行|
|`\v`|纵向制表|
|`\t`|横向制表|
|`\r`|回车|
|`\f`|换页|
|`\000`|空白符|
|`\0yy`|八进制数，yy 表示字符，0为前缀|
|`\xyy`|十六进制数，yy 表示字符，x 为前缀|
|`\other`|其他字符以普通格式输出|

+ 字符串格式化
  + 符号
    + `%s`：字符串
    + `%d`：整数
    + `%u`：无符号整数
    + `%o`：无符号八进制数
    + `%x`：无符号十六进制数
    + `%X`：无符号十六进制数(大写)
    + `%f`：浮点数，可指定小数点精度
    + `%e`：以科学计数法格式化浮点数
    + `%E`：同 %e
    + `%g`：%f 和 %e 的简写
    + `%G`：%f 和 %E 的简写
    + `%p`：以十六进制数格式化变量地址
  + 辅助指令
    + `*`：定义宽度或小数点精度
    + `-`：用作左对齐
    + `\+`：在正数前显示 `+`
    + `<sp>`：在正数前显示空格
    + `\#`：在八进制数前显示 '0'，在十六进制数前显示 '0x'或'0X'
    + `0`：显示的数字前填充 '0'
    + `%`：'%%' 输出一个单一的 '%'
    + `(var)`：映射变量(字典参数)
    + `m.n`：m 是显示的最小宽度，n 是小数点后的位数
+ 字符串内建函数
  + `isalnum()`：若字符串至少含一个字符且所有字符均是字母或数字，返回 `True`
  + `isalpha()`：若字符串至少含一个字符且所有字符均是字母，返回 `True`
  + `isdigit()`：若字符串只含数字，返回 `True`
  + `isnumberic()`：若字符串中只包含数字字符，返回 `True`
  + `islower()`：若字符串包含至少一个区分大小写的字符，且这些均是小写，返回 `True`
  + `isupper()`：若字符串包含至少一个区分大小写的字符，且这些均是大写，返回 `True`
  + `isspace()`：若字符串只含空格，返回 `True`
  + `istitile()`：若字符串是标题化的，返回 `True`
  + `isdecimal()`：若字符串中只包含十进制字符，返回 `True`
  + `capitalize()`：将字符串首字母大写
  + `center(width, fillchar)`：返回指定宽度居中的字符串，fillchar 默认为空格
  + `count(str, beg=0, end=len(string))`：返回 str 在 string 中出现的次数
  + `decode(encoding='UTF-8', errors='strict')`：解码字符串，errors 可以指定为 'ignore' 或 'replace'
  + `encode(encoding='UTF-8', errors='strict')`：编码字符串，errors 可以指定为 'ignore' 或 'replace'
  + `expandtabs(tabsize=8)`：将字符串中的 tab 转换为空格，tabsize 为空格数，默认为 8
  + `join(seq)`：以指定分隔符将序列合并为字符串，例：'-'.join(('h', 'e', 'l', 'l', 'o'))
  + `len(string)`：返回字符串的长度
  + `find(str, beg=0, end=len(string))`：若 `str` 包含在字符串中，返回开始索引，否则返回 -1
  + `index(str, beg=0, end=len(string))`：类似 `find()`，但 `str` 不在字符串中会报异常
  + `rfind(str, beg=0, end=len(string))`：类似 `find`，从右边开始
  + `rindex(str, beg=0, end=len(string))`：类似 `index`，从右边开始
  + `ljust(width [, fillchar])`：返回一个原字符串左对齐并填充至指定宽度的字符串，fillchar默认为空格
  + `rjust(width [, fillchar])`：返回一个原字符串右对齐并填充至指定宽度的字符串，fillchar默认为空格
  + `zfill(width)`：返回右对齐且长度为 `width` 的字符串，前面填充 0
  + `lstrip()`：截掉字符串左边的空格
  + `rstrip()`：截掉字符串右边的空格
  + `strip([chars])`：截掉开头和结尾的空格
  + `lower()`：转换为小写
  + `upper()`：转换为大写
  + `swapcase()`：大小写互转
  + `max(str)`：返回最大的字符
  + `min(str)`：返回最小的字符
  + `maketrans()`：创建字符映射的转换表
  + `replace(old, new [, max])`：字符串替换，`max` 指定替换次数
  + `split(str="", num=string.count(str))`：以 `str` 为分隔符截取字符串，`num` 指定截取次数
  + `splitlines(num=string.count('\n'))`：按照行分割截取
  + `startswith(str, beg=0, end=len(string))`：若字符串以 `obj` 开头，返回 `True`
  + `endswidth(obj, beg=0, end=len(string))`：若字符串以 `obj` 结尾，返回 `True`
  + `title()`：所有单词以大写开头
  + `translate(table, deletechars="")`：根据 `table` 转换字符串，`deletechars` 为要过滤的字符

## List

&emsp;&emsp;列表

+ 注意：
  + 列表的元素是可读写的
  + 使用 `+` 连接列表，使用 `*` 指代列表重复
  + 使用截取运算符 `[:]`
  + 使用 `in / not in` 成员操作符
  + 使用 `del` 删除元素

  ```python
  arr = [1, 2, 3, 4]

  arr1 = arr + [5]    # [1, 2, 3, 4, 5] 
  arr2 = arr * 2      # [1, 2, 3, 4, 1, 2, 3, 4]
  arr3 = arr[0]       # 1
  arr4 = arr[1:]      # [2, 3, 4]
  arr5 = arr[1:3]     # [2, 3]
  ```
+ 函数
  + `len(list)`：返回列表长度
  + `max(list)`：返回列表最大值
  + `min(list)`：返回列表最小值
  + `list(seq)`：将元组转换为列表
+ 方法
  + `list.append(obj)`：在列表末尾添加对象
  + `list.count(obj)`：返回 `obj` 在列表出现的次数
  + `list.extend(seq)`：扩展，在列表末尾一次性添加另一个序列的多个值
  + `list.index(obj)`：返回第一个匹配 `obj` 的索引
  + `list.insert(index, obj)`：将 `obj` 插入指定索引
  + `list.pop(obj=list[-1])`：移除并返回列表的一个元素，默认为最后一个元素
  + `list.remove(obj)`：移除第一个匹配的元素 `obj`
  + `list.reverse()`：反转列表
  + `list.sort([func])`：排序
  + `list.clear()`：清空列表
  + `list.copy()`：复制列表，浅复制

## Tuple

&emsp;&emsp;元组，特殊的列表

+ 注意：
  + 元素不能修改(只读)，但可以包含可变对象(`list` 或 `dictionary`)
  + 用 `()` 而不是 `[]`
  + 可以使用 `+`或 `*` 拼接元组
  + 使用 `del` 删除整个元组，但不能删除单个元素
  + 使用 `in / not in`
+ 函数
  + `len(tuple)`：返回元素个数
  + `max(tuple)`：返回最大元素
  + `min(tuple)`：返回最小元素
  + `tuple(seq)`：将列表转换为元组

## Set

&emsp;&emsp;集合，一个无序不重复元素的序列

+ 注意：
  + 使用大括号 `{}` 或 `set()` 函数创建集合
  + 创建空集合只能用 `set()` 函数，因为 `{}` 创建的是空字典


## Dictionary

&emsp;&emsp;字典，无序的对象集合

+ 注意：
  + 字典是一种映射类型，每个元素都是键值对
  + 键名不可变且唯一，可以是数字/字符串/元组，不能是列表
  + `{}` 为空字典
  + 使用 `dict['keyname']` 访问属性值
  + 使用 `in / not in`
  + 使用 `del` 删除键或直接删除字典
+ 函数
  + `len(dict)`：返回键的个数
  + `str(dict)`：返回字典的字符串表示
  + `type(variable)`：返回变量的类型
+ 方法
  + `dict.clear()`：清空字典
  + `dict.copy()`：返回字典的浅复制
  + `dict.fromkeys(seq, val)`：创建新字典，以序列 seq 作为字典的键，val 为字典所有键对应的初始值
  + `dict.get(key, default=None)`：返回指定键的值，不存在则返回 default 的值
  + `dict.setdefault(key, default=None)`：类似 get，但字典不存在指定键时，会添加键并设置值为default
  + `dict.items()`：以列表形式返回可遍历的(键，值)元组数组
  + `dict.keys()`：以列表形式返回字典的所有键
  + `dict.values()`：以列表形式返回字典的所有制
  + `dict.update(dict1, dict2)`：将字典 dict2 的键/值对更新至 dict1 中

## 数据类型转换

+ 数值转换
  + `int(x [,base])`：转换为整数
  + `float(x)`：转换为浮点数
  + `complex(real [, imag])`：创建一个复数
+ 字符串转换
  + `str(x)`：转换为字符串
  + `repr(x)`：转换为表达式字符串
  + `chr(x)`：将一个整数转换为一个字符
  + `ord(x)`：将一个字符转换为整数
  + `unichr(x)`：将一个整数转换为 Unicode 字符
  + `hex(x)`：将一个整数转换为十六进制字符串
  + `oct(x)`：将一个整数转换为八进制字符串
+ 其他
  + `list(s)`：将序列 s 转换为一个列表
  + `tuple(s)`：将序列 s 转换为一个元组
  + `dict(d)`：创建一个字典，d 必须为一个序列(key, value)元组
  + `set(s)`：转换为可变集合
  + `frozenset(s)`：转换为不可变集合
  + `eval(str)`：计算 str 中有效的 python 表达式，返回一个字典