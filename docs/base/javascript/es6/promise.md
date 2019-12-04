## Promise 简介


### 介绍
+ `Promise` 是异步编程的一种解决方案，比传统的回调函数和事件更合理、更强大。
+ `Promise` 像是一个容器，保存着对未来发生的事件的结果。
+ `Promise` 是一个对象，它提供了一系列的 API，可以获取异步操作的消息。
+ `Promise` 对象代表一个异步操作，只有异步操作的结果能改变它的状态。

### 特点
+ `Promise` 的状态不受外界的干扰；它有三种状态：`resolved`、`rejected`、`pending`；只有异步操作的结果能改变它的状态。
+ `Promise` 的状态一旦改变，就不会再发生变化。

### 优点
+ 使用 `Promise` 可以使异步操作以同步的语法表示出来，避免回调嵌套。
+ `Promise` 对象提供统一的接口，使得控制异步操作更加容易。

### 缺点
+ `Promise` 无法取消，新建的 `Promise` 会立即执行，无法中断。
+ 若不设置回调函数，在 `Promise` 中发生的错误，不会反映到外部。
+ 处于 `pending` 状态时，无法得知目前进展到那一步(刚开始还是快完成)。

## 基本用法

### 创建

说明：
+ `Promise` 的构造函数接收一个函数，该函数的参数为两个函数：`resolve` 和 `reject`，他们在状态切换时会被调用，并且接收 `Promise` 的传出的值作为参数。
+ `Promise` 在创建时会马上调用，但 `resolve` 和 `reject` 会在当前脚本内其他同步操作完成后再调用。
+ 创建 `Promise` 实例后可以在任何时候使用 `.then(resolve, reject)` 方法，其中 `reject` 参数函数为可选的。

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hello World!');  // 1s 后调用 resolve()，并传入字符串作为参数
})
promise.then(v => {
  console.log(v)  // 接收 resolve 调用时的参数
})
// 'Hello World!'
```

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




## API

总览：
+ `Promise.prototype.then()`：为 `Promise` 实例添加状态改变时的回调函数。
+ `Promise.prototype.catch()`：用于指定发生错误时的回调函数。
+ `Promise.prototype.finally()`：用于指定不管 `Promise` 对象最后状态如何，都会执行的操作。
+ `Promise.prototype.allSettled()`
+ `Promise.all()`
+ `Promise.race()`
+ `Promise.resolve()`
+ `Promise.reject()`

### Promise.prototype.then() 

&emsp;&emsp;该方法用于为 Promise 实例添加状态改变时的回调函数；其中 `reject` 参数函数可缺省。而且可以返回一个新的 `Promise` 对象，实现链式调用。
```js
myPromise.then(resolve, [reject])
```

链式调用的例子：
```js
const validate = function(query) {
  return new Promise((resolve, reject) => {
    resolve(query)
  })
}

validate({ username: 'root' }).then(query => {
  return validate(query.username)  // 返回一个 Promise
}).then(username => {
  console.log(username)
})
// 'root'
```
一个常用的例子：
```js

```



### Promise.prototype.catch() 

&emsp;&emsp;该方法用于指定发生错误时的回调函数。等同于 `then(null, reject)` 或 `then(undefined, reject)`。
```js
myPromise
  .then(v => console.log(v))
  .catch(err => console.log(err))
```
说明：
+ `catch()` 用于捕获在 `then()` 内发生的错误
+ `catch()` 返回的是一个 `Promise` 对象，后面还可以继续调用 `then()`
+ `catch()` 中还可以抛出错误，在它之后还可以加 `catch()` 进行处理
+ 建议在 `then()` 中不要指定 `reject` 函数，而是在 `then()` 之后调用 `catch()` 来捕获错误


### Promise.prototype.finally() 

&emsp;&emsp;`finally()` 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。在 ES9(ES2018) 引入标准。`finally()` 接收一个回调函数，但是回调函数不接收参数，因此无法得知 `Promise` 的状态。
```js
promise
  .then(result => { })
  .catch(error => { })
  .finally(() => { })
```

### Promise.prototype.allSettled()

&emsp;&emsp;

### Promise.all()

&emsp;&emsp;`all()` 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
```js
const p = Promise.all([a, b, c])
```
说明：
+ 参数数组是一组 `Promise` 实例，若不是，会调用 `Promise.resolve()` 转化为 `Promise` 实例
+ 参数不一定是数组，但必须具有 `Iterable` 接口，且返回的每个成员都是 `Promise` 实例
+ `p` 也是一个 `Promise`，它的状态取决于参数数组内的所有 `Promise`；只有他们都 `resolved` 时 `p` 才会变为 `resolve`，此时 `p` 回调函数接收他们的返回值组成的数组作为参数；若 `rejected`，则接收第一个被 `reject` 的实例的返回值
+ 当在数组的 `Promise` 实例中使用了 `catch()`，其发生的错误不会被 `all()` 捕获，因为 `catch()` 之后返回的是一个新的 `Promise` 实例，它的状态为 `resolved`

### Promise.race()

&emsp;&emsp;`race()` 方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。使用类似于 all()，但它的状态为数组中率先改变状态的 Promise 实例。
```js
const p = Promise.race([p1, p2, p3])
```

### Promise.resolve()

&emsp;&emsp;`resolve()` 方法用于将现有对象转为 Promise 对象。
```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```
参数的四种情况：
1. 参数是 `Promise`，会直接返回该 `Promise`
2. 参数是 `thenable` 对象(具有 `then()` 的对象)，会将对象转化为 `Promise`，并立即执行 `then()`
3. 参数不具有 `then()`，或者不是对象，会返回 `Promise` 对象，其状态为 `resolved`
4. 不带参数时，直接返回一个 `resolved` 状态的 `Promise` 对象
5. (3和4)立即 `resolved` 的 `Promise` 对象在本轮事件循环的结束时执行，而不是下一轮事件循环的开始

### Promise.reject()

&emsp;&emsp;`reject()` 方法返回一个新的 Promise 实例，该实例的状态为rejected。
```js
const p = Promise.reject('出错了')
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))
p.then(null, function (s) {
  console.log(s)
})
```
说明：
+ 生成一个 `Promise` 实例，状态为 `rejected`，立即执行回调函数
+ 不同于 `resolve()`，它的参数会原封不动地传递给后续方法(`catch()`)


## 应用

### 加载图片


### 结合 Generator 函数


