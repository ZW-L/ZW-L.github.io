## 管理

+ `git remote`：管理远程仓库
```sh
$ git remote      # 列出所有指定的远程仓库简写
$ git remote -v   # 显示远程仓库的简写及其 URL
$ git remote add origin git@github.com:username/repo-name.git   # 添加远程仓库，并指定别名(origin)

$ git remote rm origin              # 删除指定的远程仓库
$ git remote show origin            # 列出远程仓库的 URL 与跟踪分支的信息
$ git remote rename origin github   # 更改远程仓库名字

# 当有多个远程仓库时，最好指定相应的别名区分
$ git remote add github git@github.com:username/repo-name.git
$ git remote add gitee git@gitee.com:username/repo-name.git
```



## 克隆

+ `git clone`：拷贝远程仓库到本地
```sh
$ git clone git@github.com:username/repo-name.git         # 拉取至本地，项目名称为 repo-name
$ git clone git@github.com:username/repo-name.git project # 拉取至本地，项目重命名为 project
```



## 拉取

+ `git fetch`：拉取远程仓库的变更
```sh
$ git fetch origin master
```

+ `git pull`：拉取远程仓库的变更并合并(相当于执行了 `git fetch` 和 `git merge`)
```sh
$ git pull origin master
# 相当于
$ git fetch origin master && git merge
```



## 推送

+ `git push`：推送本地提交到远程仓库
```sh
$ git push                  # 默认推送到远程仓库 origin 的 master 分支
$ git push -f origin master # 强制推送到远程仓库，将会清空提交记录，慎用

$ git push gitee dev        # 推送到远程仓库 gitee 的 dev 分支
$ git push gitee            # 默认推送到 master 分支
```
