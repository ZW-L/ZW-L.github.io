---
sidebarDepth: 2
---


## 处理输入输出

输入、输出相关的函数定义在 `stdio.h` 头文件中
+ 输入：`scanf()`
+ 输出：`printf()`


## 输入

### scanf()

+ `scanf(formatString, arg1, arg2, ...)`：从命令行扫描字符、字符串或数字保存到指定变量
  + `formatString`：对应输入格式，由于不录入空格/空行，一般使用空格分隔多个参数
  + `arg1`：变量地址（`&a`），由于数组名就是数组第一个元素的地址，可直接传入
```c
#include <stdio.h>
#include <string.h>
int main(void) {
  int age;
  char name[10];
  printf("Enter your age and name:\n");
  scanf("%d %s", &age, name); // 键入 "26 Alice"
  printf("%s:%d", name, age); // "Alice:26"
}
```

+ 占位符：

|占位符|描述|
|-|-|
%c, %s|解释为字符、字符串（第一个非空字符到下一个空白字符前的内容）
%u, %d/%i, %o, %x/%X|解释为无符号十进制、有符号十进制、有符号八进制、有符号十六进制整数
%e/%E, %f/%F, %g/%G, %a/%A|解释为浮点数
%p|解释为指针（地址）

+ 修饰符：

|修饰符|描述|
|-|-|
*|表示跳过当前输入，如 `%*d %*d %d` 会跳过前两个数字，取第三个数字
数字|最大字段宽度，输入到达最大字段宽度或第一次遇到空白字符时停止，如 `%10s`
hh|将整数作为 `signed char`/`unsigned char` 读取，如 `%hhd`/`%hhu`
ll|将整数作为 `long long`/`unsigned long long` 读取，如 `%lld`/`%llu`
h, l/L|作为 `short`、`long`、`long double` 等修饰
j|在整型转换说明后时，表示使用 `intmax_t` 或 `uintmax_t` 类型，如 `%jd`/`%ju`
s|在整型转换说明后时，表示使用 `sizeof` 的返回类型，如 `%zd`/`zo`
t|在整型转换说明后时，表示使用两个指针差值的类型，如 `%td`/`%tx`


## 输出

### printf()

+ `printf()` 的占位符和后面的不定长参数的个数必须对应，若可变参数长度少时，编译器会使用内存中的任意值来填充，而不会提示任何错误
+ 另外，占位符都应的数据类型必须与后面的参数数据类型一致，否则会影响打印的数值或精度
+ 占位符：

|占位符|描述|
|-|-|
%d, %o, %x|打印十进制、八进制、十六进制数字，还可使用 %#o, %#x 显示八进制、十六进制的前缀
%u|打印 unsigned int
%h|打印 short
%l|打印 long
%ll|打印 long long
%f, %e|打印 float/double、指数计数法的浮点数
%Lf, %Le|打印 long double 类型的浮点数、指数计数法
%c|打印 char
%s|打印字符串
%zd|打印 `sizeof()` 的返回值（C99, C11 提供）
%p|打印指针的值（内存地址）
%%|打印一个百分号

::: tip 备注：
+ `%h`, `%l`, `%ll` 都可自由地与 `%u`/`%d`/`%o`/`%x` 等组合表示不同的类型
:::