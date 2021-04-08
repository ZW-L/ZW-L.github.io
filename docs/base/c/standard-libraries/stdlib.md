## 简介

+ 动态存储分配函数

|函数|功能|返回值|
|-|-|-|
void *malloc(unsigned size)|分配 size 字节的内存区|返回分配的内存区地址，内存不足返回 0
void *calloc(unsigned n, unsigned size)|分配 n 个 size 字节的连续空间|返回分配内存但愿的起始位置，失败返回 0
void *realloc(void *p, unsigned size)|调整 p 指向的内存区大小|返回该内存区指针，失败返回 NULL
void free(void *p)|释放 p 指向的内存区|-


+ 其他函数

|函数|功能|
|-|-|
int abs(int num)|计算 int 类型的绝对值
long labs(long num)|计算 long 类型的绝对值
double atof(char *str)|将字符串转换为 double 类型
int atoi(char *str)|将字符串转换为 int 类型
long atol(char *str)|将字符串转换为 long 类型
char *itoa(int n, char *str, int radix)|将整数 n 按照 radix 进制转换为字符串，保存至 str，返回 *str
char *ltoa(long int a, char *str, int radix)|将长整数 n 按照 radix 进制转换为字符串，保存至 str，返回 *str
double strtod(char *start, char **end)|
long int strtol(char *start, char **end, int radix)|
int rand()|返回 0～RAND_MAX（在头文件中定义）之间的伪随机（整）数
int random(int num)|返回 0～num 之间的随机（整）数
void randomize()|初始化随机函数（需要头文件 time.h）
void exit(int status)|终止程序运行，将 status 的值返回调用的过程
int system(char *str)|将字符串 str 作为命令传递给 DOS 的命令处理器，返回命令执行后的退出状态