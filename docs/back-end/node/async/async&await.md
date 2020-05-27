## 简介

+ `async` 函数实际上是 `Generator` 的语法糖(内置了执行器)
```js
const fs = require('fs')

const readFile = function (file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, function (err, data) {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

const readAllFile = async function () {
  const f1 = await readFile('./file/a.txt')
  const f2 = await readFile('./file/b.txt')
  const f3 = await readFile('./file/c.txt')
  console.log(f1.toString())
  console.log(f2.toString())
  console.log(f3.toString())
}

readAllFile()
```
+ `async` 特点：
  + **内置执行器**：不需要再手动执行或使用 `co` 模块
  + **更好的语义**：`async` 表示函数内有异步操作，`await` 表示需要等待结果；并且以同步的方式写异步代码
  + **更广的适用性**：`co` 模块约定只能使用 `Thunk`/`Promise`，但 `await` 后可以使用 `Promise` 和原始数据类型(但会马上转为 `resolved` 的 `Promise` 对象)
  + **返回 `Promise`**：其调用后可以接 `then()`，接收函数调用后的返回值作参数
