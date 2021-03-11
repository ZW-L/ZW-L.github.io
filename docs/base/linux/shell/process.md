---
sidebarDepth: 2
---

## 条件

+ 使用判断符号 `[]` 框住条件判断式
+ 因为 `<` 和 `>` 用作重定向，所以判断相等关系时要使用：
```sh
# 判断字符串
-z str        # 字符串为空
-n str        # 字符串非空，-n 可省略
str1 == str2  # 字符串想等
str1 != str2  # 字符串不等

# 判断两个整数
n1 -eq n2     # n1 == n2
n1 -ne n2     # n1 != n2
n1 -gt n2     # n1 > n2
n1 -lt n2     # n1 < n2
n1 -ge n2     # n1 >= n2
n1 -le n2     # n1 <= n2
```
+ AND, OR, NOT 分别使用 `&&`(或 -a), `||`(或 -o), `!`
```sh
# 使用 -a
if [ ${score} -ge 90 -a ${score} -lt 100 ]; then
  echo "${score} in range [90, 100)"
fi

## 使用 &&，需要拆分为两个 []
if [ ${score} -ge 90 ] && [ ${score} -lt 100 ]; then
  echo "${score} in range [90, 100)"
fi
```



### if/else

+ `if` 需要使用 `fi` 作结束符(fi 是 if 的倒写)
```sh
#!/bin/bash

read -p "Input your score: " score
if [ ${score} -ge 90 ]; then
  echo "good boy"
fi
```

+ 使用 `elif` 和 `else` 的多重判断
```sh
#!/bin/bash

read -p "Input your score: " score
if [ ${score} -ge 90 ]; then
  echo "good boy"
elif [ ${score} -ge 60 ]; then
  echo "should better"
else
  echo "should study hard"
fi
```



### case...esac

+ 与其他语言的 `switch` 类似
+ 结束时需要使用 `esac` 关闭(`case` 的倒写)
```sh
#!/bin/bash

read -p "Input your score: " hello
case ${hello} in
  "")     # 空串
    echo "Your must input some..."
    ;;
  "Hi")   # 匹配 Hi
    echo "Hello, how are you ?"
    ;;
  *)      # 匹配其他所有情况`
    echo "Good bye !"
    ;;
esac
```





## 循环

+ 不定循环：`while do done`, `until do done`
+ 固定循环：`for do done`

### while do done

+ 属于当型循环，符合条件才执行
+ 求和(1~100)
```sh
#!/bin/bash
i=0
s=0
while [ "${i}" != "100" ]
do
  i=$(( $i+1 ))
  s=$(( $s+$i ))
done

echo "The result of '1+2+3+...+100' is: $s"
```
+ 一个脚本，当用户输入 yes 或 YES 时退出
```sh
#!/bin/bash
while [ "${yn}" != "yes" -a "${yn}" != "YES" ]
do
  read -p "Enter yes/YES to quit: " yn
done

echo "Now quit!"
```



### until do done

+ 属于直到型循环，至少会执行一次
+ 求和(1~100)
```sh
#!/bin/bash
i=0
s=0
until [ "${i}" == "100" ]
do
  i=$(( $i+1 ))
  s=$(( $s+$i ))
done

echo "The result of '1+2+3+...+100' is $s"
```



### for do done

+ 属于当型循环，符合条件才会执行
+ 求和(1~100)
```sh
#!/bin/bash

s=0
for i in $(seq 1 100)
do
  s=$(( $s+$i))
done

echo "The result of '1+2+3+...+100' is $s"
```

+ 另一种 for
```sh
#!/bin/bash

s=0
for (( i=1; i<=100; i++ ))
do
  s=$(( $s+$i ))
done

echo "The result of '1+2+3+...+100' is $s"
```



+ 输出所有用户的用户标识符
```sh
#!/bin/bash
# 提取所有用户名，保存至数组变量 users
users=$(cut -d ':' -f1 /etc/passwd)
for username in ${users}
do
  id ${username}
done
```

+ ping 测试 1~100 网段的主机
```sh
#!/bin/bash
network="192.168.1"
for site in $(seq 1 100)
do
  ping -c 1 -w 1 ${network}.${site} &> /dev/null && result=0 || result=1
  if [ "${result}" == 0 ]; then
    echo "Server ${network}.${site} is UP."
  else
    echo "Server ${network}.${site} is DOWN."
  fi
done
```

+ 根据用户输入的目录，输出该目录下所有文件的权限
```sh
#!/bin/bash
read -p "Please input a directory: " dir
# 检查目录是否存在
if [ "${dir}" == "" -o ! -d "${dir}" ]; then
  echo "The ${dir} is NOT exit in your system."
  exit 1
fi
# 开始测试文件
for filename in $(ls ${dir})
do
  perm=""
  test -r "${dir}/${filename}" && perm="${perm} readable"
  test -w "${dir}/${filename}" && perm="${perm} writable"
  test -x "${dir}/${filename}" && perm="${perm} executable"
  echo "The file ${dir}/${filename}'s permission is ${perm}."
done
```

::: tip 备注：
+ `$(seq 1 100)` 会返回 [1, 100] 区间的连续数，seq 为 sequence 的意思，也可以使用 `{1..100}`
```sh
echo $(seq 1 100) # 打印 1~100
echo {1..100}     # 打印 1~100
echo {a..z}       # 打印 a~z
```
:::
