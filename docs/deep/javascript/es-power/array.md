## map()

**语法:**
```ts
map(callback: function, thisArg?: object): any[]
```

**说明：**
+ [map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
+ 第一个参数不是函数时抛出 `TypeError`，第二个参数

**实现：**
+ 精简版
```js
Array.prototype._map = function (callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function!`)
  }
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i]))
  }

  return res
}
```
+ 详细版
```js

```


## filter()

**说明：**
+ 

```js

```


## some()

**说明：**
+ 

```js

```


## reduce()

**说明：**
+ 

```js

```


## 数组扁平化

**说明：**
+ 基本上都是利用 `concat()` 和 `apply()` (或者用 `...`) 进行扁平化
+ 用 `isArray()` 判断数组，用 `some()` 判断数组是否完全扁平化
+ 还可以用 `reduce()` 缩减代码

**实现：**
+ 纯数值数组，使用 `toString()`
```js
const flattenDeep = arr => arr.toString().split(',').map(v => +v)
console.log(flattenDeep([1, -1, 2, [3.5, 4, [5, [6]]]])) // [ 1, -1, 2, 3.5, 4, 5, 6 ]
```

+ 递归实现
```js
const flattenDeep = function(arr) {
  return arr.reduce((temp, val) => {
    if (Array.isArray(val)) {
      temp = temp.concat(flattenDeep(val))
    } else {
      temp.push(val)
    } 
    return temp
  }, [])
}

const arr = [1, 2, [4, 2], 3, {'age': [22, 24]}, [2, [1, 5]], [[[[[2, [2, 1]]]]]]]
console.log(flattenDeep(arr))   // [1, 2, 4, 2, 3, { age: [22, 24] }, 2, 1, 5, 2, 2, 1]
```

+ 使用 `apply()` 或 扩展运算符
```js
// 扁平化一层
const flatten = arr => [].concat.apply([], arr) // 可以修改为 [].concat(...arr)
console.log(flatten([1, 2, [4, [2]], 3])) // [1, 2, 4, [2], 3]

// 完全扁平化
const flattenDeep = arr => {
  let temp = arr.concat()
  while (temp.some(v => Array.isArray(v))) {
    temp = [].concat.apply([], temp) // 可以修改为 temp = [].concat(...temp)
  }
  return temp
}
const arr = [1, 2, [4, 2], 3, {'age': [22, 24]}, [2, [1, 5]], [[[[[2, [2, 1]]]]]]]
console.log(flattenDeep(arr)) // [1, 2, 4, 2, 3, { age: [22, 24] }, 2, 1, 5, 2, 2, 1]
```

+ 使用 `reduce()`
```js
// 扁平化一层
const flatten = arr => arr.reduce((temp, val) => temp.concat(val), [])
console.log(flatten([1, 2, [4, [2]], 3])) // [1, 2, 4, [2], 3]

// 完全扁平化
const flattenDeep = arr => {
  const temp = arr.concat()
  return temp.reduce((accu, curr) => accu.concat(Array.isArray(curr) ? flattenDeep(curr) : curr), [])
}
const arr = [1, 2, [4, 2], 3, {'age': [22, 24]}, [2, [1, 5]], [[[[[2, [2, 1]]]]]]]
console.log(flattenDeep(arr)) // [1, 2, 4, 2, 3, { age: [22, 24] }, 2, 1, 5, 2, 2, 1]
```



## 数组去重

+ ES6 的 `Set` 和扩展运算符
```js
const uniq = arr => [...new Set(arr)]
console.log(uniq([1, 2, 3, 3, 1]))  // [1, 2, 3]
```

+ ES6 的 `Set` 和 `Array.from()`
```js
const uniq = arr => Array.from(new Set(arr))
console.log(uniq([1, 2, 3, 3, 1]))  // [1, 2, 3]
```

+ ES5 的 `reduce()` 和 `indexOf()`
```js
function uniq(arr) {
  return arr.reduce((accu, curr) => {
    if (accu.indexOf(curr) === -1) {
      accu.push(curr)
    }
    return accu
  }, [])
}

console.log(uniq([1, 2, 3, 3, 1]))  // [1, 2, 3]
```


## 深拷贝

+ 简单实现：利用循环和 `Array.isArray()` 判断，对深层数组进行递归拷贝
  + 这种方法不能处理数组元素为对象的拷贝
```js
const deepClone = arr => {
  const ret = []
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      ret.push(deepClone(arr[i]))
    } else {
      ret.push(arr[i])
    }
  }

  return ret
}

deepClone([1, [2, 3, [4]], 5])
```
+ 使用 `JSON.stringify()` 和 `JSON.parse()` 进行二次转换
  + 不能处理 `NaN` / `undefined` / 函数，它们都会变为 `null`
```js
const deepClone = arr => {
  return JSON.parse(JSON.stringify(arr))
}

const arr = [1, [NaN, null, undefined, { name: 'Alice' }, function () {}, [4]], 5]
deepClone(arr) // [1, [null, null, null, { name: 'Alice' }, null, [4]], 5]
```
+ 类型判断和递归
  + 适用于任意数组、对象，并且不会丢失/修改属性
```js
const deepClone = obj => {
  // 只处理数组和对象，其他直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    // 不拷贝原型链上的属性
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }

  return copy
}

const arr = [1, [NaN, null, undefined, { name: 'Alice' }, function () {}, [4]], 5]
deepClone(arr) // [1, [null, null, null, { name: 'Alice' }, null, [4]], 5]
```

::: tip 熟悉 typeof 运算符
```js
console.log(typeof 1)           // 'number'
console.log(typeof '1')         // 'string'
console.log(typeof true)        // 'boolean'
console.log(typeof NaN)         // 'number'
console.log(typeof undefined)   // 'undefined'
console.log(typeof Symbol(1))   // 'symbol'
console.log(typeof (() => {}))  // 'function'
console.log(typeof null)        // 'object'
console.log(typeof [])          // 'object'
console.log(typeof {})          // 'object'
```
:::
