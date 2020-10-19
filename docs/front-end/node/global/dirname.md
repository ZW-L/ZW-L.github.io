## 简介

+ 一个变量，表示当前模块的目录名（绝对路径），等同于 `path.dirname(__filename)`
```js
console.log(__dirname)
// WIN下 d:\notes\web-docs-source
// MAC下 /Users/seven/front-end/web-docs-source
```
+ 由于操作系统的差异，常用来组合路径，该路径的分隔符自动适应操作系统：
```js
const path = require('path')

const work = path.join(__dirname, '/docs')
console.log(work)
```