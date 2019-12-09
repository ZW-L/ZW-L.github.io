## map()

**说明：**
+ 

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

```js
// 1.纯数值数组，使用 toString()
const flattenDeep = arr => arr.toString().split(',').map(v => +v)
console.log(flattenDeep([1, -1, 2, [3.5, 4, [5, [6]]]])) // [ 1, -1, 2, 3.5, 4, 5, 6 ]

// 2.递归实现
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
console.log(flattenDeep(arr))   // [ 1, 2, 4, 2, 3, { age: [ 22, 24 ] }, 2, 1, 5, 2, 2, 1 ]

// 3.使用 apply() 或 ...
// 扁平化一层
const flatten = arr => [].concat.apply([], arr) // 可以修改为 [].concat(...arr)
console.log(flatten([1, 2, [4, [2]], 3])) // [ 1, 2, 4, [ 2 ], 3 ]

// 完全扁平化
const flattenDeep = arr => {
  let temp = arr.concat()
  while (temp.some(v => Array.isArray(v))) {
    temp = [].concat.apply([], temp) // 可以修改为 temp = [].concat(...temp)
  }
  return temp
}
const arr = [1, 2, [4, 2], 3, {'age': [22, 24]}, [2, [1, 5]], [[[[[2, [2, 1]]]]]]]
console.log(flattenDeep(arr)) // [ 1, 2, 4, 2, 3, { age: [ 22, 24 ] }, 2, 1, 5, 2, 2, 1 ]

// 4.使用 reduce()
// 扁平化一层
const flatten = arr => arr.reduce((temp, val) => temp.concat(val), [])
console.log(flatten([1, 2, [4, [2]], 3])) // [ 1, 2, 4, [ 2 ], 3 ]

// 完全扁平化
const flattenDeep = arr => {
  const temp = arr.concat()
  return temp.reduce((accu, curr) => accu.concat(Array.isArray(curr) ? flattenDeep(curr) : curr), [])
}
const arr = [1, 2, [4, 2], 3, {'age': [22, 24]}, [2, [1, 5]], [[[[[2, [2, 1]]]]]]]
console.log(flattenDeep(arr)) // [ 1, 2, 4, 2, 3, { age: [ 22, 24 ] }, 2, 1, 5, 2, 2, 1 ]
```



## 数组去重

```js
// 1.ES6 的 Set 和扩展运算符
const uniq = arr => [...new Set(arr)]
console.log(uniq([1, 2, 3, 3, 1]))  // [1, 2, 3]

// 2.ES6 的 Set 和 Array.from()
const uniq = arr => Array.from(new Set(arr))
console.log(uniq([1, 2, 3, 3, 1]))  // [1, 2, 3]

// 3.ES5 原生的 reduce() 和 indexOf()
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





