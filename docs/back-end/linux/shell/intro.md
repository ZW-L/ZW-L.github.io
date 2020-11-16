---
sidebarDepth: 2
---

## 概念

+ shell 脚本是使用 shell 的功能编写的程序
+ 它使用 shell 语法和命令，或搭配正则表达式、管道命令、数据流重定向等实现特定功能
+ 它是纯文本的，即所有内容都会以字符串被对待


### 格式

+ 命令的执行是由上而下、由左到右的
+ 注释：使用 `#` 开头标注一行注释
+ 换行：使用 `\[Enter]` 扩展到下一行
+ 空白：命令、选项与参数间的多个空格会被忽略，空白行会被忽略，`[Tab]` 产生的空白也视为空格



### 执行方式

必须先设置 shell 脚本的 `rw` 权限，才可执行：
+ 绝对路径：`/you/shell/path/shell.sh` 执行
+ 相对路径：`./shell.sh` 执行
+ 拷贝到 PATH 指定的目录中：
+ 使用 bash：`bash shell.sh`(或 `sh shell.sh`) 执行
+ 使用 source：`source shell.sh` 执行

::: tip 说明：
+ `source` 命令执行脚本时，会在父进程中执行，脚本设置的环境变量也会在父进程中生效
+ 其他几种方式执行脚本时，都是新建一个 shell(子进程)来执行，导致执行完后变量会被销毁
+ 就像我们使用 `source ./bashrc` 来刷新设置而不是使用 `bash ./bashrc` 
:::


### 编码习惯

+ 良好的注释：
  + 第一行的 `#!/bin/bash` 指定脚本使用的 shell
  + 介绍脚本的功能
  + 脚本的版本、版权(历史记录)、作者及联系方式
  + 环境变量的预设和声明
  + 特殊命令的说明
  + ...
+ 编辑器：使用有语法校验的 vim(而不是 vi)




## 变量

+ 一般来说，需要使用变量时要带 `$` 前缀，而操作变量时不用前缀
+ `$variable` 和 `${variable}` 有相同效果，但建议使用后者
```sh
a=Alice
echo $ab    # 打印空行，找不到 ab 这个变量
echo ${a}b  # Aliceb
```
+ 环境变量名都是大写，自定义变量建议全部小写(避免覆盖环境变量)
+ 多个单词的变量使用下划线(_)连接，而不是中横线(- 在 shell 中指代参数)


### 变量声明和删除

+ 变量声明：不需要使用关键字，而且 `=` 两侧不能有空格(shell 将空格作为命令或参数的分隔符)
```sh
#!/bin/bash
user_name=Alice
echo $user_name   # Alice
echo ${user_name} # Alice
```

+ 变量删除：使用 `unset` 关键字
```sh
#!/bin/bash
user_name=Alice
echo ${user_name} # Alice
unset user_name   # 删除变量
echo ${user_name} # 打印不存在的变量，相当于打印空串
```


### 系统变量

+ 系统变量都是以大写字母命名
```sh
echo $PATH
```

+ 系统变量的修改
```sh
echo $PATH
PATH=$PATH:/root/srv  # 对 PATH 的修改只能持续到退出或重启系统
echo $PATH
```

+ 持久化系统变量，修改 `~/.bashrc`
```sh
vim ~/.bashrc
# 添加一行
PATH=$PATH:/root/my-path
source ~/.bashrc
echo $PATH
# 退出系统再重新登录
echo $PATH
```


### 局部变量

+ 局部变量仅能在当前 shell 中获取，即使是子 shell 也不能使用
```sh
user_name=Alice
echo $user_name   # Alice
bash
echo $user_name   # 空行，不能获取父 shell 的局部变量
```


### 全局变量

+ 父 shell 可以使用 `export` 导出变量为全局，这样子 shell 就能读取
```sh
user_name=Alice
export user_name  # 导出为全局变量
bash
echo $user_name   # Alice
```

+ 但是子 shell 修改或删除父 shell 的全局变量都会静默失败
```sh
user_name=Alice
export user_name
bash
echo $user_name   # Alice
user_name=Anna
echo $user_name   # Anna
exit
echo $user_name   # Alice
```


### 默认变量

+ 每个脚本执行时都可以携带参数，这些参数可以以变量的形式在脚本内被访问
```sh
#!/bin/bash

echo "Script name: $0"           # 脚本名
echo "Parameter count: $#"       # 传入的参数个数
echo "First parameter: $1"       # 参数依次使用 $1, $2, ... 表示
echo "All parameter: $@"         # 以空格分割所有传入参数
echo "Shell process ID: $$"      # 当前 shell 所在的进程 ID
echo "Exit code: $?"             # 程序退出码，成功时为 0

# 执行: bash shell.sh Alice Anna Zed
```

