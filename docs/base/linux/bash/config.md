## 简介

+ 大多数 Linux 使用的 shell 为 bash，可以下载并安装其他 shell
+ shell 配置文件位于用户根目录，一般保存方式为 `~/.zshrc`



## 安装

+ zsh
+ on-my-zsh




## 定制


+ 添加程序路径到用户环境变量：
```sh
# 打开
$ vim ~/.zshrc

# 添加 mongodb 的 bin 路径到 .zshrc
export PATH="$PATH:Documents/mongodb/bin"

# 保存后，刷新配置
$ source ~/.zshrc

# 此后可在全局使用相关命令
$ sudo mongod -f /etc/mongodb.conf
$ sudo mongo
```


