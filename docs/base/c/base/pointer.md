## 简介

+ 简单来说，指针是一个指针类型的变量（如 `*p` 称为指针 p），它用于保存其他类型的变量的地址；但作为变量，它本身也有一个内存地址（用 `&p` 访问）用来存储它的值
+ 指针操作符有两个：
  + 取地址（`&`）：取得变量在内存中的地址
  + 解引用（`*`）：取指针指向的地址上的值
+ 两个指针操作符的作用恰好相反，因此存在 `a == *&a`

::: tip 理解指针：
+ 定义指针变量时，`*` 仅用作标记该变量为指针
+ 使用指针变量时，`*` 才是解引用，取得指针指向的地址上的值
+ 指针不能作为一个独立的类型，它必须由其他类型（`int`,`char`, ...）修饰，表示整型指针、字符指针等
```c
#include <stdio.h>
int main(void) {
  int a = 10;
  int *p;           // 定义：* 用来表示 p 是一个指针变量
  p = &a;
  printf("%d", *p); // 使用：* 用来取指针 p 指向的地址上的值
}
```
:::


## 使用指针

+ 访问同一变量的新方式
```c
#include <stdio.h>
int main(void) {
  int a = 100, *p;
  p = &a;
  // 直接访问 VS 通过指针访问
  printf("%d, %d\n", a, *p);  // 100, 100
  // 整型变量 a 的地址 VS 指针变量 p 的地址
  printf("%p, %p\n", &a, &p); // 0x7ffeeed1c94c, 0x7ffeeed1c940
}
```

## 指针参数

+ 实现一个简单的 `swap()` 函数
:::: tabs
::: tab 错误版本
```c
#include <stdio.h>
void swap(int a, int b) {
  int temp = a;
  a = b;
  b = temp;
  printf("In swap: a = %d, b = %d.\n", a, b); // In swap: a = 1, b = 10.
}

int main(void) {
  int a = 10, b = 1;
  swap(a, b);
  printf("In main: a = %d, b = %d.\n", a, b); // In main: a = 10, b = 1.
}
```
+ 用 JavaScript 的方式来理解：参数是值传递，在 `swap()` 函数中无法修改外部变量 a、b（修改的是局部变量 a、b）
+ 再从 C 语言角度去理解：同样是传递了值相同的局部变量 a、b 给 `swap()`；因此，要修改外部变量 a、b，必须能直接操作内存中的值，所以应该使用指针 
:::

::: tab 使用指针的正确版本
```c
#include <stdio.h>
// 形参的 * 表示这两个参数是指针变量，并不是取指针的值
void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
  printf("In swap: a = %d, b = %d.\n", *a, *b); // In swap: a = 1, b = 10.
}

int main(void) {
  int a = 10, b = 1;
  swap(&a, &b);
  printf("In main: a = %d, b = %d.\n", a, b);   // In main: a = 1, b = 10.
}
```
:::
::::



## 多重指针





## 函数和指针