+ 还可以使用 `shift` 对参数进行偏移
```sh
#!/bin/bash

echo "Parameter count: $#"    # 6
shift                         # 参数位置偏移1个(理解为删除第一个参数)
echo "Parameter count: $#"    # 5
shift 3                       # 参数位置偏移3个，会累加之前的偏移
echo "Parameter count: $#"    # 2
echo "All parameter: $@"      # five six

# 执行: bash shell.sh one two three four five six
```


### 数组变量

+ 数组变量的声明使用 `()` 包含一串值，值之间使用空格分隔
```sh
$ nums=(one two three four five)
```

+ 访问数组元素要使用 `[]`
```sh
$ nums=(one two three four five)
$ echo $nums       # one(输出第一个元素，不会输出整个数组)
$ echo ${nums[1]}  # two
$ echo ${nums[*]}  # one two three four five
```

+ 赋值时也是使用 `[]`
```sh
$ nums=(one two three four five)
$ nums[1]=ten
$ echo ${nums[1]}  # ten
```

+ 可以使用 `unset` 删除数组元素，但是只是将该索引的值清空
```sh
$ nums=(one two three four five)
$ echo ${nums[1]}  # two
$ unset nums[1]
$ echo ${nums[1]}  # 空值(并不是 three)
$ echo ${nums[2]}  # three
```

+ 由于数组变量会让事情很麻烦，所以很少用







## 数值运算

+ bash shell 仅支持整数的数值运算
+ 使用 `$(( 表达式 ))` 来进行数值运算，注意双括号内侧的空格不能缺省
+ 赋值至变量时，不要在 `=` 两侧添加空格，为了保证一致性，尽量在 `+-*/%` 两端都不添加空格(虽然没有影响)
```sh
#!/bin/bash

echo -e "Input 2 numbers, I will add them! \n"
read -p "first number: " anum
read -p "second number: " bnum
# 方式1: 直接计算
echo -e "\n${anum} + ${bnum} = $(( ${anum}+${bnum} ))"
# 方式2: 保存至变量，再输出
sum=$(( ${anum}+${bnum} ))
echo -e "\n${anum} + ${bnum} = ${sum}"
```


### 浮点数的运算

+ 通过 bc 计算圆周率
```sh

```







## 常用命令

+ 任何 shell 命令都能用在 shell 脚本中
+ 列举一些在 shell 脚本中最常用到的命令
+ 可以使用 ``` `` ``` 或 `$()` 作命令替换(重组命令)，但建议使用后者(比较直观)
```sh
#!/bin/bash
yesterday=`date -d "yesterday" "+%Y-%m-%d"`
today=$(date "+%Y-%m-%d")
echo "Yesterday is ${yesterday}, Today is ${today}"
```



### echo

+ 命令用法参考 [echo]()
+ 打印字符串
```sh
# 直接打印
echo "Hello"

# 带变量
echo "Hello ${username}"

# 识别转义符
echo -e "name\tage\tlike"
```


### read

+ 命令用法参考 [read]()
+ 从命令行 input 读取用户输入
```sh
# bash, 感叹号(!)不能使用双引号包括("")，详情：https://www.cnblogs.com/chuanzhang053/p/9253410.html
read -p "Enter your name: " username && echo Hello ${username}!

# shell
read -p "Enter your name: " username
echo "Hello ${username}!"
```



### test

+ 命令用法参考 [test]()
+ 将测试用作简单的条件判断(当不需要使用 if 时)
```sh
#!/bin/bash

read -p "Please input a path: " pathname
# 路径不存在时
test ! -e ${pathname} && echo "Path: ${pathname} is not exist in your system!" && exit 0
# 判断是目录还是文件
test -d ${pathname} && \
  echo "Path: ${pathname} is a directory." || \
  echo "Path: ${pathname} is a file."
```


### 判断符号 []

+ 用法类似 [test](#test) 命令，但使用 `[]` 将判断命令包含，注意的是:
  + `[ exp ]` 内侧两端必须保留空格
  + `[ 12 == 14 ]` 内的每个组件(12, ==, 14) 之间也必须保留空格
  + `[ "$HOME" == "$MAIl" ]` 内的变量使用双引号包含(否则变量有可能解释一个以上的操作数)
  + 常数最好也用单引号或双引号包含
```sh
[ 12 -eq 14 ] && echo "true" || echo "false"
```