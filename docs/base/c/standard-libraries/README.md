## 概念

+ 函数库：由系统建立的具有一定功能的函数的集合
+ 库函数：函数库内定义的函数
+ 头文件：也称包含文件，理解为库函数和 C 程序之间的桥梁；除了库函数，通常还包含一些数据（常量）和变量
+ 链接程序：编译器提供，将编译程序生成的目标文件链接起来生成一个可执行文件


## 标准库

+ 不同 C 标准提供的 C 标准库：

|标准库|说明|版本|
|-|-|-|
|assert.h||ANSI C|
|ctype.h|字符|ANSI C|
|errno.h||ANSI C|
|float.h||ANSI C|
|limits.h||ANSI C|
|locale.h||ANSI C|
|math.h|数学函数的原型|ANSI C|
|setjmp.h||ANSI C|
|signal.h||ANSI C|
|stdarg.h||ANSI C|
|stddef.h||ANSI C|
|stdio.h|输入输出相关|ANSI C|
|stdlib.h|其他工具，如内存分配、类型转换等|ANSI C|
|string.h|字符串定义|ANSI C|
|time.h||ANSI C|


::: tip 备注：
+ `ANSI C`, `87 ANSI C`, `ISO C` 都是 15 个头文件
+ 1995 年，`ISO C` 添加 3 个头文件
+ `C11` 添加 6 个头文件
+ `C11` 添加 5 个头文件
:::