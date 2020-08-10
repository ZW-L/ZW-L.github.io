## 简介

+ 当前模块的文件名的绝对路径，会解析符号链接
+ 对于主程序，不一定与命令行中使用的文件名相同
```js
console.log(__filename)
// WIN下 d:\notes\web-docs-source\test.js
// MAC下 /Users/seven/front-end/web-docs-source/test.js
```