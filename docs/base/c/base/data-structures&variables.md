---
sidebarDepth: 2
---

## 分类

+ 数值类型
  + 整数：`short`, `int`, `long`, `long long`
  + 浮点数：`float`（单精度）、`double`（双精度）、`NaN`
  + 字符：`char`
+ 指针类型
+ 无值类型（空类型）：`void`
+ 派生类型：
  + 数组
  + 字符串
+ 构造类型
  + 结构：`struct`
  + 联合：`union`
  + 枚举：`enum`


::: tip 常量和变量
+ 常量：
  + 不占内存，在程序运行时作为操作对象直接出现在运算器的各种寄存器中
  + 使用宏定义命令来声明常量，如 `#define PAI 3.1415926`
  + 也可以使用 `const` 来声明常量（C90 加入），如 `const int SIZE = 10;`
+ 变量：
  + 同样，变量标识符只能以字母、数字、下划线开头
  + 变量必须先定义后使用
:::


## 数值

+ 符号：分为有符号（signed）数（默认）、无符号（unsigned）数
+ 除 `int` 外的整数的表示可省略 `int` 关键字：
  + `short int` 等同于 `short`, `long int` 等同于 `long`, `long long int` 等同于 `long long`
  + `unsigned int` 等同于 `unsigned`
+ 各数值类型占用的字节和二进制位：

|类型|字节|位数|
|-|-|-|
(unsigned) short|2|16
(unsigned) int|2/4|16/32
(unsigned) long|4/8|32/64
(unsigned) long long|至少 8|至少 64
(unsigned) char|1|8
(unsigned) float|4|32
(unsigned) double|8|64
(unsigned) long double|8|64

::: tip 备注：
+ 可以使用 `sizeof(type)` 查询数值类型在当前操作系统中占用的字节数（不同系统结果可能不同）
```c
#include <stdio.h>
int main(void) {
  printf("%zd\n", sizeof(short));     // 2
  printf("%zd\n", sizeof(int));       // 4
  printf("%zd\n", sizeof(long));      // 8
  printf("%zd\n", sizeof(long long)); // 8
}
```
:::


### 数值表示

+ 整数：分别用前缀 `0`, `0x` 表示八进制、十六进制的整数
```c
// 三种方式表示 10
int a = 10;
int b = 012;
int c = 0x0A;
```

+ 长整数：使用后缀 `l`/`L` 表示 `long` 类型，使用 `ll`/`LL` 表示 `long long` 类型
```c
long a = 10L;
long long b = 10LL;
```

+ 字符常量：使用单引号（`''`）包围，可以通过 ASCII 数值赋值或直接赋值为字符（推荐，避免有一些系统中使用不同的编码）
```c
#include <stdio.h>
int main(void) {
  char a = 'A';
  char b = 'B';
  printf("%c, %c", a, b);  // A, B
  printf("%d, %d", a, b);  // 65, 66
}
```

::: tip 转义字符
+ `\a`: 警报（ANSI C）
+ `\b`: 退格
+ `\f`: 换页
+ `\n`: 换行
+ `\r`: 回车
+ `\t`: 水平制表
+ `\v`: 垂直制表
+ `\\`: 反斜杠
+ `\'`: 单引号
+ `\"`: 双引号
+ `\?`: 问号
+ `\0oo`: 八进制值，o 代表 0～7
+ `\xhh`: 十六进制值，h 代表 0～f
:::

+ 浮点数表示
  + 可以没有小数点或指数部分，但不能同时省略
  + 可以没有小数部分或者整数部分，但不能同时省略
  + 默认，编译器假定浮点型常量是 `double` 类型（在内部进行转换），但可以使用后缀指定类型；如 `f`/`F` 指定为 `float` 类型，`l`/`L` 指定为 `long double` 类型




## 数组

+ 数组是存储在连续内存地址的一组相同类型的数据（与 JavaScript 不同，后者可以是不同类型的数据）
+ 由于指针的存在，使 C 语言的数组使用起来更加灵活（也更容易出错）
+ 特别低，若一个字符数组的最后一个元素是空字符（`\0`），那么它也是一个字符串
+ C 语言的变长数组（VLA）不是指数组的长度可变，而是声明数组时可使用变量指定数组的长度

### 声明和初始化

+ 使用 for 循环遍历
```c
#include <stdio.h>
int main(void) {
  const int SIZE = 5;
  int nums[SIZE];
  for (int i = 0; i < SIZE; i++) {
    nums[i] = i + 1;
  }
  printf("%d, %d, %d, %d, %d", nums[0], nums[1], nums[2], nums[3], nums[4]); // 1, 2, 3, 4, 5
}
```

+ 声明时初始化
```c
#include <stdio.h>
int main(void) {
  int nums[SIZE] = {1, 2, 3, 4, 5};
  printf("%d, %d, %d, %d, %d", nums[0], nums[1], nums[2], nums[3], nums[4]); // 1, 2, 3, 4, 5
}
```

+ 二维数组
```c
#include <stdio.h>
int main(void) {
  int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
  };
}
```


### 指针和数组

+ 数组变量其实是数组第一个元素的地址，而对地址累加 1 相当于将其移动到下一个内存单元
```c
#include <stdio.h>
int main(void) {
  int nums[3] = {1, 2, 3};
  // 两种表示数组元素地址的方式
  printf("%d\n", nums == &nums[0]);     // 1
  printf("%d\n", nums + 1 == &nums[1]); // 1
  printf("%d\n", nums + 2 == &nums[2]); // 1
}
```

