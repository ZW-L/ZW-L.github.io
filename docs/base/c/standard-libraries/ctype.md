## 简介

|函数|功能|
|-|-|
int isalnum(int ch)|检查 ch 是否是字母或数字
int isalpha(int ch)|检查 ch 是否是字母
int isdigit(int ch)|检查 ch 是否是数字
int isxdigit(int ch)|检查 ch 是否是 16 进制数字
int iscntrl(int ch)|检查 ch 是否是控制字符（ASCII 码位于 0x00～0x1F）
int isgraph(int ch)|检查 ch 是否是可打印符号（除空格外，ASCII 码位于 0x21～0x7e）
int isprint(int ch)|检查 ch 是否是可打印符号（除空格外，ASCII 码位于 0x21～0x7e）
int ispunct(int ch)|检查 ch 是否是标点符号（除字母、数字和空格外的可打印符号）
int isspace(int ch)|检查 ch 是否是空格、制表、换行
int islower(int ch)|检查 ch 是否是小写字母
int isupper(int ch)|检查 ch 是否是大写字母
int wolower(int ch)|返回 ch 对应的小写字母
int woupper(int ch)|返回 ch 对应的大写字母