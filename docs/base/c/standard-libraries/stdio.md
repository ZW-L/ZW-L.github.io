## 简介


## 变量

```c
size_t  // 无符号整数类型，sizeof 关键字的结果
fpos_t  // 适合存储文件中任何位置的对象类型
FILE    // 适合存储文件流信息的对象类型
```

## 宏

```c
NULL  // 空指针常量的值

// 这些宏扩展了带有特定值的整型常量表达式，用于 setvbuf 函数的第三个参数
_IOFBF
_IOLBF
_IONBF

BUFSIZ        // 整数，该整数代表了 setbuf 函数使用的缓冲区大小
EOF           // 表示已经到达文件结束的负整数
FOPEN_MAX     // 整数，系统可以同时打开的文件数量
FILENAME_MAX  // 整数，字符数组可以存储的文件名的最大长度。如果实现没有任何限制，则该值应为推荐的最大值
L_tmpnam      // 整数，字符数组可以存储的由 tmpnam 函数创建的临时文件名的最大长度

// 在 fseek 函数中使用，用于在一个文件中定位不同的位置
SEEK_CUR  // 当前位置
SEEK_END  // 文件结尾
SEEK_SET  // 文件开头

TMP_MAX // tmpnam 函数可生成的独特文件名的最大数量

// 指向 FILE 类型的指针
stdin   // 标准输入流
stdout  // 标准输出流
stderr  // 标准错误流
```

## 函数

:::: tabs
::: tab 输入流
```c
// 从 stdin 读取格式化输入
int scanf(const char *format, ...)
// 从指定流读取格式化输入
int fscanf(FILE *stream, const char *format, ...)
// 从字符串读取格式化输入
int sscanf(const char *str, const char *format, ...)

// 从 stdin 获取一个无符号字符
int getchar(void)

// 从指定流获取下一个无符号字符，并向前移动位置标识符
int getc(FILE *stream)
// 从标准输入 stdin 读取一行，当读取到换行符或到达文件末尾时停止，具体视情况而定
char *gets(char *str)
// 从指定流获取下一个无符号字符，并向前移动位置标识符
int fgetc(FILE *stream)
// 从指定的流读取一行，当读取 (n-1) 个字符、或读取到换行符、或到达文件末尾时停止，具体视情况而定
char *fgets(char *str, int n, FILE *stream)

// 把一个无符号字符推入指定流，它是下一个被读取到的字符
int ungetc(int char, FILE *stream)
```
:::

::: tab 输出流
```c
int putw(int i, FILE *fp)

// 把一个无符号字符写入 stdout
int putchar(int c)

// 把无符号字符写入到指定流，并向前移动位置标识符
int putc(int c, FILE *stream)
// 把字符串写入到 stdout，直到空字符（不包括），换行符会被追加到输出中
int puts(const char *str)
// 把无符号字符写入到指定流，并向前移动位置标识符
int fputc(int c, FILE *stream)
// 把字符串写入到指定的流，不包括空字符
int fputs(const char *str, FILE *stream)

// 发送格式化输出到 stdout
int printf(const char *format, ...)
// 发送格式化输出到指定流
int fprintf(FILE *stream, const char *format, ...)
// 发送格式化输出到字符串
int sprintf(char *str, const char *format, ...)
// 使用参数列表发送格式化输出到 stdout
int vprintf(const char *format, va_list arg)
// 使用参数列表发送格式化输出到指定流
int vfprintf(FILE *stream, const char *format, va_list arg)
// 使用参数列表发送格式化输出到字符串
int vsprintf(char *str, const char *format, va_list arg)
// 格式字符串到 str 中
int snprintf(char *str, size_t size, const char *format, ...)
```
:::

::: tab 错误流
```c
// 将描述性错误消息输出到 stderr（先输出字符串 str，后跟一个冒号和空格）
void perror(const char *str)
```
:::

::: tab 流操作
```c
// 以指定模式打开文件
FILE *fopen(const char *filename, const char *mode)

// 把一个新的文件名 filename 与给定的打开的流 stream 关联，同时关闭流中的旧文件
FILE *freopen(const char *filename, const char *mode, FILE *stream)

// 从给定流 stream 读取数据到 ptr 所指向的数组中
size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream)

// 把 ptr 所指向的数组中的数据写入到给定流 stream 中。
size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream)

// 关闭流，刷新所有的缓冲区
int fclose(FILE *stream)

// 清除流的文件结束和错误标识符
void cleanerr(FILE *stream)

// 刷新流的输出缓冲区
int fflush(FILE *stream)

// 获取流的当前文件位置，并把它写入到 pos
int fgetpos(FILE *stream, fpos_t *pos)

// 设置给定流的文件位置为给定的位置。参数 pos 是由函数 fgetpos 给定的位置
int fsetpos(FILE *stream, const fpos_t *pos)

// 定义流应如何缓冲
void setbuf(FILE *stream, char *buffer)
int setvbuf(FILE *stream, char *buffer, int mode, size_t size)

// 测试给定流的文件结束标识符
int feof(FILE *stream)

// 测试给定流的错误标识符
int ferror(FILE *stream)
```
:::

::: tab 文件操作
```c
// 返回给定流 stream 的当前文件位置
long int ftell(FILE *stream)

// 设置文件位置为给定流 stream 的文件的开头
void rewind(FILE *stream)

// 以相对位置的方式设置文件流的偏移
int fseek(FILE *stream, long int offset, int whence)

// 以二进制更新模式(wb+)创建临时文件
FILE *tmpfile(void)

// 生成并返回一个有效的临时文件名
char *tmpnam(char *str)

// 删除文件
int remove(const char *filename)

// 重命名
int rename(const char *old_filename, const char *new_filename)
```
:::
::::