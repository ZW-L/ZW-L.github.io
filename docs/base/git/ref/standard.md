## 规范

参考：
+ [Git分支管理规范](https://www.cnblogs.com/imyalost/p/9301732.html)
+ [你不知道的前端工程化（手把手入门，超详细教程）](https://mp.weixin.qq.com/s/z_APrrXy4qzT7w34PsW-gg)




## 分支规范

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





## commit 规范

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




## 验证 git 规范

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
