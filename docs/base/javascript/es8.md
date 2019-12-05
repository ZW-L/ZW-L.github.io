---
sidebarDepth: 2
---

## async/await

### 介绍

+ `async` 函数返回一个 `Promise` 对象
+ 函数执行的时遇到 `await` 就会先返回，等到异步操作完成后再接着执行函数体内后面的语句
+ 是处理异步操作和解决回调地狱的终极杀器

### 语法

+ 基础用法: 

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

+ 可以为 `async` 函数添加 `then`，而且回调函数的参数为 `async` 函数内部 `return` 语句返回的值

```js
async function f() {
  return 'hello world'
}

f().then(v => console.log(v))
// 'hello world'
```


### await

+ `await` 命令后面如果不是 `Promise` 对象，就直接返回对应的值

```js
async function f() {
  // 等同于 return 123
  return await 123
}

f().then(v => console.log(v))
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
  await new Promise(function (resolve, reject) {
    throw new Error('出错了')
  });
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))
// Error：出错了
```

+ 一般将 `await` 放在 `try...catch` 代码块之中

```js
async function f() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error('出错了')
    })
  } catch(e) {
    console.log(e)
  }

  return await('hello world')
}
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