---
sidebarDepth: 2
---


## 概念

### 简介

+ **用户标识符**：每个登陆的用户至少有两个 ID，UID(User ID)和 GID(Group ID)
+ **用户登录的过程**：
  1. 查找 /etc/passwd 中是否有相关账号 -> 读出对应的 UID、GID(/etc/group)、用户 home、用户 shell 设置
  2. 核对密码表：在 /etc/shadow 中找到账号和 UID，核对记录的密码是否相符
  3. 登录成功，进入 shell 管理


### /etc/passwd

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


### /etc/shadow

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


### /etc/group

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


### /etc/gshadow

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




## 命令

### 用户组

<Base-BadgeList :list="['groups', 'newgrp', 'groupadd', 'groupmod', 'groupdel', 'gpasswd']"/>

#### groups

+ 当前用户支持的用户组
```sh
groups

# 结果列表以空格分开，且第一个是有效用户组
```

#### newgrp

+ 切换有效用户组，会启用一个新的 shell 执行该命令，结束后应手动 exit 退出
```sh
newgrp users
touch hello.txt # 创建一个文件，所属会变为 users
exit # 手动退出当前 shell
```

#### groupadd

+ 新建用户组
```sh
groupadd [-gr] <用户组名称>

# -g：接 GID
# -r：建立系统用户组，与 /etc/login.defs 的 GID_MIN 相关
```

#### groupmod

+ 修改用户组(不要随意修改，防止系统资源错乱)
```sh
groupmod [-gn] <用户组名称>

# -g：接 GID
# -n：接 旧用户组名称
```

#### groupdel

+ 删除用户组(当用账号使用该用户组为初始化用户组时，便不能直接删除)
```sh
groupdel <用户组名称>
```

#### gpasswd

+ 用户组管理员专用，用于将用户加入/移出用户组(需先添加用户组管理员)
```sh
gpasswd <用户组名称>  # 直接设置用户组密码，关联 /etc/gshadow
gpasswd [-A user1,...] [-M user3,...] <用户组名称>
gpasswd [-rR] <用户组名称>
gpasswd [-ad] <用户名> <用户组名称>

# -A：将用户组的管理权限交给后面的用户
# -M：添加后面的账号到该用户组
# -r：删除用户组的密码
# -R：使用户组的密码失效
# -a：为用户组添加一个用户
# -d：从用户组删除一个用户

# 示例：
# 1.先设置用户组管理员
groupadd team  # 新建用户组
gpasswd team   # 设置用户组密码
gpasswd -a tester team  # 添加 tester 到用户组
gpasswd -A tester team  # 设置 tester 为用户组管理员
# 2.再登录该用户组管理员，便可用该用户管理用户组
gpasswd -a student team # tester 将 student 添加到用户组
```


### 账号

<Base-BadgeList :list="['useradd', 'usermod', 'userdel', 'passwd', 'change', 'id', 'finger', 'chfn', 'chsh']"/>

#### useradd

+ 添加新用户
```sh
useradd [-ugGmMcdsef] <用户名>

# -u：接 UID
# -g：接 初始化用户组，对应 /etc/pasaswd
# -G：接 账号加入的用户组，对应 /etc/group
# -m：建立 home 目录(一般账号默认值)
# -M：不建立 home 目录(系统账号默认值)
# -c：接 说明栏，对应 /etc/passwd
# -d：接 home 目录的据对路径
# -s：接 shell 的路径(默认 /bin/bash)
# -r：建立系统账号
# -e：接 账号失效日期，格式为 YYYY-MM-DD
# -f：接 密码是否会失效，0 为立即失效，-1 为永不失效

useradd -D  # 查看 useradd 的默认值
cat /etc/login/defs  # 查看 UID/GID 的密码参数参考值
```

#### usermod

+ 修改用户信息
```sh
usermod [-cdeg-GlsuLU] <用户名>

# -c：接 账号说明
# -d：接 home 目录
# -e：接 账号失效日期，格式 YYYY-MM-DD
# -f：接 密码失效日期的天数
# -g：接 初始化用户组
# -G：接 次要用户组
# -a：与 —G 合用，意为添加(append)
# -l：接 账号名
# -s：接 shell 路径
# -u：接 UID
# -L：锁住密码
# -U：解锁密码
```

#### userdel

+ 删除用户
```sh
userdel [-r] <用户名>

# -r：同时删除 home 目录，会删除该用户的所有数据！
```

#### passwd

+ 修改用户密码
```sh
passwd [--stdin] [-lsSnxwi] <用户名>

# --stdin：使用管道数据，常用与 shell 脚本
# -l：Lock，在 /etc/shadow 中密码前添加 !，使密码失效
# -u：Unlock
# -n：接 不可修改密码的天数
# x：接 多久要修改密码的天数
# -w：接 密码过期前的警告天数
# -i：接 密码失效日期(天数为单位)
# -S：列出用户密码的相关参数

passwd  # 不加用户名为设置 root 的密码，要特别注意！
echo '123abc' | passwd --stdin tester  # 通过管道设置密码，但不安全(命令会记录在 /root/.bash_history)
```

#### change

+ 修改用户密码
```sh
chage [-ldEImMW] <用户名>

# -l：列出用户密码的详细参数(包括文字描述)
# -d：接 最近修改密码的日期，格式 YYYY-MM-DD
# -E：接 账号失效日期，格式 YYYY-MM-DD
# -I：接 密码过期后的宽限天数
# -m：接 密码不能修改的天数
# -M：接 密码需要多少天后进行修改
# -W：接 密码过期前警告天数

# tip：给予学生等同于用户名的密码登录，并要求登录后必须设置密码
useradd student
echo 'student' | passwd --stdin student
chage -d 0 student  # 用户登录时会要求重设密码
```

