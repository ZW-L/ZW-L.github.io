## 查看状态

+ `git status`：查看当前工作区状态，包括一些文件的变更(增删改等)
```sh
git status
git status -s   # 状态简览，每行开头会用一个大写字母标记文件的更改
```

::: tip 状态提示：
+ **Untracked files**：未跟踪的文件列表。即新建了文件，还未 `add` 到暂存区
+ **Changes not staged for commit**：已跟踪的文件发生更改。需要再次 `add` 到暂存区
+ **Changes to be committed**：等待提交。修改的文件已经添加到暂存区，可以使用 `commit` 提交
+ **Nothing to commit, working tree clean**：工作区无目录。`commit` 之后的状态
:::



## 对比差异

+ `git diff`：对比文件差异，默认对比的是工作区和暂存区的所有文件
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
