## 简介

C 语言函数和 JavaScript 的不同点：
+ C 语言函数必须指定返回值类型和参数类型
+ C 语言可使用指针作为参数
+ C 语言除了函数定义，还有函数声明


## 主函数

+ 每个 C 程序都有一个 `main()` 函数，作为程序的主入口
+ `main()` 函数可以调用其他函数，这些函数可以在同一文件内定义，或在其他文件中定义
+ 编译器会将相关的源文件组合成一个完整的可执行程序

```c
#include <stdio.h>
#include "module.h" // 引入自定义头文件

int main() {
  int a, b;
  scanf("%d %d", &a, &b);
  printf("Sum is: %d.\n", sum(a, b)); // 使用自定义函数
  return 0;
}
```



## 函数定义 & 函数声明

+ 函数定义：包括完整函数签名（返回值类型、函数名、参数列表）和函数体，即函数的实现
+ 函数声明：用于声明函数的返回值类型和参数类型，相当于一个简化版的函数签名，主要提供给编译器用来识别函数调用是否出错

:::: tabs
::: tab 函数定义
+ 函数定义在调用函数之前，编译器可以识别，可以省略函数声明
```c
#include <stdio.h>
// sum 函数定义
int sum(int a, int b) {
  return a + b;
}

int main() {
  int a, b;
  scanf("%d %d", &a, &b);
  printf("Sum is: %d.\n", sum(a, b));
  return 0;
}
```
:::

::: tab 函数声明
+ 函数定义在调用函数之后，需要函数声明
```c
#include <stdio.h>
// 函数声明
int sum(int a, int b);
int main() {
  int a, b;
  scanf("%d %d", &a, &b);
  printf("Sum is: %d.\n", sum(a, b));
  return 0;
}
// 函数定义
int sum(int a, int b) {
  return a + b;
}
```

+ 函数声明中形参只保留类型即可，名字可省略
```c
// 以下两种函数声明等价
int sum(int a, int b);
int sum(int, int);
```
:::
::::



## 返回值

+ 函数的返回值类型必须和函数定义的返回值类型一致
+ 对于无返回值的函数，函数定义的返回值类型应该是 `void`（这样是为了避免程序带来某种危害）

```c
// 返回 int
int sum(int a, int b) {
  return a + b;
}

// 无返回值
void sayHi(char name[]) {
  printf("Hi, %s!\n", name);
}
```

::: tip 备注：
+ 在 C 语言中 `void` 还可以用来表示一个通用指针
:::


## 参数传递

+ C 语言中传递参数的方式是 “值传递”
+ 但它即可传递变量值，也可传递变量地址（指针），这是非常灵活但又很容易出错的地方



## 变量类型

按生存期分：
+ 静态变量
+ 动态变量


按作用域分：
+ 局部变量：定义在函数内的变量，属于该函数的局部变量
+ 全局变量：定义在所有函数之外的变量

其他分类：
+ 自动变量
+ 外部变量
+ 静态变量
+ 寄存器变量
