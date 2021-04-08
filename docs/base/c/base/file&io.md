## 简介

+ 文件指针：打开文件后会创建一个文件指针（`FILE` 类型，在 `stdio.h` 头文件中定义）
+ 文件操作过程：
  1. 打开文件：`fopen()`
  2. 操作文件：读、写、移动位置指针等操作
  3. 关闭文件：`fclose()`



## 文件操作

+ 打开文件：`FILE *fopen(char *filename, char *mode)`
  + 成功：返回文件指针
  + 失败：返回 NULL
+ 关闭文件：`int fclose(FILE *fp)`
  + 成功：返回 0
  + 失败：返回非 0

:::: tabs
::: tab 读操作
+ 更多[打开方式标识符](#附录：文件打开方式标识符)
```c
#include <stdio.h>

int main() {
  char ch;
  FILE * fp = fopen("hello.txt", "r");  // 以读模式打开文件
  while ((ch = getc(fp)) != EOF) {  // 读取每个字符
    putchar(ch);
  }
  fclose(fp); // 关闭文件
  return 0;
}
```
:::

::: tab 写操作
```c

```
:::

::: tab 边读边写
```c

```
:::

::: tab 随机访问
+ `void rewind(FILE *fp)`：将文件指针定位到文件开始位置
+ `int fseek(FILE *fp, long offset, int base)`：改变文件位置，`offset` 可以是负值，相对于 `base`，`base` 取值：
  + SEEK_SET：文件开始处
  + SEEK_CUR：当前位置
  + SEEk_END：文件末尾
+ `long ftell(FILE *fp)`：返回文件的当前位置
```c
#include <stdio.h>
// hello.txt 的内容为 "Hello World!"
int main() {
  char ch;
  FILE * fp = fopen("hello.txt", "r");
  // 以开头为参照，向后跳转 6 个字符的位置
  fseek(fp, 6L, SEEK_SET);
  ch = getc(fp);
  printf("%c\n", ch); // W
  // 跳转到文件开头
  rewind(fp);
  ch = getc(fp);
  printf("%c\n", ch); // H
  // 返回文件位置，由于读了 H，指针已跳转到下一个字符处
  long a = ftell(fp);
  printf("%ld\n", a); // 1
  fclose(fp);
  return 0;
}
```
:::
::::



## I/O 原理

+ 打开文件会创建一个`缓冲区`（读写模式下会创建两个缓冲区），也可以说打开一个`流`（文本模式对应文本流，二进制模式对应二进制流）
+ 缓冲区的大小因实现而异，一般为 512 字节的倍数，缓冲区大大提升了读写的效率，一些函数可以操作缓冲区
+ 拷贝文件数据到缓冲区：
  + `fscanf()`
  + `getc()`
  + `fgets()`
+ 将缓冲区数据写入文件：
  + `fwrite()`：把二进制数据写入文件


::: tip FILE 结构类型定义
```c
struct _iobuf {
  char * _ptr;      // 
  char * _base;     // 指向缓冲区开始处的指针
  char * _tmpfname; //
  int _cnt;         // 文件计数（实际拷贝到缓冲区的字节数）
  int _flag;        // 
  int _file;        // 
  int _charbuf;     //
  int _bufsiz;      //
};
typedef struct _iobuf FILE;
```
:::



## 附录：文件打开方式标识符

|打开方式|描述|
|-|-|
"r"|只读。打开文件，作为内存的输入源，**文件不存在会报错**
"w"|只写。打开文件，作为内存的输出目标，**文件不存在则创建，存在则清空原内容**
"a"|追加。打开文件，作为内存的输出目标，附加数据到文件末尾，**文件不存在会报错**
"rb", "wb", "ab"|针对二进制文件，其余与上述相同
"r+"|读写。其他与 "r" 相同
"w+"|读写。其他与 "w" 相同
"a+"|读追加。其他与 "w" 相同
"rb+", "wb+", "ab+"|针对二进制文件，其余与上述相同
"wx", "w+x"|（C11）独占模式，其他程序或线程无法访问打开的文件
"wb", "wbx"|针对二进制文件，其余与上述相同

::: tip 备注：
+ 特别注意：不带 "x" 的写模式打开现有文件，都会清空原文件内容！
+ 使用带 "x" 的模式打开任一已存在的文件都会失败
:::