#### id

+ 查询用户的 UID/GID 信息
```sh
id [用户名]

id  # 查询当前用户
id tester  # 查询指定用户
```

#### finger

+ 查看用户信息，大部分位于 /etc/passwd 中，因为比较危险，很多新版本默认不再安装
```sh
finger [-sm] <用户名>
```

#### chanfn

+ change finger
```sh
chfn [-foph] [用户名]
```

#### chsh

+ change shell
```sh
chsh [-ls]

# -l：列出系统可用的 shell，实际为 /etc/shells 的内容
# -s：修改自身的 shell
```


### 切换用户

<Base-BadgeList :list="['su', 'sudo']"/>

#### su

+ 切换用户身份，每次切换后都可使用 exit 回到上层用户
```sh
su [-lmc] [用户名]

# 空：直接切换至 root(非登录 shell，很多原本的变量不会修改)
# -：单个横线，切换至 root，并使用 login-shell 的变量文件读取方式来登录系统
# -l：接 用户名
# -m：使用目前的环境配置(不读取新使用者的配置文件)，和 -p 是一样的
# -c：接 命令内容，仅执行一次命令
```

#### sudo

+ 以 root 身份执行命令，使用该命令的用户要先获得 root 的授权(`/etc/sudoers` 规定)，并输入自身的密码
```sh
sudo [-bu] <command>

# -b：将后续命令放到后台中让系统自动执行，而不与目前的 shell 产生影响
# -u：接切换的使用者，默认为 root
```

::: tip 配置 sudoers：
+ 使用 `visudo` 命令编辑 `/etc/sudoers` 文件，因为该文件设置过语法，直接使用 vim 会导致语法错误，使用 `visudo` 修改后系统会检测其语法
+ `sudo` 是有时间限制的，一般 5 分钟内再次使用不用输入密码
+ 单一用户使用 root 所有命令：
```sh
visudo
# root 的权限是这样的，ALL 表示任何身份、主机或命令
# 用户  登录者的来源主机=(可切换的身份)  可执行的命令
  root            ALL=ALl             All
# 以同样方式设置其他信任用户
tester ALL=ALL ALL
```
+ 通过 wheel 用户组配置多个用户:
```sh
visudo
# 添加一行(centos7 已默认添加)，% 开头表示 wheel 为用户组，添加至该用户组的用户都能使用 sudo
%wheel ALL=(ALL) ALL

# 进阶：免密使用
%wheel ALL=(ALL) NOPASSWD:ALL
```
+ 有限制的命令操作：
```sh
visudo
# 设置一行，给予用户修改其他用户密码的权限，但不能修改 root 密码，! 开头表示禁止使用
tester ALL=(root) !/usr/bin/passwd, /usr/bin/passwd [A-Za-z]*, !/usr/bin/passwd root
```
+ 使用别名：
```sh
visudo
# 设置别名，对于管理批量账号很有用，只需要管理这些别名数据，还有个 Host_Alias(来源主机别名)
User_Alias ADMPW = pro1, pro2, user1, user2
Cmnd_Alias ADMPWCOM = !/usr/bin/passwd, /usr/bin/passwd [A-Za-z]*, !/usr/bin/passwd root
ADMPW ALL=(root) AMDPWCOM
```
+ 搭配 su 使用：
```sh
visudo
# 该组用户只需要使用 `sudo su -` 并输入自身的密码，便可以切换至 root 身份
User_Alias ADMPW = pro1, pro2, user1, user2
ADMPW ALL=(root) /bin/su -
```
:::




### 用户信息

<Base-BadgeList :list="['w', 'who', 'last', 'lastlog', 'write', 'wall', 'mail']"/>

#### w

+ 显示登录到系统的用户信息
```sh
w [-hisV] [用户名]

# -h：不显示输出信息的标题
# -i：用长格式输出
# -s：用短格式输出
# -V：显示版本信息
```

#### who

+ 显示目前登录到系统的用户
```sh
who [-ablmqrsuw] [文件名]

# -a：列出所有信息
# -b：列出系统最近启动的日期
# -l：列出所有可登录的终端信息
# -m：仅列出当前终端信息(相当于 `who am i`)
# -q：列出再本地系统的用户和用户数的清单
# -r：显示当期系统的运行级别
# -s：仅显示名称、终端和时间信息(是该命令默认的输出)
# -u：列出用户名、登录终端、登录时间、终端活动和进程标识
# -w/-T：显示 tty 终端的状态(`+` 表示对任何人可写，`-` 表示仅对 root 用户可写，`?` 表示遇到终端故障)
```

#### last

+ 显示目前与过去登入系统的用户相关信息
```sh
last -10    # 显示最近 10 条记录
```

#### lastlog

+ 每个用户的最近登录事件，默认读取 `/var/log/lastlog` 文件
```sh
lastlog
```

#### write

+ 将信息传给其他在线用户
```sh
write tester pts/2  # 需要输入其他用户及其终端界面
# 之后可输入内容，按 enter 发送信息，ctrl-d 停止发送
```

#### wall

+ 发出广播
```sh
wall 'hello everybody!'
```

#### mesg

+ 允许/禁止接受信息，但不能禁止 root 发出的信息
```sh
mesg n  # 不接收信息
mesg y  # 接收信息
```

#### mail

+ 发送/读取邮件，不需要用户在线，一般来说邮件保存在 `/var/spool/mail/username` 中
```sh

```



## ACL


## PAM