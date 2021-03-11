---
sidebarDepth: 2
---

## 介绍

### 简介

+ `Promise` 是异步编程的一种解决方案，比传统的回调函数和事件更合理、更强大
+ 一个对象，也像一个容器，保存着对未来发生的事件的结果
+ 有三种状态，其状态不受外界的干扰，只有异步操作的结果能改变它的状态，而且状态一旦改变，就不会再发生变化

### 三种状态

+ `pending`: 初始状态，等待变为 `fulfilled` 或 `rejected`
+ `fulfilled`: 意味着操作成功完成，将调用 `resolve()`
+ `rejected`: 意味着操作失败，将调用 `reject()`


### 优缺点

**优点：**
+ 使用 `Promise` 可以使异步操作以同步的语法表示出来，避免回调嵌套
+ `Promise` 对象提供统一的接口，使得控制异步操作更加容易

**缺点：**
+ `Promise` 无法取消，新建的 `Promise` 会立即执行，无法中断
+ 若不设置回调函数，在 `Promise` 中发生的错误，不会反映到外部
+ 处于 `pending` 状态时，无法得知目前进展到那一步(刚开始还是快完成)


### 基础语法

+ `Promise` 的构造函数接收一个函数，该函数的参数为两个函数：`resolve` 和 `reject`，他们在状态切换时会被调用，并且接收 `Promise` 的传出的值作为参数。
+ `Promise` 在创建时会马上调用，但 `resolve` 和 `reject` 会在当前脚本内其他同步操作完成后再调用
+ 创建 `Promise` 实例后可以在任何时候使用 `then(resolve, reject)` 方法，其中 `reject` 参数函数为可选的
+ `resolve()` 还能传递参数，它传递的参数可以在 `then()` 中接收
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hello World!')  // 1s 后调用 resolve()，并传入字符串作为参数
})

promise.then(v => {
  console.log(v)  // 接收 resolve 调用时的参数
})
// 'Hello World!'
```




## 方法

+ `Promise.prototype.then()`: 为 `Promise` 实例添加状态改变时的回调函数
+ `Promise.prototype.catch()`: 用于指定发生错误时的回调函数
+ `Promise.prototype.finally()`: 用于指定不管 `Promise` 对象最后状态如何，都会执行的操作
+ `Promise.all()`: 将一组 `Promise` 实例包装成一个新的 `Promise` 实例
+ `Promise.race()`: 将一组 `Promise` 实例包装成一个新的 `Promise` 实例
+ `Promise.allSettled()`: 将一组 `Promise` 实例包装成一个新的 `Promise` 实例
+ `Promise.any()`: 将一组 `Promise` 实例包装成一个新的 `Promise` 实例
+ `Promise.resolve()`: 将现有对象转为 `Promise` 对象
+ `Promise.reject()`: 返回一个新的状态为 `rejected` 的 `Promise` 实例

::: tip 说明:
+ 区别 `all()`/`race()`/`allSettled()`/`any()`：
  + 参数一样，都是一组 `Promise` 实例
  + `all()`： 所有实例都 `fulfilled` 时，新实例的状态才是 `fulfilled`
  + `race()`： 新实例的状态会跟随最先改变状态的 `Promise` 实例
  + `allSettled()`：所有实例都结束(不管状态如何)时，新实例状态变为 `fulfilled`(始终不会为 `rejected`)
  + `any()`：当其中一个实例 `fulfilled` 时，新实例状态变为 `fulfilled`；若所有实例都 `rejected`，新实例变为 `rejected`
+ `resolve()` 参数的四种情况：
  + 是 `Promise` 实例：直接返回该实例
  + 是 `thenable` 对象：将对象转化为 `Promise` 对象，并调用该对象的 `then()` 方法
  + 没有 `then()` 方法的对象或不是对象：返回一个**立即 `resolve` 的实例**
  + 没有任何参数：返回一个**立即 `resolve` 的实例**
+ `reject()` 立即返回一个**立即 `reject` 的实例**，而且会将其参数原封不动传递给 `catch()`
+ **立即 `resolve`/`reject` 的实例**：会在本轮事件循环结束时执行，而不是下一轮事件循环开始时
```js
setTimeout(function () {
  console.log('three')
}, 0)

Promise.resolve().then(function () {
  console.log('two')
})

console.log('one')

// one
// two
// three
```
:::




## 应用

### 封装 Ajax

```js
const getJSON = function(url) {
  return new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    const client = new XMLHttpRequest()
    client.open('GET', url)
    client.onreadystatechange = handler
    client.responseType = 'json'
    client.setRequestHeader('Accept', 'application/json')
    client.send()
  })
}
```

### 加载图片

```js
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image()
    image.onload  = resolve
    image.onerror = reject
    image.src = path
  })
}
```

### 失败重试函数

实现 `Promise.retry`，成功后 `resolve` 结果，失败后重试，尝试超过一定次数才真正的 `reject`

```js
// 方法一：在 catch() 中再次执行函数
Promise.retry = function (fn, times) {
  fn().then(console.log)
    .catch(e => {
      if (times > 0) {
        console.log('try again...')
        Promise.retry(fn, times - 1)
      } else {
        console.log('Error: No more times, now rejected.')
      }
    })
}

// 方法二：async 函数，结合 while 循环和 try...catch
Promise.retry = async function (fn, times) {
  while (times > 0) {
    try {
      const res = await fn()
      console.log(res)
      return
    } catch(e) {
      console.log('try again...')
      times--
    }
  }
  console.log('Error: No more times, now rejected.')
}
```
```js
const test = function () {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10)
    if (num > 7) {
      resolve(num)
    } else {
      reject(new Error(num))
    }
  })
}

Promise.retry(test, 5)
// try again...
// try again...
// 9
```