## 简介

+ 字符串和列表类似，都能使用下标、切片和 `+`/`*`/`in`/`not in` 操作符，但是字符串是不可变的(只能生成新的字符串，通过下标修改字符串的字符会被忽略)
+ 允许使用单引号(`''`)或双引号(`""`)
+ 原始字符串：使用 `r`/`R` 作为前缀，在正则表达式中很常用 
+ Unicode 字符串：使用 `u` 作为前缀
+ 多行字符串：使用三引号包围，允许插入换行符、制表符等



## 编码

常见的编码：
+ ascii：1 个字节，通常用于表示英文字母
+ unicode：通常为 2 个字节(或更多)，能够表示所有语言，但用于表示 ascii 字符时需要更多的存储空间
+ utf-8：unicode 的优化，理解为`可变长编码`(编码 ascii 字符时仍是一个字节)，能够兼容 ascii
+ gb2312：中文的编码

::: tip 注意：
+ python3 的字符串使用 unicode 编码，直接支持多语言
+ str和bytes互相转换时，需要指定编码，最常用的编码是 utf-8
+ 如果没有特殊业务要求，尽量使用 utf-8 编码
:::



## 操作符

+ `+`: 字符串拼接
+ `*`: 重复次数
+ `[]`: 读取下标
+ `[:]`: 字符串切片
+ `in`/`not in`: 成员运算符
+ `r`/`R`: 输出原始字符串
+ `%`: 格式字符串，可以占位



## 格式化符号

+ %s: 格式化字符串
+ %d: 格式化整数
+ %u: 格式化无符号整数
+ %o: 格式化无符号八进制数
+ %x: 格式化无符号十六进制数
+ %X: 格式化无符号十六进制数（大写）
+ %f: 格式化浮点数，可指定精度
+ %e: 用科学计数法格式化浮点数
+ %E: 同 %e
+ %g: %f 和 %e 的缩写
+ %G: %f 和 %E 的缩写
+ %p: 用十六进制格式化变量的地址

**辅助指令:**
+ `*`
+ `-`
+ `+`
+ `<sp>`
+ `#`
+ `0`
+ `%`
+ `(var)`
+ `m.n`



## 内置函数

+ `s.upper()`：将字符串转换为大写
+ `s.lower()`：将字符串转换为小写
+ `s.capitalize()`：将字符串转换为首字母大写
+ `s.ljust(l, ch=' ')`：用指定字符(ch)补充到字符串的右边(l)，实现左对齐
+ `s.rjust(l, ch=' ')`：用指定字符(ch)补充到字符串的左边(l)，实现右对齐
+ `s.center(l, ch=' ')`：用指定字符(ch)补充到字符串两端(l)，实现居中
+ `s.count(str, beg=0, end=len(string))`
+ `s.decode(encoding='UTF-8', errors='strit')`
+ `s.endswith(obj, beg=0, end=len(string))`
+ `s.expandtabs(tabsize=8)`
+ `s.find(str, beg=0, end=len(string))`
+ `s.join(seq)`
+ `s.lstrip()`
+ `s.maketrans(intab, outtab)`
+ `s.max(str)`
+ `s.min(str)`
+ `s.partition(str)`
+ `s.replace(str1, str2, num=string.count(str1))`
+ `s.rfind(str, beg=0, end=len(string))`
+ `s.rindex(str, beg=0, end=len(string))`
+ `s.rpatition(str)`
+ `s.rtrip()`
+ `s.split(str="", num=string.count(str))`
+ `s.splitlines(num=string.count('\n'))`
+ `s.startswith(obj, beg=0, len=len(string))`
+ `s.strip([obj])`
+ `s.swapcase()`
+ `s.title()`
+ `s.translate(str, del="")`
+ `s.zfill(width)`
+ `s.index(str, beg=0, end=len(string))`

谓词函数：均用于判断，并返回一个布尔值：
+ `s.isalpha()`：判断 s 的所有字符是否全是字母
+ `s.isdecimal()`：判断 s 的所有字符是否全是数字
+ `s.isalnum()`：判断 s 的所有字符是否全是字母/数字
+ `s.isupper()`：判断 s 的所有字符是否全是大写
+ `s.islower()`：判断 s 的所有字符是否全是小写
+ `s.isdigit()`：判断 s 的所有字符是否全是数字
+ `s.isnumberic()`：判断 s 的所有字符是否全是数字
+ `s.isspace()`：判断 s 的所有字符是否全是空格/制表符/换行符
+ `s.istitle()`：判断 s 是否仅有第一个字符为大写，其余为小写