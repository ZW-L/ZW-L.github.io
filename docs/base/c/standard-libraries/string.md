## 简介



## 变量

```c
size_t // 无符号整数类型，是 `sizeof` 关键字的结果
```


## 宏

```c
NULL //空指针常量
```


## 函数

:::: tabs
::: tab 属性
```c
// 返回字符串 s 的长度
size_t strlen(char *s)
```
:::

::: tab 比较
```c
// 比较字符串 s1 和 s2
int strcmp(char *s1, char *s2)

// 比较字符串 s1 和 s2 的前 n 个字节
int strncmp(char *s1, char *s2, size_t n)
```
:::

::: tab 复制
```c
// 拷贝字符串 s1 的所有字符到 s2
char *strcpy(char *s1, char *s2)

// 拷贝字符串 s1 的 n 个字符到 s2
char *strncpy(char *s1, char *s2, size_t n)
```
:::

::: tab 拼接
```c
// 将字符串 s2 追加到 s1 的尾部
char *strcat(char *s1, const char *s2)

// 将字符串 s2 的前 n 个字符追加到 s1 的尾部
char *strncat(char *s1, const char *s2, size_t n)
```
:::

::: tab 搜索
```c
// 搜索字符串 s 中字符 c 首次出现的位置
char *strchr(const char *s, int c)

// 搜索字符串 s1 中字符串 s2 首次出现的位置
char *strstr(char *s1, const char *s2)
```
:::

::: tab 通用操作
+ 这些函数的参数数组或返回值类型是 `void`，适用于任何类型的数组
```c
// 比较 s1 和 s2 的前 n 个字节
int memcmp(void *s1, void *s2, size_t n)

// 从 s1 拷贝 n 个字节到 s2（restrict 假设两个内存区域没有重叠）
void *memcpy(void * restrict s1, const void *s2, size_t n)

// 从 s1 拷贝 n 个字节到缓冲区，再拷贝到 s2
void *memmove(void *s1, const void *s2, size_t n)

// 用字符 c 填充 s 的前 n 个字符
void memset(void *s, int c, size_t n)

// 搜索 s 的前 n 个字符里字符 c 首次出现的位置
void memchr(void *s, int c, size_t n)
```
:::
::::