## 箭头函数

### 箭头函数的特点和应用场景

**特点:**
+ 是匿名函数(不能用作构造函数，不能使用 `new` 关键字)
+ 不能使用 `arguments`, 取而代之的是 `rest`(剩余参数)
+ 没有自身的 `this`, 但它会捕获所在上下文的 `this`, 即使通过 `call()`, `bind()`, `apply()` 也不能修改 `this`
+ 没有原型属性
+ 不能用作 `Generator`, 不能使用 `yield` 关键字

**应用场景：**
+ 不需要使用 `this`(或需要捕获上下文 `this`)时



## Symbol

`Symbol` 是 ES6 新增的基本数据类型，其表示为独一无二的值。

### Symbol 类型在实际开发中的应用

1. 用作对象的属性名，选择性地对外输出
```js
const obj = {
  [Symbol('pet')]: 'dog',
  'name': 'Wof',
  'age': '8 month'
}
// 1.不会被 Object.keys() 和 for...in 获取 
console.log(Object.keys(obj))   // [ 'name', 'age' ]
for (const key in obj) {
  console.log(key)    // 'name' \n 'age'
}
// 2.使用 JSON.stringify()转换成字符串时， symbol类型的键值会被排除在外
console.log(JSON.stringify(obj))  // {"name":"Wof","age":"8 month"}
// 3.能用特定的 API 访问
console.log(Object.getOwnPropertySymbols(obj))  // [ Symbol(pet) ]
console.log(Reflect.ownKeys(obj))               // [ 'name', 'age', Symbol(pet) ]
```
2. 使用 Symbol 实现独一无二的常量
3. 使用 Symbol 定义类的私有属性/方法



## Promise

### Promise 简述和优缺点

**简述：**
+ `Promise` 是异步编程的一种解决方案，比传统的回调函数和事件更合理、更强大
+ `Promise` 的状态不受外界的干扰；它有三种状态：`resolved`、`rejected`、`pending`
+ `Promise` 的状态一旦改变，就不会再发生变化；而且只有异步操作的结果能改变它的状态

**优点：**
+ 使用 `Promise` 可以使异步操作以同步的语法表示出来，避免回调嵌套
+ `Promise` 对象提供统一的接口，使得控制异步操作更加容易

**缺点：**
+ `Promise` 无法取消，新建的 `Promise` 会立即执行，无法中断
+ 若不设置回调函数，在 `Promise` 中发生的错误，不会反映到外部
+ 处于 `pending` 状态时，无法得知目前进展到那一步(刚开始还是快完成)

### 如何创建和使用 Promise

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Hello World!');  // 1s 后调用 resolve()，并传入字符串作为参数
})

promise.then(v => {
  console.log(v)  // 打印 resolve 调用时的参数
})
```

### 使用 Promise 封装一个 Ajax 函数

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

### 使用 Promise 实现串行

**使用 reduce()：**
```js
function runPromiseByQueue(myPromise) {
  myPromise.reduce(
    (previousPromise, nextPromise) => previousPromise.then(() => nextPromise()),
    Promise.resolve()
  )
}
```

**使用 async/await：**
```js
async function runPromiseByQueue(myPromises) {
  for (let value of myPromises) {
    await value()
  }
}
```





## Proxy

### Object.defineProperty() 和 proxy 的区别







## 其他






