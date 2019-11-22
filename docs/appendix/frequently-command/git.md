## 命令简介

+ 配置：`git config`
+ 初始化：`git init`
+ 查看状态：`git status`, `git diff`
+ 文件操作：`git add`, `git rm`, `git mv`
+ 提交修改：`git commit`
+ 撤销操作：`git reset`, `git revert`
+ 查看历史：`git log`, `git reflog`
+ 远程仓库：`git clone`, `git push`, `git remote`, `git fetch`, `git pull`
+ 仓库管理：`git stash`
+ 分支管理：`git branch`, `git checkout`, `git merge`, `git rebase`, `git cherry-pick`
+ 标签管理：`git tag`, `git show`

## 配置

+ `git config`：配置命令，允许参数：
  + `--list`/`-l`：查看所有设置

使用 `Git` 的第一步是设置以下用户名和邮箱：

```shell
$ git config --global user.name "Alice"
$ git config --global user.email "Alice@example.com"
```


## 初始化

+ `git init`：初始化 `Git` 仓库

```shell
$ git init
```


## 查看状态

+ `git status`：查看当前文件状态，可选参数：
  + `--short`/`-s`：状态简览

+ `git diff`：查看尚未暂存的文件更新了哪些部分，可选参数
  + `--staged`/`--cached`：查看已暂存的将要添加到下次提交里的内容

```shell
# git status
$ git status
$ git status -s

# git diff
$ git diff
$ git diff --staged
```


## 文件操作

+ `git add`：添加文件到暂存区
+ `git rm`：
+ `git mv`：

```shell
# git add
$ git add hello.txt
$ git add *.js
$ git add .
```


## 提交修改

+ `git commit`：提交修改，用法：
  + `git commit`：提交修改，`log` 中有记录
  + `git commit -m <commit-word>`：快捷提交
  + `git commit -a -m <commit-word>`：将跟踪的文件暂存，并快捷提交

```shell
$ git commit
$ git commit -m "fix some problem"
$ git commit -a -m "fix some problem"
```


## 撤销操作

+ `git reset`
+ `git revert`

```shell

```


## 查看历史

+ `git log`：查看提交历史，用法：
  + `git log `：查看所有提交历史
  + `git log stat`：显示每次提交的简略信息
  + `git log -p -2`：显示每次提交的差异，并且只显示最后两次的提交
+ `git reflog`：

```shell
$ git log
$ git log stat
$ git log -p -2
```


## 远程仓库

+ `git clone`：
+ `git remote`：
+ `git fetch`：
+ `git pull`：
+ `git push`：

```shell
$ git remote  // 列出所有指定的远程仓库简写
$ git remote -v  // 显示远程仓库的简写及其 URL
$ git remote add <short-name> <url>  // 添加远程仓库，并指定别名
$ git remote show <remote-name>  // 列出远程仓库的 URL 与跟踪分支的信息
$ git remote rename <old-name> <new-name>  // 更改远程仓库名字
$ git remote rm <remote-name>  // 删除指定的远程仓库

$ git fetch <short-name>   // 拉取远程仓库中你没有的信息；该命令会拉取至本地仓库，需手动合并

$ git push remote-name branch-name  // 推送至远程仓库的指定分支
$ git push  // 默认推送至 origin 仓库的 master 分支
```


## 仓库管理

+ `git stash`

```shell

```


## 分支管理

+ `git branch`：分支管理命令，用法：
  + `git branch`：查看所有分支
  + `git branch <branch-name>`：创建分支，但需要手动切换才会进入该分支
  + `git branch -d <branch-name>`：删除指定分支
+ `git checkout`：分支切换命令，用法：
  + `git checkout <branch-name>`：切换至指定分支
  + `git checkout -b <branch-name>`：创建并切换至分支
+ `git merge`：合并分支，用法：
+ `git rebase`：分支变基，用法：
+ `git cherry-pick`：挑选合并，用法：

```shell
$ git branch
$ git branch hotfix
$ git branch -d hotfix

$ git checkout hotfix
$ git checkout -b hotfix
```


## 标签管理

+ `git tag`
+ `git show`

```shell

```