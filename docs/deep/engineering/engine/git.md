## Git 和 SVN 的区别

+ `Git` 是分布式的， `SVN` 不是
+ `Git` 把内容按元数据方式存储，而 `SVN` 是按文件进行存储
+ `Git` 的分支和 `SVN` 的分支不同
+ `Git` 没有一个全局的版本号，而 `SVN` 有
+ `Git` 内容完整性要优于 `SVN`，`Git` 的内容存储使用的是 `SHA-1` 算法，确保代码内容的完整性

## 理解 Git 的核心原理、工作流程



## 常用的 Git 命令

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

## git merge 和 git rebase 的区别

**使用方式：** (假设都是将分支 `dev` 合并至 `master`)
+ `git merge`：当 `master` 分支位于 `dev` 分支的直接上游时，`merge` 命令只是将 `master` 分支指针直接右移；当 `dev` 分支是从 `master` 分支更早的地方开始时，`merge` 命令会采取三方(`dev` 分支的末端、`master` 分支末端、两个分支的公共祖先)合并，最终创建一个有两个祖先的提交历史
+ `git rebase`：回到两个分支的公共祖先，将 `dev` 分支的提交历史生成一系列文件补丁，附加到 `master` 分支末端，最后再手动在 `master` 分支上进行 `merge` 操作

**区别：**
+ `git rebase` 使提交树更清晰，而 `git merge` 会创建一些包含两个祖先的提交历史
+ `git rebase` 尽量不要用于公共仓库的提交，否则有可能使提交树更混乱(除非团队约定用于清理提交历史)

## git pull 和 git fetch 的区别

+ `git pull` 和 `git fetch` 都用于拉取远程仓库的变更
+ `git fetch` 只是执行拉取命令，并不会合并内容
+ `git pull` 相当于执行 `git fetch` 和 `git merge` 两个命令
+ 为了避免困惑，通常单独使用 `git fetch` 和 `git merge` 代替 `git pull`

## 线上分支回滚

**暴力覆盖：**
+ `git reset HEAD~1`：将本地分支回滚到上次提交的状态
+ 
+ `git push -f origin dev`：强制推送到远程 `dev` 分支


**先复制分支再回滚：**
+ `git branch backup`：备份分支
+ 
+ 


## 线上分支错误合并




## Git 解惑

记录平时遇到的错误，以及解决方法。

**修改本地文件名的大小写，与远程仓库的不一致，提交时报错：`Changes not staged for commit`**

+ 解决方法：将文件从 git 仓库拷贝出来，提交一次；将文件移入仓库，再提交一次。