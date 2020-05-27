---
sidebarDepth: 2
---

## 简介

+ 了解两种求值策略
  + 传名调用：参数按其引用值传递，需要使用时才计算
  + 传值调用：参数按实际值传递，传入前便已计算
+ thunk 函数：即传名调用时的临时函数，作为一个参数传入另一个函数中
+ thunk 函数和 co 模块都是作为 `Generator` 函数的一种执行机制，原理分别为
  + 回调函数方式：将异步操作包装成 thunk 函数，在回调函数里面交回执行权
  + Promise 对象：将异步操作包装成 `Promise` 对象，用 then 方法交回执行权


## thunk 函数

### 简介

+ `thunk` 函数将多参数替换成单参数，贴近函数式编程，包含闭包、柯里化、高阶函数等概念
+ 任何函数只要参数中有回调函数，都能写成 `thunk` 函数的形式
+ `thunk` 函数用于结合 `Generator` 函数，并且在回调函数中交还执行权


### 实现

+ 简易实现
```js
// ES5
var thunk = function(fn){
  return function (){
    var args = Array.prototype.slice.call(arguments)
    return function (callback){
      args.push(callback)
      return fn.apply(this, args)
    }
  }
}

// ES6
const thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback)
    }
  }
}
```
+ 生产环境下的 thunkify 模块：引入检测机制，确保回调只执行一次
```js
function thunkify(fn) {
  return function() {
    var args = new Array(arguments.length)
    var ctx = this

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i]
    }

    return function (done) {
      var called

      args.push(function () {
        if (called) return
        called = true
        done.apply(null, arguments)
      })

      try {
        fn.apply(ctx, args)
      } catch (err) {
        done(err)
      }
    }
  }
}
```


### 应用

+ 用于 Generator 函数的自动流程管理
```js
const fs = require('fs')
const thunk = require('./thunk')
const readFileThunk = thunk(fs.readFile)

function run(fn) {
  const gen = fn() // 获取生成器指针

  function next(err, data) {
    // 向后移动生成器的状态指针，并传入当前的数据值，不传入时 f1/f2/f3 都会是 undefined
    const result = gen.next(data)
    // 执行完成，直接退出
    if (result.done) return
    // 这时的 value 是一个函数，执行一次后便会自动执行至结束 
    result.value(next)
  }

  next() // 手动执行一次
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

::: tip 说明
+ 运行解析：
  + 需要特别注意的是，`readFileThunk()` 是一个 Thunk 函数，也是一个高阶函数，并以柯里化的形式执行；传入第一个文件名参数时返回一个函数，还需继续传入回调，才会处理结果
  + `run()` 函数中，需要手动执行一个 `next()`，类似递归，但结束条件为 done 属性为 true
  + 调用生成器的 `next()` 时，必须传入当前的数据值，否则在生成器内部获取不到数据
+ 使用时，每一个异步操作都是 Thunk 函数，即在 yield 后的必须是 Thunk 函数
:::






## co 模块


### 简介

+ co 模块返回的是 `Promise`(在内部会将 Thunk 函数转为 `Promise`)
+ co 可以作为 `Generator` 的执行器
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
  return [f1, f2, f3]
}).then(console.log)
```
+ co 可以搭配 `await` 使用(因为 `await` 后面可以接 `Promise`)
+ co 不可以和 `async` 混用


### 实现

+ 基于 Promise 的自动执行
```js
const fs = require('fs')

const readFile = function(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error)
      resolve(data)
    })
  })
}

const gen = function* () {
  const f1 = yield readFile('./file/a.txt')
  const f2 = yield readFile('./file/b.txt')
  const f3 = yield readFile('./file/c.txt')
  console.log(f1.toString())
  console.log(f2.toString())
  console.log(f3.toString())
}

function run(gen) {
  const g = gen()

  function next(data) {
    const result = g.next(data)
    if (result.done) return result.value
    result.value.then(data => next(data))
  }

  next()
}

run(gen)
```

::: tip 说明
+ 将异步处理包装成 `Promise` 对象，并不是包装为 thunk 函数
+ 与使用 thunk 函数不同，此时 `yield` 后面是 `Promise`
+ `run()` 的原理和使用 thunk 函数时相同
:::

+ co 模块核心代码
```js
function co(gen) {
  var ctx = this
  var args = Array.prototype.slice.call(arguments, 1)

  return new Promise(function(resolve, reject) {
    // 获取内部指针对象
    if (typeof gen === 'function') gen = gen.apply(ctx, args)
    // 若不是 Generator 函数，resolve 并返回
    if (!gen || typeof gen.next !== 'function') return resolve(gen)

    // 首次调用
    onFulfilled()

    // 成功时回调
    function onFulfilled(res) {
      var ret
      try {
        ret = gen.next(res)
      } catch (e) {
        return reject(e)
      }
      next(ret)
      return null
    }

    // 错误时回调
    function onRejected(err) {
      var ret
      try {
        ret = gen.throw(err)
      } catch (e) {
        return reject(e)
      }
      next(ret)
    }

    // 关键函数：反复调用自身
    function next(ret) {
      // 1. 若 Generator 结束，resolve 并返回
      if (ret.done) return resolve(ret.value)
      // 2. Promise 化，保证每一步的返回值都是 Promise
      var value = toPromise.call(ctx, ret.value)
      // 3. 当检测通过，使用 then 方法并通过 onFulfilled 函数再次调用 next 函数
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected)
      // 4. 若参数不符(非 thunk 函数或 Promise 对象)，reject 并终止执行
      return onRejected(
        new TypeError(
          'You may only yield a function, promise, generator, array, or object, '
          + 'but the following object was passed: "' + String(ret.value) + '"'))
    }
  })
}
```
::: tip 说明
+ [完整源码](https://github.com/tj/co/blob/master/index.js)还包含一系列工具方法
+ `onFulfilled()`/`onRejected()` 添加一层包装主要用于捕获错误
+ 和 thunk 函数的实现类似，都是要反复调用 `next()` 方法，但 co 模块要考虑更多的边界以及数据的 `Promise` 化
:::




### 应用

+ 处理并发的异步操作
```js

```
+ 处理 Stream
```js

```