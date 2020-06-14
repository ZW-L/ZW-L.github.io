## 查看状态

+ `git status`：查看当前文件状态
```sh
git status
git status -s   # 状态简览，每行开头会用一个大写字母标记文件的更改
```



## 查看历史

+ `git log`：查看提交历史，但不会显示 `git reset` 回退的所有版本
```sh
git log         # 查看所有提交历史
git log stat    # 显示每次提交修改的内容的简略信息
git log -p -2   # 显示每次提交的差异，并且只显示最后两次的提交
```

+ `git reflog`：记录所有提交记录和 `git reset` 的记录，并且它们的开头会有标记该记录是 commit 还是 reset
```sh
git reflog
# 打印：
aff6c95 (HEAD -> master) HEAD@{0}: reset: moving to HEAD^^
520e255 HEAD@{1}: commit: b
83137a9 HEAD@{2}: commit: a
aff6c95 (HEAD -> master) HEAD@{3}: reset: moving to aff6c95
4ac3cbc HEAD@{4}: reset: moving to HEAD^
aff6c95 (HEAD -> master) HEAD@{5}: commit: change
4ac3cbc HEAD@{6}: commit (initial): first commit
```



## 对比差异

+ `git diff`：对比文件差异，默认对比的是工作区文件
```sh
git diff
```

+ 对比暂存区文件和最近一次提交的差异，以下两种方式是一样的
```sh
git diff --staged
git diff --cached
```

+ 对比差异并显示简要信息
```sh
git diff --staged --stat
```

+ 对比某个提交记录的差异
```sh
git diff --staged 7264954 # 与指定提交记录对比
git diff --staged HEAD^   # 与前一个版本对比
git diff --staged HEAD~2  # 与前二个版本对比
git diff 0a2bce6 551146b  # 对比两个指定提交记录的差异
```

+ 对比分支的差异
```sh
git diff master dev
```

