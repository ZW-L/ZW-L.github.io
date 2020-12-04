---
sidebarDepth: 2
---


## 简介

+ **用户标识符**：每个登陆的用户至少有两个 ID，UID(User ID)和 GID(Group ID)
+ **用户登录的过程**：
  1. 查找 /etc/passwd 中是否有相关账号 -> 读出对应的 UID、GID(/etc/group)、用户 home、用户 shell 设置
  2. 核对密码表：在 /etc/shadow 中找到账号和 UID，核对记录的密码是否相符
  3. 登录成功，进入 shell 管理



## /etc/passwd

+ `/etc/passwd`：每一行代表一个账号，包括系统账号(bin, daemon, adm 等)和用户账号，不要随便删除
```sh
# head -n 4 /etc/passwd 
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin

# 按照顺序每行有 7 个值，使用 : 隔开
# 1.账号名称：用来登录系统的用户名
# 2.密码：为了安全，密码数据存放至 /etc/shadow 中，这里都显示 x
# 3.UID：用户标识符，通常 root 为 0，1～999 为系统账号，1000～60000 为可登录账号(目前已支持42多亿的数值)
# 4.GID：用户组标识符，与 /etc/group 有关
# 5.用户信息说明
# 6.用户 home 目录，默认为 /home/youName
# 7.shell 目录：登录后启用的 shell
```

::: tip 提示：
+ 将 UID 修改为 0 后，该用户会拥有 root 权限，但不建议滥用
+ 当想禁止登录后获取 shell 环境，可以配置 shell 为 `/sbin/nologin`，常用来制作纯 pop 邮件账号的数据
:::



## /etc/shadow

+ `/etc/shadow`：账号的密码相关记录
```sh
# head -n 4 /etc/shadow
root:$1$kPXBoqUi$aCJQX1fw55EnrvydRrm3X0:18200:0:99999:7:::
bin:*:17834:0:99999:7:::
daemon:*:17834:0:99999:7:::
adm:*:17834:0:99999:7:::

# 按顺序每行有 9 个值
# 1.账号名称
# 2.密码摘要：当修改为 ! 或 * 时，可让密码暂时失效
# 3.最近修改密码的日期：以天数为单位
# 4.密码不可被修改的天数：对比 3 计算
# 5.密码需要重新修改的天数：对比 3 计算，否则密码会被视为过期(需要重设密码才能登录)
# 6.密码需要修改前的警告天数：对比 5 计算
# 7.密码过期后的宽限天数：对比 5 计算
# 8.密码失效日期：以天数为单位，过期后将无法使用，常用于收费服务中
# 9.保留值
```

::: tip 提示：
+ 当想要限制某个用户登录时，只需要修改它的密码为 ! 或 *
+ 密码失效日期可用于收费服务中
+ 查看 shadow 使用的加密机制：
```sh
authconfig --test | grep hashing
# password hashing algorithm is md5
```
+ 一般用户忘记密码：通过 root 用户修改密码
```sh
# root 用户使用 passwd 命令修改指定用户的密码
passwd tester
```
+ 忘记 root 密码：
  + 重启进入单人维护模式，此时系统会给予 root 权限的 bash 接口，再使用 passwd 命令修改密码即可
  + 以 Live CD 启动后挂载根目录，将 /etc/shadow 中 root 的密码清空，重启后不用密码即可登录，再使用 passwd 修改即可
:::



## /etc/group

+ `/etc/group`：用户组配置
```sh
# head -n 4 /etc/group
root:x:0:
bin:x:1:
daemon:x:2:
sys:x:3:

# 按顺序每行有 4 个值
# 1.组名：基本上与 GID 对应
# 2.用户组密码：很少使用，通常给用户组管理员使用，密码数据存放至 /etc/shadow 中，这里都显示 x
# 3.GID：用户组标识符
# 4.用户组支持的账号列表：需要加入该用户组的用户名，使用 , 隔开，不能有空格
```

::: tip 提示：
+ 初始化用户组：用户登录后拥有的其对应用户组的权限，即用户自身的 `/etc/group` 的第四个值可以为空
+ 有效用户组：`groups` 命令返回的第一个值，保证创建文件时的用户组归属
:::



## /etc/gshadow

+ `/etc/gshadow`：与 `/etc/group` 基本一样
```sh
# head -n 4 /etc/gshadow
root:::
bin:::
daemon:::
sys:::

# 按顺序每行有 4 个值
# 1.组名
# 2.密码：为空或 ! 时，表示该用户组没有用户组管理员
# 3.用户组管理员的账号：相关信息在 gpasswd
# 4.用户组支持的账号列表：与 /etc/group 相同
```
