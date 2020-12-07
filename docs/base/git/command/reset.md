## 撤销文件的修改

+ `git restore`：当文件修改了但未 commit 时，可以用来撤销文件的修改
```sh
# 场景1：修改了但未添加到暂存区
$ vim a.txt           # 在这里修改了文件
$ git status          # 显示 a.txt 已经修改但未添加到暂存区
$ git restore a.txt   # 此时 a.txt 会变为修改前的样子 

# 场景2：修改了且添加到暂存区
$ vim a.txt                   # 在这里修改了文件
$ git add a.txt               # 添加到暂存区
$ git status                  # 显示 a.txt 已经修改并添加到暂存区
$ git restore --staged a.txt  # 将 a.txt 移出暂存区
$ git restore a.txt           # 此时 a.txt 会变为修改前的样子

# 场景3：恢复已删除的文件
$ echo hello world > a.txt  # 新建文件
$ git add .                 # 添加到暂存区
$ rm a.txt                  # 使用其他方式删除了文件
$ git restore a.txt         # 恢复被删除的文件
```



## 回退指定版本

+ `git reset`：通过移动 HEAD 指针回退版本，有几种不同的回退方式：
  + `mixed`：(默认)混合重置。将暂存区的文件全部移到工作区，并保留工作区的更改
  + `--soft`：软重置。保留暂存区和工作区的更改，只移动 HEAD 指针（不会删除途经的提交）
  + `--hard`：硬重置。同时删除暂存区和工作区的更改（这时未提交的修改都会被删除）

```sh
# 可以使用 HEAD 或 commit 的 hash 标记来回退
$ git reset --hard HEAD^    # 回退到上一个版本
$ git reset --hard HEAD^^   # 回退到上上个版本
$ git reset --hard HEAD~10  # 回退十个版本
$ git reset --hard 1094a    # 回退到指定版本

# 场景1：回退了一个版本，但是又反悔了，此时在 log 中找不到记录
$ git reset --hard HEAD^    # 回退到上一个版本
$ git log                   # 提交历史中已经没有最新版本的提交
$ git reflog                # 能看到所有的提交历史，以及一些 reset 标记
$ git reset --hard aff6c95  # 再重置到最新版本的提交
```

::: tip 备注：
+ **软重置和硬重置的唯一区别**：前者并不会删除提交记录，也不会修改暂存区、工作区的文件，仅仅是移动 HEAD 指针
+ 软重置常用于：头一个(几个)提交记录的文件部分(或部分内容)可用，可在其之上作修复后再次提交
+ 硬重置常用于：不再需要头一个(几个)提交记录以及文件的修改
:::



## 删除指定版本

+ `git revert`：删除指定版本的提交，并生成一个新的 `revert` 提交记录
```sh
# 场景1：按顺序提交了四个版本，但是发现中间两个版本有 BUG
# 四个提交记录分别为：ef4c117 df7453b 7319001 e47e634
git revert df7453b    # 删除第二个提交
git revert 7319001    # 删除第三个提交，此时保留了第一个和第四个提交

# 以下两种方式是一样的
git revert df7453b 7319001    # 删除多个提交，然后手动添加到暂存区并提交
git revert ef4c117..7319001   # 前开后闭区间，然后手动添加到暂存区并提交
git revert --continue         # 完成这次批量操作

# 也可以批量操作后只提交一次
git revert --no-commit df7453b 7319001
git revert --continue

# 若发生冲突时，需要手动处理冲突，再提交
```


::: tip 备注：
+ 区分 `reset` 和 `revert`：前者是回退版本，会影响沿途的所有提交，且不会在 `log` 中记录
:::