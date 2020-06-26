---
sidebarDepth: 2
---

## rpm

+ RPM(RedHat Package Manager)最新是由 RedHat 开发的 Linux 包管理器，现在是一种通用的 Linux 包管理方式
+ 安装简单方便：软件已经编译完成且打包完毕，安装只是个验证环境和解压的过程
+ 通过 RPM 安装的软件，会记录软件安装信息，方便以后的查询、升级和卸载
+ 缺点：对操作系统环境依赖很大，要求包的安装环境与封装时的环境一致或相当



### 安装

+ -i 代表 --install
```sh
rpm -i [options] <file1.rpm> <file2.rpm> ...
```
+ options

选项|说明
-|-
-v|显示附加信息
-h|安装时输出 “#” 标记
--test|仅测试，不安装
--nodeps|不检查包的依赖关系(可能会导致包不可用)
--force|忽略包以及软件冲突
--replacepkgs|强制重新安装已安装的包
--prefix|将包安装到指定的路径下
--percent|以百分比输出安装进度
--excludedocs|不安装包的说明文件
--includedocs|安装包说明文件

::: tip 备注
+ 若安装失败，会给出需要依赖的包以及版本，此时需要先安装相关的依赖包
:::



### 查询

+ 用于查询已安装的包
+ -q 为 --query
```sh
rpm -q [options] <file1.rpm> <file2.rpm> ...
```
+ option

选项|说明
-|-
-f|查询某文件属于哪个 rpm 包
-p|查询包安装到系统后的文件夹名
-l|显示包中文件列表(不需要添加 .rpm 后缀)
-i|显示包简介
-s|与 -i 类似，但还显示每个文件的状态
-g|查询系统有哪些包属性指定的类型
-d|显示包的说明文件列表
-R/--require|显示包所需的功能
--provides|显示包提供的功能



### 验证

+ -V 为 --verify；用于验证安装包，校验每个文件的大小、权限、MD5、类型、所有者以及组群
```sh
rpm -V [options] <file1.rpm> <file2.rpm> ...
```
+ option

选项|说明
-|-
-p|验证包文件
-f|校验指定文件在所属的包中的状态
-a|校验所有的包
-g|校验所有属于组的包


+ -K 为 --checksig；用于检查未安装的包的 MD5 和 GPG 签名
```sh
rpm -K <file1.rpm> <file2.rpm> ...
```   


### 更新

+ -U 为 --upgrade
```sh
rpm -U [options] <file1.rpm> <file2.rpm> ...
```
+ option
  + --oldpackage：允许版本降级



### 删除

+ -e 为 --erase
```sh
rpm -e [options] <file1.rpm> <file2.rpm> ...
```
+ option
  + --test：只测试，不删除
  + --nodeps：不检查依赖



 
## yum

+ RedHat 系列(RedHat, CentOS, Fedora)Linux 系统的包管理工具
+ 安装方便，自动解决添加或删除 rpm 包时遇到的依赖问题
+ 可以同时配置多个资源库
+ 保持与 RPM 数据库的一致性
+ 配置简单
  + `/etc/yum.conf`：主配置文件
  + `/etc/yum.repos.d`：资源库配置目录
  + `/etc/yum.repos.d/CentOS-Base.repo`：yum 源配置文件



### 安装配置

+ 检测是否已安装 yum
```sh
rpm -qa | grep yum
```
+ 安装 yum
```sh
rpm -ivh yum-*.noarch.rpm
```

+ 配置 yum 源
```sh
# 备份
cd /etc/yum.repos.d/
mv CentOS-Base.repo CentOS-Base.repo.back

# 下载阿里云的 Centos-6.repo 文件
wget -O CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo

# 重新加载 yum
yum clean all
yum makecache
```




### 管理

+ 安装
```sh
# 安装包
yum install <pack-name>
```

+ 卸载
```sh
# 卸载包
yum remove <pack-name>
```

+ 更新
```sh
# 检查可更新包
yum check-update

# 更新所有包
yum update

# 更新指定包
yum update <package-name>

# 大规模升级版本，会升级陈旧的包
yum upgrade
```

::: tip 
+ 单独使用 `yum update` 会升级系统内核，而 `yum upgrade` 不会
:::



### 查询

+ 查询包列表
```sh
# 列出所有可安装或更新的包
yum list

# 列出资源库中特定的可以安装或更新的包(支持 perl 正则)
yum list <package-name>
yum list nginx*
```

+ 查询包信息
```sh
# 列出资源库中所有可安装或更新的包信息
yum info

# 列出资源库中特定的可以安装或更新的包信息(支持 perl 正则)
yum info <package-name>
yum info nginx*

# 列出所有可更新的包
yum info updates

# 列出所有已安装的包
yum info installed

# 列出一安装但不在资源库中的 rpm 包(即在其他网站下载的包)
yum info extras
```

+ 搜索
```sh
# 搜索包含特定字符的包
yum search nginx

# 搜索包含特定文件的包
yum provides realplay
```



### 操作暂存信息

+ `/var/cache/yum`：包暂存目录
```sh
# 清除暂存的 rpm 包文件
yum clean packages

# 清除暂存的 rpm 头文件
yun clean headers

# 清除暂存的旧的 rpm 头文件
yum clean oldheaders

# 清除暂存的旧的 rpm 头文件和包文件
yum clean   # yum clean all
```






## apt-get

+ Debian 系列(Debian, Ubuntu)Linux 系统的包管理工具
```sh
# 安装包
apt-get install

# 卸载包
apt-get remove

# 更新
apt-get update
```
+ 常见的安装包格式是 deb，可以使用 dpkg 命令安装包