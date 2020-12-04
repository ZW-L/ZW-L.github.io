---
sidebarDepth: 2
---

## 简介

+ 官方文档 [Git Book](https://git-scm.com/book/zh/v2)
+ 个人总结 [Git](/base/git/)

### 对比 SVN

+ `Git` 是分布式的， `SVN` 不是
+ `Git` 把内容按元数据方式存储，而 `SVN` 是按文件进行存储
+ `Git` 的分支和 `SVN` 的分支不同
+ `Git` 没有一个全局的版本号，而 `SVN` 有
+ `Git` 内容完整性要优于 `SVN`，`Git` 的内容存储使用的是 `SHA-1` 算法，确保代码内容的完整性

### 核心原理/工作流程





## 常用命令

### 概览

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


### git merge & git rebase

**使用方式：** (假设都是将分支 `dev` 合并至 `master`)
+ `git merge`：当 `master` 分支位于 `dev` 分支的直接上游时，`merge` 命令只是将 `master` 分支指针直接右移；当 `dev` 分支是从 `master` 分支更早的地方开始时，`merge` 命令会采取三方(`dev` 分支的末端、`master` 分支末端、两个分支的公共祖先)合并，最终创建一个有两个祖先的提交历史
+ `git rebase`：回到两个分支的公共祖先，将 `dev` 分支的提交历史生成一系列文件补丁，附加到 `master` 分支末端，最后再手动在 `master` 分支上进行 `merge` 操作

**区别：**
+ `git rebase` 使提交树更清晰，而 `git merge` 会创建一些包含两个祖先的提交历史
+ `git rebase` 尽量不要用于公共仓库的提交，否则有可能使提交树更混乱(除非团队约定用于清理提交历史)


### git pull & git fetch

+ `git pull` 和 `git fetch` 都用于拉取远程仓库的变更
+ `git fetch` 只是执行拉取命令，并不会合并内容
+ `git pull` 相当于执行 `git fetch` 和 `git merge` 两个命令
+ 为了避免困惑，通常单独使用 `git fetch` 和 `git merge` 代替 `git pull`









## 规范

参考：
+ [Git分支管理规范](https://www.cnblogs.com/imyalost/p/9301732.html)
+ [你不知道的前端工程化（手把手入门，超详细教程）](https://mp.weixin.qq.com/s/z_APrrXy4qzT7w34PsW-gg)


### 分支规范

+ 常见分支类型(参考)：

|分支名|名称|数量|说明|
|-|-|-|-|
|master|主分支|1|稳定版本。一般不允许 Developer 直接推送，而是由 Master 推送|
|dev|开发分支|1|最新版本。非并行项目的开发方式，并行开发使用 feature，不推荐两者混合|
|feature|特性分支|any|每个需求或新特性均可创建一个该分支，但该分支生命周期不要跨一次迭代|
|release|发布分支|any|发布新版本。合并 feature 并推送测试，通过后合并到 master|
|hotfix|热修复分支|any|修复线上 Bug。当线上版本出现 BUG 时，从对应 tag 创建该分支|

+ 多分支的命名(参考)：
```sh
<分支名>[-时间][-短描述][-版本]

hotfix-20201201-scrollbar
```

+ 



::: tip Gitlab 角色与项目角色：
+ `Owner`: （拥有者） Git 管理员
+ `Master`: （管理员） 开发主管
+ `Developer`: （开发者） 开发人员
+ `Reporter`: （报告者） 测试人员
+ `Guest`: （观察者） 其他人员
:::




### commit 规范

+ 格式：
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

::: tip commit 分为三部分，彼此之间使用空行分隔：
1. 标题行(`<subject>`): 必填, 描述主要修改类型和内容
2. 主题内容(`<body>`): 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
3. 页脚注释(`<footer>`): 可以写注释，BUG 号链接
:::

+ **commit type**：
  + `feat`: 新功能、新特性
  + `fix`: 修改 bug
  + `perf`: 更改代码，以提高性能
  + `refactor`: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
  + `docs`: 文档修改
  + `style`: 代码格式修改, 注意不是 css 修改（例如分号修改）
  + `test`: 测试用例新增、修改
  + `build`: 影响项目构建或依赖项修改
  + `revert`: 恢复上一次提交
  + `ci`: 持续集成相关文件修改
  + `release`: 发布新版本
  + `workflow`: 工作流相关文件修改
  + `chore`: 其他修改（不在上述类型中的修改）
+ **scope**: commit 影响的范围, 比如: route, component, utils, build...
+ 示例：
```
// 示例1
fix(global): 修复 checkbox 不能复选的问题

// 示例2 下面圆括号里的 common 为通用管理的名称
fix(common): 修复字体过小的 BUG，将通用管理下所有页面的默认字体大小修改为 14px

// 示例3
fix: value.length -> values.length
```


### 验证 git 规范

+ 主要通过 git-hooks 触发验证，依赖工具 [husky](https://github.com/typicode/husky)
```sh
$ yarn add husky
```

+ 在 package.json 添加字段：
```json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint",
    "commit-msg": "node script/verify-commit.js",
    "pre-push": "npm test"
  }
}
```

::: tip 备注：
+ `pre-commit`: 在 git commit 前执行，这里使用 `npm run lint` 检查代码格式
+ `commit-msg`: 在 git commit 时执行，这里使用 `verify-commit.js` 脚本验证 commit 消息
+ `pre-push`: 在 git push 前执行，这里使用 `npm test` 进行测试，若测试失败将不会执行这次推送
:::

+ 在根目录创建 script/verify-commit.js
```js
const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = require('fs')
    .readFileSync(msgPath, 'utf-8')
    .trim()

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(`
    不合法的 commit 消息格式。
    请查看 git commit 提交规范：https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md
  `)

  process.exit(1)
}
```



## 常见应用

### 发布测试环境

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


### 发布正式环境

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


### 线上 Bug 修复

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


### 线上分支回滚

**暴力覆盖：**
+ `git reset HEAD~1`：将本地分支回滚到上次提交的状态
+ `git push -f origin dev`：强制推送到远程 `dev` 分支


**先复制分支再回滚：**
+ `git branch backup`：备份分支


### 线上分支错误合并




### QA

+ Q：修改了本地文件名的大小写，与远程仓库的不一致，提交时报错：`Changes not staged for commit`
```
将文件从 git 仓库拷贝出来，提交一次；将文件移入仓库，再提交一次
```
