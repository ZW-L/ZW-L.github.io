## 简介

+ [jsdoc](https://github.com/jsdoc/jsdoc) 是一个 js 代码块注释和代码文档生成工具
+ 允许自定义类型，为函数、变量使用时提供友好的提示，以及 API 提示补全(VS Code 支持度挺高的)
+ 优点：函数调用提示、变量类型提示、各种提示...
+ 缺点：注释繁杂，会占用很多的时间


## 块标签

+ `@returns` 指定函数的返回值，实际上编辑器会推断返回值，可以不用指定


### @param

+ 指定函数参数类型、参数名、参数描述
```js
/**
 * 计算两个数的和
 * 
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} sum of a and b
 */
function twoSum (a, b) {
  return a + b
}
```

+ 支持可选参数和默认参数的标记，但是使用 ES6 的话可以不用指定，编辑器会自动添加提示
+ 支持对象参数：
```js
/**
 * @param {Object} params
 * @param {number} params.offset
 * @param {number} params.limit
 */
function getJSON ({ offset, limit } = {}) {
  return { offset, limit }
}
```

+ 支持回调函数参数的标记(定义后全局可用)，这也是很有用的：
```js
/**
 * 定义一个请求的回调，这个定义全局可访问
 *
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
/**
 * 执行回调
 * 
 * @param {requestCallback} cb - some callback
 */
function doSomethingAsynchronously(cb) {
  cb()
}
```