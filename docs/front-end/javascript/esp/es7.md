## Array 新增方法

+ `Array.prototype.includes(el: any): Boolean`: 判断一个数组中是否包含指定值

::: tip 类似 indexOf()：
+ `indexOf()`:
```js
const arr = [1, 2, 3, 5]
if (arr.indexOf(4) > 0) {
  console.log('yes')
}

// yes
```

+ `includes()`:
```js
const arr = [1, 2, 3, 5]
if (arr.includes(4)) {
  console.log('yes')
}

// yes
```
:::


## 幂运算符

+ `a ** b`: 幂运算符，等价于 `Math.pow(a, b)`

```js
console.log(2 ** 2) // 4
```