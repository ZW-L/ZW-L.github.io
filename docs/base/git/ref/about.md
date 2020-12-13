## 特点

参考：
+ 官方文档 [Git Book](https://git-scm.com/book/zh/v2)
+ 个人总结 [Git](/base/git/)


### 对比 SVN


+ Git 是分布式的版本管理系统，而 CVS 和 SVN 都是集中式的
+ 运行速度极快
+ 使用不用联网，本地即可提交，可联网后再同步到远程仓库
+ 强大的分支管理功能，还可以打标签



::: tip 备注：
+ `Git` 是分布式的， `SVN` 不是
+ `Git` 把内容按元数据方式存储，而 `SVN` 是按文件进行存储
+ `Git` 的分支和 `SVN` 的分支不同
+ `Git` 没有一个全局的版本号，而 `SVN` 有
+ `Git` 内容完
:::整性要优于 `SVN`，`Git` 的内容存储使用的是 `SHA-1` 算法，确保代码内容的完整性


## 概念

+ **工作区(Working Directory)**：当前代码目录，能在本地文件夹看到的目录

+ **暂存区(Staged/Index)**：临时保存文件的区域，位于版本库 `.git` 目录下，`commit` 只会提交该区域的更改
  + 使用 `add` 命令对工作区文件跟踪后，它们会进入暂存区
  + 使用 `restore` 命令将文件移出暂存区
  + 进入暂存区的文件发生更改后，需要再次 `add` 进入暂存区

+ **提交(commit)**：将暂存区的所有更改一次性提交到分支上，并携带提交说明

+ **分支(branch)**：从某个分支的某个 `commit` 处复制出来的一份记录
  + 分支像树叉一样，从某分支 “长” 出来
  + 分支还可以合并回某分支，相当于又 “长” 回去
  + 分支可以被删除
  + 主干分支(master)：也是默认分支，一般约定为稳定版本分支

+ **HEAD**：头指针，指向当前分支的所处的版本
  + 创建/切换分支时，HEAD 会移动到另一个分支
  + `commit` 后，HEAD 会移动到该 `commit` 处
  + `reset` 后，HEAD 会回退到指定 `commit` 处

+ **标签(tag)**：对某个 `commit` 的标记，用于快速定位和管理版本

+ **远程仓库(remote)**：用于多人协作
  + 使用 `clone` 从远程仓库拷贝代码
  + 使用 `fetch`/`pull` 从远程仓库拉取代码变更
  + 使用 `push` 将本地代码推送到远程仓库



## 状态

使用 `git status` 会打印当前工作区的状态：
+ **Untracked files**：未跟踪的文件列表。即新建了文件，还未 `add` 到暂存区
+ **Changes not staged for commit**：已跟踪的文件发生更改。需要再次 `add` 到暂存区
+ **Changes to be committed**：等待提交。修改的文件已经添加到暂存区，可以使用 `commit` 提交
+ **Nothing to commit, working tree clean**：工作区无目录。`commit` 之后的状态



## 连接远程仓库

1. 创建 SSH Key，根据提示一直回车确定即可
```sh
ssh-keygen -t rsa -C "youremail@example.com"
```

2. 在用户根目录下会生成 `.ssh` 目录，其包含 id_rsa 和 id_rsa.pub 两个文件，拷贝 id_rsa.pub 的内容

3. 在远程仓库上找到管理 SSH Key 的地方，将公钥内容粘贴进去，并保存

4. 关联仓库，参数
  + `-u`：关联远程仓库，以后操作时可以省略
  + `-f`：强制推送至远程仓库，此操作会覆盖远程仓库的所有内容，并清空提交树

```sh
# 场景1：远程仓库为空仓库时
git remote add origin git@gitee.com:username/repo_name.git  # 添加远程仓库
git push -u origin master   # 关联推送到远程仓库 origin 的 master 分支


# 场景2：更换了电脑，重新生成并添加了 SSH Key 到远程仓库
git clone git@gitee.com:username/repo_name.git  # 将远程仓库拉取到本地，并且自动关联(添加了 SSH Key)
cd repo_name
echo hello > hello.txt
git add .
git commit -m "add hello.txt"
git push origin master          # 推送到远程仓库 origin 的 master 分支


# 场景3：远程仓库不是空的，但忘记 clone 就直接开发了，提交时才发现还未关联
git remote add origin git@gitee.com:username/repo_name.git  # 添加远程仓库
git pull origin master    # 提示 fatal: refusing to merge unrelated histories
git pull origin master --allow-unrelated-histories          # 添加参数再拉取，并会关联远程仓库
# 提示：Automatic merge failed; fix conflicts and then commit the result. 说明需要处理冲突
# 打开出现冲突的文件处理冲突后
git add .
git commit -m "merge and mixed"   # 添加 merge 的提交
git push origin master            # 推送到远程仓库


# 场景4：与场景3一样，但远程仓库是个人的，并不关心提交记录，可以强制覆盖
git remote add origin git@gitee.com:username/repo_name.git  # 添加远程仓库
git push -uf origin master    # 关联远程仓库，并覆盖远程仓库的内容和提交树
```

::: tip 说明：
+ 一般来说，开发前的第一步都是 `clone` 远程仓库，即场景2的做法
+ 场景3会出现一个问题：提交树上会出现一个外部分支的插入，而不是从原分支创建分支后合并
```sh
# 正常的提交树      场景3
*                 *
|\                |\
| *               | *
*/                *
```
+ 场景4：当不再需要远程仓库的代码，或者需要清空提交树使才使用
:::