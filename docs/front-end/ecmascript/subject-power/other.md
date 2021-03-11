---
sidebarDepth: 2
---

## 深拷贝和浅拷贝

### 简介

+ 区分引用和拷贝：
  + 引用：将一个引用数据类型的变量赋值给另一个变量，二者指向同一个内存地址，它们共享彼此的变更
  + 拷贝：开辟一块新的内存空间，拷贝一个引用数据类型的变量的数据到另一个变量，二者指向不同内存地址
```js
const a = [1, 2, 3]
const b = a           // b 引用了 a
const c = a.slice()   // c 拷贝了 a

b[0] = 100
c[1] = 100
console.log(a, b, c)  // [100, 2, 3] [100, 2, 3] [1, 100, 3]
```

+ 拷贝也分为浅拷贝和深拷贝，这发生在数组和对象（或它们本身）相互嵌套的情况下
+ 浅拷贝：对引用数据类型的第一层是拷贝数据，对第二层或更深层拷贝的是它们的引用
```js
// 浅拷贝数组
const arr = [1, [2, 3]]
const newArr = arr.concat()

// 第一层数据是拷贝值，修改后不会影响原数据
newArr[0] = 0
console.log(arr)    // [1, [2, 3]]
console.log(newArr) // [0, [2, 3]]

// 第二层数据是拷贝引用，修改时会影响原数据
newArr[1][0] = 100
console.log(arr)    // [1, [100, 3]]
console.log(newArr) // [0, [100, 3]]
```

+ 深拷贝：对引用数据类型中任意层级的数据，拷贝的都是数据
```js
// 模拟深拷贝
const arr = [2, 3]
const a = [1]
a.push(arr)

const b = a.concat()
b[1] = arr.concat()

b[0] = 100
b[1][0] = 100
console.log(a, b)   // [1, [2, 3]] [100, [100, 3]]
```

::: tip 备注：
+ 对于浅拷贝，可以使用 JavaScript 原生提供的 API 实现
+ 而深拷贝，一般借助第三方库（Lodash）或手写工具方法实现
+ 对引用数据类型不熟悉的，参考 [变量和数据类型](/front-end/javascript/base/variables&data-type.md)
:::


### 实现浅拷贝

+ 数组：使用不带参数的 `slice()` 和 `concat()` 返回的就是原数组的浅拷贝
```js
const a = [1, 2, 3]
const b = a.slice()
const c = a.concat()
```

+ 对象：使用扩展运算符（`...`）或 `Object.assign()`
```js
const o = { a: 1, b: 2 }
const o1 = { ...o }
const o2 = Object.assign({}, o)
```


### 实现深拷贝

1. 使用 `JSON.parse()` 和 `JSON.stringify()` 转化
```js
const obj = {
  name: 'Alice',
  age: 24,
  likes: ['coding', 'singing']
}

const obj2 = JSON.parse(JSON.stringify(obj))
obj2.likes[1] = 'dancing'
console.log(obj) // { name: 'Alice', age: 24, likes: [ 'coding', 'singing' ] }
console.log(obj2) // { name: 'Alice', age: 24, likes: [ 'coding', 'dancing' ] }
```

::: tip 该方式有明显的优缺点
+ 优点：语法简单，在大多数仅有 `Number`, `String`, `Boolean` 的值的情况下使用
+ 缺点：是不能转化 `RegExp`、`Function`、`Date`、`undefined` 等值
:::

2. 递归处理对象和数组的深拷贝

```js
function deepClone(obj) {
  // If null undefined Boolean Function Number String Symbol.
  if (!obj || typeof obj !== 'object') return obj

  let ans
  if (Array.isArray(obj)) {
    ans = []
    for (const el of obj) {
      ans.push(deepClone(el))
    }
  } else {
    ans = {}
    for (const key in obj) {
      ans[key] = deepClone(obj[key])
    }
  }

  return ans
}
```


## 斐波那契数列及其优化

