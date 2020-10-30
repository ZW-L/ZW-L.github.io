## 斐波那契数列及其优化


## 深拷贝和浅拷贝 & 数组和对象的深拷贝

**浅拷贝简介：** 仅拷贝引用类型的第一层数据，第二层或更深层数据拷贝的是一个引用

```js
const arr = [1, 2, [2, 3]]
const newArr = arr.concat()
// 修改第一层数据时，不会影响原数据
newArr[0] = 0
console.log(arr, newArr) // [ 1, 2, [ 2, 3 ] ] [ 0, 2, [ 2, 3 ] ]
// 修改深层数据时，会影响原数据
newArr[2][0] = 100
console.log(arr, newArr) // [ 1, 2, [ 100, 3 ] ] [ 0, 2, [ 100, 3 ] ]
```

**实现浅拷贝：**

+ 数组使用不带参数的 `slice()` 和 `concat()` 返回的就是原数组的浅拷贝
+ 对象使用展开运算符也可以获得一层浅拷贝(`obj2 = { ...obj }`)

**深拷贝简介：** 深拷贝：递归拷贝引用类型中任意层级的数据，返回是全新的变量，彼此修改都不会有影响

**实现深拷贝：**

+ 使用 `JSON.parse()` 和 `JSON.stringify()` 转化
  + 优点：语法简单，在大多数仅有 `Number`, `String`, `Boolean` 的值的情况下使用
  + 缺点：是不能转化 `RegExp`、`Function`、`Date`、`undefined` 等值

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

+ 递归实现对象的深拷贝，能使用大部分情况

```js
// 深拷贝
function deepClone(obj) {
  if (obj == null) { return obj } // obj 为 undefined 和 null 时
  if (typeof obj === 'object') {
    const ret = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      ret[key] = deepClone(obj[key])
    }
    return ret
  }

  return obj // 其他原始类型的值或 function
}
// 举例
const obj = {
  name: 'Alice',
  age: 24,
  likes: ['coding', 'singing'],
  todo: {
    coding: false
  }
}
const obj2 = deepClone(obj)
obj2.todo.coding = true
obj2.likes[0] = 'dancing'
console.log(obj) // { name: 'Alice', age: 24, likes: [ 'coding', 'singing' ], todo: { coding: false } }
console.log(obj2) // { name: 'Alice', age: 24, likes: [ 'dancing', 'singing' ], todo: { coding: true } }
```