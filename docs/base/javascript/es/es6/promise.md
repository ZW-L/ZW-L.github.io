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
+ 创建 `Promise` 实例后可以在任何时候使用 `.then(resolve, reject)` 方法，其中 `reject` 参数函数为可选的

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
+ `Promise.prototype.allSettled()`: 将一组 `Promise` 实例包装成一个新的 `Promise` 实例
+ `Promise.all()`: 将多个 `Promise` 实例包装成一个新的 `Promise` 实例
+ `Promise.race()`: 将多个 `Promise` 实例包装成一个新的 `Promise` 实例
+ `Promise.resolve()`: 将现有对象转为 `Promise` 对象
+ `Promise.reject()`: 返回一个新的状态为 `rejected` 的 `Promise` 实例

::: tip 说明:
+ `Promise.all()` 语法类似 `Promise.race()`，但
  + `Promise.all()` 多个 `Promise` 实例的状态都是 `resolve` 时，新的 `Promise` 实例的状态才是 `resolve`
  + `Promise.race()` 返回的 `Promise` 实例的状态会跟随最先改变状态的 `Promise` 参数实例
:::


## 应用

### 实现 Ajax

```js
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
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

  return promise
}
```