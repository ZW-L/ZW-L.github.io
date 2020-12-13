## 发布测试环境

```
-> 确认合并
-> 创建 release 分支并合并 feature
-> 删除 feature 分支
-> 发布测试环境
```

::: tip 备注：
1. 确认要发布的 feature 分支上的功能是否开发完毕并提交
2. 创建 release 分支，将所有要个合并发布的分支逐到 release 分支
3. 命名规则(参考): release-分支创建日期-新特性-待发布版本号，版本可按需添加
4. 删除本次发布的所有 feature 分支
5. 发布到测试环境，通知测试
:::


## 发布正式环境

```
-> 确认发布
-> 合并到 master 分支
-> 删除 release 分支
```

::: tip 备注：
1. 根据修复后的 release 分支再次将 master 合并，打包发布生产环境
2. 确认发布成功，并线上验收通过后，将 release 分支合并到 master 分支
3. 在 master 分支上创建标签(命名：tag-日期-新特性和版本号)，版本可按需添加，作为发版里程碑标记
4. 删除对应 release 分支
:::


## 线上 Bug 修复

```
-> 从指定 tag 创建 hotfix
-> 修复 BUG，提交测试环境
-> 合并到 master 分支
-> 删除 hotfix 分支
```

::: tip 备注：
1. 从 master 分支某个 tag 上创建一个 hotfix 分支，一般是最新的 tag 应该和当前生产环境对应
2. 开发人员完成 Bug 修复，提交 hotfix 分支到测试环境验收通过
3. 再次发布正式环境流程
4. 将 hotfix 分支合并到 master 分支
5. 在 master 分支上创建标签(命名：tag-日期-新特性-版本号)，版本可按需添加，作为发版里程碑标记
6. 删除 hotfix 分支
:::


## 线上分支回滚

**暴力覆盖：**
+ `git reset HEAD~1`：将本地分支回滚到上次提交的状态
+ `git push -f origin dev`：强制推送到远程 `dev` 分支


**先复制分支再回滚：**
+ `git branch backup`：备份分支


## 线上分支错误合并




## QA

+ Q：修改了本地文件名的大小写，与远程仓库的不一致，提交时报错：`Changes not staged for commit`
```
将文件从 git 仓库拷贝出来，提交一次；将文件移入仓库，再提交一次
```