+ 从另一个角度来看，也可以有两种方式取得数组元素的值
```c
#include <stdio.h>
int main(void) {
  int nums[3] = {1, 2, 3};
  // 两种访问数组元素的方式
  printf("%d, %d\n", *nums, nums[0]);       // 1, 1
  printf("%d, %d\n", *(nums + 1), nums[1]); // 2, 2
  printf("%d, %d\n", *(nums + 2), nums[2]); // 3, 3
}
```


## 字符串

+ C 语言中没有字符串类型，它实际上是以空字符（`\0`）结尾的字符数组
+ 区分字符串和字符：
  + 字符 `'x'`：属于基本类型（`char`）
  + 字符串 `"x"`：属于派生类型（`char` 数组），其末尾省略了一个空字符


### 创建字符串

两种方式创建字符串：
1. `#define` 宏命令声明字符串常量
2. 使用字符数组存储

```c
#include <stdio.h>
#define HELLO "Hello World!"  // 声明字符串常量
int main(void) {
  char name[20];
  printf("Enter your name:\n");
  scanf("%s", name);
  printf("Welcome, %s!\n", name); // Welcome, Alice!
  printf("%s\n", HELLO);          // Hello World!
}
```

::: tip 备注
+ `#define` 声明字符串常量会自动在末尾添加空字符，不需要显式添加
+ `scanf()` 读取输入完成时也会自动添加空字符
:::


### 字符串计数

+ `strlen()`：返回字符串的有效字符数，不包括末尾的空字符
+ `sizeof()`：返回字符串的完整长度

```c
#include <stdio.h>
#include <string.h>
int main(void) {
  char name[20];
  printf("Enter your name:\n");
  scanf("%s", name);  // Alice
  printf("%lu, %lu", strlen(name), sizeof name);  // 5, 20
}
```



## 构造类型

### 结构类型

+ 使用 `struct` 关键字声明
+ 类似数组，但是可以存储不同的数据类型，也类似其他语言的对象（`Object`）
+ 使用点运算符（`.`）访问成员，使用箭头运算符（`->`）访问结构指针

:::: tabs
::: tab 简单使用
+ 同样，结构需要先声明后使用
```c
#include <stdio.h>

struct Person {
  char name[10];
  int age;
};

int main() {
  struct Person p;
  scanf("%s %d", p.name, &p.age);
  printf("%s is %d years old.\n", p.name, p.age);
  return 0;
}
```

+ 结构可以省略名字（无名结构），而且可以在声明结构后马上创建该结构型的变量
```c
#include <stdio.h>
// 省略了结构名字
struct {
  char name[10];
  int age;
} p1, p2; // 创建两个结构变量

int main() {
  scanf("%s %d", p1.name, &p1.age);
  printf("%s is %d years old.\n", p1.name, p1.age);
  scanf("%s %d", p2.name, &p2.age);
  printf("%s is %d years old.\n", p2.name, p2.age);
  return 0;
}
```

+ 还可以快速初始化
```c
#include <stdio.h>

struct Person {
  char name[10];
  int age;
  int nums[3];
};

int main() {
  struct Person p = { "Alice", 22, { 1, 2, 3 } }; // 快速初始化
  printf("%s is %d years old.\n%d", p.name, p.age, p.nums[2]);
  return 0;
}
```
:::

::: tab 结构数组
+ 顾名思义，就是数组的每一个元素都是结构类型，简单来说，就是 “数组嵌套对象”
```c
#include <stdio.h>

struct Person {
  char name[10];
  int age;
};

int main() {
  struct Person people[2]; // 结构数组
  scanf("%s %d", people[0].name, &people[0].age);
  printf("%s is %d years old.\n", people[0].name, people[0].age);
  scanf("%s %d", people[1].name, &people[1].age);
  printf("%s is %d years old.\n", people[1].name, people[1].age);
  return 0;
}
```
:::

::: tab 结构指针
+ 结构指针指的是指向该结构的指针（该结构的地址）
```c
#include <stdio.h>

struct Person {
  char name[10];
  int age;
};

int main() {
  struct Person p, *ptr;
  ptr = &p;
  scanf("%s %d", p.name, &p.age);
  // 以下三种方式都是一样的
  printf("%s is %d years old.\n", p.name, p.age);
  printf("%s is %d years old.\n", (*ptr).name, (*ptr).age);
  printf("%s is %d years old.\n", ptr->name, ptr->age);
  return 0;
}
```

+ 这在一些自定义结构中非常常见
```c

```
:::
::::



### 联合类型

+ 使用 `union` 关键字声明
+ 联合类型允许不同的数据类型使用同一存储区域，即该存储区域可以被不同类型的变量共享
+ 联合类型的内存空间在某一时刻只能保持某一成员的数据，即若向其中一个成员进行赋值，其他成员的值也会随之改变



### 枚举类型

+ 使用 `enum` 关键字声明
+ 与结构类型的使用方式相似，但是枚举类型会自动初始化并递增（从 0 开始，以 1 为步进）
+ 但是，也可以手动初始化枚举的值，未初始化的值收到前面的值的影响

:::: tabs
::: tab 使用枚举
```c
#include <stdio.h>
// Mon 后面的会初始化为 2,3,4,5,6
enum Weekday {
  Sun = 7,
  Mon = 1,
  Tue, Wed, Thu, Fri, Sat
};

int main() {
  int day;
  day = Sun;
  printf("%d", day); // 枚举元素不是字符串，是一个标识符，可以用 `%d` 打印
  return 0;
}
```
:::

::: tab 枚举运算
```c

```
:::
::::


## 类型别名

+ 通过 `typedef` 关键字可以声明一个类型的别名
```c
#include <stdio.h>

typedef int Integer;

int main() {
  Integer age;  // Integer 相当于 int
  age = 100;
  printf("%d", age);
  return 0;
}
```