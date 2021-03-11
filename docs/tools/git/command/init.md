---
sidebarDepth: 2
---

## 初始化

+ `git init`：初始化 git 仓库(保证已安装 git)，此时会创建名为 `.git` 的隐藏文件夹
```sh
$ git init            # 在当前目录初始化 git
$ git init app        # 在指定目录初始化 git，目录不存在时会自动创建
$ git init --bare app # 初始化一个空的 git 仓库
```
+ 一般来说，都是从远程仓库[克隆](./remote)代码，此时的仓库不用再初始化
```sh
$ git clone <remote-url>
```


::: tip 备注：
+ `.git` 文件夹包含了仓库的配置及存储信息
+ 应该总是通过 git 命令去操作仓库，不要手动修改 `.git` 文件夹
:::



## 配置

+ `git config`：用于配置 git，常用参数：
  + `-l/--list`：查看配置
  + `--global`：全局配置


::: tip 备注：
+ 全局配置文件 `.gitconfig` 在电脑用户的根目录下
+ 每个 git 仓库中还存在一个局部配置文件，路径为 `.git/config`
:::


### 查看配置

```sh
$ git config -l   # 查看所有配置
$ git config --global user.name   # 查看全局配置的 user.name
```


### 用户配置

+ 使用 `git commit` 命令前必须设置一个用户名和邮箱(提交时用户名和邮箱会自动添加到提交记录中)
```sh
$ git config --global user.name "Alice"               # 全局配置用户名
$ git config --global user.email "Alice@example.com"  # 全局配置用户邮箱
```


### 别名配置

+ 另一个比较常用的配置是配置命令的别名
+ 设置常用命令的别名
```sh
$ git config --global alias.st status

# 相当于 git status
$ git st
```

+ 设置长命令别名，如美化 log 输出，参考更多 [log](./log)
```sh
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

# 打印美化后的 log
$ git lg
```


### 编辑配置文件

+ 使用 `-e` 参数会打开默认编辑器(如 Vim)来编辑配置文件
```sh
$ git config -e           # 编辑项目配置
$ git config -e --global  # 编辑全局配置
```