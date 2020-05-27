---
sidebarDepth: 2
---

## async/await

### 简介

+ `async` 函数是 `Generator` 的语法糖(内置执行器)，它会返回一个 `Promise` 对象(`resolve` 时的参数就是 `async` 函数的返回值)
+ 函数执行的时遇到 `await` 就会先返回，等到异步操作完成后再接着执行函数体内后面的语句；但当某个 `await` 执行出错时， `async` 函数会提前退出，因此需要使用 `try...catch` 包裹 `await` 语句以保证程序顺利执行
+ `await` 只能用在 `async` 函数中，且 `await` 后面是一个 `Promise`(否则会自动转为 `Promise`)


### 语法

+ 基础用法
```js
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function asyncPrint(value, ms) {
  await timeout(ms)
  console.log(value)
}

asyncPrint('hello world', 50)
```

+ 使用 `then()` 接收返回值
```js
async function f() {
  return 'hello world'
}

f().then(console.log)
// 'hello world'
```

+ 使用 `catch()` 捕获抛出的错误
```js
async function f() {
  throw new Error('出错了')
}

f().then(console.log)
  .catch(e => console.log(e.message))
// 出错了
```




### await

+ `await` 命令后面如果不是 `Promise` 对象，就直接返回对应的值
```js
async function f() {
  // 等同于 return 123
  return await 123
}

f().then(console.log)
// 123
```

+ `await` 命令后面是一个 `thenable` 对象，`await` 会将其等同于 `Promise` 对象
```js
class Sleep {
  constructor(timeout) {
    this.timeout = timeout
  }
  then(resolve, reject) {
    const startTime = Date.now()
    setTimeout(
      () => resolve(Date.now() - startTime),
      this.timeout
    )
  }
}

(async () => {
  const sleepTime = await new Sleep(1000)
  console.log(sleepTime)
})()
// 1000
```


### 错误处理

+ `await` 后面的异步操作出错，等同于 `async` 函数返回的 `Promise` 对象被 `reject`
```js
async function f() {
  await Promise.reject('出错了')
}

f().then(console.log)
  .catch(e => console.log(e.message))
// 出错了
```

+ 任意一个 `await` 后的 `Promise` 变为 `reject` 时都会导致 `async` 函数停止执行，因此一般将 `await` 放在 `try...catch` 代码块之中
```js
async function f() {
  try {
    await Promise.reject('出错了')
  } catch(e) {
    console.log(e)
  }

  return await('hello world')
}

f().then(console.log)
// 出错了
// hello world
```


### 注意事项和技巧

+ 最好把 `await` 命令放在 `try...catch` 代码块中，而且一个 `try...catch` 代码块可以写多条 `await` 命令
+ 多个 `await` 命令后面的异步操作，如果不存在继发关系，最好让它们同时触发(并发执行，避免阻塞耗时)
```js
// 不存在继发关系的两个操作，但仍会在 foo 完成后才执行 bar
let foo = await getFoo()
let bar = await getBar()

// 改进：让它们并发执行，避免阻塞

// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()])

// 写法二
let fooPromise = getFoo()
let barPromise = getBar()
let foo = await fooPromise
let bar = await barPromise
```
+ 注意区分代码需要的是继发还是并行执行
```js
const list = [1, 2, 3]
const square = function (num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

// 以下代码执行时会在 1s 后立即打印 1 4 9
// 导致这种结果的原因是：forEach 的源码使用 while 一次性执行所有回调
list.forEach(async x => {
  const res = await square(x)
  console.log(res)
})

// 若需要修改为：打印 1 4 9 之间的间隔为 1s，可以改为继发
// 方法1：使用 for 循环
async function test () {
  for (const x of list) {
    const res = await square(x)
    console.log(res)
  }
}

test()

// 方法2：使用 reduce
list.reduce(async (_, item) => {
  await _ // 等待前一步的 promise 执行完
  const res = await square(item) // 等待当前的 promise 执行
  console.log(res)
}, undefined)
```
+ `async` 函数可以保留运行堆栈
```js

```





## Function 变动

+ 函数参数列表结尾允许逗号，主要作用是方便使用 git 进行多人协作开发时修改同一个函数减少不必要的行变更




## Object 新增方法

+ `Object.values(obj: Object): Iterator`: 返回一个由对象的值组成的 `Iterator`
+ `Object.entries(obj: Object): Iterator`: 返回一个由对象的键值数组(类似 [key, value] 的形式)组成的 `Iterator`
+ `Object.getOwnPropertyDescriptors(obj: Object): Object | Null`: 获取一个对象的所有自身属性描述符




## String 新增方法

+ `String.prototype.padStart(len: Number, padStr?: String): String`: 将指定字符串填充到原始字符串的开头
+ `String.prototype.padEnd(len: Number, padStr?: String): String`: 将指定字符串填充到原始字符串的结尾

::: tip 说明：
+ 当 len 小于原始字符串时，会将原始字符串截断
+ padStr 默认为空字符串，此时会将字符串的长度变为 len 指定的长度，不足的部分用空格代替
+ 填充的意思是会重复使用指定字符串
:::