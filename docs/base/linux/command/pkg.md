---
sidebarDepth: 2
---

## rpm

+ 安装
```sh
rpm [-ivh] [options] <file1.rpm> <file2.rpm> ...

# -i: 安装(install)
# -v: 显示更详细的安装信息
# -h: 显示安装进度
# --test: 仅测试，不安装
# --prefix: 接 路径，指定软件安装的目录
# --force: 忽略包以及软件冲突
# --nodeps: 不检查包的依赖关系(可能会导致包不可用)
# --percent: 以百分比输出安装进度
# --replacepkgs: 强制重新安装已安装的包
# --includedocs: 安装包说明文件
# --excludedocs: 不安装包的说明文件
```


+ 查询(query)
```sh
rpm -q[ailcdRf] <file1.rpm> <file2.rpm> ...

# -f: 查询某文件属于哪个 rpm 包
# -p: 查询包安装到系统后的文件夹名
# -l: 显示包中文件列表(不需要添加 .rpm 后缀)
# -i: 显示包简介
# -s: 与 -i 类似，但还显示每个文件的状态
# -g: 查询系统有哪些包属性指定的类型
# -d: 显示包的说明文件列表
# --require: 显示包所需的功能
# --provides: 显示包提供的功能
```


+ 验证(verify)，用于验证安装包，校验每个文件的大小、权限、MD5、类型、所有者以及组群
```sh
rpm -V[apfg] <file1.rpm> <file2.rpm> ...

# -a: 校验所有的包
# -p: 验证包文件
# -f: 校验指定文件在所属的包中的状态
# -g: 校验所有属于组的包
```


+ 更新(upgrade)
```sh
rpm -U [options] <file1.rpm> <file2.rpm> ...
```

+ 删除(erase)
```sh
rpm -e [options] <file1.rpm> <file2.rpm> ...

# --test: 只测试，不删除
# --nodeps:不检查依赖
```



## yum

+ 安装配置
```sh
# 检测是否已安装 yum
rpm -qa | grep yum

# 安装 yum
rpm -ivh yum-*.noarch.rpm

# 配置 yum 源
# 1.备份
cd /etc/yum.repos.d/
mv CentOS-Base.repo CentOS-Base.repo.back
# 2.下载阿里云的 Centos-6.repo 文件
wget -O CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo
# 3.重新加载 yum
yum clean all
yum makecache
```

+ 管理
```sh
# 安装
yum install <pack-name>

# 卸载
yum remove <pack-name>

# 更新
yum check-update    # 检查可更新包
yum update          # 更新所有包(谨慎使用，还会更新内核)
yum update <pack-name>   # 更新指定包

# 升级
yum upgrade         # 大规模升级版本，会升级陈旧的包(不会升级内核)
```

+ 查询
```sh
# 列出所有可安装或更新的包
yum list
# 列出资源库中特定的可以安装或更新的包(支持 perl 正则)
yum list <package-name>
yum list nginx*

# 列出资源库中所有可安装或更新的包信息
yum info
# 列出资源库中特定的可以安装或更新的包信息(支持 perl 正则)
yum info <package-name>
yum info nginx*
yum info updates    # 列出所有可更新的包
yum info installed  # 列出所有已安装的包
yum info extras     # 列出一安装但不在资源库中的 rpm 包(即在其他网站下载的包)

# 搜索包含特定字符的包
yum search nginx

# 搜索包含特定文件的包
yum provides realplay
```

+ 清除暂存信息，包暂存目录为 `/var/cache/yum`
```sh
yum clean             # 清除暂存的旧的 rpm 头文件和包文件
yum clean packages    # 清除暂存的 rpm 包文件
yun clean headers     # 清除暂存的 rpm 头文件
yum clean oldheaders  # 清除暂存的旧的 rpm 头文件
```



## apt-get

```sh
# 安装包
apt-get install

# 卸载包
apt-get remove

# 更新
apt-get update
```