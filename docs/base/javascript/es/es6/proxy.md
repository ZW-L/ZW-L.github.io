## 介绍

+ `Proxy` 用于修改某些操作的默认行为，属于一种元编程(meta programming)
+ 理解为在目标对象之前架设一层拦截，外界对该对象的访问，都必须先通过这层拦截



## 方法

**返回实例：**
+ `new Proxy(target, handler): Proxy`: 创建一个 `Proxy` 实例
+ `Proxy.revocable(target, handler): Proxy`: 创建一个可取消的 `Proxy` 实例(在实例上调用 `revoke()`)

**拦截方法：**
+ `get(target, propKey, receiver): any`: 拦截读取属性操作
+ `set(target, propKey, value, receiver): Boolean`: 拦截设置属性值操作
+ `has(target, propKey): Boolean`: 拦截 `in` 操作符
+ `constructor(target, args)`: 拦截 `new` 操作符
+ `deleteProperty(target, propKey, propDesc): Boolean`: 拦截 `delete` 操作符
+ `apply(target, object, args)`: 拦截函数的调用(如 `proxy()`, `proxy.call()`, `proxy.apply()`)
+ `ownKeys(target): Object`: 拦截 `Reflect.ownKeys()`
+ `isExtensible(target): Boolean`: 拦截 `Object.isExtensible()`
+ `preventExtensions(target): Boolean`: 拦截 `Object.preventExtensions()`
+ `defineProperty(target, propKey): Boolean`: 拦截 `Object.defineProperty()`
+ `setPrototypeOf(target, prototype): Boolean`: 拦截 `Object.setPrototypeOf()`
+ `getPrototypeOf(target): Object`: 拦截 `Object.getPrototypeOf()`
+ `getOwnPropertyDescriptor(target, propKey): Object`: 拦截 `Object.getOwnPropertyDescriptor()`

::: tip 说明：
+ `target` 为目标对象，`propKey` 为属性名
+ 所有拦截方法都能在 `Reflect` 对象上找到
:::




## this 指向

+ 一旦 proxy 代理了 target，后者内部的 `this` 就是指向 proxy，而不是 target
```js
const handler = {}
const target = {
  m: function () {
    console.log(this === proxy)
  }
}

const proxy = new Proxy(target, handler)

target.m() // false
proxy.m()  // true
```



## 应用

+ `Proxy` 对象可以拦截目标对象的任意属性，这使得它很合适用来写 `Web` 服务的客户端
```js
const service = createWebService('http://example.com/data')
service.employees().then(json => {
  const employees = JSON.parse(json)
  // ···
})

function createWebService(baseUrl) {
  return new Proxy({}, {
    get(target, propKey, receiver) {
      return () => httpGet(baseUrl + '/' + propKey)
    }
  })
}
```

+ 同理，`Proxy` 也可以用来实现数据库的 `ORM` 层