## 简介

+ `Generator` 是一个函数，理解为 `Iterator` 生成器，因为它调用后会生成一个 `Iterator`
+ 也可以理解为一种状态机，它封装了多个内部状态
+ 其函数内部使用 `yield`/`yield*` 关键字，每当执行到此处时，函数会暂时退出，并保留上下文，下次进入时可继续执行
+ 可以使用 `next()` 方法控制生成器的执行，一般情况下只能手动控制
+ 两种方法实现 `Generator` 的自动执行：
  + 使用 thunk 函数
```js
const fs = require('fs')
const thunk = require('./thunk')
const readFileThunk = thunk(fs.readFile)

function run(fn) {
  const gen = fn()

  function next(err, data) {
    const result = gen.next(data)
    if (result.done) return
    result.value(next)
  }

  next()
}

const g = function* (){
  const f1 = yield readFileThunk('./file/a.txt')
  const f2 = yield readFileThunk('./file/b.txt')
  const f3 = yield readFileThunk('./file/c.txt')
  console.log(f1.toString())
  console.log(f2.toString())
  console.log(f3.toString())
}

run(g)
```
  + 使用 co 模块
```js
const fs = require('fs')
const co = require('co')

const readFile = function (file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, function (err, data) {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

co(function* () {
  const f1 = yield readFile('./file/a.txt')
  const f2 = yield readFile('./file/b.txt')
  const f3 = yield readFile('./file/c.txt')
  console.log(f1.toString())
  console.log(f2.toString())
  console.log(f3.toString())
}).then(() => {
  console.log('done!')
})
```