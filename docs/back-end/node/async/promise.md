## 简介

+ 要点：
  + 递归：每个异步操作都返回 Promise
  + 状态机：只有三种状态，状态转变不可逆，且只能从内部控制
  + 全局异常处理：全局的 `catch()` 捕获异常
+ 优点：
  + 标准化，各工具库都按照规范实现，且能与 `async` 无缝集成
  + 解决回调地狱的痛点，且异常处理更加方便




## Promises/A+ 规范

参考自 [Promises/A+](https://promisesaplus.com/)，简单概括要点：
+ `Promise` 是一个拥有 `then()` 方法的对象或函数，`thenable` 是一个定义了 `then()` 方法的对象或函数
+ `Promise` 的状态只能是 `pending`, `fulfilled`, `rejected` 三种状态之一，除 `pending` 外，状态不可变
+ `then()` 方法的两个参数是可选的(但必须是函数)，而且必须返回一个 `Promise`


## API 设计

+ 在 `Promise` 的内部，指定其状态的变化
+ 每个符合 Promises/A+ 规范的方法，必须返回一个 `Promise`

```js
const fs = require('fs')

function getFileData (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.toString())
      }
    })
  })
}

function log (str) {
  return new Promise((resolve, reject) => {
    console.log(str)
    resolve(str)
  })
}

getFileData('hello.js')
  .then(log)
  .then(() => {
    return getFileData('world.js').then(log)
  })
  .catch(console.log)
```


## 推荐的类库

+ q：实现了 Promises/A+ 和 Deferred 规范
+ Bluebird：基于 Promises/A+ 规范的兼容性、性能好的模块，并扩展了很多方法