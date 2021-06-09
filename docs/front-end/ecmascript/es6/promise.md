---
sidebarDepth: 2
---


## 介绍

:::: tabs
::: tab 特点
+ `Promise` 是异步编程的一种解决方案，比传统的回调函数和事件更合理、更强大
+ 是一个对象，也像一个容器，保存着对未来发生的事件的结果
+ 有三种状态，其状态不受外界的干扰，只会被异步操作的结果改变，**状态一旦改变就不会再变化**
  + `pending`: 初始状态，等待变为 `fulfilled` 或 `rejected`
  + `fulfilled`: 操作成功完成，将调用 `resolve()`
  + `rejected`: 操作失败，将调用 `reject()`
:::

::: tab 优缺点
+ 优点：
  + 使用 `Promise` 可以使异步操作以同步的语法表示出来，避免回调嵌套
  + `Promise` 对象提供统一的接口，使得控制异步操作更加容易
+ 缺点：
  + `Promise` 无法取消，新建的 `Promise` 会立即执行，无法中断
  + 若不设置回调函数，在 `Promise` 中发生的错误，不会反映到外部
  + 处于 `pending` 状态时，无法得知目前进展到那一步(刚开始还是快完成)
:::


::: tab 基础语法
+ `Promise` 构造函数接收一个函数，该函数的参数为两个函数：`resolve` 和 `reject`，他们在状态切换时会被调用，并且接收 `Promise` 的传出的值作为参数：
```js
const p1 = new Promise((resolve, reject) => {
  // ...
})
```

+ 创建 `Promise` 实例后可以在任何时候使用 `then(resolvedHandler, rejectedHandler)` 方法：
```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 1000);
})

p.then(() => {
  console.log("fulfilled")
}, () => {
  console.log("rejected")
})
```

+ `resolve()`/`reject()` 还能传递参数，可以在 `then()` 中接收
```js
const p = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hello World!')  // 1s 后调用 resolve()，并传入字符串作为参数
})

p.then(v => {
  console.log(v)  // 'Hello World!'
})
```
:::

::: tab 注意
+ `Promise` 在创建时会马上调用，但 `resolve` 和 `reject` 会在当前脚本内其他同步操作完成后再调用
```js
console.log(1)
const promise = new Promise((resolve, reject) => {
  console.log(2)
  resolve(5);
  console.log(3)
})

console.log(4)

promise.then(console.log)
// 1 2 3 4 5
```

+ `reject` 与抛出错误的相似性：
```js
const p = new Promise((resolve, reject) => {
  reject("error");
})
p.catch(console.log);     // "error"

// 类似
const p = new Promise((resolve, reject) => {
  reject(new Error("error"));
})
p.catch(e => {
  console.log(e.message); // "error"
});
```
:::
::::


## 方法

### 实例方法

+ `Promise.prototype.then(resolvedHandler: cb, rejectedHandler: cb)`: 指定状态改变时的回调函数
+ `Promise.prototype.catch(errorHandler: cb)`: 指定发生错误时的回调函数，相当于 `p.then(null, rejectedHandler)` 或 `p.then(undefined, rejectedHandler)`
+ `Promise.prototype.finally(finishedHandler: cb)`: 指定不管最后状态如何，都会执行的操作


::: tip 最佳实践
+ 不要在 `then()` 中使用 `rejectedHandler`，而是将其统一用 `catch()` 捕获
+ `catch()` 后面也能链式使用 `then()`
+ `finally()` 在 ES2018 中引入，它执行时，`Promise` 实例已经结束
:::



### 静态方法

+ 都用于生成并返回新的 `Promise` 实例：

|方法|说明|
|-|-|
|`Promise.all()`|所有实例都 `fulfilled` 时，新实例的状态是 `fulfilled`；否则为 `rejected`
|`Promise.allSettled()`|所有实例都结束时，新实例的状态为 `fulfilled`；不可能是 `rejected`
|`Promise.race()`|新实例的状态跟随最先改变状态的 `Promise` 实例
|`Promise.any()`|当任一实例 `fulfilled` 时，新实例的状态为 `fulfilled`；否则为 `rejected`
|`Promise.reject()`|新实例的状态为 `rejected`
|`Promise.resolve()`|新实例的状态为 `fulfilled`


::: tip 注意：
+ 前四个方法支持相同的参数：都是一组 `Promise` 实例
+ `Promise.reject()` 会将其参数原封不动传递给 `catch()`
+ `Promise.resolve()` 的参数：
  + `Promise` 实例：直接返回
  + `thenable` 对象：将对象转化为 `Promise` 对象，并调用该对象的 `then()` 方法
  + 没有 `then()` 方法的对象或不是对象：返回一个**立即 `resolve` 的实例**
  + 没有任何参数：返回一个**立即 `resolve` 的实例**
+ **立即 `resolve`/`reject` 的实例**：会在本轮事件循环结束时执行，而不是下一轮事件循环开始时
```js
setTimeout(function () {
  console.log('3')
}, 0)

Promise.resolve().then(function () {
  console.log('2')
})

console.log('1')

// 1
// 2
// 3
```
:::


## 错误处理

+ `catch` 能处理前面没有被处理的错误
```js
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});
```

+ 如果 `Promise` 已经被 `resolved`，再抛出错误是无效的
```js
const p = new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('test');  // 这个错误抛出是无效的
});

p.then(function(value) { console.log(value) })
  .catch(function(error) { console.log(error) });
// ok
```

+ 若没有使用 `catch` 捕获错误，`Promise` 内部的错误不会响应到外部（俗称 “吃掉错误”），并且**程序不会异常退出**
```js
const someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    resolve(x + 2); // 报错，x 没有声明
  });
};

someAsyncThing().then(function() {
  console.log('everything is great');
});

setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined...
// 123
```

+ `Promise` 示例中 `setTimeout` 回调函数抛出的错误会在 `Promise` 外部抛出（`setTimeout` 是同步执行的，但是其回调函数在下一个事件循环开始时执行，此时 `Promise` 已经结束），不能被 `catch` 捕获，会导致程序异常退出
```js
const p = new Promise(function (resolve, reject) {
  resolve('ok');
  setTimeout(function () { throw new Error('test') }, 1000);
});

p.then(function (value) { console.log(value) })
  .catch(e => console.log(e.message));  // 捕获不到错误
// ok
// Uncaught Error: test
```



## 应用

:::: tabs
::: tab 封装 Ajax
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
:::

::: tab 加载图片
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
:::

::: tab 失败重试函数
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
:::
::::